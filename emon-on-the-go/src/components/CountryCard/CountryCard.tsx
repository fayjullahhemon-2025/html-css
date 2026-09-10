import { useState } from "react";
import type { CountriesPromiseData } from "../../types/types";
import './CountryCard.css'
interface CountryCardProp{
    country:CountriesPromiseData;
    visitedCountHandling:(country:CountriesPromiseData)=>void
}
export default function CountryCard({country,visitedCountHandling}:CountryCardProp){
    let [visited,setVisited] = useState<boolean>(false);
    const visitedOrNot = ()=>{
        if(visited){
            setVisited(false)
        }else{
            setVisited(true)
        }
        visitedCountHandling(country);
    }
    return(
       
        <div className={`countryCard ${visited ? 'visited-country' : '' }`}>
            <h3>{country?.name?.common}</h3>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags.alt} />
            <p>Population: {country?.population?.population}</p>
            <p>Capital: {country?.capital?.capital}</p>
            <button onClick={visitedOrNot} >
                {visited ? 'visited':'mark as visited'}
            </button>
        </div>
 
    )
}