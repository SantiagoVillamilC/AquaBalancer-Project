import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { create, all } from 'mathjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const math = create(all);

const AquaOptimizer = () => {
  const poblacionBogota = 7907000;
  const poblacionFunza = 105086;
  const poblacionMosquera = 130221;

  const consumoPorHabitante = 15; // Consumo promedio de agua por persona
  const consumoTotal = (poblacionBogota + poblacionFunza + poblacionMosquera) * consumoPorHabitante;

  const [aguaDisponible, setAguaDisponible] = useState(Math.min(consumoTotal, 500000000));
  const [contaminante, setContaminante] = useState(2);
  const [temperatura, setTemperatura] = useState(15);
  const [mensaje, setMensaje] = useState("");

  const prioridadBogota = 0.45;
  const prioridadFunza = 0.35;
  const prioridadMosquera = 0.2;

  const [historialSatisfaccion, setHistorialSatisfaccion] = useState({
    bogota: [],
    funza: [],
    mosquera: []
  });

  const [ultimosValoresSatisfaccion, setUltimosValoresSatisfaccion] = useState({
    bogota: null,
    funza: null,
    mosquera: null
  });

  const generarValoresAleatorios = () => {
    setAguaDisponible(Math.floor(Math.random() * (500000000 - 100000000 + 1)) + 100000000);
    setContaminante(Math.floor(Math.random() * 11));
    setTemperatura(Math.floor(Math.random() * 41));
  };

  const calcularSatisfaccion = (agua, contaminante, temperatura, prioridad) => {
    const factorContaminante = contaminante > 0 ? Math.max(0.1, 1 - contaminante / 10) : 1;
    const factorTemperatura = 1 - Math.abs(20 - temperatura) / 20;

    const satisfaccion = (agua * factorContaminante * factorTemperatura * prioridad) / (aguaDisponible + 1) * 100;
    return math.min(100, math.max(0, satisfaccion));
  };

  const optimizarDistribucionAgua = () => {
    const aguaAnteriorBogota = ultimosValoresSatisfaccion.bogota;
    const aguaAnteriorFunza = ultimosValoresSatisfaccion.funza;
    const aguaAnteriorMosquera = ultimosValoresSatisfaccion.mosquera;

    generarValoresAleatorios();

    const funcionLagrange = (aguaBogota, aguaFunza, aguaMosquera, lambda) => {
      const satisfaccionTotal =
        prioridadBogota * calcularSatisfaccion(aguaBogota, contaminante, temperatura, prioridadBogota) +
        prioridadFunza * calcularSatisfaccion(aguaFunza, contaminante, temperatura, prioridadFunza) +
        prioridadMosquera * calcularSatisfaccion(aguaMosquera, contaminante, temperatura, prioridadMosquera);

      const restriccion = aguaBogota + aguaFunza + aguaMosquera - aguaDisponible;
      return satisfaccionTotal - lambda * restriccion;
    };

    const derivadaAguaBogota = (aguaBogota, lambda) => calcularSatisfaccion(aguaBogota, contaminante, temperatura, prioridadBogota) - lambda;
    const derivadaAguaFunza = (aguaFunza, lambda) => calcularSatisfaccion(aguaFunza, contaminante, temperatura, prioridadFunza) - lambda;
    const derivadaAguaMosquera = (aguaMosquera, lambda) => calcularSatisfaccion(aguaMosquera, contaminante, temperatura, prioridadMosquera) - lambda;
    const derivadaLambda = (aguaBogota, aguaFunza, aguaMosquera) => aguaBogota + aguaFunza + aguaMosquera - aguaDisponible;

    let aguaBogota = aguaDisponible * prioridadBogota;
    let aguaFunza = aguaDisponible * prioridadFunza;
    let aguaMosquera = aguaDisponible * prioridadMosquera;
    let lambda = 0;

    for (let i = 0; i < 100; i++) {
      aguaBogota -= 0.01 * derivadaAguaBogota(aguaBogota, lambda);
      aguaFunza -= 0.01 * derivadaAguaFunza(aguaFunza, lambda);
      aguaMosquera -= 0.01 * derivadaAguaMosquera(aguaMosquera, lambda);
      lambda -= 0.01 * derivadaLambda(aguaBogota, aguaFunza, aguaMosquera);
    }

    const satisfaccionBogota = calcularSatisfaccion(aguaBogota, contaminante, temperatura, prioridadBogota);
    const satisfaccionFunza = calcularSatisfaccion(aguaFunza, contaminante, temperatura, prioridadFunza);
    const satisfaccionMosquera = calcularSatisfaccion(aguaMosquera, contaminante, temperatura, prioridadMosquera);

    setHistorialSatisfaccion(prev => ({
      bogota: [...prev.bogota, satisfaccionBogota],
      funza: [...prev.funza, satisfaccionFunza],
      mosquera: [...prev.mosquera, satisfaccionMosquera]
    }));

    setUltimosValoresSatisfaccion({
      bogota: satisfaccionBogota,
      funza: satisfaccionFunza,
      mosquera: satisfaccionMosquera
    });

    let mensajeExplicacion = "La satisfacción ha cambiado: ";
    let razones = [];

    const compararSatisfaccion = (nuevo, anterior, nombre) => {
      if (anterior !== null) {
        if (nuevo > anterior) {
          return `La satisfacción en ${nombre} ha subido.`;
        } else if (nuevo < anterior) {
          return `La satisfacción en ${nombre} ha bajado.`;
        }
      }
      return `La satisfacción en ${nombre} se mantiene.`;
    };

    const mensajeBogota = compararSatisfaccion(satisfaccionBogota, aguaAnteriorBogota, 'Bogotá');
    const mensajeFunza = compararSatisfaccion(satisfaccionFunza, aguaAnteriorFunza, 'Funza');
    const mensajeMosquera = compararSatisfaccion(satisfaccionMosquera, aguaAnteriorMosquera, 'Mosquera');

    razones.push(mensajeBogota);
    razones.push(mensajeFunza);
    razones.push(mensajeMosquera);

    mensajeExplicacion += razones.join(", ") + ".";

    setMensaje(mensajeExplicacion);
  };

  const resetearHistorial = () => {
    setHistorialSatisfaccion({
      bogota: [],
      funza: [],
      mosquera: []
    });
    setMensaje(""); // Reiniciar mensaje
    setUltimosValoresSatisfaccion({ bogota: null, funza: null, mosquera: null }); // Reiniciar últimos valores
  };

  const dataLineas = {
    labels: historialSatisfaccion.bogota.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Bogotá',
        data: [0, ...historialSatisfaccion.bogota],
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Funza',
        data: [0, ...historialSatisfaccion.funza],
        borderColor: 'rgba(255, 255, 255, 1)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Mosquera',
        data: [0, ...historialSatisfaccion.mosquera],
        borderColor: 'rgba(0, 128, 0, 1)',
        fill: false,
        tension: 0.4
      }
    ]
  };

  return (
    <div>
      <h2>Optimización de Agua</h2>
      <p>Agua disponible: {aguaDisponible} litros</p>
      <p>Nivel de contaminante: {contaminante}</p>
      <p>Temperatura: {temperatura}°C</p>
      <button onClick={optimizarDistribucionAgua}>Optimizar</button>
      <button onClick={resetearHistorial}>Resetear Historial</button>
      <Line data={dataLineas} />
      <p>{mensaje}</p>
    </div>
  );
};

export default AquaOptimizer;
