import { useState } from "react"
import type { PlantTypes } from "../types/types"
import './plant-card.css'
interface PlantCardType{
    plant:PlantTypes,
    // handleToggleGarden:(plant:PlantTypes)=>void;
}
export default function PlantCard({plant,}:PlantCardType){
    // console.log(plant)
    
    
    return(
        <div className="plant-card">
            <img src={plant?.image} alt="" />
            <div className="card-info" >
                <h4>{plant?.name}</h4>
                <p><strong>Catagory:</strong> {plant?.category}</p>
                <p><strong>Description:</strong> {plant?.description}</p>
                <button>Add to your garden</button>
            </div>
            
        </div>
    )
}