import React from 'react'
import rainylogo from "../../public/meteo.png";
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
        paddingTop:50
      }}
    >
      <h1>london, uk</h1>
      <h3>Rainy</h3>
      <div
        className="tempandlogo"
        style={{
          display: "flex",
          // backgroundColor: "red",
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
          }}
        >
          <h2>8 temps 0 sercuse</h2>
        </div>
      </div>
      <div
        className="wind-and-humidity"
        style={{
          display: "flex",
          // backgroundColor: "skyblue",
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
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          <p>humidity</p>
        </div>
        <div
          className="wind-speed"
          style={{
            height: "140px",
            width: "340px",
            backgroundColor: "rgb(227, 239, 255)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          <p>la vitesse de von</p>
        </div>
      </div>
    </div>
  );
}
