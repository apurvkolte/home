import { products } from '@/data/products';
import Link from 'next/link';
import { FiX, FiHeart, FiShoppingCart, FiChevronLeft } from 'react-icons/fi';

const ComparePage = () => {
    const comparedProductIds = [1, 2, 3];
    const comparedProducts = products.filter(product =>
        comparedProductIds.includes(product.id)
    );

    if (comparedProducts.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">No Products to Compare</h2>
                <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <FiChevronLeft className="mr-1" > Continue Shopping</FiChevronLeft>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto  py-32">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Compare Products</h1>
                <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FiChevronLeft className="mr-1" > Back to Shop</FiChevronLeft>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full">
                    {/* Product Images Row */}
                    <thead>
                        <tr>
                            <th className="w-1/5 p-4 text-left">Features</th>
                            {comparedProducts.map(product => (
                                <th key={product.id} className="w-1/5 p-4 relative">
                                    <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                                        <FiX size={20} />
                                    </button>
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-40 h-40 mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                            {product.badge && (
                                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                    {product.badge}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-semibold text-center mb-2">{product.name}</h3>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {/* Price Row */}
                        <tr className="border-t">
                            <td className="p-4 font-medium">Price</td>
                            {comparedProducts.map(product => (
                                <td key={`price-${product.id}`} className="p-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-lg font-bold text-gray-900">
                                            ${product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                        {product.discount && (
                                            <span className="text-sm text-green-600">
                                                {product.discount}% off
                                            </span>
                                        )}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Rating Row */}
                        <tr className="border-t">
                            <td className="p-4 font-medium">Rating</td>
                            {comparedProducts.map(product => (
                                <td key={`rating-${product.id}`} className="p-4">
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="ml-1 text-gray-600">
                                                ({product.rating})
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Availability Row */}
                        <tr className="border-t">
                            <td className="p-4 font-medium">Availability</td>
                            {comparedProducts.map(product => (
                                <td key={`stock-${product.id}`} className="p-4 text-center">
                                    {product.stock > 0 ? (
                                        <span className="text-green-600">In Stock ({product.stock})</span>
                                    ) : (
                                        <span className="text-red-600">Out of Stock</span>
                                    )}
                                </td>
                            ))}
                        </tr>

                        {/* Key Attributes */}
                        {Object.keys(comparedProducts[0].attributes).map(attr => (
                            <tr key={attr} className="border-t">
                                <td className="p-4 font-medium">{attr}</td>
                                {comparedProducts.map(product => (
                                    <td key={`${attr}-${product.id}`} className="p-4 text-center">
                                        {product.attributes[attr]}
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Action Buttons */}
                        <tr className="border-t">
                            <td className="p-4"></td>
                            {comparedProducts.map(product => (
                                <td key={`actions-${product.id}`} className="p-4">
                                    <div className="flex flex-col space-y-2">
                                        <button className="flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                            <FiShoppingCart size={16} />
                                            <span>Add to Cart</span>
                                        </button>
                                        <button className="flex items-center justify-center space-x-1 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded">
                                            <FiHeart size={16} />
                                            <span>Wishlist</span>
                                        </button>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ComparePage;