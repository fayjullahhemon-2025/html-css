import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function FoodCard({ food }) {
    const {id, dish_name, image_link, price, rating } = food;
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
            <div>
                <Link href={`/menu/${id}`} >
                    <button className="p-2 bg-blue-500 text-white rounded-2xl" >Show Details</button>
                </Link>
            </div>
        </div>

    )
}