import React, { useState } from 'react';
import { Line, Bar, Doughnut, Scatter } from 'react-chartjs-2';
import { create, all } from 'mathjs';
import { motion } from 'framer-motion';
import './Aqua.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const math = create(all);

const AquaOptimizer = () => {
  const poblacionBogota = 7907000;
  const poblacionFunza = 105086;
  const poblacionMosquera = 130221;

  const consumoPorHabitante = 15; // Consumo promedio por habitante en litros
  const consumoTotal = (poblacionBogota + poblacionFunza + poblacionMosquera) * consumoPorHabitante;

  const [aguaDisponible, setAguaDisponible] = useState(Math.min(consumoTotal, 500000000));
  const [contaminante, setContaminante] = useState(2);
  const [temperatura, setTemperatura] = useState(15);
  const [mensaje, setMensaje] = useState("");

  const prioridadBogota = 0.45;
  const prioridadFunza = 0.35;
  const prioridadMosquera = 0.3;

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

  // Datos iniciales vacíos para los gráficos
  const [dataBarras, setDataBarras] = useState({
    labels: ['Bogotá', 'Funza', 'Mosquera'],
    datasets: []
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
    generarValoresAleatorios();

    const aguaBogota = aguaDisponible * prioridadBogota;
    const aguaFunza = aguaDisponible * prioridadFunza;
    const aguaMosquera = aguaDisponible * prioridadMosquera;

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

    setMensaje(`Distribución optimizada: Bogotá (${aguaBogota}L), Funza (${aguaFunza}L), Mosquera (${aguaMosquera}L)`);

    // Actualizar los datos del gráfico de barras
    setDataBarras({
      labels: ['Bogotá', 'Funza', 'Mosquera'],
      datasets: [
        {
          label: 'Agua Asignada (L)',
          data: [aguaBogota, aguaFunza, aguaMosquera],
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          barPercentage: 0.4
        },
        {
          label: 'Población',
          data: [poblacionBogota, poblacionFunza, poblacionMosquera],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          barPercentage: 0.4
        },
      ]
    });
  };

  const resetearHistorial = () => {
    setHistorialSatisfaccion({
      bogota: [],
      funza: [],
      mosquera: []
    });
    setUltimosValoresSatisfaccion({ bogota: null, funza: null, mosquera: null });
    setMensaje("");
    setDataBarras({ labels: ['Bogotá', 'Funza', 'Mosquera'], datasets: [] }); // Resetear datos del gráfico
  };

  // Gráfico de líneas: Satisfacción a lo largo del tiempo
  const dataLineas = {
    labels: historialSatisfaccion.bogota.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Bogotá',
        data: historialSatisfaccion.bogota,
        borderColor: 'rgba(230, 126, 34, 1)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Funza',
        data: historialSatisfaccion.funza,
        borderColor: 'rgba(52, 152, 219, 1)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Mosquera',
        data: historialSatisfaccion.mosquera,
        borderColor: 'rgba(39, 174, 96, 1)',
        fill: false,
        tension: 0.4
      }
    ]
  };

  // Gráfico de dona: Porcentaje de agua asignada reemplazado por gráfico de total de agua asignada
  const dataAguaAsignada = {
    labels: ['Bogotá', 'Funza', 'Mosquera'],
    datasets: [
      {
        label: 'Agua Asignada (L)',
        data: [aguaDisponible * prioridadBogota, aguaDisponible * prioridadFunza, aguaDisponible * prioridadMosquera],
        backgroundColor: ['rgba(153, 102, 255, 0.7)', 'rgba(255, 159, 64, 0.7)', 'rgba(75, 192, 192, 0.7)']
      }
    ]
  };

  // Gráfico de dispersión: Historial de satisfacción
  const dataDispercion = {
    datasets: [
      {
        label: 'Bogotá',
        data: historialSatisfaccion.bogota.map((satisfaccion, index) => ({
          x: index + 1,
          y: satisfaccion
        })),
        borderColor: 'rgba(230, 126, 34, 1)',
        backgroundColor: 'rgba(230, 126, 34, 0.3)',
        fill: false
      },
      {
        label: 'Funza',
        data: historialSatisfaccion.funza.map((satisfaccion, index) => ({
          x: index + 1,
          y: satisfaccion
        })),
        borderColor: 'rgba(52, 152, 219, 1)',
        backgroundColor: 'rgba(52, 152, 219, 0.3)',
        fill: false
      },
      {
        label: 'Mosquera',
        data: historialSatisfaccion.mosquera.map((satisfaccion, index) => ({
          x: index + 1,
          y: satisfaccion
        })),
        borderColor: 'rgba(39, 174, 96, 1)',
        backgroundColor: 'rgba(39, 174, 96, 0.3)',
        fill: false
      }
    ]
  };

  return (
    <div className='containerMain'>
      <article>
        <h2>Optimización de Recursos Hídricos</h2>
        <motion.button
          onClick={optimizarDistribucionAgua}
          whileHover={{ scale: 1.2 }} // Efecto al pasar el mouse
          whileTap={{ scale: 0.8 }} // Efecto al hacer clic
          transition={{ type: "spring", stiffness: 450, damping: 17 }} // Transición de la animación
          style={{
            display: "inline-block",
            padding: "2% 2%",
            backgroundColor: "#1a1a1a",
            color: "rgba(255, 255, 255, 0.87)",
            borderRadius: "4px",
            textDecoration: "none",
            textAlign: "center",
            margin: "5%",
            border: "1px solid #646cff",
          }}
        >
          Optimizar Distribución
        </motion.button>

        <motion.button
          onClick={resetearHistorial}
          whileHover={{ scale: 1.2 }} // Efecto al pasar el mouse
          whileTap={{ scale: 0.8 }} // Efecto al hacer clic
          transition={{ type: "spring", stiffness: 450, damping: 17 }} // Transición de la animación
          style={{
            display: "inline-block",
            padding: "2% 2%",
            backgroundColor: "#1a1a1a",
            color: "rgba(255, 255, 255, 0.87)",
            borderRadius: "4px",
            textDecoration: "none",
            textAlign: "center",
            margin: "5%",
            border: "1px solid #e74c3c",
          }}
        >
          Resetear Historial
        </motion.button>
        <div className="resultado">
          <h2>Resultado:</h2>
          <div className='infoResult'>
            {/* <p>{mensaje}</p>   */}
            <h3>Agua Disponible: {aguaDisponible} L</h3>
            <h3>Contaminante: {contaminante}</h3>
            <h3>Temperatura: {temperatura} °C</h3>
          </div>
        </div>
      </article>
      <article>
        <h3>Gráfico de Satisfacción a lo Largo del Tiempo</h3>
        <Line data={dataLineas} />
      </article>
      <article>
        <h3>Gráfico de Barras: Agua Asignada y Población</h3>
        <Bar data={dataBarras} />
      </article>
      <article><h3>Gráfico de Dispersión: Historial de Satisfacción</h3>
        <Scatter data={dataDispercion} /></article>


      {/* <h3>Gráfico de Total de Agua Asignada</h3>
      <Doughnut data={dataAguaAsignada} /> */}


    </div>
  );
};

export default AquaOptimizer;
