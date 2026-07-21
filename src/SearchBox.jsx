import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
   let[city,setCity] = useState("");
   let[error,setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "dc38d6f70812ce0a31089510ef48cb6d";

let getWeatherInfo = async () => {
  try {
    const response = await fetch(
      `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const weatherData = await response.json();

    if (response.status !== 200) {
      throw new Error("City not found");
    }

    let result = {
      city: weatherData.name,
      temp: weatherData.main.temp,
      tempMin: weatherData.main.temp_min,
      tempMax: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      feelsLike: weatherData.main.feels_like,
      weather: weatherData.weather[0].description,
    };

    return result;
    }catch (err) {
    setError(true);
    return null;
   }
 };

    let handleChange = (event) => {
    setCity(event.target.value);
    };

   let handleSubmit = async (event) => {
   event.preventDefault();

   setError(false);
   setLoading(true);

   const newInfo = await getWeatherInfo();

   if (newInfo) {
     updateInfo(newInfo);
     setCity("");
    }
    setLoading(false);
  };

    return (
        <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <div className="searchContainer">

    <TextField id="city" placeholder="Search any city..." variant ="outlined" value={city} onChange={handleChange} fullWidth disabled={loading}
    sx={{
        "& .MuiOutlinedInput-root": {
            borderRadius: "18px",
            background: "rgba(255,255,255,0.9)",
            fontSize: "18px",
            height: "58px"
        }
    }}
/>
     <Button variant="contained" type="submit" className="searchButton" disabled={loading}>  {loading ? "Searching..." : "🔍 Search"} </Button>
       </div> 
       {error && <p style={{color:"red"}}>No Such place exits!</p>}
       </form>
      </div>
    )
}
