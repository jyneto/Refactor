import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './components/Navbar.jsx'
// import './components/Footer.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { i } from 'framer-motion/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
