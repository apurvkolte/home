import React from "react";

const BillingInfo = ({ billingInfo, handleBillingChange }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Billing Information</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label htmlFor="name" className="block">
                    Full Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={billingInfo.name}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
                <label htmlFor="email" className="block">
                    Email Address
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        value={billingInfo.email}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
                <label htmlFor="address" className="block col-span-2">
                    Address
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={billingInfo.address}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
                <label htmlFor="city" className="block">
                    City
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={billingInfo.city}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
                <label htmlFor="state" className="block">
                    State
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        value={billingInfo.state}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
                <label htmlFor="postalCode" className="block">
                    Postal Code
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={billingInfo.postalCode}
                        onChange={handleBillingChange}
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        required
                    />
                </label>
            </form>
        </div>
    );
};

export default BillingInfo;