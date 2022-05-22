import styles from '../component/score.module.css';

const Score = ({ correctWord, inCorrectWord, status, score }) => {
    let total = correctWord + inCorrectWord;
    // let time = total / minutes * 60;

    return(
        <div className={styles.scorecontainer}>
            <p className={styles.score}>SCORE: {score} / {total}</p>
            {status === "finished" && (<p className={styles.score}>ACCURACY: {Math.round((score / (total)) * 100)}%</p>)}
            {status === "finished" && (<p className={styles.score}>SPEED: {total} WORD PER MINUTE</p>)}
        </div>
    )
}

export default Score;