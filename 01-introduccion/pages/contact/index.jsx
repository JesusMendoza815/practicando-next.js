import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Next - About</title>
        <meta name="description" content="Contact page - JM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          ir a <a href="/">Home</a>
        </h1>
        <h1 className={styles.title}>
          ir a <a href="/about">About</a>
        </h1>

        <p className={styles.description}>
          Edited by Jesús Mendoza&nbsp;
          <code className={styles.code}>pages/contact.jsx</code>
        </p>
      </main>
    </>
  );
}
