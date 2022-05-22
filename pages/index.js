import styles from "../styles/Home.module.css";
import Header from "../component/header";
import HomeComponent from "../component/home";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HomeComponent />
    </div>
  )
}

export default Home;
