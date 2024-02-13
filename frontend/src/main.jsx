import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from '../src/components/Navbar'
import App from '../src/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App/>
  </React.StrictMode>,
)
