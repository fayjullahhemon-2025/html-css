import { useState } from "react"
import type { PlantTypes } from "../types/types"
import './plant-card.css'
interface PlantCardType{
    plant:PlantTypes,
    handleToggleGarden:(plant:PlantTypes)=>void;
}
export default function PlantCard({plant,handleToggleGarden}:PlantCardType){
    // console.log(plant)
    const [selected,setSelected] = useState<boolean>(false)
    const handleToggleSelection = ()=>{
        setSelected(!selected);
        handleToggleGarden(plant);
    }
    
    
    return(
        <>  
            
            <div className="plant-card">
            <img src={plant?.image} alt="" />
            <div className="card-info" >
                <h4>{plant?.name}</h4>
                <p><strong>Catagory:</strong> {plant?.category}</p>
                <p><strong>Description:</strong> {plant?.description}</p>
                <button onClick = {handleToggleSelection}>
                    {selected?"Selected":"Select"}
                </button>
            </div>
            
        </div>
        </>
    )
}