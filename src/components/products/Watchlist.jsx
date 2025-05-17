import { products } from '@/data/products';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiX, FiChevronLeft } from 'react-icons/fi';

const WatchlistPage = () => {
    const watchlistProductIds = [1, 3, 5, 6];
    const watchlistProducts = products.filter(product =>
        watchlistProductIds.includes(product.id)
    );

    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-0 py-32">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Your Watchlist</h1>
                <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FiChevronLeft className="mr-1" > Continue Shopping</FiChevronLeft>
                </Link>
            </div>

            {watchlistProducts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <FiHeart className="text-gray-400 text-3xl" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Your watchlist is empty</h3>
                    <p className="text-gray-600 mb-6">Save items you love to buy them later</p>
                    <Link
                        href="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                    >
                        Explore Products
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {watchlistProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative group">
                                    {/* Product Image */}
                                    <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Badge */}
                                    {product.badge && (
                                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                            {product.badge}
                                        </span>
                                    )}

                                    {/* Remove from watchlist button */}
                                    <button
                                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                                        title="Remove from watchlist"
                                    >
                                        <FiX className="text-gray-700 hover:text-white" />
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                                        <div className="flex items-center">
                                            <FiHeart className="text-red-500" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-lg font-bold">${product.price.toLocaleString()}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    ${product.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                            {product.discount && (
                                                <span className="text-sm text-green-600 ml-1">
                                                    {product.discount}% off
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500 ml-1">
                                            ({product.rating})
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-2">
                                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center">
                                            <FiShoppingCart className="mr-2" />
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>

                                    {/* Stock Status */}
                                    <div className="mt-3 text-sm">
                                        {product.stock > 0 ? (
                                            <span className="text-green-600">In Stock</span>
                                        ) : (
                                            <span className="text-red-600">Out of Stock</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bulk Actions */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg">
                        <div className="mb-3 sm:mb-0">
                            <span className="font-medium">{watchlistProducts.length} items</span>
                        </div>
                        <div className="flex space-x-3">
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                                Add All to Cart
                            </button>
                            <button className="px-4 py-2 text-red-600 border border-red-200 rounded-md hover:bg-red-50">
                                Remove All
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default WatchlistPage;