import Link from 'next/link'
import React from 'react'
export default function BlogPost({ post }) {
    const {id} = post;
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md">

            {/* Image */}
            <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">

                {/* Category */}
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    {post.category}
                </span>

                {/* Title */}
                <h2 className="mt-3 text-xl font-bold text-gray-800">
                    {post.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-600">
                    {post.description}
                </p>

                {/* Author & Date */}
                <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>
                <div>
                    <Link href={`/blogs/${id}`} >
                        <button className='text-blue-500' >Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}