import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
    const onTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className='w-full relative bg-gradient-to-r from-gray-800 to-gray-800  text-white py-3'>
            <div className='w-full px-10 py-10 lg:px-20 flex flex-col lg:flex-row gap-20 sm:gap-52'>

                <div className='flex flex-col items-center lg:items-start gap-5 w-full lg:w-1/4'>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-40 h-auto object-contain"
                    />

                    <div className='flex gap-4 mt-2'>
                        <a href="#" className='p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition'>
                            <FaFacebookF className='text-white text-xl' />
                        </a>

                        <a href="#" className='p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition'>
                            <FaInstagram className='text-white text-xl' />
                        </a>
                        <a href="#" className='p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition'>
                            <FaLinkedinIn className='text-white text-xl' />
                        </a>

                        <a href="#" className='p-2 bg-green-500 rounded-full hover:bg-green-600 transition'>
                            <FaWhatsapp className='text-white text-xl' />
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full'>
                    <div>
                        <h3 className='text-lg font-semibold text-green-400 mb-3'>Company</h3>
                        <ul className='text-gray-300 space-y-2'>
                            <li><a href="#" className='hover:text-white transition'>About Us</a></li>
                            <li><a href="#" className='hover:text-white transition'>Careers</a></li>
                            <li><a href="#" className='hover:text-white transition'>Contact Us</a></li>
                            <li><a href="#" className='hover:text-white transition'>Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-green-400 mb-3'>Products</h3>
                        <ul className='text-gray-300 space-y-2'>
                            <li><a href="#" className='hover:text-white transition'>Men</a></li>
                            <li><a href="#" className='hover:text-white transition'>Women</a></li>
                            <li><a href="#" className='hover:text-white transition'>Kids</a></li>
                            <li><a href="#" className='hover:text-white transition'>Beauty</a></li>
                            <li><a href="#" className='hover:text-white transition'>Studio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-green-400 mb-3'>Legal</h3>
                        <ul className='text-gray-300 space-y-2'>
                            <li><a href="#" className='hover:text-white transition'>Privacy Policy</a></li>
                            <li><a href="#" className='hover:text-white transition'>Terms & Conditions</a></li>
                            <li><a href="#" className='hover:text-white transition'>Refund Policy</a></li>
                            <li><a href="#" className='hover:text-white transition'>Shipping & Returns</a></li>
                            <li><a href="#" className='hover:text-white transition'>FAQs</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='text-center mb-0 flex-row sm:flex justify-between p-3 sm:p-0 items-center max-w-screen-md mx-auto text-gray-400 text-sm mt-8'>
                <div> © {new Date().getFullYear()} design & developed by <span className='text-white font-semibold hover:text-slate-300'>Apurv Kolte.</span>  All rights reserved.</div>
                <img className='mt-5 sm:mt-0' src="/payments.png" alt="" />
            </div>

            <button onClick={onTop} className='absolute bottom-5 right-8 p-5 rounded-full bg-zinc-200 text-black hover:bg-white flex justify-end items-end d-500'><GoArrowUp /></button>

        </div>
    );
};

export default Footer;
