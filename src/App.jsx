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
            <ol><a href="">¿Que es?</a></ol>
            <ol><a href="">¿Como funciona?</a></ol>
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
              href="#destino"
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
      <section className='sectionWhat'>
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
      <section className='sectionHow'>
        <h3>¿Cómo funciona?</h3>
        <p>El proceso se basa en la integración de diversas variables clave, como la capacidad de los embalses, la concentración de contaminantes y la temperatura del agua, con el fin de garantizar un suministro eficiente y saludable.

          Utilizando técnicas como las derivadas parciales y los multiplicadores de Lagrange, el sistema evalúa las interacciones entre las diferentes variables, maximizando la distribución de agua sin comprometer la calidad ni la capacidad disponible, esta optimización busca encontrar el equilibrio perfecto entre satisfacer las necesidades de cada región y respetar las limitaciones de los recursos hídricos. <br /> <br />

          Simulación de Escenarios: AquaBalance permite simular distintos escenarios de distribución de agua, que puedes visualizar cómo pequeños cambios en las variables, como un aumento en la demanda de una región o un cambio en la calidad del agua, impactan en el sistema general. <br /> <br />

          Resultados Visuales: A través de gráficos interactivos, los resultados de la optimización se muestran de forma clara y accesible, permitiendo explorar y analizar cómo se distribuyen los recursos de agua en cada escenario. <br /></p>
      </section>
      <section>
        <AquaOptimizer />
        {/* <Simulation/> */}
        {/* <ComparisonTable/> */}
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
