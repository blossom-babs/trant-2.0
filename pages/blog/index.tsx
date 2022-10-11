import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { PostSnippet } from '../../components';
import { GetPostResults, Post } from '../../types';

const blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
	return (
		// filters
		<div className="blog">
			<div className="blog_all">
				{posts.map(({ id, attributes }) => (
					<PostSnippet
						key={id}
						path={`/blog/${id}`}
						title={attributes.title}
						img={attributes.cover_photo.data.attributes.url}
					/>
				))}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await axios.get('http://localhost:1337/api/posts?populate=*');
	const result: GetPostResults = res.data.data;

	return {
		props: {
			posts: result
		}
	};
};

export default blog;
