import React, { useState } from 'react'
import { PiShoppingCart } from "react-icons/pi";
import { FiHeart, FiBarChart2 } from 'react-icons/fi';
import { LiaUser } from "react-icons/lia";
import { home, electronics, lifestyle, living, fitness, fashion } from '../../data/data';
import Link from 'next/link';
import { useCart } from '../../contexts/cart/cartContext';
import { products } from '@/data/products';


const Header1 = () => {
    const { state, dispatch } = useCart();
    const cartItems = state.cartItems;
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        // Filter the products based on input
        setFilteredResults(
            products.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase().trim())
            )
        );
    };
    return (
        <div className='w-full h-20 mx-auto flex justify-between items-center px-4 sm:px-20 gap-4 border-b-2 fixed top-0 bg-white z-50'>
            <div className='logo w-40 sm:w-48 md:w-56 h-16 sm:h-20 md:h-24 flex items-center justify-center'>
                <Link href="/" legacyBehavior>
                    <a>

                        <img
                            src="/logo.png"
                            alt="Logo"
                            layout="fill"
                            className="w-full h-16 object-contain" />

                    </a>
                </Link>
            </div>
            <div className='search w-[40rem] sm:w-[50rem] h-[2.2rem] sm:h-[2.8rem] flex justify-start items-center rounded bg-slate-100 relative'>
                <input
                    type='text'
                    placeholder='Search for products...'
                    className='w-full h-full px-3 border font-thin flex justify-start items-center rounded text-zinc-500 outline-none focus:bg-slate-50 focus:outline-zinc-200'
                    value={searchInput}
                    onChange={handleSearch}
                />
                {searchInput && (
                    <button
                        className='absolute right-10 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:bg-slate-200 hover:text-zinc-600 flex justify-center items-center cursor-pointer rounded w-8 h-8'
                        onClick={() => {
                            setSearchInput('');
                            setFilteredResults([]);
                        }}
                    >
                        <i className="ri-close-line text-xl"></i>
                    </button>
                )}
                <div className='w-10 h-full text-zinc-500 hover:bg-slate-100 hover:text-zinc-600 flex justify-center items-center cursor-pointer rounded outline-none focus:bg-slate-50 focus:outline-zinc-200'>
                    <i className="ri-search-line text-xl "></i>
                </div>

                {filteredResults.length > 0 && (
                    <div className='search-results bg-white border border-slate-200 mt-2 rounded shadow-md max-h-[15rem] overflow-y-auto absolute w-[60rem] sm:w-[50rem] z-10 top-full left-0'>
                        {/* Added top-full and left-0 for proper positioning */}
                        <ul className='divide-y divide-slate-200'>
                            {filteredResults.slice(0, 12).map((result, index) => (
                                <Link href={`/product-details1/${result.id}`} key={index}>
                                    <li className='p-3 hover:bg-slate-100 cursor-pointer text-base text-zinc-600'>
                                        {result.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className='icon flex justify-center items-center gap-5 sm:gap-8 sm:ml-10'>
                {/* Watchlist Icon */}
                <div className="hidden sm:flex relative items-center mt-3">
                    <Link href="/watchlist" passHref legacyBehavior>
                        <a className="flex items-center">
                            <FiHeart className="text-xl text-zinc-600 cursor-pointer" />
                            <span className="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                                4
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Compare Icon */}
                <div className="hidden sm:flex relative items-center mt-3">
                    <Link href="/compare" passHref legacyBehavior>
                        <a className="flex items-center">
                            <FiBarChart2 className="text-xl text-zinc-600 cursor-pointer" />
                            <span className="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                                3
                            </span>

                        </a>
                    </Link>
                </div>
                <div class="relative flex items-center sm:mt-3">
                    <Link href="/cart" legacyBehavior>
                        <PiShoppingCart class="text-xl text-zinc-600 cursor-pointer" />
                    </Link>
                    <span class="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                        {cartItems?.length}
                    </span>
                </div>
                <div className='relative group sm:ml-10'>
                    <LiaUser className="ri-user-line text-2xl sm:text-3xl cursor-text text-zinc-600 " />
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 hidden group-hover:flex  w-[10rem] top-[52px]  group-hover:pointer-events-auto flex-col flex-wrap h-auto -right-[75px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 '>
                        <ul className='flex flex-col w-full justify-between  items-start  text-sm font-medium capitalize'>
                            <li className='hover:bg-zinc-100 p-3 w-full'><a href='#'>Login</a></li>
                            <li className='hover:bg-zinc-100 p-3 w-full'><a href='#'>Account</a></li>
                            <li className='hover:bg-zinc-100 p-3 w-full'><a href='#'>Order</a></li>
                            <li className='hover:bg-zinc-100 p-3 w-full'><a href='#'>Dashboard</a></li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header1