'use client'
import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/books.types";
import React, { useContext, useState } from "react";
export default function ListedBooks() {
    const { readBooks, wishlist } = useContext(BooksContext)
    // console.log(readBooks)
    console.log(wishlist)
    const [input, setInput] = useState('read');
    const handleInputToggle = (i: string) => {
        setInput(i);
    }
    const [sortBy,setSortBy] = useState<'ratings'| 'pages'|'year'>('ratings');
    
    const sortedBooks = (books:BookType[]) =>{
        let sortBooks = [...books];
        if(sortBy==='ratings'){
            sortBooks = sortBooks.sort((a,b)=>b.rating-a.rating);
        }else if(sortBy === 'year'){
            sortBooks = sortBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
        }else{
            sortBooks = sortBooks.sort((a,b)=>b.totalPages-a.totalPages)
        }
        return sortBooks;
    }
   const sortedWishList = sortedBooks(wishlist);
   const sortedReadBooks = sortedBooks(readBooks);
    return (
        <div>
            <div className="flex items-center my-5 mx-5" >
                <select 
                value={sortBy}
                onChange = {(e)=> setSortBy(e.target.value as 'ratings'| 'pages'|'year') }
                defaultValue="Sort By" className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value='ratings' >Ratings</option>
                    <option value='pages' >Pages</option>
                    <option value='years' >Published Year</option>
                </select>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishList.map(wb => <div key={wb.bookId}>
                            <h1>{wb.bookName}</h1>
                            <p>Total Pages: {wb.totalPages}</p>
                            <p>Rating: {wb.rating}</p>
                            <p>Rating: {wb.yearOfPublishing}</p>
                        </div>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.map(rb => <div key={rb.bookId}>
                            <h1>{rb.bookName}</h1>
                            <p>Total Pages: {rb.totalPages}</p>
                            <p>Rating: {rb.rating}</p>
                            <p>Rating: {rb.yearOfPublishing}</p>
                        </div>)
                    }
                </div>


            </div>
        </div>

    )
}