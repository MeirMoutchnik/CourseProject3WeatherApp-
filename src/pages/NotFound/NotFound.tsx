import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h1>404 - Page Not Found</h1>
            <p className={styles.hint}>The page you requested does not exist.</p>
        </div>
    );
}
