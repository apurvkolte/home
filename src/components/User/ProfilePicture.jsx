import React from "react";

const ProfilePicture = ({ imageUrl, handleUpload, isDarkMode }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative mb-4">
                <img
                    src={imageUrl || "/default_avatar.jpg"}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-opacity-50"
                    style={{
                        borderColor: isDarkMode ? 'rgba(74, 222, 128, 0.5)' : 'rgba(74, 222, 128, 0.5)'
                    }}
                />
                <label
                    htmlFor="file-upload"
                    className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </label>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleUpload}
                    accept="image/*"
                />
            </div>
            <h2 className="text-xl font-semibold mb-2">Profile Photo</h2>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                JPG, GIF or PNG. Max size of 5MB
            </p>
        </div>
    );
};

export default ProfilePicture;