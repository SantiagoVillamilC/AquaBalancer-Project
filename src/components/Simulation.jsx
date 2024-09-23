import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Simulation = () => {
  // Estados para las variables ajustables
  const [waterAmount, setWaterAmount] = useState(50);
  const [waterQuality, setWaterQuality] = useState(50);
  const [temperature, setTemperature] = useState(20);

  // Estado para almacenar los resultados de la simulación
  const [simulationData, setSimulationData] = useState([]);

  // Efecto para actualizar la simulación al cambiar los valores
  useEffect(() => {
    // Realizamos el cálculo multivariado en función de las variables
    // Ejemplo: Z = f(WaterAmount, WaterQuality, Temperature)
    // Aquí usamos derivadas parciales simples para observar cómo cada variable afecta a Z.
    const calculateResults = () => {
      const results = [];
      for (let i = 0; i < 10; i++) {
        const z = (waterAmount * 0.5) + (waterQuality * 0.3) - (temperature * 0.2);
        results.push({ x: i, y: z });
      }
      return results;
    };

    setSimulationData(calculateResults());
  }, [waterAmount, waterQuality, temperature]);

  // Configuración del gráfico
  const data = {
    labels: simulationData.map(point => point.x),
    datasets: [
      {
        label: 'Simulación de Distribución del Agua',
        data: simulationData.map(point => point.y),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Simulación de Recursos Hídricos</h2>
      <div>
        <label>Cantidad de Agua</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={waterAmount} 
          onChange={(e) => setWaterAmount(e.target.value)} 
        />
        <span>{waterAmount}</span>
      </div>
      <div>
        <label>Calidad del Agua</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={waterQuality} 
          onChange={(e) => setWaterQuality(e.target.value)} 
        />
        <span>{waterQuality}</span>
      </div>
      <div>
        <label>Temperatura</label>
        <input 
          type="range" 
          min="0" 
          max="50" 
          value={temperature} 
          onChange={(e) => setTemperature(e.target.value)} 
        />
        <span>{temperature}°C</span>
      </div>

      {/* Gráfico de resultados */}
      <Line data={data} />
    </div>
  );
};

export default Simulation;
