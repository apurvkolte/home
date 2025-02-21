import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion"


const Services = () => {
    return (
        <div className='w-full h-auto bg-gradient-to-r from-gray-200 to-gray-300  '>
            <div className='max-w-screen-xl mx-auto py-5'>

                <h1 className='text-4xl text-center font-bold tracking-tight leading-none capitalize font-[sofia] mt-8 text-gray-600 overflow-hidden '>
                    <motion.span
                        initial={{ rotate: 90, y: "40%", opacity: 0 }}
                        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                        transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                        viewport={{ once: false }}
                        className='inline-block origin-left'>
                        Our <span className='text-green-400'>Features</span>
                    </motion.span>
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 gap-8'>

                    <div className='flex gap-5 items-center bg-gray-100 p-7 rounded-lg shadow-md transition-transform hover:scale-105'>
                        <TbTruckDelivery className='text-4xl text-green-400' />
                        <div>
                            <h3 className='text-xl font-semibold text-gray-600'>Express Delivery</h3>
                            <p className='mt-2 text-gray-400 text-sm'>Ships in 7 Days</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center bg-gray-100 p-7 rounded-lg shadow-md transition-transform hover:scale-105'>
                        <FaAward className='text-4xl text-yellow-400' />
                        <div>
                            <h3 className='text-xl font-semibold text-gray-600'>Brand Warranty</h3>
                            <p className='mt-2 text-gray-400 text-sm'>100% Original products</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center bg-gray-100 p-7 rounded-lg shadow-md transition-transform hover:scale-105'>
                        <BiSolidOffer className='text-4xl text-red-400' />
                        <div>
                            <h3 className='text-xl font-semibold text-gray-600'>Exciting Deals</h3>
                            <p className='mt-2 text-gray-400 text-sm'>On all prepaid orders</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center bg-gray-100 p-7 rounded-lg shadow-md transition-transform hover:scale-105'>
                        <MdOutlineSecurity className='text-4xl text-blue-400' />
                        <div>
                            <h3 className='text-xl font-semibold text-gray-600'>Secure Payments</h3>
                            <p className='mt-2 text-gray-400 text-sm'>SSL / Secure certificate</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
