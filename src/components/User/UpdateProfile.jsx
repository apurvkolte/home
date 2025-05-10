import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../User/Sidebar";
import {
    FiMenu,
    FiBarChart2,
    FiBox,
    FiX,
    FiUser,
    FiUsers,
    FiMoon,
    FiShoppingCart,
    FiShoppingBag,
    FiSun, FiHome, FiFileText, FiEdit
} from "react-icons/fi";

const UpdateProfile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            // Keep desktop behavior unchanged
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', profileData);
    };

    return (
        <div
            className={
                isDarkMode
                    ? "flex min-h-screen bg-gray-900 text-white"
                    : "flex min-h-screen bg-gray-100 text-gray-900"
            }
        >
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    className="fixed z-50 top-4 left-4 p-2 rounded-md bg-gray-800 text-white"
                >
                    {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            )}

            {!isMobile && (isSidebarOpen ? (
                <div className="absolute top-24 left-48">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isSidebarOpen}
                            onChange={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-gray-300 rounded-full  peer dark:bg-gray-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                    </label>
                </div>
            ) : (
                <div className="fixed top-24 left-4">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isSidebarOpen}
                            onChange={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-gray-600 peer dark:bg-gray-300 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                    </label>
                </div>
            ))}

            {isSidebarOpen && <Sidebar isMobile={isMobile} toggleSidebar={isMobile ? toggleSidebar : null} />}
            <div className='sm:p-40 flex-1 sm:px-24 py-24 sm:py-16 transition-all'>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <h1 className="text-2xl font-semibold text-center text-gray-800">Update Profile</h1>
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={profileData.firstName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={profileData.lastName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={profileData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={profileData.phone}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={profileData.address}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={profileData.city}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            value={profileData.country}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default UpdateProfile;