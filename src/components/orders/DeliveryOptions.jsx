import React from "react";

const DeliveryOptions = ({ deliveryOption, setDeliveryOption }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Options</h2>
            <div className="flex items-center gap-6">
                <label htmlFor="standardDelivery" className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="standardDelivery"
                        name="deliveryOption"
                        value="Standard Delivery"
                        checked={deliveryOption === "Standard Delivery"}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="w-4 h-4"
                        aria-label="Standard Delivery ($50)"
                    />
                    <span className="text-lg text-gray-700">Standard Delivery ($50)</span>
                </label>
                <label htmlFor="expressDelivery" className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="expressDelivery"
                        name="deliveryOption"
                        value="Express Delivery"
                        checked={deliveryOption === "Express Delivery"}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="w-4 h-4"
                        aria-label="Express Delivery ($150)"
                    />
                    <span className="text-lg text-gray-700">Express Delivery ($150)</span>
                </label>
            </div>
        </div>
    );
};

export default DeliveryOptions;