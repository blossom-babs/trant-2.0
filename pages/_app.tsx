import '../styles/index.scss'
import type { AppProps } from 'next/app'
import {Header, Footer} from '../components/'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='app'>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}

export default MyApp
