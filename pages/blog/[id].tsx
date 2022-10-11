import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import { GetPostResults, Post } from '../../types';

const BlogPost: NextPage<{ post: Post }> = ({ post }) => {
	return (
		<article>
			<header>
 				<h1>{post.attributes.title}</h1>
				<h2>{post.attributes.content}</h2>
			</header>
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
