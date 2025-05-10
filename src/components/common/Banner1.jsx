import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';

const Banner1 = () => {
    const images = [
        "/banner/banner.jpg",
        "/banner/banner1.jpg",
    ];

    return (
        <div className="relative">
            <Slide vertical scale
                prevArrow={<div className="absolute left-5 text-4xl cursor-pointer text-white z-10">❮</div>}
                nextArrow={<div className="absolute right-5 text-4xl cursor-pointer text-white z-10">❯</div>}
            >
                {images.map((each, index) => (
                    <div key={index} className="relative w-full h-[32rem]">
                        {/* Background Image */}
                        <img
                            className="w-full h-full object-cover"
                            src={each}
                            alt="Slide Image"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col ml-20 justify-center items-center sm:items-start sm:pl-16 text-white">
                            {/* Heading */}
                            {index === 0 && (
                                <>
                                    {["Where Style Meets", "Affordability"].map((line, idx) => (
                                        <motion.h1
                                            key={idx}
                                            style={{ letterSpacing: '1px' }}
                                            className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 tracking-tight"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                                        >
                                            {line}
                                        </motion.h1>
                                    ))}
                                    <br />
                                    <br />
                                    {/* Button */}
                                    <div className='w-[120px] text-center uppercase px-4 py-2 bg-zinc-900 hover:bg-zinc-800 hover:font-semibold text-white border-[1px] border-zinc-600  shadow-lg'>
                                        <a href='#'><span className='text-yellow-500'>Shop</span> Now</a>
                                    </div>
                                </>
                            )}

                            {index === 1 && (
                                <>
                                    <motion.h1
                                        style={{ letterSpacing: '1px' }}
                                        className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 tracking-tight"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        Your Favorite Brands at
                                    </motion.h1>
                                    <motion.h1
                                        style={{ letterSpacing: '1px' }}
                                        className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    >
                                        Your Fingertips
                                    </motion.h1>
                                    {/* Button */}
                                    <br />
                                    <br />
                                    <div className='w-[120px] text-center uppercase px-4 py-2 bg-zinc-900 hover:bg-zinc-800 hover:font-semibold text-white border-[1px] border-zinc-600  shadow-lg'>
                                        <a href='#'><span className='text-yellow-500'>Shop</span> Now</a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Banner1;
