import Image from "next/image";
import React from "react";
export default async function itemDetail({params}){
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    console.log(food);
    return(
        <div>   
            <Image
                src={food.image_link}
                width={300}
                height={300}
                alt={food.dish_name}
            ></Image>
        </div>
    )
}