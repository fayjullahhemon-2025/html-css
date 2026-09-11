import { useState } from "react";
import type { Categories } from "../../App";
import './MenuCard.css'
interface itemPropType{
    item:Categories;
    handleOrderList:(i:Categories)=>void;
}
export default function MenuCard({item,handleOrderList}:itemPropType){
    const [orderToggle,setOrderToggle] = useState<boolean>(false);
    const handleOrderToggle = ()=>{
        setOrderToggle(!orderToggle);
        handleOrderList(item);
    }
    return(
        <div className="menu-card">
            <img src={item.strCategoryThumb} alt="" />
            <h2>{item.strCategory}</h2>
            <p>{item.strCategoryDescription}</p>
            <button onClick={handleOrderToggle} >{
                orderToggle?"Already Ordered":"Order"
                }</button>
        </div>
    )
}