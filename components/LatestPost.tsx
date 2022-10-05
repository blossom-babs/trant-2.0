import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Post } from '../types';

const api_url = 'http://localhost:1337';

const LatestPost: NextPage<{ posts: Post[] }> = ({ posts }) => {
	const latest = posts[posts.length - 1];
	const img = latest.attributes.cover_photo.data.attributes.url;

	return (
		<article className='latestPost'>
			<div>
				<Image
					src={api_url + img}
					alt="Picture of the author"
					width={300}
					height={300}
				/>
			</div>
			<div>
				<h1>{latest.attributes.title}</h1>
				<p>{latest.attributes.description}</p>
				<button><Link href={'/'}>read more</Link></button>
			</div>
		</article>
	);
};

export default LatestPost;
