import { use, useState } from "react";
import type { Categories, CategoriesResponse } from "../../App"
import MenuCard from '../MenuCard/MenuCard.tsx'
import './MenuItem.css'

interface MenuPropType{
    MenuPromiseData:Promise<CategoriesResponse>;
}
export default function MenuItem({MenuPromiseData}:MenuPropType){
    const menuItems = use(MenuPromiseData);
    console.log(menuItems)
    const [orderlist,setOrderList] = useState<Categories[]>([]);
    const handleOrderList = (i:Categories):void=>{
        const exist = orderlist.find(item=> item?.strCategory===i?.strCategory);
        if(exist){
            const remaining = orderlist.filter(item=> item !== i);
            setOrderList(remaining);
        }else{
            const newOrder = [...orderlist,i];
            setOrderList(newOrder);
        }
    }
    return(
    <>
        <div>
            <h1>Menu Item</h1>
            <p>Items: {menuItems.categories.length}</p>
            
            <ul>
                {
                    orderlist.map(ol=><li>{ol.strCategory}</li>)
                }
            </ul>
            <div className="menu-container" >
                {menuItems.categories.map(item=> <MenuCard 
                key={item.idCategory} 
                item={item}
                handleOrderList={handleOrderList}
                >
                </MenuCard>
                )}
            </div>
        </div>
    </>
    )
}