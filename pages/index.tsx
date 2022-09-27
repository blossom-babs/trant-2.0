import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const meta = {
		title: 'Trant',
		description:
			'Trant is a public documentation of a developer journey in tech - career, fails, wins, community, public learnings and giving back to the ecosystem.',
		type: 'website'
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta name="og:description" content={meta.description} />
				<meta name="og:title" content={meta.title} />
				<meta name="og:site_name" content="A developer's journey" />
			</Head>

			<h1>New page</h1>
		</>
	);
};

export default Home;
