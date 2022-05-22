import { useState } from "react";
import styles from '../component/home.module.css';
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect';

const HomeComponent = () => {
    const [state] = useState({
        title: "How Fast Can You Type ?"
    })
    const router = useRouter();
    const handleClick = (e) => {
        router.push('/game')
    }
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
                    "Improve Your Typing Skills By Clicking The Button Below"
                  ]
              }}
            />
            </h2>
            <div className={styles.startedbutton}>
                <button onClick={handleClick} className={styles.startbutton}>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default HomeComponent