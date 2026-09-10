import type { PlantTypes } from "../types/types"
import './plant-card.css'
interface PlantCardType{
    plant:PlantTypes
}
export default function PlantCard({plant}:PlantCardType){
    console.log(plant)
    return(
        <div className="plant-card">
            <h4>{plant?.name}</h4>
            
        </div>
    )
}