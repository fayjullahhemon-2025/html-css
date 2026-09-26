'use client'
import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
export default function ListedBooks(){
    const {readBooks,wishlist} = useContext(BooksContext)
    // console.log(readBooks)
    console.log(wishlist)
    
    return(
        <div>hello</div>
    )
}