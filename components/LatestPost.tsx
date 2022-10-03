import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Post } from '../types';

const api_url = 'http://localhost:1337';

const LatestPost: NextPage<{ posts: Post[] }> = ({ posts }) => {
	const latest = posts[posts.length - 1];
	let img = latest.attributes.cover_photo.data.attributes.url;
	return (
		<article>
			<div>
				<Image
					src={api_url + img}
					alt="Picture of the author"
					width={500}
					height={500}
				/>
			</div>
			<div>
				<h1>{latest.attributes.title}</h1>
				<p>{latest.attributes.description}</p>
				<button>{latest.attributes.category}</button>
			</div>
		</article>
	);
};

export default LatestPost;
