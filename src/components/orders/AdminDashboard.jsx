import React, { useState, useEffect } from 'react';
import Sidebar from "../User/Sidebar";
import {
    FiMenu,
    FiDollarSign,
    FiTrendingUp,
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
import { Line, Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dashboardData, setDashboardData] = useState(null);
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

    useEffect(() => {
        const fetchDashboardData = async () => {
            const simulatedApiCall = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            totalUsers: 150,
                            totalOrders: 230,
                            totalRevenue: 12500,
                            userGrowth: {
                                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                datasets: [{
                                    label: 'New Users',
                                    data: [30, 45, 50, 25],
                                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                                    borderColor: 'rgba(54, 162, 235, 1)',
                                    borderWidth: 1,
                                }],
                            },
                            orderBreakdown: {
                                labels: ['Pending', 'Shipped', 'Delivered'],
                                datasets: [{
                                    label: 'Orders',
                                    data: [50, 80, 100],
                                    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
                                    borderWidth: 1,
                                }],
                            },
                            revenueTrend: {
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                datasets: [{
                                    label: 'Revenue ($)',
                                    data: [8000, 9500, 11000, 12000, 12500, 13000],
                                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    borderWidth: 1,
                                }],
                            },
                        });
                    }, 1000);
                });
            };

            const data = await simulatedApiCall();
            setDashboardData(data);
        };

        fetchDashboardData();
    }, []);

    if (!dashboardData) {
        return (
            <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
                {isSidebarOpen && <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
                <main className="flex-1 p-6 flex items-center justify-center">
                    <p>Loading admin dashboard data...</p>
                </main>
            </div>
        );
    }

    return (

        <div
            className={`flex min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
        >
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    className="fixed z-50 top-24 left-4 p-2 rounded-md text-gray-800 bg-white"
                >
                    {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
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

            <main className="flex-1 px-4 sm:px-20 py-32">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold leading-none mb-6">Admin Dashboard</h1>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Users */}
                    <div className={`rounded-lg shadow-md p-6 flex items-center gap-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                            <FiUsers className="text-blue-500 text-2xl" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Total Users</h2>
                            <p className="text-2xl font-bold">{dashboardData.totalUsers}</p>
                        </div>
                    </div>

                    {/* Total Orders */}
                    <div className={`rounded-lg shadow-md p-6 flex items-center gap-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <div className={`p-3 rounded-full ${isDarkMode ? "bg-green-900" : "bg-green-100"}`}>
                            <FiBox className="text-green-500 text-2xl" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Total Orders</h2>
                            <p className="text-2xl font-bold">{dashboardData.totalOrders}</p>
                        </div>
                    </div>

                    {/* Total Revenue */}
                    <div className={`rounded-lg shadow-md p-6 flex items-center gap-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <div className={`p-3 rounded-full ${isDarkMode ? "bg-yellow-900" : "bg-yellow-100"}`}>
                            <FiDollarSign className="text-yellow-500 text-2xl" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Total Revenue</h2>
                            <p className="text-2xl font-bold">${dashboardData.totalRevenue}</p>
                        </div>
                    </div>

                    {/* User Growth Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                            <FiTrendingUp /> User Growth
                        </h2>
                        <Line data={dashboardData.userGrowth} />
                    </div>

                    {/* Order Breakdown Pie Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Order Breakdown</h2>
                        <Pie data={dashboardData.orderBreakdown} />
                    </div>

                    {/* Revenue Trend Line Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Revenue Trend</h2>
                        <Line data={dashboardData.revenueTrend} />
                    </div>
                </div>
            </main>
        </div>


    );
};

export default AdminDashboard;