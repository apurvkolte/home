import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { FiMoon, FiSun, FiHome, FiTrash2, FiX, FiMenu } from "react-icons/fi";

const AddressPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "John Doe",
            address: "123 Main Street",
            city: "Springfield",
            state: "IL",
            postalCode: "62704",
            default: true,
        },
        {
            id: 2,
            name: "Jane Smith",
            address: "456 Elm Street",
            city: "Chicago",
            state: "IL",
            postalCode: "60601",
            default: false,
        },
        {
            id: 3,
            name: "Emily Davis",
            address: "789 Oak Avenue",
            city: "Peoria",
            state: "IL",
            postalCode: "61602",
            default: false,
        },
        {
            id: 4,
            name: "Michael Johnson",
            address: "101 Pine Street",
            city: "Rockford",
            state: "IL",
            postalCode: "61101",
            default: false,
        },
    ]);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            // Keep desktop behavior unchanged
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const handleSetDefault = (id) => {
        const updatedAddresses = addresses.map((address) =>
            address.id === id ? { ...address, default: true } : { ...address, default: false }
        );
        setAddresses(updatedAddresses);
    };

    const handleRemoveAddress = (id) => {
        const updatedAddresses = addresses.filter((address) => address.id !== id);
        setAddresses(updatedAddresses);
    };

    const handleAddAddress = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newAddress = {
            id: addresses.length + 1,
            name: formData.get("name"),
            address: formData.get("address"),
            city: formData.get("city"),
            state: formData.get("state"),
            postalCode: formData.get("postalCode"),
            default: false,
        };
        setAddresses([...addresses, newAddress]);
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
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-grey-600 peer dark:bg-gray-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
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
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 peer dark:bg-gray-300 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                    </label>
                </div>
            ))}

            {isSidebarOpen && <Sidebar isMobile={isMobile} toggleSidebar={isMobile ? toggleSidebar : null} />}

            {/* Main Content */}
            <div className="flex-1 px-4 sm:px-20 py-32">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-semibold leading-none">Manage Addresses</h1>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                        >
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {addresses.map((address) => (
                            <div
                                key={address.id}
                                className={`p-6 rounded-lg shadow ${address.default ? "border-4 border-zinc-600" : "border border-gray-300"} ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">{address.name}</h2>
                                    {address.default && <FiHome size={20} className="text-green-600" />}
                                </div>
                                <p className="mb-1">{address.address}</p>
                                <p>
                                    {address.city}, {address.state}, {address.postalCode}
                                </p>
                                <div className="mt-4 flex justify-between">
                                    {!address.default && (
                                        <button
                                            onClick={() => handleSetDefault(address.id)}
                                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm"
                                        >
                                            Set as Default
                                        </button>
                                    )}
                                    <FiTrash2
                                        onClick={() => handleRemoveAddress(address.id)}
                                        className="text-gray-400 hover:text-gray-600 transition text-2xl cursor-pointer"
                                    />
                                </div>
                            </div>
                        ))}

                        <div className={`p-6 rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                            <h2 className="text-lg font-semibold mb-4">Add Address</h2>
                            <form onSubmit={handleAddAddress} className="grid gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    className={`border rounded-md outline-none focus:ring-1 p-2 text-sm ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    required
                                    className={`border rounded-md outline-none focus:ring-1 p-2 text-sm ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    required
                                    className={`border rounded-md outline-none focus:ring-1 p-2 text-sm ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    required
                                    className={`border rounded-md outline-none focus:ring-1 p-2 text-sm ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                                />
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal Code"
                                    required
                                    className={`border rounded-md outline-none focus:ring-1 p-2 text-sm ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition text-sm"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddressPage;