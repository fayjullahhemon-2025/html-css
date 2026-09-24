import React from 'react'

export const generateStaticParams = async()=>{
    let data;
    try{
        const res = await fetch('http://localhost:5000/books/');
        if(!res.ok){
            throw new Error('Error');
        }
        data = await res.json();
    }catch(error){
        throw new Error('Error');
    }finally{
        console.log('Must show');
    }
    return data.slice(0,3).map(book=> ({bookId: book.id}));
}

const getBooksForBookDetails = async(bookId)=>{
    try{
        const res = await fetch(`http://localhost:5000/books/${bookId}`);
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }catch(error){
        throw new Error('Failed to fetch data');
    }finally{
        console.log('Must show');
    }
}
export default async function bookDetails({params}){
    const {bookId} = await params;
    const post = await getBooksForBookDetails(bookId);
    return(
        <div>
            {post.id}
        </div>
    )
}