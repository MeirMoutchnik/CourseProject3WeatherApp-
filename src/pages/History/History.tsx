import { useState, useEffect } from "react";
import type { HistoryItem } from "../../types/Index";
import styles from "./History.module.css";

export default function History() {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    useEffect(() => {
        const history = localStorage.getItem("history");
        if (history) {
            setHistory(JSON.parse(history));
        }
    }, []);
    if (history.length === 0) {
        return <div className={styles.empty}>No history found</div>;
    }
    return (
        <div className={styles.page}>
            <h1>History</h1>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.date}>
                                <td>{item.date}</td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
