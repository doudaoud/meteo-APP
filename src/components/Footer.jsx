import React, { useContext } from "react";
import { MoodContext } from "../contexts/mood";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const { lightMode } = useContext(MoodContext);

  const footerStyle = {
    backgroundColor: lightMode ? "#f3f8ff" : "rgb(18, 27, 47)",
    color: lightMode ? "black" : "white",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.5s ease, color 0.5s ease",
    borderTop: lightMode
      ? "1px solid rgb(219, 234, 254)"
      : "1px solid rgb(40, 57, 85)",
    width: "100%",
    boxSizing: "border-box" // Ensure padding doesn't overflow width
  };

  const linkStyle = {
    color: lightMode ? "black" : "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.2rem",
     transition: "color 0.5s ease",
  };

  return (
    <footer style={footerStyle}>
      <a
        href="https://github.com/doudaoud"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <GitHubIcon />
        <span>My GitHub</span>
      </a>
    </footer>
  );
};

export default Footer;
