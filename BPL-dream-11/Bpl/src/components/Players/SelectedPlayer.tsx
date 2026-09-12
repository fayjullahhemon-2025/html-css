import type { Dispatch, SetStateAction } from "react"
import type { PlayerTypes } from "../types/PlayerTypes"
import SelectedPlayerCard from "./SelectedPlayerCard"

interface SelectedPlayerProp {
    coin:number
    // handleSetCoin:(price:number)=>void

    setCoin:Dispatch<SetStateAction<number>>
    taken: PlayerTypes[]
    setTaken:Dispatch<SetStateAction<PlayerTypes[]>>
}
export default function SelectedPlayer({taken,setTaken,coin,setCoin}:SelectedPlayerProp) {
    // console.log(taken)
    const handleDeleteTaken = (player:PlayerTypes):void=>{
        const remaining = taken.filter((p)=> p?.id !== player?.id);
        console.log(remaining);
        setTaken(remaining);
        let updatedCoin = coin+ player.price;
        setCoin(updatedCoin)
    }
    return (
        <>
            {
                taken.map((tk,idx)=> <SelectedPlayerCard key={idx} tk={tk} handleDeleteTaken={handleDeleteTaken} ></SelectedPlayerCard> )
            }
        </>
    )
}