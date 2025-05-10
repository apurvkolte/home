import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
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

export default function AdminDashboardPage() {
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


    const dashboardItems = [
        {
            title: "Manage Orders",
            description: "Track, update, and manage all customer orders.",
            route: "/orders",
            icon: <FiBox />,
        },
        {
            title: "User Management",
            description: "View and manage user accounts.",
            route: "/users",
            icon: <FiUsers />,
        },
        {
            title: "Analytics",
            description: "View website traffic and sales data.",
            route: "/analytics",
            icon: <FiBarChart2 />,
        },
        {
            title: "User Profile",
            description: "View and edit your profile details.",
            route: "/profiles",
            icon: <FiUser />,
        },
        {
            title: "Checkout",
            description: "Proceed with your cart to purchase items.",
            route: "/checkout",
            icon: <FiShoppingCart />,
        },
        {
            title: "Cart",
            description: "View items added to your cart and update quantities.",
            route: "/cart",
            icon: <FiShoppingBag />,
        },
        {
            title: "Account",
            description: "Manage your account settings and preferences.",
            route: "/account",
            icon: <FiUser />,
        },
        {
            title: "Address",
            description: "View and update your saved addresses.",
            route: "/address",
            icon: <FiHome />,
        },
        {
            title: "Invoice",
            description: "View and download your invoices.",
            route: "/invoice",
            icon: <FiFileText />,
        },
        {
            title: "Update Profile",
            description: "Edit and update your personal details.",
            route: "/update-profile",
            icon: <FiEdit />,
        },
    ];

    return (
        <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
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

            <main className="flex-1 px-6 lg:px-24 py-28 transition-all">
                <div className="flex justify-between items-center gap-2 mb-8">
                    <h1 className={`text-xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-zinc-300" : "text-zinc-800"}`}>Dashboard</h1>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-800 hover:bg-gray-700"} text-white`}
                    >
                        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dashboardItems.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
                        >
                            <div className={`text-5xl mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                                {item.icon}
                            </div>
                            <Link href={item.route} className="group">
                                <h2 className={`text-xl font-semibold mb-2 cursor-pointer hover:font-bold group-hover:text-blue-600 transition ${isDarkMode ? "group-hover:text-blue-400" : ""}`}>
                                    {item.title}
                                </h2>
                            </Link>
                            <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                                {item.description}
                            </p>
                            <Link href={item.route}>
                                <a
                                    className={`px-4 py-2 rounded-md transition ${isDarkMode
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                        }`}
                                >
                                    Go to {item.title}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}