import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/style.scss'
import App from './App.jsx'
import '@/utils/reacti18.jsx'
import { CookiesProvider } from 'react-cookie'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <App />

    </CookiesProvider>
  </StrictMode>,
)
