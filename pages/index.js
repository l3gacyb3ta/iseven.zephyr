import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IS IT EVEN</title>
        <meta name="description" content="DEAR GOD WHY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to IS IT EVEN
        </h1>

        <p className={styles.description}>
          Is it even api?
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Just query <code>{'/api/<your number>'}</code>, where your number is inbetween 0-9999, due to the limitations of how many files python could generate in a resonable amunt of time.</p>
          </div>
          <div>
            <h2>Feast your eyes on the amazingness of the code</h2>
            <Image src="/code.png" alt="UwU much bad code" width={1920} height={1080}></Image>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
