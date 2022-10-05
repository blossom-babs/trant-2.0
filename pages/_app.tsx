/** @format */

import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { Header, Footer } from '../components/';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="app">
			<Header />
			<div className="app_component">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;
