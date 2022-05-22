import { useRouter } from 'next/router'
import styles from '../component/header.module.css';

const Header = () => {
    const router = useRouter();
    const handleClick = (e) => {
        router.push('/')
      }
    
    return(
        <div onClick={handleClick} className={styles.headercontainer}>
            <h2 className={styles.headertext}>Typing Game</h2>
        </div>
    )
}

export default Header