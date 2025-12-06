import React from 'react';
import { useLoaderData } from 'react-router';

const BorrowedBook = () => {

    const borrowedBooks = useLoaderData();

    console.log(borrowedBooks)

    return (
        <div className='min-h-screen'>
            <>
                {
                    borrowedBooks.map((book) => (

                        <div
                            key={book._id}
                            className="bg-white shadow-lg rounded-xl overflow-hidden md:w-7/12 mx-auto my-6"
                        >
                            <div className="flex flex-col lg:flex-row">

                                {/* IMAGE BOX — Fixed perfect size */}
                                <div className="w-full lg:w-64 h-[350px] overflow-hidden flex-shrink-0">
                                    <img
                                        src={book.bookImg}
                                        alt={book.bookName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* TEXT SECTION */}
                                <div className="p-6 flex flex-col justify-center space-y-3">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                                        {book.bookName}
                                    </h2>

                                    <p className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
                                        Borrowed Date: {book.borrowedDate}
                                    </p>
                                    <p className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
                                        Return Date: {book.returnDate}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))

                }
            </>
        </div>

    );
};

export default BorrowedBook;