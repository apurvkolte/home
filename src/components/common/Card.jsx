import React from 'react';
import { PiShoppingCart } from "react-icons/pi";

const Card = ({ product, border = 0 }) => {
    return (
        <a className={`cursor-pointer p-5 sm:p-0 py-2 border-l-[${border}] border-l-[${border}]`} href="#">
            <div className='card flex flex-col h-[24rem] rounded-lg shadow hover:shadow-lg bg-white '>
                <div className='image h-[14rem] rounded overflow-hidden'>
                    <img className='object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out'
                        src={product.image}
                        alt={product.name} />
                </div>

                <div className='flex flex-col flex-1 text-zinc-700 p-4'>
                    <div className='mt-4 text-zinc-700'>
                        <h2 className='text-xl text-left font-semibold line-clamp-2'>{product.name}</h2>
                        <p className='text-gray-400 text-left'>{product.category}</p>
                    </div>
                    <div className='flex justify-between items-center px-4 mb-2 py-3 mt-auto'>
                        <div className='text-xl flex gap-2 font-medium'>
                            <span>&#8377; {product.price}</span>
                            <div className='text-sm text-zinc-400 mt-2'>
                                <del>&#8377; {product.originalPrice}</del>&nbsp;
                                <span className='px-1 py-1 font-normal text-slate-50 bg-green-700 rounded-lg text-xs'>
                                    {product.discount}% Off
                                </span>
                            </div>
                        </div>
                        <button className='px-2 py-2 bg-zinc-200 rounded'>
                            <PiShoppingCart className='text-2xl cursor-pointer' />
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
