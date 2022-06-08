import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Terminal from "../components/Terminal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Williams</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
