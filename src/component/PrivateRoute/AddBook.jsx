import React from 'react';
import Swal from 'sweetalert2';

const AddBook = () => {

    const handleAddBook = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newAddedBookData = Object.fromEntries(formData.entries());
        console.log(newAddedBookData)

        //send new roommates data to the db

        fetch('http://localhost:3000/addbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedBookData)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('after adding book to db', data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'your book has been Added Successfully',
                        showConfirmButton: false,
                        timer: 3500
                    });

                    form.reset();
                }
            })


    }

    return (
        <div
            className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
            style={{
                backgroundImage:
                    "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/sl_021821_40880_04.jpg')",
            }}
        >
            {/* <div className="hero-overlay"></div> */}
            <div className="hero w-11/12 mx-auto my-6 md:my-10  lg:my-18 h-[75vh] md:h-[78vh] lg:min-h-screen flex flex-col md:flex-row-reverse justify-center items-center shadow-2xl/80
            [@media(max-height:700px)]:overflow-y-auto
                [@media(max-height:700px)]:scroll-smooth
                [@media(max-height:700px)]:h-[130vh]
            ">
                <div className='w-full md:w-[60%] lg:w-[65%] flex  justify-center rounded-xl  md:rounded-l-none scroll-smooth overflow-y-auto pb-2.5 md:pb-4 lg:pb-8
                '
                >
                    <div className="card w-full">
                        <div className="card-body">
                            <div className='mb-5 md:mt-4'>
                                <h1 className='text-center text-white font-bold text-xl md:text-2xl '>To Add Book, fill out the form.</h1>
                            </div>
                            <form onSubmit={handleAddBook}>

                                <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 p-3 md:p-4 lg:p-8">
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Image</legend>
                                        <input name='image' type="url" className="input w-full" placeholder="Book image URL" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Name</legend>
                                        <input name='name' type="text" className="input w-full" placeholder="Book Name" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend  text-white text-[18px]">Quantity</legend>
                                        <input name='quantity' type="number" className="input w-full" placeholder="Add Quantity" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend  text-white text-[18px]">Author</legend>
                                        <input name='author' type="text" className="input w-full" placeholder="Author Name" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Category</legend>
                                        <select name='category' defaultValue="Select Category" className="select w-full">
                                            <option disabled={true}>Pick Book Category</option>
                                            <option>Novel.</option>
                                            <option>Thriller.</option>
                                            <option>History</option>
                                            <option>Drama</option>
                                            <option>Kids Tales</option>
                                            <option>Sci-Fi</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Description</legend>
                                        <input name='description' type="text" className="input w-full" placeholder="Short Description" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Rating</legend>
                                        <input name='rating' type="number" className="input w-full" placeholder="Ratings" />
                                    </fieldset>
                                     <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Book Content</legend>
                                        <input name='bookContent' type="text" className="input w-full" placeholder="Book info" />
                                    </fieldset>
                                </div>
                                <div className='mt-3 px-2 md:px-4 lg:px-8 md:mt-3'>
                                    <input className='w-full btn bg-[#8CE4FF] text-white' type="submit" value="Add Book" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block rounded-xl  md:w-[40%] lg:w-[35%] h-full bg-cover bg-center lg:text-left"
                >
                    <div className='h-full flex flex-col justify-center items-center text-center'>
                        <div><h1 className='md:text-2xl lg:text-4xl text-white text-center mb-4 font-bold'>Add Books</h1></div>
                        <div>
                            <img src={'/sliderImg/3d-female-character-working-desk-with-laptop.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;