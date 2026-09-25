import React from 'react'

const getBook = async (bookId) => {
    try {
        const res = await fetch(`http://localhost:5000/${bookId}`);
        if (!res.ok) {
            throw new Error('error');
        }
        return res.json()
    } catch (error) {
        throw new Error('error');
    } finally {
        console.log('Must show')
    }
}

export default async function bookDetailsPage({ params }) {
    const { bookID } = await params;
    console.log(bookID)
    const book = await getBook(bookID);
    console.log(book)

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Left Column: Image Area */}
                <div className="md:col-span-5 bg-[#F3F3F3] rounded-3xl p-8 flex justify-center items-center min-h-[400px] md:min-h-[560px]">
                    <img 
                        src={book.image} 
                        alt={book.bookName} 
                        className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Right Column: Book Details */}
                <div className="md:col-span-7 space-y-4">
                    
                    {/* Title & Author */}
                    <div className="border-b border-gray-100 pb-4 space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            {book.bookName}
                        </h1>
                        <p className="text-lg text-gray-700 font-medium">
                            By : <span className="font-semibold text-gray-900">{book.author}</span>
                        </p>
                    </div>

                    {/* Category */}
                    <p className="text-xl font-medium text-gray-700 pt-1">
                        {book.category}
                    </p>

                    {/* Review Section */}
                    <div className="space-y-1.5 pt-2">
                        <p className="text-gray-700 leading-relaxed text-[15px]">
                            <span className="font-bold text-gray-900">Review : </span>
                            {book.review}
                        </p>
                    </div>

                    {/* Tags Section */}
                    <div className="flex items-center gap-3 pt-3 border-b border-gray-100 pb-6">
                        <p className="text-gray-900 font-bold">Tag</p>
                        <div className="flex flex-wrap gap-3">
                            {book.tags.map((tag, idx) => (
                                <span 
                                    key={idx} 
                                    className="text-sm font-semibold bg-[#F3FDF5] text-[#23BE0A] px-4 py-1.5 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Key-Value Details List */}
                    <div className="space-y-3 pt-4 max-w-sm text-[15px]">
                        {[
                            { label: 'Number of Pages:', value: book.totalPages },
                            { label: 'Publisher:', value: book.publisher },
                            { label: 'Year of Publishing:', value: book.yearOfPublishing },
                            { label: 'Rating:', value: book.rating }
                        ].map((item, idx) => (
                            <div key={idx} className="grid grid-cols-2 gap-4">
                                <p className="text-gray-600">{item.label}</p>
                                <p className="text-gray-950 font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-8">
                        <button className="px-10 py-3.5 border border-gray-300 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 active:scale-98 transition">
                            Read
                        </button>
                        <button className="px-10 py-3.5 bg-[#50B1C9] hover:bg-[#45a1b8] text-white font-semibold rounded-lg shadow-sm active:scale-98 transition">
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}