import { use } from "react"
import type { PlayerTypes } from "../types/PlayerTypes";
interface playersPropType{
    playersPromiseData:Promise<PlayerTypes[]>
}
export default function Players({playersPromiseData}:playersPropType){
    const players = use(playersPromiseData);
    console.log(players)
    return(
        <div>
            {
                players.map(player=> <li>{player.playerName}</li>)
            }
        </div>
    )
}