import type { Dispatch, SetStateAction } from "react"
import type { PlayerTypes } from "../types/PlayerTypes"
import SelectedPlayerCard from "./SelectedPlayerCard"

interface SelectedPlayerProp {
    taken: PlayerTypes[]
    
}
export default function SelectedPlayer({taken}:SelectedPlayerProp) {
    // console.log(taken)
    return (
        <>
            {
                taken.map(tk=> <SelectedPlayerCard tk={tk} ></SelectedPlayerCard> )
            }
        </>
    )
}