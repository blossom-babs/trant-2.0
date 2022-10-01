import { NextPage } from 'next';
import React from 'react';
import { Post } from '../types';

const LatestPost: NextPage<{ posts: Post[] }> = ({ posts }) => {
	return <div>LatestPost</div>;
};

export default LatestPost;
