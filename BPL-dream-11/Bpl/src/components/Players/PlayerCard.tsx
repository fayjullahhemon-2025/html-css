import type { PlayerTypes } from "../types/PlayerTypes"
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";

interface PlayerPropType{
    player:PlayerTypes;
}
export default function PlayerCard({player}:PlayerPropType){
    return(
        <div className="flex flex-col justify-center p-2 rounded-2xl bg-amber-50">
            <img className="w-75 h-55 rounded-2xl" src={player.plyerImg} alt="" />
            <div className="mt-1.5">
                <h2 className="flex items-center gap-0.5"> <CgProfile /> {player.playerName}</h2>
                <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-1"> <FaFlag /> {player.origin} </h3>
                    <h3>{player.playerType}</h3>
                </div>
                <h2>Rating</h2>
                <div className="grid grid-cols-2 justify-items-center">
                    <h3>{player.battingType}</h3>
                    <h3>{player.bowlingType}</h3>
                    <h3>Price:{player.price}</h3>
                    <button className="w-30 p-0.5 rounded-md bg-gray-200">Choose Player</button>
                </div>
            </div>
        </div>
    )
}