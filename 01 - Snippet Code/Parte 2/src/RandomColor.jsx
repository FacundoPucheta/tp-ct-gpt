// RandomColor.jsx
import React from 'react';
import './RandomColor.css';

const RandomColor = () => {
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

  return (

    <div className="random-color">
        <section>
        <p>Henry's | Change Color App</p>
        <br/>
      <button onClick={handleButtonClick}>Change the color</button>
      </section>
    </div>
  );
};

export default RandomColor;
