import React from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Method</h2>
            <div className="flex items-center gap-6">
                <label htmlFor="creditCard" className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        value="Credit Card"
                        checked={paymentMethod === "Credit Card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                        aria-label="Credit Card"
                    />
                    <span className="text-lg text-gray-700">Credit Card</span>
                </label>
                <label htmlFor="upi" className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        value="UPI"
                        checked={paymentMethod === "UPI"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                        aria-label="UPI"
                    />
                    <span className="text-lg text-gray-700">UPI</span>
                </label>
                <label htmlFor="cashOnDelivery" className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        value="Cash on Delivery"
                        checked={paymentMethod === "Cash on Delivery"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                        aria-label="Cash on Delivery"
                    />
                    <span className="text-lg text-gray-700">Cash on Delivery</span>
                </label>
            </div>
        </div>
    );
};

export default PaymentMethod;