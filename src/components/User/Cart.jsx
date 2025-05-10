import React, { Fragment } from 'react';
import Link from 'next/link';
import { FiTrash2, FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../../contexts/cart/cartContext';
import { addItemToCart, removeItemFromCart } from '../../contexts/cart/cartReducer';

const Cart = () => {
    const { state, dispatch } = useCart();
    const cartItems = state.cartItems;

    const handleIncreaseQty = (item) => {
        const newQty = item.quantity + 1;
        if (newQty > item.stock) {
            alert(`"${item.name}" available stock is ${item.stock}`);
            return;
        }
        dispatch(addItemToCart(item.product, newQty));
    };

    const handleDecreaseQty = (item) => {
        const newQty = item.quantity - 1;
        if (newQty <= 0) return;
        dispatch(addItemToCart(item.product, newQty));
    };

    const handleRemoveCartItem = (id) => {
        if (confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItemFromCart(id));
        }
    };

    const handleCheckout = () => {
        console.log('Checkout initiated');
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => {
            const itemTotal = item.stock === 0 || item.stock < item.quantity ? 0 : item.quantity * item.price;
            return acc + itemTotal;
        }, 0);
    };

    const calculateTotalItems = () => {
        return cartItems.reduce((acc, item) => {
            const validQuantity = item.stock === 0 || item.stock < item.quantity ? 0 : item.quantity;
            return acc + validQuantity;
        }, 0);
    };

    const formattedPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    return (
        <div className="container mx-auto p-4 md:p-8 py-20 md:py-36">
            <Fragment>
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <FiShoppingCart className="text-gray-300 text-6xl mb-4" />
                        <h2 className="text-2xl font-medium text-gray-600 mb-4">Your Cart is Empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you have not added anything to your cart yet</p>
                        <Link href="/products">
                            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition">
                                <FiArrowLeft /> Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Fragment>
                        <div className="flex justify-between items-center mb-6 sm:px-10">
                            <h2 className="mt-5 text-2xl font-semibold">
                                Your Cart: <b className="text-blue-600">{cartItems.length} items</b>
                            </h2>
                            <Link href="/products">
                                <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm font-medium">
                                    <FiArrowLeft size={14} /> Continue Shopping
                                </button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:px-10">
                            <div className="lg:col-span-8 border rounded">
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b">
                                        <div className="col-span-5 font-medium text-gray-600">Product</div>
                                        <div className="col-span-2 font-medium text-gray-600">Price</div>
                                        <div className="col-span-3 font-medium text-gray-600">Quantity</div>
                                        <div className="col-span-2 font-medium text-gray-600 text-right">Subtotal</div>
                                    </div>

                                    <div className="divide-y">
                                        {cartItems.map((item) => (
                                            <div key={item.product} className="grid grid-cols-2 md:grid-cols-12 p-4 items-center">
                                                <div className="col-span-2 md:col-span-5 flex items-center gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md border"
                                                    />
                                                    <div>
                                                        <Link
                                                            href={`/product-details/${item.product}`}
                                                            className="text-base font-medium text-gray-800 hover:text-blue-600 hover:underline line-clamp-2"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <button
                                                            onClick={() => handleRemoveCartItem(item.product)}
                                                            className="mt-1 flex items-center gap-1 text-sm text-gray-500 hover:text-red-500"
                                                        >
                                                            <FiTrash2 size={14} /> Remove
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="text-right md:text-left md:col-span-2">
                                                    <span className="text-gray-800 font-medium">{formattedPrice(item.price)}</span>
                                                </div>

                                                <div className="col-span-2 md:col-span-3 mt-4 md:mt-0">
                                                    <div className="flex items-center justify-end md:justify-start">
                                                        <button
                                                            className={`px-3 py-1 border rounded-l-md ${item.quantity <= 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50'}`}
                                                            onClick={() => handleDecreaseQty(item)}
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <div className="px-4 py-1 border-t border-b text-center w-12">
                                                            {item.quantity}
                                                        </div>
                                                        <button
                                                            className={`px-3 py-1 border rounded-r-md ${item.quantity >= item.stock ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50'}`}
                                                            onClick={() => handleIncreaseQty(item)}
                                                            disabled={item.quantity >= item.stock}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    {item.stock === 0 || item.stock < item.quantity ? (
                                                        <p className="text-xs text-red-500 mt-1">Out of Stock</p>
                                                    ) : (
                                                        <p className="text-xs text-gray-500 mt-1">{item.stock} available</p>
                                                    )}
                                                </div>

                                                <div className="text-right md:col-span-2 mt-4 md:mt-0">
                                                    <span className="font-medium">
                                                        {formattedPrice(item.price * item.quantity)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 ">
                                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28 border">
                                    <h4 className="text-xl font-semibold mb-4">Order Summary</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Subtotal ({calculateTotalItems()} items)</span>
                                            <span className="font-medium">{formattedPrice(calculateSubtotal())}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="font-medium">FREE</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Tax</span>
                                            <span className="font-medium">Calculated at checkout</span>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span>{formattedPrice(calculateSubtotal())}</span>
                                    </div>
                                    <Link href="/shipping-address">
                                        <button
                                            className={`w-full mt-6 py-3 px-6 rounded-md font-medium transition ${calculateSubtotal() === 0 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                            disabled={calculateSubtotal() === 0}
                                            onClick={handleCheckout}
                                        >
                                            Proceed to Checkout
                                        </button>
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-3 text-center">
                                        By placing your order, you agree to our Terms of Service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
        </div>
    );
};

export default Cart;