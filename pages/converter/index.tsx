import { Fragment } from 'react';
import Head from 'next/head';
import Converter from '../../components/converter/Converter';
import styles from '../../styles/Home.module.css'
import MainHeader from '../../components/layout/MainHeader';

function ConverterScreen() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Roman Converter</title>
        <meta name="description" content="Converter roman numeral to Arabic and back" />
      </Head>
      <MainHeader />
      <main className={styles.main}>
        <Converter />
      </main>
      </div>
  );
}

export default ConverterScreen;
