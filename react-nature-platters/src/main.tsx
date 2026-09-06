import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
// import './index.css'
// import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav></Nav>
  </StrictMode>,
)
