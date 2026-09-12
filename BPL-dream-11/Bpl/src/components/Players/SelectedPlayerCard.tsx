import type { PlayerTypes } from "../types/PlayerTypes"
import { IoTrashBinOutline } from "react-icons/io5";
interface SelectedPlayerCardProp{
    tk:PlayerTypes
}
export default function SelectedPlayerCard({tk}:SelectedPlayerCardProp){
    return(
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center" >
                <img className="w-12.5 h-12.5 rounded-lg m-5" src={tk.plyerImg} alt="" />
                <div>
                    <h2>{tk.playerName}</h2>
                    <p>{tk.playerType}</p>
                </div>
            </div>
            <button > <IoTrashBinOutline /> </button>
        </div>
    )
}