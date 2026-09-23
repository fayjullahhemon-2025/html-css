import React from "react";
import FoodCard from "../components/FoodCard";
export default async function menuPage(){
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await response.json();
    const foods = data.data;
    console.log('Data',foods);
    return(
        <div className="grid grid-col-1 gap-2 sm:grid-cols-2  md:grid-cols-3 w-full max-w-fit m-auto" >
            {
                foods.map(food=> <FoodCard key={food.id} food={food} ></FoodCard>)
            }
        </div>
    )
}