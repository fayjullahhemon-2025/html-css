import { use, useState } from "react"
import type { PlayerTypes } from "../types/PlayerTypes";
import PlayerCard from "./PlayerCard";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";
interface playersPropType {
    playersPromiseData: Promise<PlayerTypes[]>
    coin:number
    handleSetCoin:(price:number)=>void
}
type ButtonType = 'available' | 'selected'
export default function Players({ playersPromiseData,coin,handleSetCoin }: playersPropType) {
    const players = use(playersPromiseData);
    const [buttonType,setButtonType]= useState<ButtonType>('available');
    const handleToggleButtonType = (button:ButtonType)=>{
        setButtonType(button);
    }
    const [taken,setTaken] = useState<PlayerTypes[]>([]);
    const handleSetToken = (player:PlayerTypes[])=>{
        // const exist = player.find(p=> p?.id === player?)
    }
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
                buttonType==='available'? <AvailablePlayer coin={coin} handleSetCoin={handleSetCoin} players={players} ></AvailablePlayer>:<SelectedPlayer></SelectedPlayer>
            }

        </div>
    )
}