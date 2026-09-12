import type { Dispatch, SetStateAction } from "react";
import type { PlayerTypes } from "../types/PlayerTypes";
import PlayerCard from "./PlayerCard";
interface playersPropType {
    players: PlayerTypes[];
    coin: number,
    handleSetCoin: (price: number) => void
    taken: PlayerTypes[]
    setTaken: Dispatch<SetStateAction<PlayerTypes[]>>
}
export default function AvailablePlayer({ players, coin, handleSetCoin, taken, setTaken }: playersPropType) {
    return (
        <div className="grid grid-cols-3 gap-1 justify-items-center" >
            {players.map(player => <PlayerCard coin={coin} handleSetCoin={handleSetCoin} player={player} taken={taken} setTaken = {setTaken} ></PlayerCard>)}
        </div>
    )
}