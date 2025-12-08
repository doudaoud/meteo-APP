import rainylogo from "../../public/meteo.png";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { FaWind } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../contexts/data.js";
export default function WeatherCard() {
  const { data } = useContext(DataContext);
  console.log(data);
  let icon = data?.weather[0].icon;
  let url_icon = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  console.log(typeof data?.main?.temp);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        width: 800,
        height: 610,
        borderRadius: 30,
        paddingTop: 50,
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
          fontWeight: "900",
          color: "black",
        }}
      >
        {data?.name}, {data?.sys?.country}
      </h1>
      <h3
        style={{
          color: "rgb(92, 101, 107)",
        }}
      >
        {data?.weather[0].description}
      </h3>
      <div
        className="tempandlogo"
        style={{
          display: "flex",
          width: 400,
          height: 200,
          marginTop: 50,
          gap: 10,
        }}
      >
        <div
          className="logo"
          style={{
            margin: "auto",
          }}
        >
          <img
            src={url_icon}
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <p className="how-you-feel"style={
            {
              marginTop:'-20px',
               marginLeft: "-10px",
              fontSize:'20px',
              fontFamily: "sans-serif",
              fontWeight: "900",
              textAlign: "center",
              color: "rgb(56, 140, 255)",
            }
          } >you feels like {data?.main?.feels_like}</p>
        </div>
        <div
          className="temps"
          style={{
            margin: "auto",
            color: "rgb(56, 140, 255)",
            fontSize: "75px",
            fontFamily: "sans-serif",
            fontWeight: "900",
            textAlign: "center",
            marginLeft: -30,
          }}
        >
          <h2> {Math.round(data?.main?.temp)}&deg;</h2>
        </div>
      </div>
      <div
        className="wind-and-humidity"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          height: "200px",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <div
          className="humidity"
          style={{
            height: "140px",
            width: "340px",
            backgroundColor: "rgb(227, 239, 255)",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            borderRadius: "30px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.385)",
          }}
        >
          <span
            style={{
              marginLeft: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "rgb(44, 128, 255)",
            }}
          >
            <WaterDropIcon />{" "}
            <p
              style={{
                color: "rgb(119, 123, 121)",
                fontSize: "17px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Humidity
            </p>
          </span>
          <h2
            style={{
              marginLeft: "30px",
              fontFamily: "sans-serif",
              fontWeight: "900",
              fontSize: "40px",
            }}
          >
            {data?.main?.humidity}%
            {/* 65% */}
          </h2>
        </div>
        <div
          className="wind-speed"
          style={{
            height: "140px",
            width: "340px",
            backgroundColor: "rgb(227, 239, 255)",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            borderRadius: "30px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.385)",
          }}
        >
          <span
            style={{
              marginLeft: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "rgb(44, 128, 255)",
            }}
          >
            <FaWind />
            <p
              style={{
                color: "rgb(119, 123, 121)",
                fontSize: "17px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Wind Speed
            </p>
          </span>

          <h2
            style={{
              marginLeft: "30px",
              fontFamily: "sans-serif",
              fontWeight: "900",
              fontSize: "40px",
            }}
          >
            {Math.round((data?.wind?.speed * 3600) / 1000)} km/h
            {/* 12 km/h */}
          </h2>
        </div>
      </div>
    </div>
  );
}
