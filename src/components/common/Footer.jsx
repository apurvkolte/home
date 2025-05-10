import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
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
        <footer className="relative bg-zinc-50 sm:pt-16 pb-8 border-t border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col items-start">
                    <div className="w-32 h-32 mb-6 transition-transform duration-300 hover:scale-105">
                        <img
                            src="/logo.png"
                            alt="Company Logo"
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </div>
                    <p className="text-gray-600 mb-6">
                        Your one-stop shop for quality products and exceptional service.
                    </p>
                    <ul className="space-y-2">
                        <ul className="footer-social flex justify-start gap-4  ">
                            <li>
                                <a
                                    href="javascript:void(0)" onClick={(e) => { e.preventDefault(); }}
                                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full transition-transform hover:scale-150 hover:bg-blue-800 shadow-md custom-glow"
                                >
                                    <FaFacebookF className="text-lg font-bold" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="javascript:void(0)" onClick={(e) => { e.preventDefault(); }}
                                    className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full transition-transform hover:scale-150 hover:bg-green-700 shadow-md custom-glow"
                                >
                                    <FaWhatsapp className="text-lg font-bold" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="javascript:void(0)" onClick={(e) => { e.preventDefault(); }}
                                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full transition-transform hover:scale-150 hover:from-pink-600 hover:to-orange-500 shadow-md custom-glow"
                                >
                                    <FaInstagram className="text-lg font-bold" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="javascript:void(0)" onClick={(e) => { e.preventDefault(); }}
                                    className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full transition-transform hover:scale-150 hover:bg-blue-900 shadow-md custom-glow"
                                >
                                    <FaLinkedinIn className="text-lg font-bold" />
                                </a>
                            </li>
                        </ul>

                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Shop</h4>
                    <ul className="space-y-3">
                        {['Electronics', 'Photography', 'Lifestyle', 'Home & Kitchen', 'Fitness', 'Accessories'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`javascript:void(0)`}
                                    className="text-gray-600 hover:text-green-500 transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Help & Info</h4>
                    <ul className="space-y-3">
                        {[
                            { name: 'Terms Of Use', link: 'javascript:void(0)' },
                            { name: 'Return Policy', link: 'javascript:void(0)' },
                            { name: 'Privacy Policy', link: 'javascript:void(0)' },
                            { name: 'Shipping Policy', link: '/privacy' },
                            { name: 'FAQ', link: '/faq' },
                            { name: 'About Us', link: '/about-us' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a
                                    href={`${item.link}`}
                                    className="text-gray-600 hover:text-green-500 transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="mt-1 mr-4 text-green-500">
                                <FaPhone />
                            </div>
                            <div>
                                <p className="text-gray-600">Customer Service</p>
                                <a href="javascript:void(0)" className="text-gray-800 hover:text-green-500 transition-colors duration-300 font-medium">
                                    +1 (800) 123-4567
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mt-1 mr-4 text-green-500">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-gray-600">Email Address</p>
                                <a href="javascript:void(0)" className="text-gray-800 hover:text-green-500 transition-colors duration-300 font-medium">
                                    contact@company.com
                                </a>
                            </div>
                        </div>

                        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                            Enquiry Now
                        </button>

                        <div className="mt-8">
                            <h5 className="text-sm font-semibold text-gray-500 mb-2">We Accept</h5>
                            <img
                                src="/payments.png"
                                alt="Payment Methods"
                                className="w-48 object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} <span className="text-green-500 font-medium">Florish</span>. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="javascript:void(0)" className="text-gray-500 hover:text-green-500 transition-colors duration-300 text-sm">Privacy Policy</a>
                        <a href="javascript:void(0)" className="text-gray-500 hover:text-green-500 transition-colors duration-300 text-sm">Terms of Service</a>
                        <a href="javascript:void(0)" className="text-gray-500 hover:text-green-500 transition-colors duration-300 text-sm">Cookies</a>
                    </div>
                </div>
            </div>

            <button
                onClick={onTop}
                aria-label="Scroll to top"
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                <GoArrowUp className="text-xl" />
            </button>
        </footer>
    );
};

export default Footer;