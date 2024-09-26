import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Setup React Router DOM
import { BrowserRouter } from 'react-router-dom'

import { GlobalProvider } from './providers/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
)
