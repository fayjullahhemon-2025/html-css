import { use } from "react"
import type { PlantTypes } from "../types/types"
import './Plants.css'
import PlantCard from "../PlantCard/PlantCard";
interface plantsPromiseData{
    plantsPromiseData:Promise<PlantTypes[]>
}
export default function Plants({plantsPromiseData}:plantsPromiseData){
    let plants = use(plantsPromiseData);
    return (
        <div>
            <h3>Plants</h3>
            <p>Plants: {plants.length}</p>
            <div className='plants'>
               
                {
                    
                    plants.map(plant=> <PlantCard key={plant?.id} plant={plant} ></PlantCard>)
                }
            </div>
        </div>
    )
}