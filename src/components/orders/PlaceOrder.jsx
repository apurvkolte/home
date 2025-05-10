import React, { useState } from "react";

const PlaceOrder = ({ handlePlaceOrder }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        await handlePlaceOrder(); // Assuming handlePlaceOrder is async
        setIsLoading(false);
    };

    return (
        <div className="mt-8 flex justify-end">
            <button
                type="button"
                onClick={handleClick}
                className={`bg-blue-600 text-white font-bold rounded-lg px-6 py-3 hover:bg-blue-700 transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                aria-label="Place Order"
                disabled={isLoading}
            >
                {isLoading ? "Placing Order..." : "Place Order"}
            </button>
        </div>
    );
};

export default PlaceOrder;