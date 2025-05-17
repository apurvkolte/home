import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductRating from './ProductRating';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProductSpecifications from './ProductSpecifications';
import RelatedProducts from '@/components/common/RelatedProducts';
import { useRouter } from 'next/router';
import { products } from '@/data/products';
import MovableZoomImage from './MovableZoomImage';
import { useCart } from '../../contexts/cart/cartContext';
import { addItemToCart } from '../../contexts/cart/cartReducer';
import { FaShoppingCart, FaBolt } from 'react-icons/fa';

const ProductDetails2 = () => {
    const router = useRouter();
    const id = router.query.id;
    const product = products.find((item) => item.id == id);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([
        {
            name: "John Smith",
            profileImage: "/avatar/avatar-1.jpg",
            rating: 5,
            comment: "The product quality is fantastic! Battery life is excellent.",
        },

        {
            name: "Sophia Davis",
            profileImage: "/avatar/avatar-4.jpg",
            rating: 4,
            comment: "Great for long hours of usage, but the build could improve.",
        },

        {
            name: "Olivia Taylor",
            profileImage: "/avatar/avatar-6.jpg",
            rating: 5,
            comment: "Absolutely loved it! Perfect for daily use and long travels.",
        },
        {
            name: "William Moore",
            profileImage: "/avatar/avatar-7.jpg",
            rating: 4,
            comment: "Good connectivity and usability, but slightly overpriced.",
        },
        {
            name: "Isabella Thompson",
            profileImage: "/avatar/avatar-8.jpg",
            rating: 5,
            comment: "Highly recommended! Worth every penny for its features.",
        },
    ]);

    const reviewSectionRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };
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
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () =>
        quantity > 1 ? setQuantity(quantity - 1) : null;

    const MySwal = withReactContent(Swal);


    const handleSubmitReview = () => {
        if (rating && comment.trim() !== "") {
            const newReview = {
                name: "New User",
                profileImage: "/default_avatar.jpg",
                rating,
                comment,
            };
            setReviews([newReview, ...reviews]);
            setRating(0);
            setComment("");
            MySwal.fire({
                title: "Review submitted successfully!",
                text: "Thank you for your thoughtful review.",
                icon: "success",
                timer: 3000,
                showConfirmButton: false,
            })
        }
    };
    const handleClick = () => {
        reviewSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='sm:p-10'>
            {product &&
                <div className="flex flex-col sm:flex-row justify-between max-w-screen-2xl w-full mx-auto container py-28 p-5 sm:p-20 gap-10">
                    {/* Image Gallery Section */}
                    <div className="hidden w-1/2 sm:flex flex-col items-center gap-4">
                        {/* Main Image */}
                        <div className="w-full h-[500px] object-cover border rounded">
                            <MovableZoomImage mainImage={mainImage} />
                        </div>

                        <div className="flex gap-2">
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
                                            className={`w-20 h-20 object-cover border rounded-md cursor-pointer ${mainImage === img ? 'border-zinc-700 border-2' : 'hover:border-zinc-700'
                                                }`}
                                            onClick={() => setMainImage(img)}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="sm:hidden image w-full flex flex-col py-5  gap-5">
                        {/* Thumbnails */}
                        <div className="thumbnail flex justify-center items-center gap-3">
                            {[
                                product.image,
                                product.image1,
                                product.image2 // Includes all images
                            ].filter(Boolean) // Filters out null/undefined images
                                .map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-[60px] h-[60px] object-cover border rounded-md cursor-pointer ${mainImage === img ? 'border-zinc-700 border-2' : 'hover:border-zinc-700'
                                            }`}
                                        onClick={() => setMainImage(img)} // Dynamically set the main image
                                    />
                                ))}
                        </div>
                        {/* Main Image */}
                        <div className="w-full ">
                            <img
                                src={mainImage}
                                width="100%"
                                alt="Main Product"
                                className="w-full h-[50vh] object-cover border rounded-md"
                            />
                        </div>
                    </div>

                    <div className="sm:w-1/2 flex flex-col gap-6 border-r pr-5">
                        <div>
                            <h1 className="text-3xl font-semibold text-zinc-600 tracking-tight">{product.name}</h1>
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg text-gray-500">{product.category}</p>
                                <div className="flex items-center space-x-2">
                                    <ProductRating rating={4.4} totalReviews={120} handleClick={handleClick} />
                                </div>
                            </div>
                        </div>

                        {/* Available Colors */}
                        <div>
                            <h2 className="text-xl font-semibold text-zinc-600 tracking-tight mb-3">Available Colors</h2>
                            <div className="flex space-x-2">
                                {["Red", "Blue", "Green", "Yellow", "Black"].map((color) => (
                                    <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full bg-${color.toLowerCase()}-500 border-2 ${selectedColor === color ? "border-gray-400" : "border-transparent"
                                            }`}
                                        onClick={() => handleColorSelection(color)}
                                    ></button>
                                ))}
                            </div>
                            {selectedColor && (
                                <p className="mt-4 text-gray-700">
                                    Selected Color: <span className="font-bold">{selectedColor}</span>
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-semibold text-zinc-600 tracking-tight mb-3">Description</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Phasellus nec nulla vel metus vestibulum feugiat.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Curabitur aliquam sapien ut tortor facilisis, vitae sagittis nunc luctus.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Suspendisse potenti. Sed sit amet tortor nec lorem cursus bibendum.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Etiam vel risus ut nunc fermentum fringilla sed eget nunc.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Mauris ut justo non nulla finibus tincidunt vitae ut urna.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>Aliquam erat volutpat. Integer blandit eu justo nec viverra.</span>
                                </li>
                            </ul>

                        </div>

                        {/* Specifications Table */}
                        <ProductSpecifications />
                    </div>

                    {/* Price Section */}
                    <div className="sm:w-1/4 flex flex-col gap-6  bg-gray-50 p-5 rounded shadow-md">
                        <div>
                            <span className="text-2xl font-bold text-green-600">${product.price}</span>
                            <span className="text-lg text-gray-400 line-through ml-2">${product.originalPrice}</span>
                            <span className="text-lg text-red-500 ml-2">({product.discount}% OFF)</span>
                        </div>
                        <p className="mt-2 text-green-600 font-medium">In Stock</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center mt-4 ">
                            <button
                                onClick={decreaseQuantity}
                                className="w-10 h-10 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none flex items-center justify-center"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="w-12 h-10 text-center border border-gray-300 rounded outline-none"
                                value={quantity}
                                readOnly
                            />
                            <button
                                onClick={increaseQuantity}
                                className="w-10 h-10 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <Link href='/shipping-address'>
                                <button
                                    className="flex items-center gap-2 px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition hover:shadow-md active:scale-95"
                                >
                                    <FaBolt className="hidden sm:block text-lg" />
                                    Buy Now
                                </button>
                            </Link>
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center gap-2 px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition hover:shadow-md active:scale-95"
                            >
                                <FaShoppingCart className="hidden sm:block text-lg" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            }

            <div className='container sm:w-1/2 mr-40  mx-auto p-10'>
                {/* Reviews */}
                <div ref={reviewSectionRef} className=" mb-10">
                    <h2 className="text-xl font-semibold text-zinc-600 tracking-tight">Submit Review </h2>
                    <div className="flex space-x-1 mt-5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="text-3xl"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                {star <= (hoverRating || rating) ? (
                                    <AiFillStar className="text-yellow-500" />
                                ) : (
                                    <AiOutlineStar className="text-gray-400" />
                                )}
                            </button>
                        ))}
                    </div>
                    <textarea
                        name="review"
                        id="review"
                        placeholder="Write your review here..."
                        className="w-full border rounded mt-4 p-2 focus:outline-none focus:ring-1 focus:ring-green-200"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="4"
                    ></textarea>
                    <br />
                    <button
                        onClick={handleSubmitReview}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
                    >
                        Submit Review
                    </button>
                    <h2 className="text-xl mt-6 font-semibold text-zinc-600 tracking-tight">Reviews </h2>

                    {reviews.map((review, index) => (
                        <div key={index} className="flex items-start space-x-4 mt-5">
                            <img
                                src={review.profileImage}
                                alt={review.name}
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div>
                                <p className="font-bold text-gray-700">{review.name}</p>
                                <div className="flex space-x-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star}>
                                            {star <= review.rating ? (
                                                <AiFillStar />
                                            ) : (
                                                <AiOutlineStar />
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis soluta voluptate, dignissimos atque dolorem, numquam accusantium laboriosam ex voluptatibus magnam odio aperiam quia esse?</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='z-40 sticky bg-white'>
                <RelatedProducts category={product?.category} />
            </div>
        </div>
    )
}

export default ProductDetails2