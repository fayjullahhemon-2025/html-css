import { use } from "react"
import type { CountriesPromiseData } from "../../types/types"
import CountryCard from "../CountryCard/CountryCard";
import './Countries.css'
interface CountriesPropType{
    countriesPromiseData:Promise<CountriesPromiseData[]>
}
export default function Countries({countriesPromiseData}:CountriesPropType){
    let countries = use(countriesPromiseData);
    return(
        <>
            <h2>{countries.length}</h2>
        <div className="countries">
            {
                countries.map(country=> <CountryCard key={country?.ccn3?.ccn3} country = {country} ></CountryCard> )
            }
        </div>
        </>
    )
}