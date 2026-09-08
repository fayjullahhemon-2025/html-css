import { use } from "react"
import type { CountriesPromiseData } from "../types/types"
interface CountriesPropType{
    countriesPromiseData:Promise<CountriesPromiseData[]>
}
export default function Countries({countriesPromiseData}:CountriesPropType){
    let countries = use(countriesPromiseData);
    return(
        <div>
            <h2>{countries.length}</h2>
            {
                countries.map(country=> <h3>{country?.name?.common}</h3> )
            }
        </div>
    )
}