import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProfilePicture from "./ProfilePicture";
import UserDetails from "./UserDetails";
import EditProfileForm from "./EditProfileForm";
import { FiMoon, FiSun, FiX, FiMenu } from "react-icons/fi";

const UserProfilePage = () => {
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

    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
    });
    const [imageUrl, setImageUrl] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImageUrl(reader.result);
        reader.readAsDataURL(file);
    };

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
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 peer dark:bg-gray-300 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                    </label>
                </div>
            ))}

            {isSidebarOpen && <Sidebar isMobile={isMobile} toggleSidebar={isMobile ? toggleSidebar : null} />}

            <div className={`flex-1 transition-all duration-300 py-16 sm:py-28`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex justify-between items-center mx-2 mb-8">
                        <h1 className={`text-xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-zinc-300" : "text-zinc-800"}`}>User Profile</h1>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
                        >
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                                <ProfilePicture imageUrl={imageUrl} handleUpload={handleUpload} isDarkMode={isDarkMode} />
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                                <EditProfileForm
                                    user={user}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <UserDetails user={user} isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
