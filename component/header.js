import styles from '../component/header.module.css';
// import { useNavigate } from 'react-router-dom';
const Header = () => {
    // const history = useNavigate(); 
    // const home = () => {
    //    history('./')
    // }
    return(
        <div className={styles.headercontainer}>
            <h2 className={styles.headertext}>Typing Game</h2>
        </div>
    )
}

export default Header