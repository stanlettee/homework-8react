import styles from "./Feedbacks.module.css"

export const Feedbacks = ({addGood, addNeutral, addBad}) => {
    return (
            <div>
                <h2 className={styles.title}>Please leave a feedback</h2>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button onClick={addGood} className={styles.button}>Good</button>
                    </li>
                    <li className={styles.item}>
                        <button onClick={addNeutral} className={styles.button}>Neutral</button>
                    </li>
                    <li className={styles.item}>
                        <button onClick={addBad} className={styles.button}>Bad</button>
                    </li>
                </ul>
            </div>
        )
    
} 

