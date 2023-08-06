// RandomColor.jsx
import React, { useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
  const [phillColor, setPhillColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#ffffff");

  const randomColor = () => {
    // Generar valores aleatorios para los componentes RGB (rojo, verde y azul)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleButtonClick = () => {
    // Cambiar el color de fondo de la página principal al hacer clic en el botón
    document.body.style.backgroundColor = randomColor();
  };
  const handlePhill = () => {
    const newColor = randomColor();
    setPhillColor(newColor);
  };
  const handleLine = () => {
    const newColor = randomColor();
    setBorderColor(newColor);
  };

  return (
    <div
      className="random-color"
      style={{ backgroundColor: phillColor, borderColor: borderColor }}
    >
      <section>
        <button onClick={handleLine}>
          <p>- - LINE - -</p>
        </button>
        <br />
        <button onClick={handleButtonClick}>
          <p>- OUTSIDE -</p>
        </button>
        <br />
        <button onClick={handlePhill}>
          <p> - INSIDE - </p>
        </button>
      </section>
    </div>
  );
};

export default RandomColor;
