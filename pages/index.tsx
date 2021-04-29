import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator from "../components/Calculator";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viva la Resistance!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Viva la Resistance!</h1>

        <p className={styles.description}>
          Use the form or click on the resistor bands to select a color
        </p>

        <Calculator />
      </main>

      <footer className={styles.footer}>Thank you for considering me 🙂</footer>
    </div>
  );
}
