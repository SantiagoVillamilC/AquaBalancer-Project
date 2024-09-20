import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
            <ol><a href="">¿Por que fue realizado?</a></ol>
          </u>
        </div>
      </header>
      <div className='containerIntro'>
        <div className='containerIntroTitle'>
          <p className='textIntro'>Análisis con más de</p>
        </div>
        <div className='containerIntroInfo'>
          <p>Descubre cómo la distancia al centro de la ciudad de Melbourne impacta directamente en los precios del mercado inmobiliario a través de nuestro sitio web.</p>
          <div>
            <button><a href="/Melbourne_housing_FULL.csv" download>
              Descargar archivo CSV
            </a></button>
            <button><a href="#sectionTable">Ver tabla de datos</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
