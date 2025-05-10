import React from "react";

const OrderSummary = ({ cartSummary, calculateSubtotal, calculateTotal }) => {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
            {cartSummary.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                    <div>
                        <p className="text-lg font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">
                            {currencyFormatter.format(item.price)} x {item.quantity}
                        </p>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">
                        {currencyFormatter.format(item.price * item.quantity)}
                    </p>
                </div>
            ))}
            <div
                className="flex justify-between items-center mt-4 text-lg font-bold text-gray-800"
                aria-label="Subtotal"
            >
                <span>Subtotal:</span>
                <span>{currencyFormatter.format(calculateSubtotal())}</span>
            </div>
            <div
                className="flex justify-between items-center mt-4 text-lg font-bold text-gray-800"
                aria-label="Total"
            >
                <span>Total:</span>
                <span>{currencyFormatter.format(calculateTotal())}</span>
            </div>
        </div>
    );
};

export default OrderSummary;