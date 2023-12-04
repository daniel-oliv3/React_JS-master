import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
)
