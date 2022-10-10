import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PostSnippetType } from '../types';

const PostSnippet: NextPage<PostSnippetType> = (props) => {
	return (
		<div className='snippet'>
			<Link href={props.path}>
				<div>
					<Image width='100' height='100' layout='fixed' src={props.img} />
					<h1>{props.title}</h1>
				</div>
			</Link>
		</div>
	);
};

export default PostSnippet;
