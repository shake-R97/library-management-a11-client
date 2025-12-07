import React from 'react';
import { useLoaderData } from 'react-router';

const AllBook = () => {

    const allBooks = useLoaderData();

    return (
        <div className="overflow-x-auto mb-12">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        allBooks.map((book)=> (
                            <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={book.image}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{book.name}</div>
                                    <div className="text-[13px] opacity-50">Author: {book.author}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-info badge-sm">{book.category}</span>
                        </td>
                        <td>{book.quantity}</td>
                        <th>
                            <span className="badge badge-info badge-sm">{book.rating}</span>
                        </th>
                    </tr>
                    
                        ))
                   } 
                    
                    
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Ratings</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
};

export default AllBook;