import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sarchbar from "./components/Sarchbar";
import "./styles/Header.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
function App() {
  // const [count, setCount] = useState(0)
  // const [afficheserach ,setafficheserach] = useState(false)
  const [lightMode, setLightMode] = useState(true);
  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };
  const moodClass = lightMode ? "white" : "rgb(18, 27, 47)";
  return (
    <div className="body" style={{
      backgroundColor: moodClass,
      color: lightMode ? "black" : "white",
    }}>
      <div>
        {/* header */}
        <header>
          <h3 className="title-app">Weather App</h3>
          <button className="mood-button" onClick={toggleLightMode}>
            <DarkModeOutlinedIcon className="mood-icon"/>
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
  );
}

export default App;
