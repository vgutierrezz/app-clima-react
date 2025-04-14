import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
