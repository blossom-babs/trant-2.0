import '../styles/index.scss'
import type { AppProps } from 'next/app'
import {Header, Footer} from '../components/'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
