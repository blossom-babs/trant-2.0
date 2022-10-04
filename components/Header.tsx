import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Links } from './index';

const Header = () => {
	return (
		<div className="header">
			<div className="header_inner">
				<Link href={'/'}>
					<a>
						<img
							className="header_logo"
							src="./transparent-logo.png"
							alt="Trant"
						/>
					</a>
				</Link>
				<ul className='header_links'>
          <li>	<Links path={'/blog'} routeName="Blog" /> </li>
          <li><Links path={'/projects'} routeName="Projects" /></li>
          <li>	<Links path={'/about'} routeName="About" /></li>
				</ul>
				<div className='header_search'>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input placeholder="Press 's' to search" />
				</div>
			</div>
		</div>
	);
};

export default Header;
