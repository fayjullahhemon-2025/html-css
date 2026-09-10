import { use, useState } from "react"
import type { CountriesPromiseData } from "../../types/types"
import CountryCard from "../CountryCard/CountryCard";
import './Countries.css'
interface CountriesPropType {
    countriesPromiseData: Promise<CountriesPromiseData[]>
}
export default function Countries({ countriesPromiseData }: CountriesPropType) {
    let [visitedCountries, setVisitedCountries] = useState<CountriesPromiseData[]>([])
    let countries = use(countriesPromiseData);
    const visitedCountHandling = (country: CountriesPromiseData): void => {
        if (visitedCountries.includes(country)) {
            const remainingCountries = visitedCountries.filter(c => c!== country);
            setVisitedCountries(remainingCountries);
        } else {
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }
    return (
        <>
            <h2>{countries.length}</h2>
            <h2>Visited Country: {visitedCountries.length}</h2>
            <div className="countries">
                {
                    countries.map(country => <CountryCard
                        key={country?.ccn3?.ccn3}
                        country={country}
                        visitedCountHandling={visitedCountHandling}
                    >

                    </CountryCard>)
                }
            </div>
        </>
    )
}