import React from "react";

export default function SemaineCard({ dayData }) {
  if (!dayData) {
    return null;
  }

  const date = new Date(dayData.dt_txt);
  const dayName = date.toLocaleDateString("fr-FR", { weekday: "long" });

  const icon = dayData.weather[0].icon;
  const url_icon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="semaine-card">
      <h3 className="day-name">{dayName}</h3>
      <img src={url_icon} alt="weather icon" className="weather-icon" />
      <p className="weather-desc">{dayData.weather[0].description}</p>
      <div className="temps-matin-soir">
        <p className="temp-high">{Math.round(dayData.main.temp_max)}&deg;</p>
        <p className="temp-low">{Math.round(dayData.main.temp_min)}&deg;</p>
      </div>
    </div>
  );
}
