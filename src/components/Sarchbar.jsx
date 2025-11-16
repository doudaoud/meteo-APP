import { useState } from "react";
import TextField from "@mui/material/TextField";
import "../styles/searchbar.css";
export default function Sarchbar() {
  const [city, setCity] = useState("");
  //  la fonction handleChange elle fait la liason entre le input et le state
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      {/* <TextField 
      className="textfeild"
        variant="outlined"
        placeholder="Search for a city..."
        value={city}
        onChange={handleChange}
      /> */}
      <input
        type="text"
        placeholder="Search for a city... "
        value={city}
        onChange={handleChange}
        className="textfeild"
        
      />
    </>
  );
}
