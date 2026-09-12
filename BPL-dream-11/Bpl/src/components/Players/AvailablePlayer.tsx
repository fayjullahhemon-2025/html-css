import type { PlayerTypes } from "../types/PlayerTypes";
import PlayerCard from "./PlayerCard";
interface playersPropType{
    players:PlayerTypes[];
}
export default function AvailablePlayer({players}:playersPropType){
    return(
        <div className="grid grid-cols-3 gap-1 justify-items-center" >
                {players.map(player => <PlayerCard  player={player} ></PlayerCard>)}
            </div>
    )
}