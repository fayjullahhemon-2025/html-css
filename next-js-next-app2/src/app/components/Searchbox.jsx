'use client'
import React, { use } from "react";
export default function Searchbox({seachPromiseData}){
    const foods = use(seachPromiseData)
    // const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    // const data = await res.json();
    // const foods = data.data;
    return(
        <div>
            {foods.length}
        </div>
    )
}