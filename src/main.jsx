import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Toaster } from './components/ui/sonner'
import './global.css'

console.log(
  'Oi! 😄 Apenas um lembrete: o erro aqui está relacionado ao ShadCN, não ao meu código! Kkkk',
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Toaster />
  </React.StrictMode>,
)
