import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as HashRouter } from 'react-router-dom'
import { App } from './App'
import reportWebVitals from './setup/benchmark/reportWebVitals'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

reportWebVitals()
