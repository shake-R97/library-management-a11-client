import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div >
            {/* banner */}
            <section>

                <Banner></Banner>

            </section>

            {/* Book Categories */}

            <section className='mt-14 mb-16 lg:mt-20'>

                <h1 className='text-xl md:text-4xl lg:text-6xl   text-sky-400 pt-10 pb-20 font-extrabold text-center'>Book Categories</h1>

                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-12'>

                    {/* card-1 - Novel Books*/}
                    <Link to={'/book/novel'}>
                        <div className="card bg-base-100 w-full shadow-sm  relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/George Orwell - Rafael Nobre.jpeg"
                                    alt="novel" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">Novel</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' Novels Books here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>



                    {/* card-2 - Thriller Books*/}
                    <Link to={'/book/thriller'}>
                        <div className="card bg-base-100 w-full shadow-sm relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/Homepage.jpeg"
                                    alt="Thriller Book" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">Thriller</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' Thrillers Book here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* card-3 - History Books*/}
                    <Link to={'/book/history'}>
                        <div className="card bg-base-100 w-full shadow-sm relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/The Dark History _ Book Cover Design.jpeg"
                                    alt="History Book" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">History</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' History Books here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* card-4 - Drama Books*/}
                    <Link to={'/book/drama'}>
                        <div className="card bg-base-100 w-full shadow-sm relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/The Jungle Book cover.jpeg"
                                    alt="Drama Book" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">Drama</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' Drama Books here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* card-5 - Kids Tales Books*/}
                    <Link to={'/book/kids-tales'}>
                        <div className="card bg-base-100 w-full shadow-sm relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/David Dean — Portfolio.jpeg"
                                    alt="Kids Book" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">Kids Tales</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' Kids Tales here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* card-6 - Sci-Fi Books*/}
                    <Link to={'/book/sci-fi'}>
                        <div className="card bg-base-100 w-full shadow-sm relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.60)] hover:scale-[1.02] cursor-pointer">
                            <figure>
                                <img className='object-cover w-full'
                                    src="/Book-img/download (9).jpeg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">Book
                                    Category :
                                    <div className="badge badge-lg badge-outline badge-info">Sci-Fi</div>
                                </h2>
                                <p className='text-[17px]'>Discover Our top authors' Sci-Fi Books here!</p>
                                <div className="card-actions justify-start">
                                    <h2 className='text-[16px]'>Verified By:</h2>
                                    <div className="badge badge-outline badge-info">Goodreads</div>
                                    <div className="badge badge-outline badge-info">Kindle</div>
                                    <div className="badge badge-outline badge-info">Fable</div>
                                    <div className="badge badge-outline badge-info">StoryGraph</div>
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>
            </section>

        </div>
    );
};

export default Home;