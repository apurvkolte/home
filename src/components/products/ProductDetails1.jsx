import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductRating from './ProductRating';
import ProductSpecifications from './ProductSpecifications';
import RelatedProducts from '@/components/common/RelatedProducts';
import ProductDetailsWithTabs from './ProductDetailsWithTabs';
import { useRouter } from 'next/router';
import { useCart } from '../../contexts/cart/cartContext';
import { addItemToCart } from '../../contexts/cart/cartReducer';
import { products } from '@/data/products';
import productsData from '@/data/productsData';
import MovableZoomImage from './MovableZoomImage1';

const ProductDetails1 = () => {
    const router = useRouter();
    const id = router.query.id;
    const product = products.find((item) => item.id == id);
    const [quantity, setQuantity] = useState(1);


    const reviewSectionRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () =>
        quantity > 1 ? setQuantity(quantity - 1) : null;

    const [mainImage, setMainImage] = useState(product?.image);
    useEffect(() => {
        setMainImage(product?.image || "/images/default.jpg");
    }, [product]);


    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch(addItemToCart(product.id, quantity));
    };

    const hoverHandler = (imageName) => {
        setMainImage(imageName);
    };
    const handleClick = () => {
        reviewSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className=''>
            {product &&
                <div className='flex flex-col sm:flex-row justify-between max-w-screen-2xl sm:h-screen w-full mx-auto  py-20'>
                    <div className="hidden sm:flex image w-full justify-between py-10 px-5">
                        {/* Left Section: Thumbnails */}
                        <div className='thumnail w-1/6 flex flex-col justify-start items-center gap-2 p-2'>
                            {[product.image, product.image1, product.image2]
                                .filter(Boolean)
                                .map((img, i) => (
                                    <div
                                        key={i}
                                        onMouseOver={() => hoverHandler(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${i}`}
                                            className={`w-[70px] h-[70px] object-cover object-center border rounded-md cursor-pointer ${mainImage === img ? 'border-zinc-700 border-2' : 'hover:border-zinc-700'
                                                }`}
                                        />
                                    </div>
                                ))}
                        </div>
                        {/* Right Section: Main Image with Zoom */}
                        <div className=' w-full h-screen'>
                            <div className='w-full border object-cover object-center'>
                                <MovableZoomImage mainImage={mainImage} />
                            </div>

                        </div>
                    </div>
                    <div className="sm:hidden image w-full flex flex-col justify-start items-center py-5 px-3 gap-4">
                        {/* Thumbnail Section */}
                        <div className="thumbnail flex flex-row justify-center items-center gap-3 overflow-x-auto w-full">
                            {[
                                product.image,
                                product.image1,
                                product.image2
                            ].filter(Boolean)
                                .map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-[60px] h-[60px] object-cover object-center border rounded-md cursor-pointer ${mainImage === img ? 'border-zinc-700 border-2' : 'hover:border-zinc-700'
                                            }`}
                                        onClick={() => setMainImage(img)}
                                    />
                                ))}
                        </div>
                        {/* Main Image Section */}
                        <div className="w-full h-auto p-2">
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className="w-full h-[50vh] object-cover object-center border rounded"
                            />
                        </div>
                    </div>

                    <div className='productData sm:w-1/2 sm:py-20 px-10'>
                        <div className="mt-4">
                            <h1 className="text-2xl font-semibold text-zinc-600 tracking-tight">{product.name}</h1>
                            <p className="text-xm mt-1 text-zinc-500"> {product.category}</p>
                            <div className="flex items-center space-x-2">
                                <ProductRating
                                    rating={4.4}
                                    totalReviews={120}
                                    handleClick={handleClick}
                                />

                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <span className="text-3xl font-bold text-green-600">${product.price}</span>
                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                <span className="text-sm text-red-500">({product.discount}% OFF)</span>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-xl  font-semibold text-zinc-600 tracking-tight">Available Colors</h2>
                                <div className="flex space-x-4 mt-2">
                                    <button
                                        className={`w-8 h-8 rounded-full bg-red-500 border-2 ${selectedColor === "Red" ? "border-slate-400" : "border-transparent"
                                            }`}
                                        aria-label="Select Red"
                                        onClick={() => handleColorSelection("Red")}
                                    ></button>
                                    <button
                                        className={`w-8 h-8 rounded-full bg-blue-500 border-2 ${selectedColor === "Blue" ? "border-slate-400" : "border-transparent"
                                            }`}
                                        aria-label="Select Blue"
                                        onClick={() => handleColorSelection("Blue")}
                                    ></button>
                                    <button
                                        className={`w-8 h-8 rounded-full bg-green-500 border-2 ${selectedColor === "Green" ? "border-slate-400" : "border-transparent"
                                            }`}
                                        aria-label="Select Green"
                                        onClick={() => handleColorSelection("Green")}
                                    ></button>
                                    <button
                                        className={`w-8 h-8 rounded-full bg-yellow-500 border-2 ${selectedColor === "Yellow" ? "border-slate-400" : "border-transparent"
                                            }`}
                                        aria-label="Select Yellow"
                                        onClick={() => handleColorSelection("Yellow")}
                                    ></button>
                                    <button
                                        className={`w-8 h-8 rounded-full bg-black border-2 ${selectedColor === "Black" ? "border-slate-400" : "border-transparent"
                                            }`}
                                        aria-label="Select Black"
                                        onClick={() => handleColorSelection("Black")}
                                    ></button>
                                </div>
                                {selectedColor && (
                                    <p className="mt-4 text-gray-600">
                                        Color: <span className="font-bold">{selectedColor}</span>
                                    </p>
                                )}
                            </div>
                            <p className="mt-2 text-green-600">In Stock</p>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center mt-4  stockCounter">
                            <button
                                onClick={decreaseQuantity}
                                className="w-10 h-10 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none flex items-center justify-center minus-btn"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="w-12 h-10 text-center border border-gray-300 rounded outline-none stock-input"
                                value={quantity}
                                readOnly
                            />
                            <button
                                onClick={increaseQuantity}
                                className="w-10 h-10 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none flex items-center justify-center plus-btn"
                            >
                                +
                            </button>
                        </div>


                        {/* Action Buttons */}
                        <div className="flex space-x-4 mt-4">
                            <Link href='/shipping-address'>
                                <button className="px-6 py-2 bg-green-600 text-white rounded">
                                    Buy Now
                                </button>
                            </Link>
                            <button onClick={handleAddToCart} className="px-6 py-2 bg-gray-600 text-white rounded">
                                Add to Cart
                            </button>
                        </div>

                    </div>

                </div>
            }

            <ProductDetailsWithTabs />

            <RelatedProducts category={product?.category} />
        </div>
    )
}

export default ProductDetails1