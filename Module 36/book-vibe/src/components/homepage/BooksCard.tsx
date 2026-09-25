import { BookType } from "@/types/books.types";
import Link from "next/link";
import React from "react";

interface BookInterface {
    book: BookType;
}
export default function BooksCard({ book }: BookInterface) {
    return (
        <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            {/* Cover Image & Category Badge */}
            <div className="relative bg-gray-50 p-6 flex justify-center items-center">
                <img
                    className="h-64 object-contain rounded-md drop-shadow-md transition-transform duration-300 hover:scale-105"
                    src={book.image}
                    alt={book.bookName}
                />
                <span className="absolute top-3 right-3 bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {book.category}
                </span>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    {/* Tags */}
                    <div className="flex gap-2 mb-2 flex-wrap">
                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title & Author */}
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                        {book.bookName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">By {book.author}</p>

                    {/* Review Snippet */}
                    <p className="text-gray-600 text-xs line-clamp-3 mb-4 leading-relaxed">
                        {book.review}
                    </p>
                </div>

                {/* Footer Meta Details */}
                <div className="border-t border-dashed border-gray-200 pt-3 flex items-center justify-between text-xs text-gray-500">
                    {/* Rating */}
                    <div className="flex items-center gap-1 font-semibold text-amber-500">
                        <span>★</span>
                        <span>{book.rating}</span>
                    </div>

                    {/* Total Pages */}
                    <div>{book.totalPages} pages</div>

                    {/* Publisher & Year */}
                    <div>
                        {book.publisher} ({book.yearOfPublishing})
                    </div>
                    <Link href={`/books/${book.bookId-1}`} >
                        <button className="btn-accent p-2 " >
                            
                            View details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}