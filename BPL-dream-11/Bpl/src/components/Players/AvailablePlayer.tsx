import type { PlayerTypes } from "../types/PlayerTypes";
import PlayerCard from "./PlayerCard";
interface playersPropType{
    players:PlayerTypes[];
    coin:number,
    handleSetCoin:(price:number)=>void
}
export default function AvailablePlayer({players,coin,handleSetCoin}:playersPropType){
    return(
        <div className="grid grid-cols-3 gap-1 justify-items-center" >
                {players.map(player => <PlayerCard coin={coin} handleSetCoin={handleSetCoin}  player={player} ></PlayerCard>)}
            </div>
    )
}