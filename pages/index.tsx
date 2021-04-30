import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHeader from '../components/layout/MainHeader';
import Button from '../components/ui/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Modern Roman numeral Converter
        </h1>
        <p className={styles.description}>
          Get started Converting{' '}
          <Button link="/converter">
            <span> Go to Converter </span>
          </Button>
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/davycode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Done with love!!! Star on GitHub ;){' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}