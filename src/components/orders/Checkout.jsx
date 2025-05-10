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

const BillingInfo = ({ billingInfo, handleBillingChange }) => (

    <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={billingInfo.name}
                    onChange={handleBillingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={billingInfo.email}
                    onChange={handleBillingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2 col-span-full sm:col-span-2">
                Address
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={billingInfo.address}
                    onChange={handleBillingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">
                    City
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={billingInfo.city}
                        onChange={handleBillingChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </label>
                <label htmlFor="state" className="block text-gray-700 text-sm font-semibold mb-2">
                    State
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        value={billingInfo.state}
                        onChange={handleBillingChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </label>
            </div>
            <label htmlFor="postalCode" className="block text-gray-700 text-sm font-semibold mb-2">
                Postal Code
                <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={billingInfo.postalCode}
                    onChange={handleBillingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
        </form>
    </div>
);

const DeliveryOptions = ({ deliveryOption, setDeliveryOption }) => (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Options</h2>
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

const OrderSummary = ({ cartSummary, calculateSubtotal, calculateTotal, discount }) => {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            {cartSummary.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                    <div>
                        <p className="text-lg font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">
                            {currencyFormatter.format(item.price)} x {item.quantity}
                        </p>
                    </div>
                    <p className="text-lg font-semisemibold text-gray-800">
                        {currencyFormatter.format(item.price * item.quantity)}
                    </p>
                </div>
            ))}
            <div
                className="flex justify-between items-center mt-4 text-lg font-semibold text-gray-800"
                aria-label="Subtotal"
            >
                <span>Subtotal:</span>
                <span>{currencyFormatter.format(calculateSubtotal())}</span>
            </div>
            <div className="flex justify-between items-center mt-4 text-lg font-semibold text-gray-800">
                <span>Discount ({discount}%):</span>
                <span>{currencyFormatter.format((calculateSubtotal() * discount) / 100)}</span>
            </div>
            <div className="flex justify-between items-center mt-4 text-lg font-semibold text-gray-800">
                <span>Delivery:</span>
                <span>{currencyFormatter.format(calculateTotal() - calculateSubtotal() + ((calculateSubtotal() * discount) / 100))}</span>
            </div>
            <div
                className="flex justify-between items-center mt-4 text-lg font-semibold text-gray-800"
                aria-label="Total"
            >
                <span>Total:</span>
                <span>{currencyFormatter.format(calculateTotal())}</span>
            </div>
        </div>
    );
};

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
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
                className={`bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                aria-label="Place Order"
                disabled={isLoading}
            >
                {isLoading ? "Placing Order..." : "Place Order"}
            </button>
        </div>
    );
};

const CheckoutPage = () => {
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
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
    });
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [deliveryOption, setDeliveryOption] = useState("Standard Delivery");
    const [discount, setDiscount] = useState(0);

    const cartSummary = [
        { id: 1, name: "Wireless Headphones", price: 1499, quantity: 2 },
        { id: 2, name: "Bluetooth Speaker", price: 2999, quantity: 1 },
    ];

    const calculateSubtotal = () =>
        cartSummary.reduce((total, item) => total + item.price * item.quantity, 0);

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const deliveryFee = deliveryOption === "Express Delivery" ? 150 : 50;
        const discountAmount = (subtotal * discount) / 100;
        return subtotal + deliveryFee - discountAmount;
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handlePlaceOrder = () => {
        alert("Your order has been placed successfully!");
        console.log("Order Details:", { billingInfo, deliveryOption, paymentMethod });
    };

    return (
        <div
            className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
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
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-gray-600 peer dark:bg-gray-300 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                    </label>
                </div>
            ))}

            {isSidebarOpen && <Sidebar isMobile={isMobile} toggleSidebar={isMobile ? toggleSidebar : null} />}
            {/* Main Content */}
            <div className="flex-1 px-6 sm:px-20 py-32">
                <div className="flex justify-between mb-10">
                    <h1 className="text-3xl font-semibold leading-none">Checkout</h1>

                </div>
                <BillingInfo billingInfo={billingInfo} handleBillingChange={handleBillingChange} />
                <DeliveryOptions deliveryOption={deliveryOption} setDeliveryOption={setDeliveryOption} />
                <OrderSummary
                    cartSummary={cartSummary}
                    calculateSubtotal={calculateSubtotal}
                    calculateTotal={calculateTotal}
                    discount={discount}
                />
                <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                <PlaceOrder handlePlaceOrder={handlePlaceOrder} />
            </div>
        </div>
    );
};

export default CheckoutPage;
