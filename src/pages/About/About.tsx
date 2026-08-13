import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.page}>
            <h1>About</h1>
            <section className={styles.section}>
                <h2>Description</h2>
                <p>This is a weather app that allows you to search for weather information for a city in Israel.</p>
                <p>The app uses the WeatherAPI to get the weather information.</p>
                <p>The app is hosted on <a className={styles.vercelLink} href="https://course-project3-weather-ohgxosr11-meir-moutchniks-projects.vercel.app" target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
                <p>The code can be found on <a className={styles.vercelLink} href="https://github.com/MeirMoutchnik/CourseProject3WeatherApp-/tree/master" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </section>
            <section className={styles.section}>
                <h2>Features</h2>
                <ul>
                    <li>Search for weather information for a city in Israel.</li>
                    <li>Save the history of the cities searched to the local storage.</li>
                    <li>Display the history of the cities searched in the History page.</li>
                </ul>
            </section>
            <section className={styles.section}>
                <h2>Technologies Used</h2>
                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>WeatherAPI</li>
                    <li>Local Storage</li>
                </ul>
            </section>
            <section className={styles.section}>
                <h2>How to Use</h2>
                <ol>
                    <li>Select a city from the dropdown menu.</li>
                    <li>The weather information for the selected city will be displayed.</li>
                    <li>The history of the cities searched will be displayed in the History page.</li>
                </ol>
            </section>
            <section className={styles.section}>
                <h2>Author</h2>
                <p>My name is Meir Moutchnik</p>
                <p>My email is meir.moutchnik@gmail.com</p>
                <p>My phone number is 0534-3619115</p>
                <p>I am a student at John Bryce College of Israel.</p>
                <p>I am an aspiring software engineer and I am passionate about creating web applications.</p>
            </section>
        </div>
    );
}
