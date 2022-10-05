import {
	faBars,
	faHamburger,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Links } from './index';
Image;
const Header: NextPage = () => {
	const [toggle, setToggle] = useState(false);
	const [focus, setFocus] = useState(false);

	const closeToggle = () => {
		if (toggle) {
			setToggle(false);
		}
	};

	return (
		<div className="header">
			<div style={{position: 'relative'}}>
				<div className="header_inner">
					<Link href={'/'}>
						<a onClick={closeToggle}>
							<div className="header_logo desktop">
								<Image
									src="/transparent-logo.png"
									alt="Trant"
									width={100}
									height={30}
									layout="fixed"
								/>
							</div>
							<div className="header_logo mobile">
								<Image
									src="/small-logo.png"
									alt="Trant"
									width={50}
									height={20}
									layout="fixed"
								/>
							</div>
						</a>
					</Link>

					<div className="header_menu" onClick={() => setToggle(!toggle)}>
						<FontAwesomeIcon style={{ color: 'white' }} icon={faBars} />
					</div>

					<ul className="header_links">
						<li>
							<Links path={'/blog'} routeName="Blog" />
						</li>
						<li>
							<Links path={'/projects'} routeName="Projects" />
						</li>
						<li>
							<Links path={'/about'} routeName="About" />
						</li>
					</ul>

					<div className={focus ? 'header_search focus' : 'header_search'}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						<input
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							placeholder="Press 's' to search"
						/>
					</div>
				</div>

				<div>
					<ul
						className={
							toggle ? 'header_links-mobile open' : 'header_links-mobile'
						}>
						<li onClick={closeToggle}>
							<Links path={'/blog'} routeName="Blog" />{' '}
						</li>
						<li onClick={closeToggle}>
							<Links path={'/projects'} routeName="Projects" />
						</li>
						<li onClick={closeToggle}>
							<Links path={'/about'} routeName="About" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
