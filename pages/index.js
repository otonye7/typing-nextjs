import Head from 'next/head';
import styles from "../styles/Home.module.css";
import Header from "../component/header";
import HomeComponent from "../component/home";

const Home = () => {
  return (
    <div className={styles.container}>
       <Head>
        <title>Typing Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeComponent />
    </div>
  )
}

export default Home;
