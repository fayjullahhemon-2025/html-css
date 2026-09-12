import { use } from "react"
import type { PlayerTypes } from "../types/PlayerTypes";
import PlayerCard from "./PlayerCard";
interface playersPropType {
    playersPromiseData: Promise<PlayerTypes[]>
}
export default function Players({ playersPromiseData }: playersPropType) {
    const players = use(playersPromiseData);
    console.log(players)
    return (
        <div className="flex flex-col justify-center w-270 m-auto">
            <div className="flex justify-between items-center w-270 m-auto">
                <h2>Available Players</h2>
                <div className="flex items-center">
                    <button className="bg-amber-500 w-20 p-0.5 rounded-l-lg cursor-pointer">Available</button>
                    <button className="bg-gray-100 w-20 p-0.5 rounded-r-lg cursor-pointer">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 justify-items-center" >
                {players.map(player => <PlayerCard player={player} ></PlayerCard>)}
            </div>

        </div>
    )
}