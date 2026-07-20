import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// mono servida junto do site - nada de depender da fonte do sistema
import '@fontsource-variable/jetbrains-mono'

import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
