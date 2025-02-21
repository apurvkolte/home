import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";


const Header = () => {
    const menu = [
        { title: "heading 1", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 2", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 3", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 4", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 5", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 6", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
        { title: "heading 7", category: ["catgeory 1", "catgeory 2", "catgeory 3"], url: "#" },
    ]


    return (
        <div className='w-full h-20 mx-auto flex justify-between items-center px-4 sm:px-20 gap-4 border-b-2 '>
            <div className='logo w-40 h-16 flex items-center justify-center'>
                <img
                    src="/logo.png"
                    alt="Logo"
                    layout="fill"
                    className="w-full h-16 object-contain"
                />
            </div>
            <div className='menu hidden sm:flex gap-8'>
                <div className='relative group'>
                    <a className='uppercase font-medium  text-sm tracking-wide leading-none cursor-pointer'>
                        Home
                    </a>

                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>

                <div className='relative group'>
                    <a className='uppercase font-medium text-sm tracking-wide leading-none cursor-pointer'>
                        men
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>

                <div className='relative group'>
                    <a className='uppercase font-medium text-sm tracking-wide leading-none cursor-pointer'>
                        women
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>


                <div className='relative group'>
                    <a className='uppercase font-medium text-sm tracking-wide leading-none cursor-pointer'>
                        studio
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>
                <div className='relative group'>
                    <a className='uppercase font-medium text-sm tracking-wide leading-none cursor-pointer'>
                        kids
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>

                <div className='relative group'>
                    <a className='uppercase font-medium text-sm tracking-wide leading-none cursor-pointer'>
                        beauty
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {menu.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize  '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                            <a href={cat}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>
                {/* {["Home", "men", "women", "studio", "kids", "beauty"].map((item, index) => (
                    <a className='uppercase  font-medium text-sm tracking-wide leading-none' href='#'>{item}</a>
                ))} */}

            </div>
            <div className='search w-[40rem] sm:w-[30rem] h-[2.2rem] sm:h-[2.8rem] flex justify-start items-center rounded bg-slate-100'>
                <input type='text' placeholder='Search for products...' className='w-full h-full px-3 border font-thin flex justify-start items-center rounded text-zinc-500 outline-1 focus:bg-slate-50 outline-zinc-200' />
                <div className='w-10 h-full text-zinc-500 hover:bg-slate-100 hover:text-zinc-600 flex justify-center items-center cursor-pointer rounded outline- focus:bg-slate-50 outline-zinc-200 '>
                    <i class="ri-search-line text-xl "></i>
                </div>
            </div>
            <div className='icon flex justify-center items-center gap-5 sm:gap-16'>
                <PiShoppingCart className='text-2xl cursor-pointer' />
                <div className='relative group'>
                    <LiaUser className="ri-user-line text-2xl cursor-text " />
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

export default Header