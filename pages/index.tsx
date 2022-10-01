import axios from 'axios';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { TechPosts } from '../components';
import LatestPost from '../components/LatestPost';
import { GetPostResults, Post } from '../types';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
	console.log(Array.isArray(posts));
	//console.log(posts.data[0].attributes.title)
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
			<div>
				{posts.map((item: any) => (
					<div key={item.id}>
						<h1>{item.attributes.title}</h1>
					</div>
				))}
			</div>
			<TechPosts posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await axios.get('http://localhost:1337/api/posts');
	const result: GetPostResults = res.data.data;

	return {
		props: {
			posts: result
		}
	};
};

export default Home;
