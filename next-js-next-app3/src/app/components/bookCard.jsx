import Link from "next/link";
import React from "react";

export default async function BooksCard({ book }) {
    const { id,title, author, category, price, stock, rating, description, image } = book;
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Book Image */}
            {/* <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                alt="The Alchemist"
                className="h-64 w-full object-cover"
            /> */}

            {/* Card Content */}
            <div className="p-5">

                {/* Category + Rating */}
                <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                        {category}
                    </span>

                    <span className="text-sm font-medium text-yellow-500">
                        ⭐{rating}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">
                    {title}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    {author}
                </p>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                {/* Price + Stock */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-800">
                        ৳{price}
                    </p>

                    <p className="text-sm text-green-600">
                        {stock} available
                    </p>
                </div>

                {/* Button */}
                <Link href={`/books/${id}`} >
                    <button
                    className="mt-4 w-full rounded-lg bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-700"
                >
                   View Details
                </button>
                </Link>
            </div>
        </div>
    )
}