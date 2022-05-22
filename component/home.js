import { useState } from "react";
import styles from '../component/home.module.css';
import typingGame from '../public/static/moon.jpg';
// import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HomeComponent = () => {
    const [state] = useState({
        title: "How Fast Can You Type ?"
    })
    // const history = useNavigate(); 
    // const game = () => {
    //     history('./game')
    // }
    return(
        <div className={styles.overall}>
        <div className={styles.imagescontainer}>
            <img className={styles.image} src="/static/moon.jpg" alt="" />
        </div>
        <div className={styles.typescontainer}>
            <h2 className={styles.typestext}>
            <Typewriter 
              options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "How Fast Can You Type ?"
                  ]
              }}
            />
            </h2>
            <div className={styles.startedbutton}>
                <button className={styles.startbutton}>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default HomeComponent