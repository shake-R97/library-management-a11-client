import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loader from '../Loader/Loader';


const CategorizedBook = () => {

    const { category } = useParams();
    const [books, setBooks] = useState([]);
    const [loading , setLoading]= useState(true)
    console.log(books);


    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);

            try {
                const res = await fetch(`https://library-management-a11-server.vercel.app/book-category/${category}`);
                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [category]);

    if(loading) return <Loader></Loader>


    return (
         <>
    {books.map((book) => (
      <div
        key={book._id}
        className="bg-white shadow-lg rounded-xl overflow-hidden md:w-7/12 mx-auto my-6"
      >
        <div className="flex flex-col lg:flex-row">

          {/* IMAGE BOX — Fixed perfect size */}
          <div className="w-full lg:w-64 h-[350px] overflow-hidden flex-shrink-0">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="p-6 flex flex-col justify-center space-y-3">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
              {book.name}
            </h2>

            <p className="text-gray-600 italic">{book.author}</p>

            <p className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
              {book.category}
            </p>

            <p className="font-semibold">⭐ {book.rating}</p>

            
            <Link
            to={`/book-detail/${book._id}`}
            className="btn btn-info btn-outline mt-4 w-fit"
            >Details</Link>
          </div>
        </div>
      </div>
    ))}
  </>
    );
};

export default CategorizedBook;
