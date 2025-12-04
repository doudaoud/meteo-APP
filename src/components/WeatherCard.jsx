import rainylogo from "../../public/meteo.png";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { FaWind } from "react-icons/fa";
export default function WeatherCard() {
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
        london, uk
      </h1>
      <h3
        style={{
          color: "rgb(92, 101, 107)",
        }}
      >
        Rainy
      </h3>
      <div
        className="tempandlogo"
        style={{
          display: "flex",
          width: 400,
          height: 200,
          marginTop: 50,
        }}
      >
        <div
          className="logo"
          style={{
            margin: "auto",
          }}
        >
          <img
            src={rainylogo}
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <p className="how-you-feel">you feels like 5</p>
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
            // backgroundColor: "red",
            // borderRadius: "50%",
          }}
        >
          <h2>12</h2>
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
            65%
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
            12 km/h
          </h2>
        </div>
      </div>
    </div>
  );
}
