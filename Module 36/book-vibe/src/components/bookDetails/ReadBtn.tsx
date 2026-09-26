'use client'
import { BooksContext } from '@/context/BooksContext'
import { BookType } from '@/types/books.types'
import React, { Dispatch, SetStateAction, useContext } from 'react'

const handleReadBook = (book: BookType,readBooks,setReadBooks) => {
    // console.log('Clicked read book btn', book)
    const exist = readBooks.find(readBook=> readBook.bookId === book.bookId)
    if(!exist){
        setReadBooks([...readBooks,book])
    }else{
        alert('already added')
    }

}
export default function ReadBtn({ book }: { book: BookType }) {
    const {readBooks, setReadBooks} = useContext(BooksContext);
    

    return (
        <button  onClick={() => handleReadBook(book,readBooks,setReadBooks)} className="px-10 py-3.5 border border-gray-300 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 active:scale-98 transition">
            Read
        </button>
    )
}