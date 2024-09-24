import { useState } from 'react'
import reactLogo from './assets/react.svg'
import aquaLogo from '../public/water-svgrepo-com.svg'
import { motion } from "framer-motion";
import './App.css'
import AquaOptimizer from './components/AquaOptimizer';
import Simulation from './components/Simulation';
import ComparisonTable from './components/ComparisonTable';

function App() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <h4>Aqua Balance | Calculo Multivariado</h4>
        <div>
          <u>
            <ol><a href="#sectionWhat">¿Que es?</a></ol>
            <ol><a href="#sectionHow">¿Como funciona?</a></ol>
            <ol><a href="#deep">Explicación</a></ol>
          </u>
        </div>
      </header>
      <div className='containerIntro'>
        <div className='containerIntroTitle'>
          <p className='textIntro'>Gestionando el Agua de Manera Eficiente y Sostenible</p>
        </div>
        <div className='containerIntroInfo'>
          <p>Aplicando cálculo multivariado para balancear la distribución del agua, priorizando la sostenibilidad y la calidad en cada gota.</p>
          <div>
            <motion.a
              href="#main"
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 450, damping: 17 }}
              style={{
                display: "inline-block", // Hace que se comporte como un botón
                padding: "2% 2%",
                backgroundColor: "#1a1a1a",
                color: "rgba(255, 255, 255, 0.87)",
                height: "50%",
                borderRadius: "4px",
                textDecoration: "none",
                textAlign: "center",
                margin: "5%",
                border: "1px solid #646cff",
              }}
            >
              ¡Pruebalo ahora!
            </motion.a>
            {/* <button><a href="/Melbourne_housing_FULL.csv" download>
              Descargar archivo CSV
            </a></button>
            <button><a href="#sectionTable">Ver tabla de datos</a></button> */}
          </div>
        </div>
      </div>
      <section className='sectionWhat' id='sectionWhat'>
        <div>
          <h2>¿Que es?</h2>
          <p>AquaBalance surge como respuesta a los recientes desafíos en la gestión de recursos hídricos en Bogotá y municipios cercanos, donde la disminución en los niveles de los embalses ha llevado a cortes en el suministro de agua

            siendo el propósito principal ayudar a encontrar un equilibrio óptimo entre la cantidad y calidad del agua distribuida a las comunidades afectadas, utilizando técnicas avanzadas de cálculo multivariado. <br /> A través de este enfoque, se busca maximizar el aprovechamiento de los recursos hídricos disponibles, mientras se asegura que el agua cumpla con los estándares de calidad necesarios para el consumo humano.

            Aqui podras explorar diferentes escenarios de distribución y comprender cómo decisiones estratégicas pueden mejorar la sostenibilidad y la equidad en el uso de este recurso vital y no solo contribuyendo a la planificación de la gestión hídrica, sino que también se busca fomentar una mayor conciencia sobre el uso responsable del agua en zonas con recursos limitados.</p>
        </div>
        <picture>
          <img src={aquaLogo} alt="" />
        </picture>
      </section>
      <section className='sectionHow' id='sectionHow'>
        <h3>¿Cómo funciona?</h3>
        <p>El proceso se basa en la integración de diversas variables clave, como la capacidad de los embalses, la concentración de contaminantes y la temperatura del agua, con el fin de garantizar un suministro eficiente y saludable.

          Utilizando técnicas como las derivadas parciales y los multiplicadores de Lagrange, el sistema evalúa las interacciones entre las diferentes variables, maximizando la distribución de agua sin comprometer la calidad ni la capacidad disponible, esta optimización busca encontrar el equilibrio perfecto entre satisfacer las necesidades de cada región y respetar las limitaciones de los recursos hídricos. <br /> <br />

          Simulación de Escenarios: AquaBalance permite simular distintos escenarios de distribución de agua, que puedes visualizar cómo pequeños cambios en las variables, como un aumento en la demanda de una región o un cambio en la calidad del agua, impactan en el sistema general. <br /> <br />

          Resultados Visuales: A través de gráficos interactivos, los resultados de la optimización se muestran de forma clara y accesible, permitiendo explorar y analizar cómo se distribuyen los recursos de agua en cada escenario. <br /></p>
      </section>
      <section id='main'>
        <AquaOptimizer />
        {/* <Simulation/> */}
        {/* <ComparisonTable/> */}
      </section>
      <section className='deep' id='deep'>
        <h3>Profundiza el funcionamiento interno del sitio</h3>
        <p>Como lo puedes ver el sitio diseñado para optimizar la distribución de agua en tres regiones críticas: Bogotá, Funza y Mosquera, a través de una combinación de técnicas de cálculo multivariado y visualización interactiva, la plataforma asigna de manera equitativa la cantidad de agua disponible en función de varios factores, como la calidad del agua y las condiciones ambientales. <br /> A continuación, te explicamos el proceso en detalle.</p>
        <ol>
          <li>
            <h4>Recopilación de Datos:</h4>
            <p>La plataforma considera varios parámetros fundamentales:</p>
            <ol><strong>Agua Disponible:</strong> Se estima la cantidad total de agua que puede ser distribuida entre las tres regiones.</ol>
            <ol><strong>Población:</strong> La cantidad de habitantes en cada región, con datos estimados para Bogotá, Funza y Mosquera.</ol>
            <ol><strong>Calidad del Agua:</strong> Indicada por la concentración de contaminantes y la temperatura del agua, que afectan directamente la satisfacción de los habitantes.</ol>
          </li>
          <li>
      <h4>Modelo Matemático:</h4>
      <p>El cálculo central de AquaBalance se basa en técnicas de optimización multivariada, utilizando derivadas parciales y multiplicadores de Lagrange. La plataforma maximiza una función de satisfacción cuadrática, que mide el bienestar de cada región en función de:</p>
      <ol>
        <li><strong>Cantidad de agua distribuida.</strong></li>
        <li><strong>Concentración de contaminantes:</strong> Donde una menor concentración mejora la satisfacción.</li>
        <li><strong>Temperatura:</strong> La temperatura óptima está en torno a los 20°C.</li>
      </ol>
      <p>La función de satisfacción penaliza las desviaciones de los niveles óptimos de calidad del agua y ajusta la cantidad en cada región para equilibrar la distribución.</p>
    </li>
    <li>
      <h4>Optimización y Distribución del Agua:</h4>
      <p>Al pulsar el botón de "Optimizar Distribución", la plataforma genera un cálculo aleatorio de los parámetros ambientales y de disponibilidad de agua. La cantidad de agua disponible se distribuye proporcionalmente entre Bogotá, Funza y Mosquera, según la prioridad de cada región, basada en su población.</p>
      <p>Los factores como la contaminación y la temperatura se ajustan mediante fórmulas que evalúan su impacto en la satisfacción general. Por ejemplo, una mayor concentración de contaminantes reduce la satisfacción, mientras que una temperatura cercana a los 20°C la aumenta.</p>
    </li>
    <li>
      <h4>Visualización y Resultados:</h4>
      <p>La plataforma muestra varios gráficos interactivos que permiten a los usuarios visualizar los resultados en tiempo real:</p>
      <ol>
        <li><strong>Gráfico de Líneas:</strong> Muestra la satisfacción de cada región a lo largo del tiempo.</li>
        <li><strong>Gráfico de Barras:</strong> Compara la cantidad de agua asignada con la población de cada región.</li>
        <li><strong>Gráfico de Dispersión:</strong> Ilustra el historial de satisfacción de cada región en distintas simulaciones.</li>
      </ol>
      <p>Estos gráficos ayudan a entender cómo las decisiones de distribución afectan la satisfacción global y permiten a los usuarios explorar diferentes escenarios.</p>
    </li>
    <li>
      <h4>Interpretación de los Resultados:</h4>
      <p>Cada simulación ofrece un resumen detallado de cómo se ha distribuido el agua entre las tres regiones, el nivel de contaminantes y la temperatura. El objetivo es encontrar un equilibrio que maximice la satisfacción general de todas las regiones.</p>
    </li>
        </ol>
      </section>
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          className="footer-content"
          // whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <p>Hecho por Santiago V.</p>

          <motion.a
            href="https://github.com/SantiagoVillamilC/AquaBalancer-Project"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#f39c12' }}
            whileTap={{ scale: 0.9 }}
          >
            Visita el codigo de este proyecto en mi GitHub
          </motion.a>

          <p>Curso de Estadística</p>

          <p>{currentYear}</p>
        </motion.div>
      </motion.footer>
    </>
  )
}

export default App
