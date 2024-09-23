import React, { useState } from 'react';

const ComparisonTable = () => {
  const [scenarios, setScenarios] = useState([]);

  const addScenario = () => {
    const newScenario = {
      waterAmount: Math.random() * 100,
      waterQuality: Math.random() * 100,
      temperature: Math.random() * 50,
    };
    // Cálculo multivariado para optimización
    const z = (newScenario.waterAmount * 0.5) + (newScenario.waterQuality * 0.3) - (newScenario.temperature * 0.2);
    newScenario.optimizedResult = z;
    setScenarios([...scenarios, newScenario]);
  };

  return (
    <div>
      <h2>Comparación de Escenarios</h2>
      <button onClick={addScenario}>Añadir Escenario</button>
      <table>
        <thead>
          <tr>
            <th>Cantidad de Agua</th>
            <th>Calidad del Agua</th>
            <th>Temperatura</th>
            <th>Resultado Optimizado</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario, index) => (
            <tr key={index}>
              <td>{scenario.waterAmount.toFixed(2)}</td>
              <td>{scenario.waterQuality.toFixed(2)}</td>
              <td>{scenario.temperature.toFixed(2)}°C</td>
              <td>{scenario.optimizedResult.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
