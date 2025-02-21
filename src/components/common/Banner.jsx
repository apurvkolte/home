import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion"
import Image from 'next/image'

const Banner = () => {
    const images = [
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg",
        "https://websitedemos.net/office-furniture-store-04/wp-content/uploads/sites/913/2021/07/wfh-furniture-store-hero-img-bg.jpg",
    ];
    return (
        <div >
            <Zoom scale={0.7} indicators={false}
                prevArrow={<div className="-ml-[40px] sm:ml-5 text-2xl sm:text-4xl cursor-pointer text-white">❮</div>}
                nextArrow={<div className="-mr-[40px] sm:mr-5 text-2xl sm:text-4xl cursor-pointer text-white">❯</div>}
            >
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <Image className='w-full h-[32rem] object-cover overflow-hidden relative' style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div> */}

                        {index === 0 &&
                            <div className='absolute text-white flex flex-col justify-center items-center top-[50%] left-[50%] sm:left-[30%] -translate-x-[50%] -translate-y-[50%]'>
                                {["Where Style Meets", "Affordability"].map((item, index) => {
                                    return <h1 key={index} className='text-4xl sm:text-6xl font-lighter tracking-tighter leading-tight space-mono-regular overflow-hidden'>
                                        <motion.span
                                            initial={{ rotate: 90, y: "100%", opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            transition={{ ease: "easeInOut", duration: 0.8, delay: index * .2 }}
                                            className='inline-block origin-left '>
                                            {item} </motion.span>
                                    </h1>
                                })}

                                <div className='w-[120px] text-center uppercase px-4 py-2 bg-zinc-900 hover:bg-zinc-800 hover:font-semibold text-white border-[1px] border-zinc-600 mt-10 shadow-lg'>
                                    <a href='#'><span className='text-red-700'>Shop</span> Now</a>
                                </div>
                            </div>
                        }

                        {index === 1 &&
                            <div className='absolute text-white flex flex-col justify-center items-center top-[50%] left-[50%] sm:left-[30%] -translate-x-[50%] -translate-y-[50%]'>
                                <h1 className='text-4xl sm:text-6xl font-lighter tracking-tighter leading-tight space-mono-regular'>Your Favorite Brands at </h1>
                                <h1 className='text-4xl sm:text-6xl font-lighter tracking-tighter leading-tight space-mono-regular mb-5'> Your Fingertips</h1>
                                <div className='w-[120px] text-center uppercase px-4 py-2 bg-zinc-900 hover:bg-zinc-800 hover:font-semibold text-white border-[1px] border-zinc-600  shadow-lg'>
                                    <a href='#'><span className='text-red-700'>Shop</span> Now</a>
                                </div>
                            </div>
                        }

                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Banner