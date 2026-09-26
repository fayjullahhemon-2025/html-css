'use client'
import { BookType } from '@/types/books.types'
import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { createContext } from 'react'
interface BooksContextType {
    readBooks:BookType[],
    wishlist:BookType[],
    setReadBooks:Dispatch<SetStateAction<BookType[]>>
    setWishList:Dispatch<SetStateAction<BookType[]>>
}
export const BooksContext = createContext<BooksContextType>({} as BooksContextType)
const BooksProvider = ({children}:{children:ReactNode}) => {
    const [readBooks, setReadBooks] = useState<BookType[]>([]);
    const [wishlist, setWishList] = useState<BookType[]>([]);
    const sharedData = {
        readBooks, setReadBooks, wishlist, setWishList
    }
    return <BooksContext.Provider value={sharedData} >
        {children}
    </BooksContext.Provider>
}
export default BooksProvider