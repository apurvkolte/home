import React from 'react';
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
    const onTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-5 relative font-sans">
            <div className='flex items-center justify-center max-w-screen-md mx-auto px-4'>
                <p className="text-gray-400 text-xs sm:text-sm">
                    Copyrights &copy; {new Date().getFullYear()}{" "}
                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer font-medium">Florish</span>. All Rights Reserved.
                </p>
            </div>

            <button
                onClick={onTop}
                className="fixed sm:absolute bottom-4 right-4 sm:bottom-3 sm:right-8 p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 shadow-md"
                aria-label="Scroll to top"
            >
                <GoArrowUp className="w-4 h-4" />
            </button>
        </footer>
    );
};

export default Footer;