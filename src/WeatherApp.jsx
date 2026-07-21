import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 33.67,
        humidity: 70,
        temp: 29.42,
        tempMax: 29.42,
        tempMin: 29.42,
        weather: "overcast clouds",
    });
    const [darkMode, setDarkMode] = useState(false);

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    const toggleTheme = () => {
    setDarkMode(!darkMode);
};

    return(
  <div className={darkMode ? "app dark" : "app"}>
  <div className="header">
  <h1 style={{ marginBottom: "10px" }}>☁ Weather Forecast</h1>

  <button
    onClick={toggleTheme} className="themeBtn"
    style={{
    padding: "10px 18px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
   background: darkMode
  ? "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
  : "linear-gradient(135deg,#74ebd5,#9face6)",
    color: darkMode ? "#222" : "#fff",
    fontSize: "15px",
    marginBottom: "25px",
  }}
>
     {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button> 
    </div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} darkMode={darkMode}/>
        </div>
    )
}