
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
import type { CountriesPromiseData } from './types/types';


const countriesPromiseData = async():Promise<CountriesPromiseData[]> =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}

function App() {
  return (
    <>
      <Suspense fallback ={<div>Loading....</div>}>
        <Countries countriesPromiseData = {countriesPromiseData()}></Countries>
      </Suspense>
    </>
  )
}

export default App
