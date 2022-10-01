import { NextPage } from 'next';
import React from 'react';
import { Post } from '../types';

const TechPosts: NextPage<{ posts: Post[] }> = ({ posts }) => {
	return <div>Tech</div>;
};

export default TechPosts;
