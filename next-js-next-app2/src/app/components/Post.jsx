import React from 'react';
export default function Post({post}){
    return(
        <div className='border rounded-2xl p-2' >
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
        </div>
    )
}