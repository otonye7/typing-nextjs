import styles from '../component/timer.module.css';


const Timer = ({ handleSelectChange, minutes, seconds }) => {
    return(
        <div className={styles.container}>
           <p className={styles.timetext}>TIMER: {minutes} : {seconds}</p>
            <div className={styles.selectcontainer}>
                <select className={styles.select} onChange={handleSelectChange}>
                    <option className={styles.options} value="">-select time-</option>
                    <option className={styles.options} value="1">1min</option>
                    <option className={styles.options} value="2">2mins</option>
                    <option className={styles.options} value="5">5mins</option>
                </select>
            </div>
    </div>
    )
}

export default Timer;