import axios from 'axios';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import LatestPost from '../components/LatestPost';
import { GetPostResults, Post } from '../types';


const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
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

			<LatestPost posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await axios.get('http://localhost:1337/api/posts?populate=*');
	const result: GetPostResults = res.data.data;

	return {
		props: {
			posts: result
		}
	};
};

export default Home;
