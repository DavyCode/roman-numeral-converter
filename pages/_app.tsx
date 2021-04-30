import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";
import Layout from '../components/layout/Layout'
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
    <Layout>
      <Head>
        <title>Roman Numeral Converter</title>
        <meta name='description' content='NextJS Events' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
