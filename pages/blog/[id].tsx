import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import { GetPostResults, Post } from '../../types';
import MarkdownIt from 'markdown-it';
import Image from 'next/image';

const BlogPost: NextPage<{ post: Post }> = ({ post }) => {
	const {title, content, cover_photo} = post.attributes
	const md = new MarkdownIt()
	const htmlContent = md.render(content)
	return (
		<article className='blog_page'>
				<Image src={cover_photo.data.attributes.url} width={100} height={100} layout='responsive'/>
 				<h1 className='blog_page-title'>{title}</h1>
				<section className='blog_page-content' dangerouslySetInnerHTML={{__html: htmlContent}}></section>
		</article>
	);
};

export const getStaticProps = async ({ params }: any) => {
	const postsRes: any = await axios.get(
		`http://localhost:1337/api/posts/${params.id}?populate=*`
	);
	const result: GetPostResults = postsRes.data.data;

	return {
		props: {
			post: result
		}
	};
};

export const getStaticPaths = async () => {
	const res: any = await axios.get(
		'http://localhost:1337/api/posts?populate=*'
	);
	const posts: Post[] = res.data.data;
	const paths = posts.map((post) => {
		return { params: { id: post.id.toString() } };
	});

	return {
		paths,
		fallback: false
	};
};

export default BlogPost;
