import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import PopularProduct from './components/PopularProducts'
// import './index.css'
// import App from './App.tsx'

const userFetch = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};
const userPromise = 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav></Nav>
    <PopularProduct></PopularProduct>
  </StrictMode>,
)
