import React from "react";
import BooksCard from "../components/bookCard";
const getBooks = async()=>{
    try{
        const res = await fetch('http://localhost:5000/books',
            {next:{revalidate:10}}
        );
        if(!res.ok){
            throw new Error('failed to fetch data');
        }
        return res.json();
    }catch(error){
        throw new Error('Failed to fetch data');
    }finally{
        console.log('Must show');
    }
}
export default async function booksPage() {
    const books = await getBooks();
    return(
        <div className="grid grid-cols-3 gap-4 my-10" >
            {
                books.map(book=> <BooksCard key={book.id} book={book} ></BooksCard> )
            }
        </div>
    )
}