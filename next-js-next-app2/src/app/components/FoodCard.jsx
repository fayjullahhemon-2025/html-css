import Image from "next/image";
import React from "react";
export default function FoodCard({ food }) {
    const { dish_name, image_link, price, rating } = food;
    return (

        <div className="flex justify-center items-center flex-col border gap-2 p-2 rounded-2xl w-96" >
            <Image
                src={image_link}
                width={300}
                height={300}
                alt={dish_name}
                
            >
            </Image>
            <h1>{dish_name}</h1>
            <div>
                <span>Price: {price} Taka</span>
                <span> | </span>
                <span>Rating: 🌟{rating}</span>
            </div>
        </div>

    )
}