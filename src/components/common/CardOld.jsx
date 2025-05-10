import React, { useState } from 'react';
import { PiShoppingCart } from "react-icons/pi";
import { useCart } from '../../contexts/cart/cartContext';
import { addItemToCart } from '../../contexts/cart/cartReducer';

const Card = ({ product }) => {
    const [hovered, setHovered] = useState(false);
    const { dispatch } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addItemToCart(product.id, 1));
    };
    return (
        <a href={`/product-details/${product.id}`} className='cursor-pointer p-4 sm:p-3 md:p-2'>
            <div className='card flex flex-col h-[20rem] sm:h-[22rem] md:h-[24rem] rounded-lg shadow hover:shadow-lg bg-white '>
                <div
                    className='image h-[12rem] sm:h-[14rem] rounded overflow-hidden'
                    onMouseEnter={() => setTimeout(() => setHovered(true), 200)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out'
                        src={hovered ? product.image1 : product.image}
                        alt={product.name}
                    />
                </div>

                <div className='flex flex-col flex-1 text-zinc-700 p-4'>
                    <div className='mt-4 text-zinc-700'>
                        <h2 className='text-[14px] sm:text-[15px] md:text-[16px] text-left font-semibold text-zinc-800 line-clamp-2'>
                            {product.name}
                        </h2>
                        <p className='text-[12px] sm:text-[13px] text-gray-400 text-left'>{product.category}</p>
                    </div>
                    <div className='flex justify-between items-center mb-2 py-3 mt-auto'>
                        <div className='text-[16px] sm:text-[18px] flex gap-2 font-medium'>
                            <span className='text-[14px] sm:text-[15px] text-green-800 mt-1'>&#36;{product.price}</span>
                            <div className='text-[12px] sm:text-[13px] text-zinc-400 mt-2'>
                                <del>&#36;{product.originalPrice}</del>&nbsp;
                                <span className='px-1 py-1 font-normal text-slate-50 bg-green-700 rounded-lg text-[10px] sm:text-[11px]'>
                                    {product.discount}% Off
                                </span>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className='px-2 py-2 bg-zinc-100 hover:bg-zinc-200 rounded'>
                            <PiShoppingCart className='text-lg sm:text-xl cursor-pointer' />
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
