import { useState, useEffect } from "react";
import Sarchbar from "./components/Sarchbar";
import "./styles/Header.css";
import "./styles/WeeklyForecast.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SunnyIcon from "@mui/icons-material/Sunny";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { MoodContext } from "./contexts/mood.js";
import WeatherCard from "./components/WeatherCard.jsx";
import SemaineCard from "./components/SemaineCard.jsx";
import { CityContext } from "./contexts/city.js";
import { DataContext } from "./contexts/data.js";
import axios from "axios";

function App() {
  const [city, setCity] = useState(null);
  const [lightMode, setLightMode] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [days7, setJour] = useState();
  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };
  const moodClass = lightMode ? "rgb(243, 248, 255)" : "rgb(18, 27, 47)";
  // pour l'api
  const [data, setData] = useState(null);
  function vrtif() {
    if (city === null) {
      return "Alger";
    }
    return city;
  }

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${vrtif()}&appid=7c2dc7e52baa0798d7bd98bbd3d79be2&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clicked === true]);
  // fin de l'api1
  // debut api de la semaine
  function date_today() {
    const today = new Date();
    const jour = String(today.getDate()).padStart(2, "0"); // ex: "09"
    const mois = String(today.getMonth() + 1).padStart(2, "0"); // ex: "12"
    const annee = today.getFullYear();
    // var date_haujordui = `${annee}-${mois}-${jour}`; // "2025-12-09"
    return `${annee}-${mois}-${jour}`;
  
  }
  useEffect(() => {
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/forecast?q=${vrtif()}&units=metric&appid=7c2dc7e52baa0798d7bd98bbd3d79be2`
      )
      .then((res) => {
        const forecasts = res.data.list;
        const dailyForecasts = {};
        const today = date_today();

        for (const forecast of forecasts) {
          const forecastDate = forecast.dt_txt.substring(0, 10);

          if (forecastDate === today) {
            continue; // On ignore les prévisions pour aujourd'hui
          }

          const existingForecast = dailyForecasts[forecastDate];

          if (!existingForecast || forecast.dt_txt.includes("12:00:00")) {
            dailyForecasts[forecastDate] = forecast;
          }
        }

        const filteredDays = Object.values(dailyForecasts);
        // console.log("Jours filtrés affichés :");
        // console.log(filteredDays);
        setJour(filteredDays);
      })

      .catch((err) => {
        console.log(err);
        // console.log(res.status); 200 pour dire que tout est ok
      });
  }, [clicked === true]);
  console.log(days7);

  return (
    <DataContext.Provider value={{ data }}>
      <MoodContext.Provider value={{ lightMode }}>
        <CityContext.Provider value={{ city, setCity }}>
          <div
            className="body"
            style={{
              backgroundColor: moodClass,
              color: lightMode ? "black" : "white",
              transition: "background-color 0.5s ease, color 0.5s ease",
              // height: 1000,
              margin: 0,
              padding: 0,
            }}
          >
            <div>
              {/* header */}
              <header
                style={{
                  borderBottom: lightMode
                    ? "1px solid rgb(219, 234, 254)"
                    : "1px solid rgb(40, 57, 85)",
                  transition: "border-bottom 0.5s ease",
                }}
              >
                <h3 className="title-app">Weather App</h3>
                <button
                  className="mood-button"
                  onClick={toggleLightMode}
                  style={{
                    outline: "none",
                    border: "none",
                    color: "rgb(22, 94, 252)",
                    cursor: "pointer",
                    height: "40px",
                    width: "40px",
                    backgroundColor: lightMode ? "white" : "rgb(18, 27, 47)",
                    borderRadius: "50%",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.385)",
                    transition:
                      "transform 0.5s, background-color 0.5s ease, color 0.5s ease",
                    marginRight: "165px",
                  }}
                >
                  {lightMode ? <DarkModeOutlinedIcon /> : <SunnyIcon />}
                </button>
              </header>
              {/* fin de header */}
              {/* searchbar */}
              <div className="searchbar-container">
                <Sarchbar />
                <button
                  className="search-button"
                  onClick={() => {
                    setClicked(true);
                    setTimeout(() => {
                      setClicked(false);
                    }, 3000);
                  }}
                >
                  <SearchSharpIcon className="search-icon" />
                </button>
              </div>
              {/* fin de searchbar*/}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WeatherCard />
            </div>
            {/* debut de la partie de la meteo de la semaine */}
            <div className="weekly-forecast-section">
              <h2 className="weekly-forecast-title">7-Day Forecast</h2>
              <div className="cards-container">
                <SemaineCard />
                <SemaineCard />
                <SemaineCard />
                <SemaineCard />
                <SemaineCard />
                <SemaineCard />
              </div>
            </div>
            {/* fin de la partie de la meteo de la semaine */}
          </div>
        </CityContext.Provider>
      </MoodContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
