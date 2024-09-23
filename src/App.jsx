import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion";
import './App.css'
import AquaOptimizer from './components/AquaOptimizer';
import Simulation from './components/Simulation';
import ComparisonTable from './components/ComparisonTable';

function App() {
  const [count, setCount] = useState(0)

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
      <section>
        <h3>¿Que es?</h3>
        <p>AquaBalance es una herramienta interactiva diseñada para optimizar la distribución del agua de manera eficiente y sostenible en regiones afectadas por la escasez. Surge como respuesta a los recientes desafíos en la gestión de recursos hídricos en Bogotá y municipios cercanos, donde la disminución en los niveles de los embalses ha llevado a cortes en el suministro de agua.

El propósito principal de AquaBalance es ayudar a encontrar un equilibrio óptimo entre la cantidad y calidad del agua distribuida a las comunidades afectadas, utilizando técnicas avanzadas de cálculo multivariado. A través de este enfoque, se busca maximizar el aprovechamiento de los recursos hídricos disponibles, mientras se asegura que el agua cumpla con los estándares de calidad necesarios para el consumo humano.

Esta plataforma permite a los usuarios explorar diferentes escenarios de distribución y comprender cómo decisiones estratégicas pueden mejorar la sostenibilidad y la equidad en el uso de este recurso vital. AquaBalance no solo contribuye a la planificación de la gestión hídrica, sino que también fomenta una mayor conciencia sobre el uso responsable del agua en zonas con recursos limitados.</p>
      </section>
      <section>
        <h3>¿Cómo funciona?</h3>
        <p>AquaBalance funciona como una plataforma interactiva que utiliza técnicas avanzadas de cálculo multivariado para optimizar la distribución del agua entre diferentes regiones afectadas por la escasez. El proceso se basa en la integración de diversas variables clave, como la capacidad de los embalses, la concentración de contaminantes y la temperatura del agua, con el fin de garantizar un suministro eficiente y saludable.

Entrada de Datos: La herramienta permite ingresar datos relevantes sobre las condiciones actuales de los embalses, los requerimientos de agua de cada región y las restricciones existentes, como los niveles mínimos de calidad aceptables para el agua.

Optimización con Cálculo Multivariado: Utilizando técnicas como las derivadas parciales y los multiplicadores de Lagrange, el sistema evalúa las interacciones entre las diferentes variables, maximizando la distribución de agua sin comprometer la calidad ni la capacidad disponible. Esta optimización busca encontrar el equilibrio perfecto entre satisfacer las necesidades de cada región y respetar las limitaciones de los recursos hídricos.

Simulación de Escenarios: AquaBalance permite simular distintos escenarios de distribución de agua. Los usuarios pueden visualizar cómo pequeños cambios en las variables, como un aumento en la demanda de una región o un cambio en la calidad del agua, impactan en el sistema general.

Resultados Visuales: A través de gráficos interactivos y mapas dinámicos, los resultados de la optimización se muestran de forma clara y accesible, permitiendo a los usuarios explorar y analizar cómo se distribuyen los recursos de agua en cada escenario.

Este proceso no solo facilita la toma de decisiones informadas en cuanto a la gestión de recursos hídricos, sino que también promueve una visión integral y sostenible del uso del agua en regiones con desafíos de disponibilidad.</p>
      </section>
      <section>
        <AquaOptimizer/>
        {/* <Simulation/> */}
        {/* <ComparisonTable/> */}
      </section>
      <footer></footer>
    </>
  )
}

export default App
