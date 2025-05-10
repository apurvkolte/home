import React from "react";

const EditProfileForm = ({ user, handleChange, handleSubmit, isDarkMode }) => {
    const inputClasses = `w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${isDarkMode
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
        }`;

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Edit Profile
                </h2>
                <div className={`h-px ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}></div>
            </div>

            <div className="space-y-5">
                <div>
                    <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="123-456-7890"
                    />
                </div>

                <div>
                    <label
                        htmlFor="bio"
                        className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={user.bio}
                        onChange={handleChange}
                        className={`${inputClasses} min-h-[100px]`}
                        placeholder="Tell us about yourself..."
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditProfileForm;