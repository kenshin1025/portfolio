import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { HeaderSection } from "../components/HeaderSection";
import { AboutSection } from "../components/AboutSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kenshin Portfolio</title>
        <link rel="icon" href="/kenshin.png" />
      </Head>

      <main className={styles.main}>
        <HeaderSection></HeaderSection>

        <AboutSection></AboutSection>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
