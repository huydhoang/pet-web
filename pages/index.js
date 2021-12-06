import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecopark Pet Map</title>
        <meta name='description' content='Ecopark Pet Map' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ecopark Pet Map</h1>

        <p className={styles.description}>
          Dự án cộng đồng phi lợi nhuận do Ecopet và Bestbud Vietnam thực hiện
        </p>

        <Image
          src='/map.png'
          alt='Ecopark Pet Map'
          width={1920}
          height={2462}
          priority
        />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://bbudtech.com?utm_source=ecopark-pet-map&utm_medium=landing-page&utm_campaign=ecopark-pet-map'
          target='_blank'
          rel='noopener noreferrer'
        >
          Copyright &copy; {new Date().getFullYear()} Bestbud, LLC.
        </a>
      </footer>
    </div>
  );
}
