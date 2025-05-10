import React from "react";

const UserDetails = ({ user, isDarkMode }) => {
    const detailItemClasses = `py-4 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`;
    const labelClasses = `text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`;
    const valueClasses = `mt-1 ${isDarkMode ? "text-white" : "text-gray-900"}`;

    return (
        <div className={`rounded-xl shadow-sm overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="px-6 py-5 border-b">
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    User Details
                </h2>
            </div>

            <div className="divide-y">
                <div className={detailItemClasses}>
                    <div className="px-6">
                        <h3 className={labelClasses}>Full Name</h3>
                        <p className={`${valueClasses} text-lg`}>{user.name}</p>
                    </div>
                </div>

                <div className={detailItemClasses}>
                    <div className="px-6">
                        <h3 className={labelClasses}>Email Address</h3>
                        <p className={`${valueClasses} text-lg`}>{user.email}</p>
                    </div>
                </div>

                <div className={detailItemClasses}>
                    <div className="px-6">
                        <h3 className={labelClasses}>Phone Number</h3>
                        <p className={`${valueClasses} text-lg`}>{user.phone}</p>
                    </div>
                </div>

                <div className={detailItemClasses}>
                    <div className="px-6">
                        <h3 className={labelClasses}>Bio</h3>
                        <p className={`${valueClasses} text-lg`}>{user.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;