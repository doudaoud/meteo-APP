import rainylogo from "../../public/meteo.png";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { FaWind } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../contexts/data.js";
import { MoodContext } from "../contexts/mood.js";
import "../styles/WeatherCard.css";

export default function WeatherCard() {
  const { data } = useContext(DataContext);
  const { lightMode } = useContext(MoodContext);
  console.log(data);
  let icon = data?.weather[0].icon;
  let url_icon = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  console.log(typeof data?.main?.temp);

  const cardBackgroundColor = lightMode ? "white" : "rgb(25, 38, 62)";
  const textColor = lightMode ? "black" : "white";
  const subCardBg = lightMode ? "rgb(227, 239, 255)" : "rgb(18, 27, 47)";
  const subTextColor = lightMode ? "rgb(119, 123, 121)" : "rgb(180, 180, 180)";
  const borderColor = lightMode ? "none" : "1px solid rgb(40, 57, 85)";

  return (
    <div
      className="weather-card-container"
      style={{
        backgroundColor: cardBackgroundColor,
        border: borderColor,
      }}
    >
      <h1
        className="city-title"
        style={{
          color: textColor,
        }}
      >
        {data?.name}, {data?.sys?.country}
      </h1>
      <h3
        className="weather-desc"
        style={{
          color: lightMode ? "rgb(92, 101, 107)" : "rgb(180, 180, 180)",
        }}
      >
        {data?.weather[0].description}
      </h3>
      <div className="temp-section">
        <div className="logo-container">
          <img
            src={url_icon}
            className="weather-icon-animated"
            alt="weather icon"
          />
          <p className="feels-like">you feels like {data?.main?.feels_like}</p>
        </div>
        <div className="temp-display-container">
          <h2 className="temp-display"> {Math.round(data?.main?.temp)}&deg;</h2>
        </div>
      </div>
      <div className="stats-section">
        <div
          className="stat-card"
          style={{
            backgroundColor: subCardBg,
          }}
        >
          <span className="stat-header">
            <WaterDropIcon />{" "}
            <p
              className="stat-label"
              style={{
                color: subTextColor,
              }}
            >
              Humidity
            </p>
          </span>
          <h2
            className="stat-value"
            style={{
              color: textColor,
            }}
          >
            {data?.main?.humidity}%
          </h2>
        </div>
        <div
          className="stat-card"
          style={{
            backgroundColor: subCardBg,
          }}
        >
          <span className="stat-header">
            <FaWind />
            <p
              className="stat-label"
              style={{
                color: subTextColor,
              }}
            >
              Wind Speed
            </p>
          </span>

          <h2
            className="stat-value"
            style={{
              color: textColor,
            }}
          >
            {Math.round((data?.wind?.speed * 3600) / 1000)} km/h
          </h2>
        </div>
      </div>
    </div>
  );
}

