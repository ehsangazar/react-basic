import React, { useContext } from "react";
import './Footer.css'
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const themeValues = useContext(ThemeContext);
  return (
    <div className="Footer">
      <h5>Developed By Ehsan</h5>
      <div>
        <button onClick={() => themeValues.setActiveTheme('green')} className="green">
          Green
        </button>
        <button onClick={() => themeValues.setActiveTheme('blue')} className="blue">
          Blue
        </button>
      </div>
    </div>
  );
};

export default Footer