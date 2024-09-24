# AquaBalance

https://main--aquabalancer-calculo.netlify.app

AquaBalance es una plataforma web interactiva diseñada para optimizar la distribución de agua en las regiones de Bogotá, Funza y Mosquera. Utilizando técnicas avanzadas de cálculo multivariado, la aplicación busca maximizar la satisfacción de los habitantes mediante una asignación equitativa y sostenible del recurso hídrico.

## Características
- **Optimización de Recursos Hídricos**: Distribución de agua basada en población y calidad del agua.
- **Interactividad**: Gráficos en tiempo real que muestran la satisfacción de las regiones.
- **Análisis Avanzado**: Utiliza derivadas parciales y multiplicadores de Lagrange para optimizar la asignación del agua.

## Modelo Matemático
El cálculo central de AquaBalance se basa en técnicas de optimización multivariada, utilizando derivadas parciales y multiplicadores de Lagrange. La plataforma maximiza una función de satisfacción cuadrática, que mide el bienestar de cada región en función de:
- Cantidad de agua distribuida.
- Concentración de contaminantes (donde una menor concentración mejora la satisfacción).
- Temperatura (la temperatura óptima está en torno a los 20°C).

## Optimización y Distribución del Agua
Al pulsar el botón de "Optimizar Distribución", la plataforma genera un cálculo aleatorio de los parámetros ambientales y de disponibilidad de agua. La cantidad de agua disponible se distribuye proporcionalmente entre Bogotá, Funza y Mosquera, según la prioridad de cada región, basada en su población.

## Visualización de Resultados
La plataforma muestra varios gráficos interactivos que permiten a los usuarios visualizar los resultados en tiempo real:
- **Gráfico de Líneas**: Muestra la satisfacción de cada región a lo largo del tiempo.
- **Gráfico de Barras**: Compara la cantidad de agua asignada con la población de cada región.
- **Gráfico de Dispersión**: Ilustra el historial de satisfacción de cada región en distintas simulaciones.

## Instalación

Para clonar el repositorio y ejecutar la aplicación localmente, sigue estos pasos:

```bash
# Clona el repositorio
git clone https://github.com/SantiagoVillamilC/AquaBalancer-Project

# Navega a la carpeta del proyecto
cd aquabalance

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev