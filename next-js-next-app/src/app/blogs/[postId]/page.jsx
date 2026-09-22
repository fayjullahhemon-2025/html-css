import React from "react";
const blogPosts = [
  {
    "id": 1,
    "title": "Getting Started with React",
    "author": "Fayjullah Haque",
    "category": "React",
    "date": "2026-09-01",
    "description": "Learn the basics of React components, JSX, props, and state with simple examples.",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    "id": 2,
    "title": "Understanding JavaScript Arrays",
    "author": "Fayjullah Haque",
    "category": "JavaScript",
    "date": "2026-09-03",
    "description": "Explore useful JavaScript array methods such as map, filter, find, some, and reduce.",
    "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    "id": 3,
    "title": "Why TypeScript Is Useful",
    "author": "Fayjullah Haque",
    "category": "TypeScript",
    "date": "2026-09-05",
    "description": "Discover how TypeScript adds type safety and makes JavaScript projects easier to maintain.",
    "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
  },
  {
    "id": 4,
    "title": "Building Responsive Websites",
    "author": "Fayjullah Haque",
    "category": "CSS",
    "date": "2026-09-07",
    "description": "Learn how to create websites that look good on mobile, tablet, and desktop screens.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    "id": 5,
    "title": "Introduction to Tailwind CSS",
    "author": "Fayjullah Haque",
    "category": "Tailwind CSS",
    "date": "2026-09-09",
    "description": "Understand how utility classes can help you build modern user interfaces quickly.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    "id": 6,
    "title": "How APIs Work",
    "author": "Fayjullah Haque",
    "category": "Web Development",
    "date": "2026-09-11",
    "description": "A simple introduction to APIs, HTTP requests, JSON data, and fetching information from servers.",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  {
    "id": 7,
    "title": "Understanding Git and GitHub",
    "author": "Fayjullah Haque",
    "category": "Git",
    "date": "2026-09-13",
    "description": "Learn the basic Git commands and understand how GitHub is used to manage projects.",
    "image": "https://images.unsplash.com/photo-1556075798-4825dfaaf498"
  },
  {
    "id": 8,
    "title": "Creating Your First React Project",
    "author": "Fayjullah Haque",
    "category": "React",
    "date": "2026-09-15",
    "description": "Follow a simple approach to create your first React application and organize its components.",
    "image": "https://images.unsplash.com/photo-1547658719-da2b51169166"
  }
]
export default async function postDetails({params}){
    const {postId} = await params;
    const post = blogPosts.find(bp=> bp.id === parseInt(postId))
    return(
        <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md my-10">

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
       
            </div>
        </div>
    )
}