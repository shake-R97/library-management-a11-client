import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const BookDetail = () => {
    const { _id, image, name, quantity, author, category, description, rating, bookContent } = useLoaderData()


    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const handleBorrow = (e) => {
        e.preventDefault();

        const form = e.target;
        const returnDate = form.returnDate.value;

        const borrowInfo = {
            userEmail: user.email,
            returnDate,
        }

        fetch(`http://localhost:3000/borrow/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(borrowInfo),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setOpen(false);
            })


    }


    return (
        <>
            <div>
                <div
                    className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
                    style={{
                        backgroundImage:
                            "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/Gradient.jpeg')",
                    }}
                >

                    <div className="card flex-col h-[70%] md:flex-row md:w-10/12 mt-5 mb-5 card-side bg-base-100 shadow-sm mx-4 overflow-y-auto scroll-smooth">
                        <figure className='w-full md:w-1/2 h-auto md:h-auto lg:h-auto flex-shrink-0'>
                            <img
                                src={image}
                                className='w-full h-auto md:h-full object-cover'
                                alt="Movie" />
                        </figure>
                        <div className="flex flex-auto flex-col p-6  space-y-3.5 md:space-y-8 w-full h-auto md:w-1/2 lg:h-auto flex-shrink-0">
                            <h2 className="text-[18px] md:text-[26px] lg:text-3xl">Name: {name}</h2>
                            <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Author : {author}</p>
                            <p className='text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit text-[14px] md:text-[17px] lg:text-[20px]'>Category : {category}</p>
                            <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Rating : {rating}</p>
                            <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Quantity : {quantity}</p>

                            <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Descriptions : {description}</p>

                            <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Book Content : {bookContent}</p>
                            <div>
                                <button onClick={() => setOpen(true)} className='btn btn-outline btn-info'>Borrow Book</button>
                            </div>
                        </div>
                    </div>

                </div>

                {open && (
                    <dialog className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-4">Borrow "{name}"</h3>

                            {/* FORM */}
                            <form onSubmit={handleBorrow} className="space-y-3">

                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user.displayName}
                                    readOnly
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    readOnly
                                    defaultValue={user.email}
                                    placeholder="Your email"
                                    className="input input-bordered w-full"
                                    required
                                />

                                <input
                                    type="date"
                                    name="returnDate"
                                    className="input input-bordered w-full"
                                    required
                                />

                                <div className="modal-action">
                                    <button type="submit" className="btn btn-primary">
                                        Confirm Borrow
                                    </button>

                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </form>
                        </div>
                    </dialog>
                )}
            </div>
        </>
    );
};

export default BookDetail;