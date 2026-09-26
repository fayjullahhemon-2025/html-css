'use client'
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books.types';
import React, { useContext } from 'react';
export default function WishlistBtn({ book }: { book: BookType }) {
    const { wishlist, setWishList } = useContext(BooksContext);
    const handlewishList = () => {
        console.log('triggerd wishlist btn', book)
        const exist = wishlist.find(wl => wl.bookId === book.bookId)
        if (!exist) {
            setWishList([...wishlist, book])
        } else {
            alert('already added')
        }
    }
    return (
        <button onClick={handlewishList} className="px-10 py-3.5 bg-[#50B1C9] hover:bg-[#45a1b8] text-white font-semibold rounded-lg shadow-sm active:scale-98 transition">
            Wishlist
        </button>
    )
}