import { useState, useEffect } from "react";
import type { City, Weather, HistoryItem } from "../../types/Index";
import styles from "./Home.module.css";

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  async function getCities() {
    try {
      const response = await fetch(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e",
      );
      const data = await response.json();
      setCities(data.result?.records ?? []);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCities();
  }, []);

  async function handleCityChange(cityCode: string) {
    try {
      if (!cityCode) {
        setWeather(null);
        return;
      }
      if (!API_KEY) {
        console.error("Missing VITE_WEATHER_API_KEY in .env");
        setWeather(null);
        return;
      }
      const city = cities.find((c) => String(c.city_code) === String(cityCode));
      if (!city) {
        setWeather(null);
        return;
      }
      const cityName = city.city_name_en.trim() || city.city_name_he.trim();
      const query = `${cityName},Israel`;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      if (data.location && data.current) {
        setWeather(data);
      } else {
        setWeather(null);
        console.error(data.error?.message ?? "No weather data returned");
      }
      saveToHistory(city.city_name_en.trim() || city.city_name_he.trim());
    } catch (error) {
      console.error(error);
    }
  }

  function saveToHistory(cityName: string) {
    const newItem = {
      date: new Date().toISOString(),
      name: cityName,
      country: "Israel",
    };
    const history = localStorage.getItem("history");
    if (history) {
      const historyArray = JSON.parse(history) as HistoryItem[];
      historyArray.push(newItem);
      localStorage.setItem("history", JSON.stringify(historyArray));
    } else {
      localStorage.setItem("history", JSON.stringify([newItem]));
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1>Home</h1>
        <select
          className={styles.select}
          onChange={(e) => handleCityChange(e.target.value)}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city._id} value={city.city_code}>
              {city.city_name_he} {city.city_name_en}
            </option>
          ))}
        </select>
      </div>
      {weather && (
        <div className={styles.card}>
          <h2>Weather</h2>
          <p>Country: {weather.location.country}</p>
          <p>City: {weather.location.name}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Wind: {weather.current.wind_kph} kph</p>
          <img
            className={styles.icon}
            src={
              weather.current.condition.icon.startsWith("http")
                ? weather.current.condition.icon
                : `https:${weather.current.condition.icon}`
            }
            alt={weather.current.condition.text}
          />
        </div>
      )}
    </div>
  );
}
