import React from 'react';

const Error = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url('/Book-img/masantocreative-11DTr3pcE9g-unsplash.jpg')",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Opps!404
                        ERORR. </h1>
                    <p className="mb-5">
                        Looks Like the page you are looking for is not available!
                    </p>
                    <button><Link to={'/'} className="btn btn-ghost text-[24px] md:text-3xl font-extrabold text-sky-400">Go Back Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Error;