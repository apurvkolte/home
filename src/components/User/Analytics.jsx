import React, { useState, useEffect } from 'react';
import Sidebar from "../User/Sidebar";
import {
    FiMoon,
    FiSun,
    FiBarChart2,
    FiX,
    FiMenu
} from "react-icons/fi";
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Analytics = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [salesData, setSalesData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [productData, setProductData] = useState(null);

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
        const fetchAnalyticsData = async () => {
            const simulatedApiCall = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            sales: {
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                datasets: [{
                                    label: 'Sales ($)',
                                    data: [1200, 1900, 3000, 5000, 2000, 3000],
                                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                                    borderColor: 'rgba(54, 162, 235, 1)',
                                    borderWidth: 1,
                                }],
                            },
                            users: {
                                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                datasets: [{
                                    label: 'New Users',
                                    data: [50, 100, 150, 80],
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1,
                                }],
                            },
                            products: {
                                labels: ['Product A', 'Product B', 'Product C'],
                                datasets: [{
                                    label: 'Units Sold',
                                    data: [30, 50, 20],
                                    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                                    borderWidth: 1,
                                }],
                            },
                        });
                    }, 1000);
                });
            };

            const data = await simulatedApiCall();
            setSalesData(data.sales);
            setUserData(data.users);
            setProductData(data.products);
        };

        fetchAnalyticsData();
    }, []);

    if (!salesData || !userData || !productData) {
        return (
            <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
                {isSidebarOpen && <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
                <main className="flex-1 p-6 flex items-center justify-center">
                    <p>Loading analytics data...</p>
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

            <main className={`flex-1 py-32 sm:px-32 px-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold leading-none">Analytics</h1>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sales Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Sales Overview</h2>
                        <Bar data={salesData} />
                    </div>

                    {/* User Activity Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>User Activity</h2>
                        <Line data={userData} />
                    </div>

                    {/* Top Products Pie Chart */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Top Products</h2>
                        <Pie data={productData} />
                    </div>

                    {/* Additional Analytics Widgets */}
                    <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>User Demographics</h2>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Information about user demographics...</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Analytics;