import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Links } from './index';

const Header = () => {
	return (
		<div>
			<Link href={'/'}>
				<a>
					<img src="./transparent-logo.png" />
				</a>
			</Link>
			<div>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input placeholder="search" />
			</div>
			<ul>
				<Links path={'/blog'} routeName="Blog" />
				<Links path={'/projects'} routeName="Projects" />
				<Links path={'/about'} routeName="about" />
			</ul>
		</div>
	);
};

export default Header;
