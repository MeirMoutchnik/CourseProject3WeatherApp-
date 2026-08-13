import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/NavBar/Navbar";
import styles from "./App.module.css";

export default function App() {
    return (
        <div className={styles.shell}>
            <Navbar />
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}
