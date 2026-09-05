import type { SportType } from "./types" 
export default function SportCard({sport}:{sport:SportType}){
    return(
        <>  
            <div>
                <h3>Name: {sport.name}</h3>
                <p>Players: {sport.players}</p>
            </div>
        </>
    )
}