import React from 'react'
const postPromiseData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
    
}
const getPosts = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // if(res.ok){
        //     return res.json();
        // }
        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }catch(error){
        throw new Error('Rejected');
    }finally{
        console.log('Must show ')
    }
}
export default async function postPage(){
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    // const posts = await postPromiseData();
    const posts = await getPosts();
    return(
        <div>
            Total posts: {posts.length}
        </div>
    )
}