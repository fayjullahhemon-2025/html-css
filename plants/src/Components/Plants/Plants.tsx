import { use, useState } from "react"
import type { PlantTypes } from "../types/types"
import './Plants.css'
import PlantCard from "../PlantCard/PlantCard";
interface plantsPromiseData{
    plantsPromiseData:Promise<PlantTypes[]>
}
export default function Plants({plantsPromiseData}:plantsPromiseData){
    let plants = use(plantsPromiseData);
    const [myGarden,setMyGarden] = useState<PlantTypes[]>([]);

    const handleToggleGarden = (plant:PlantTypes):void=>{
        const exist = myGarden.find(p=> p?.id===plant?.id);
        if(exist){
            const remaining = myGarden.filter(item=> item!==plant);
            setMyGarden(remaining);
        }else{
            const newPlants = [...myGarden,plant];
            setMyGarden(newPlants);
        }
    }

    return (
        <div>
            <h3>Plants</h3>
            <p>Plants: {plants.length}</p>
            <div className='plants'>
               
                {
                    
                    plants.map(plant=> <PlantCard 
                        key={plant?.id} 
                        plant={plant} 
                        // handleToggleGarden={handleToggleGarden}
                        ></PlantCard>)
                }
            </div>
        </div>
    )
}