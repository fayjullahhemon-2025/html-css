import React from 'react';
import Post from '../components/Post';
export default async function postPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return (
        <div>
            <h1>Total Post: {data.length}</h1>
            <div className='grid grid-cols-3 gap-4 my-10' >
                {
                    data.map(post => <Post key={post.id} post={post} ></Post>)
                }
            </div>
        </div>
    )
}