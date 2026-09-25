import React from "react";
import BooksCard from "./BooksCard";
import { BookType } from "@/types/books.types";
const getBooks = async () => {
    try {
        const res = await fetch('http://localhost:5000/booksData.json');
        if (!res.ok) {
            throw new Error('Error');
        }
        return res.json();
    } catch (error) {
        throw new Error('Error');
    } finally {
        console.log('Must show');
    }
}
export default async function Books() {
    const books = await getBooks();
    console.log(books)
    return (
        <div className="grid grid-cols-3 gap-3 container mx-auto" >
            {
                books.map((book:BookType)=> <BooksCard key={book.bookId} book={book} ></BooksCard>)
            }
        </div>
    )
}