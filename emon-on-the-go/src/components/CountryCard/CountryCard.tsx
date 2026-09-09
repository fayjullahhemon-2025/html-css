import type { CountriesPromiseData } from "../../types/types";
import './CountryCard.css'
interface CountryCardProp{
    country:CountriesPromiseData;
}
export default function CountryCard({country}:CountryCardProp){
    return(
        <div className="countryCard">
            <h3>{country?.name?.common}</h3>
        </div>
    )
}