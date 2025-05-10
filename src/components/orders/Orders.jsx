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

const OrdersPage = () => {
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

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const orders = [
        {
            id: "ORD12345",
            date: "April 20, 2023",
            status: "Delivered",
            total: "₹1,499",
            items: 3,
            payment: "Paid via Credit Card",
        },
        {
            id: "ORD67890",
            date: "April 18, 2023",
            status: "In Transit",
            total: "₹999",
            items: 1,
            payment: "Cash on Delivery",
        },
        {
            id: "ORD11223",
            date: "April 15, 2023",
            status: "Cancelled",
            total: "₹2,499",
            items: 5,
            payment: "Paid via Net Banking",
        },
        {
            id: "ORD33456",
            date: "April 12, 2023",
            status: "Processing",
            total: "₹799",
            items: 2,
            payment: "Paid via UPI",
        },
        {
            id: "ORD55678",
            date: "April 10, 2023",
            status: "Delivered",
            total: "₹3,299",
            items: 7,
            payment: "Paid via Debit Card",
        },
    ];

    return (
        <div className={`flex  ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
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



            <div className={`flex-1 sm:px-20 px-4 py-28 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`} >

                <div className="p-3 rounded-lg  ">
                    <div className="flex justify-between mb-10 ">
                        <h1 className={`text-3xl font-semibold leading-none text-gray-800 ${isDarkMode ? "text-white" : "text-gray-800"} `}>My Orders</h1>

                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                        >
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    <div className={`rounded-lg shadow overflow-hidden ${isDarkMode ? "bg-gray-800" : ""}`}>
                        <table className="min-w-full text-left">
                            <thead className={`text-xs sm:text-sm uppercase ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`}>
                                <tr>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Order ID</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Date</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Status</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Items</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Payment Method</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Total</th>
                                    <th className="px-3 sm:px-6 py-2 sm:py-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr
                                        key={order.id}
                                        className={`border-b ${index % 2 === 0 ? (isDarkMode ? "bg-gray-700" : "bg-gray-100") : (isDarkMode ? "bg-gray-800" : "bg-white")} hover:${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
                                    >
                                        <td className={`px-3 sm:px-6 py-2 sm:py-4 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>{order.id}</td>
                                        <td className={`px-3 sm:px-6 py-2 sm:py-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{order.date}</td>
                                        <td
                                            className={`px-3 sm:px-6 py-2 sm:py-4 font-semibold ${order.status === "Delivered"
                                                ? "text-green-600"
                                                : order.status === "Cancelled"
                                                    ? "text-red-500"
                                                    : order.status === "Processing"
                                                        ? "text-orange-500"
                                                        : "text-blue-500"
                                                }`}
                                        >
                                            {order.status}
                                        </td>
                                        <td className={`px-3 sm:px-6 py-2 sm:py-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{order.items}</td>
                                        <td className={`px-3 sm:px-6 py-2 sm:py-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{order.payment}</td>
                                        <td className={`px-3 sm:px-6 py-2 sm:py-4 font-bold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>{order.total}</td>
                                        <td className="px-3 sm:px-6 py-2 sm:py-4">
                                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center">
                        <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Showing 1-4 of 4 orders</p>
                        <div className="flex gap-2 mt-2 sm:mt-0">
                            <button className={`px-3 py-1 rounded hover:${isDarkMode ? "bg-gray-600 text-gray-300" : "bg-gray-400"} ${isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-300 text-gray-700"}`}>
                                Previous
                            </button>
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
