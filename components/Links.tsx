import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { LinkTypes } from '../types';

const Links: NextPage<{ props: LinkTypes }> = ({ props }) => {
	return (
		<Link href={props.path}>
			<a>{props.routeName}</a>
		</Link>
	);
};

export default Links;
