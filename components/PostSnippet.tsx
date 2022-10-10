import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PostSnippetType } from '../types';

const PostSnippet: NextPage<PostSnippetType> = (props) => {
	return (
		<div className="snippet">
			<div className="snippet_inner">
				<Link href={props.path}>
					<div>
						<Image width={250} height={200} layout="fixed" src={props.img} />
						<h1 className="snippet_title">{props.title}</h1>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PostSnippet;
