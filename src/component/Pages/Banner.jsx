import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >
                {/* slider -1 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/Book-img/megan-qualley-LKNEDcXYndM-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">Find all your books in one place with <span className='text-sky-400 '>Book Archive</span></h1>
                                <p className="mb-5 text-[12px] md:text-[22px]">
                                    Are you looking for books, Book Archive helps you with that in a free, fast and reliable way. Not just that, you can also Borrow your favorite book with us!
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider -2 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/Book-img/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">All Kind of Literature and genres to find<span className='text-red-500'>!</span></h1>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider -3 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/Book-img/gunnar-ridderstrom-9p8ouw3C8oo-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">Huge Collection of books, so you can borrow your best ones!</h1>
                                <p className="mb-5 text-[12px] md:text-[22px]">
                                    We have established a strong reputation for trustworthiness in our work, having competed in the market for over a decade. We are recognized by government bodies and reputable companies alike.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;