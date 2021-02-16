import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AppState from './context/app/appState'

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
