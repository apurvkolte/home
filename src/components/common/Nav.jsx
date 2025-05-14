import React, { useState } from 'react';
import { Button, Menu, MenuItem, Divider, IconButton, Box } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { home1, electronics, lifestyle, living, fitness, fashion } from '../../data/data';
import Link from "next/link";

const menuOptions = [
    { name: "Home", data: home1 },
    { name: "Shop", data: electronics },
    { name: "Pages", data: lifestyle },
    { name: "Category", data: living },

];
const menuOptions1 = [
    { name: "Home", data: home1 },
    { name: "Electronics", data: electronics },
    { name: "Lifestyle", data: lifestyle },
    { name: "Living", data: living },
    { name: "Fitness", data: fitness },
    { name: "Fashion", data: fashion }
];

export default function Nav() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMenu, setCurrentMenu] = useState([]);
    const [activeMobileButton, setActiveMobileButton] = useState(null);

    const handleMenuOpen = (event, menuItems) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(menuItems);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentMenu([]);
    };

    const handleMobileButtonClick = (buttonName) => {
        setActiveMobileButton(buttonName);
        // Add any other logic you need here (e.g., navigation)
    };

    return (
        <nav className="bg-gray-800 text-white mt-20 shadow-md p-1">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <IconButton
                        className="text-white lg:hidden"
                        aria-label="menu"
                        onClick={(event) => handleMenuOpen(event, menuOptions1.map(option => ({ title: option.name, url: "#" })))}
                    >
                        <DehazeIcon className="text-white" />
                    </IconButton>
                    <Box className="flex space-x-2 md:hidden">
                        <Button
                            className={`text-white ${activeMobileButton === 'Home' ? 'bg-gray-700' : ''}`}
                            onClick={() => handleMobileButtonClick('Home')}
                        >
                            Home
                        </Button>
                        <Button
                            className={`text-white ${activeMobileButton === 'Electronics' ? 'bg-gray-700' : ''}`}
                            onClick={() => handleMobileButtonClick('Electronics')}
                        >
                            Electronics
                        </Button>
                        <Button
                            className={`text-white hidden sm:block ${activeMobileButton === 'Lifestyle' ? 'bg-gray-700' : ''}`}
                            onClick={() => handleMobileButtonClick('Lifestyle')}
                        >
                            Lifestyle
                        </Button>
                    </Box>
                </div>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                        style: {
                            width: '90vw',
                            maxWidth: '48ch',
                            backgroundColor: 'white',
                            color: 'black',
                        },
                    }}
                >
                    {currentMenu.map((item) => (
                        <MenuItem
                            key={item.title}
                            component="a"
                            href={item.url}
                            style={{ color: 'black' }}
                            className="mobile-menu-item"
                        >
                            {item.title}
                        </MenuItem>
                    ))}
                </Menu>

                <Box className="hidden lg:flex space-x-4">
                    {menuOptions.map((option, index) => (
                        <div key={index} className="group relative">
                            <Button
                                key={option.name}
                                variant="text"
                                className="text-white text-lg"
                                style={{ color: 'white' }}
                            >
                                {option.name}
                            </Button>
                            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md z-10 w-48">
                                {option.data.map((item) => (
                                    <a key={item.title} href={item.url} className="block p-2 hover:bg-gray-100">
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="group relative">
                        <Button
                            variant="text"
                            className="text-white text-lg"
                            style={{ color: 'white' }}
                        >
                            About
                        </Button>
                        <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md z-10 w-48">
                            <Link href="/about-us" ><span className="block p-2 cursor-pointer hover:bg-gray-100">Our Mission</span></Link>
                            <Link href="/about-us" ><span className="block p-2 cursor-pointer hover:bg-gray-100">Our Team</span></Link>
                            <Link href="/about-us" ><span className="block p-2 cursor-pointer hover:bg-gray-100">Careers</span></Link>
                        </div>
                    </div>

                    <div className="group relative">
                        <Button
                            variant="text"
                            className="text-white text-lg"
                            style={{ color: 'white' }}
                        >
                            Contact
                        </Button>
                        <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md z-10 max-w-xs right-0">
                            <p className="p-2">Email: contact@company.com</p>
                            <p className="p-2">Phone: +1 (800) 123-4567</p>
                            <hr className="my-2 border-gray-300" />
                            <p className="p-2">Address: 123 Business Ave, Suite 100, City, ZIP Code, Country</p>
                        </div>
                    </div>

                </Box>
            </div>
        </nav>
    );
}