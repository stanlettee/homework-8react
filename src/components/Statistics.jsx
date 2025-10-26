import styles from "./Statisctics.module.css"

export const Statistics = ({good, neutral, bad, total, feedback}) => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
        return (
            <div className={styles.div}>
                <h2 className={styles.title}>Statistics</h2>
                <p className={styles.text}>Good: {good}</p>
                <p className={styles.text}>Neutral: {neutral}</p>
                <p className={styles.text}>Bad: {bad}</p>
                <p className={styles.text}>Total: {total(good, neutral, bad)}</p>
                <p className={styles.text}>Positive feedback: {feedback(good, neutral, bad)}%</p>
            </div>
        )
    } 

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Statistics</h2>
            <p className={styles.text}>No feedbacks given</p>
        </div>

    )


}