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
import Head from "next/head";

export default function Invoice() {
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

    const invoiceData = {
        invoiceNumber: "ORD-2023-10-27",
        invoiceDate: "October 27, 2023",
        billTo: {
            name: "Client Name",
            address1: "123 Client Street",
            address2: "City, State, ZIP",
            email: "client@email.com",
        },
        from: {
            name: "Your Company Name",
            address1: "456 Your Street",
            address2: "City, State, ZIP",
            email: "yourcompany@email.com",
        },
        items: [
            { description: "Wireless Headphones", quantity: 1, unitPrice: 1000.0 },
            { description: "Bluetooth Speaker", quantity: 2, unitPrice: 250.0 },
            { description: "Gaming Mouse", quantity: 4, unitPrice: 100.0 },
        ],
        taxRate: 0.1,
        notes: "Thank you for your business!",
        paymentDue: "Payment due within 30 days.",
    };

    const subtotal = invoiceData.items.reduce(
        (acc, item) => acc + item.quantity * item.unitPrice,
        0
    );
    const tax = subtotal * invoiceData.taxRate;
    const total = subtotal + tax;

    return (
        <>
            <Head>
                <title>Invoice</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={`flex  ${isDarkMode ? "bg-gray-900 text-white" : ""
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

                {/* Main Content */}
                <div className="flex-1 px-8 py-36 bg-gray-100 text-gray-900  ">

                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h1 className="text-3xl font-semibold leading-none mb-2">Invoice</h1>
                                <p className="text-gray-600">
                                    Invoice #{invoiceData.invoiceNumber}
                                </p>
                                <p className="text-gray-600">
                                    Date: {invoiceData.invoiceDate}
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/logo.png"
                                    alt="Company Logo"
                                    className="h-28 mr-10"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between mb-8">
                            <div>
                                <h2 className="text-lg font-semibold mb-1">Bill To:</h2>
                                <p className="text-gray-600">{invoiceData.billTo.name}</p>
                                <p className="text-gray-600">
                                    {invoiceData.billTo.address1}
                                </p>
                                <p className="text-gray-600">
                                    {invoiceData.billTo.address2}
                                </p>
                                <p className="text-gray-600">
                                    {invoiceData.billTo.email}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-1">From:</h2>
                                <p className="text-gray-600">{invoiceData.from.name}</p>
                                <p className="text-gray-600">{invoiceData.from.address1}</p>
                                <p className="text-gray-600">{invoiceData.from.address2}</p>
                                <p className="text-gray-600">{invoiceData.from.email}</p>
                            </div>
                        </div>

                        <table className="w-full mb-8">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 text-left">Description</th>
                                    <th className="py-2 px-4 text-right">Quantity</th>
                                    <th className="py-2 px-4 text-right">Unit Price</th>
                                    <th className="py-2 px-4 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceData.items.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 px-4">{item.description}</td>
                                        <td className="py-2 px-4 text-right">
                                            {item.quantity}
                                        </td>
                                        <td className="py-2 px-4 text-right">
                                            ${item.unitPrice.toFixed(2)}
                                        </td>
                                        <td className="py-2 px-4 text-right">
                                            ${(item.quantity * item.unitPrice).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3" className="py-2 px-4 text-right font-semibold">
                                        Subtotal:
                                    </td>
                                    <td className="py-2 px-4 text-right">
                                        ${subtotal.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="py-2 px-4 text-right font-semibold">
                                        Tax ({invoiceData.taxRate * 100}%):
                                    </td>
                                    <td className="py-2 px-4 text-right">
                                        ${tax.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="py-2 px-4 text-right font-semibold">
                                        Total:
                                    </td>
                                    <td className="py-2 px-4 text-right">
                                        ${total.toFixed(2)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="mt-8">
                            <p className="text-gray-600">Notes: {invoiceData.notes}</p>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600">{invoiceData.paymentDue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
