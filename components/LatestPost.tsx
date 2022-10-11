import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CategoryAttr, Post } from '../types';

const api_url = 'http://localhost:1337';

const LatestPost: NextPage<{ posts: Post[] }> = ({ posts }) => {
	const latest = posts[posts.length - 1];
	const { title, description, cover_photo } = latest.attributes;
	return (
		<article className="latestPost">
			<div>
				<Image
					src={cover_photo.data.attributes.url}
					alt="Picture of the author"
					width={300}
					height={300}
				/>
			</div>
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<button>
					<Link href={`/blog/${latest.id.toString()}`}>read more</Link>
				</button>
			</div>
		</article>
	);
};

export default LatestPost;
