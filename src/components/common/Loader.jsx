// components/Loader.js
import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import the spinner icon
import { motion } from 'framer-motion'; // Import framer-motion for smooth animation

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <motion.div
                className="flex justify-center items-center"
                animate={{ rotate: 360 }}
                transition={{ loop: Infinity, duration: 1 }}
            >
                <FaSpinner className="text-4xl text-green-400" />
            </motion.div>
        </div>
    );
};

export default Loader;