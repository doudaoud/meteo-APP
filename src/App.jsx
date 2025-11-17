import { useState } from "react";
import Sarchbar from "./components/Sarchbar";
import "./styles/Header.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SunnyIcon from "@mui/icons-material/Sunny";
import IconButton from "@mui/material/IconButton";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { MoodContext } from "./contexts/mood.js";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };
  const moodClass = lightMode ? "white" : "rgb(18, 27, 47)";
  return (
    <MoodContext.Provider value={{ lightMode, setLightMode, toggleLightMode }}>
      <div
        className="body"
        style={{
          backgroundColor: moodClass,
          color: lightMode ? "black" : "white",
          transition: "background-color 0.5s ease, color 0.5s ease",
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
            <button className="search-button">
              <SearchSharpIcon className="search-icon" />
            </button>
          </div>
          {/* fin de searchbar*/}
        </div>
      </div>
    </MoodContext.Provider>
  );
}

export default App;
