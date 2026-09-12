import { use, useState, type Dispatch, type SetStateAction } from "react"
import type { PlayerTypes } from "../types/PlayerTypes";
// import PlayerCard from "./PlayerCard";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";
interface playersPropType {
    playersPromiseData: Promise<PlayerTypes[]>
    coin:number
    handleSetCoin:(price:number)=>void
    setCoin:Dispatch<SetStateAction<number>>
}
type ButtonType = 'available' | 'selected'
export default function Players({ playersPromiseData,coin,handleSetCoin ,setCoin}: playersPropType) {
    const players = use(playersPromiseData);
    const [buttonType,setButtonType]= useState<ButtonType>('available');
    const handleToggleButtonType = (button:ButtonType)=>{
        setButtonType(button);
    }
    const [taken,setTaken] = useState<PlayerTypes[]>([]);
    
    console.log(players)
    return (
        <div className="flex flex-col justify-center w-270 m-auto">
            <div className="flex justify-between items-center w-270 m-auto">
                <h2>{buttonType === 'available'?'Available Players':'Selected Players'}</h2>
                <div className="flex items-center">
                    <button onClick={()=>{
                        handleToggleButtonType('available')
                    }} className={` ${buttonType==='available'? 'bg-amber-500' : 'bg-gray-100'} w-20 p-0.5 rounded-l-lg cursor-pointer`}>Available</button>
                    <button onClick={()=>{
                        handleToggleButtonType('selected')
                    }} className={` ${buttonType==='selected' ? 'bg-amber-500' : 'bg-gray-100'} w-20 p-0.5 rounded-r-lg cursor-pointer`}>Selected</button>
                </div>
            </div>
            {
                buttonType==='available'? <AvailablePlayer coin={coin} handleSetCoin={handleSetCoin} players={players} taken={taken} setTaken = {setTaken}></AvailablePlayer>:<SelectedPlayer coin={coin} taken={taken} setTaken={setTaken} setCoin={setCoin} ></SelectedPlayer>
            }

        </div>
    )
}