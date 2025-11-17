import { useState } from "react";
import "../styles/searchbar.css";
import { useContext } from "react";
import { MoodContext } from "../contexts/mood.js";
export default function Sarchbar() {
  const [city, setCity] = useState("");
  //  la fonction handleChange elle fait la liason entre le input et le state
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const { lightMode } = useContext(MoodContext);
  return (
    <>
      <input
        type="text"
        placeholder="Search for a city... "
        value={city}
        onChange={handleChange}
        className="textfeild"
        style={{
          backgroundColor: lightMode ? "white" : "rgb(18, 27, 47)",
          color: lightMode ? "black" : "white",
          border: lightMode
            ? "1px solid rgb(219, 234, 254)"
            : "1px solid rgb(40, 57, 85)"
        }}
      />
    </>
  );
}
