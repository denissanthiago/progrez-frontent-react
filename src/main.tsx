import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
