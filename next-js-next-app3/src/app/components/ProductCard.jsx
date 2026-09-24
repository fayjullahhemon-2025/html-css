import React from "react";

export default function ProductCard({ product }) {
    const { name,
        category,
        price,
        stock,
        rating,
        description,
        image } = product
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            
            <div className="card-body">
                <h2 className="card-title">
                   {name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{stock}</div>
                    <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
        </div>
    )
}