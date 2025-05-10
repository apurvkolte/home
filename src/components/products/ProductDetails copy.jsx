import React, { useState, useRef } from 'react'
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductRating from './ProductRating';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductDetails = () => {
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

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () =>
        quantity > 1 ? setQuantity(quantity - 1) : null;

    const MySwal = withReactContent(Swal);


    const handleSubmitReview = () => {
        if (rating && comment.trim() !== "") {
            const newReview = {
                name: "New User", // Replace with the actual user name or dynamic data
                profileImage: "/default_avatar.jpg", // Replace with the actual user profile image or default
                rating,
                comment,
            };
            setReviews([newReview, ...reviews]); // Add new review at the top
            setRating(0); // Reset rating
            setComment(""); // Reset comment
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
        <div className='py-20'>
            <div className='flex justify-between max-w-screen-2xl w-full mx-auto h-screen'>
                <div className='image w-full flex justify-between py-10 px-5 '>
                    <div className='thumnail w-1/6 flex flex-col justify-start items-center gap-2 p-2'>
                        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" className='w-[70px] h-[70px] object-cover object-center border rounded-md  hover:border-cyan-950' />
                        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" className='w-[70px] h-[70px] object-cover object-center border rounded-md  hover:border-cyan-950' />
                        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" className='w-[70px] h-[70px] object-cover object-center border rounded-md   hover:border-cyan-950' />
                        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" className='w-[70px] h-[70px] object-cover object-center border rounded-md   hover:border-cyan-950' />
                    </div>
                    <div className=' w-full h-screen p-2'>
                        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" className='w-full h-[66vh] object-cover object-center border rounded' />
                    </div>
                </div>
                <div className='productData w-full py-10 px-10 h-[100vh] scroll-auto overflow-auto'>
                    <div className="mt-4">
                        <h1 className="text-2xl font-semibold">Product Name</h1>
                        <p className="text-xm mt-1 text-zinc-500">Category: Electronics</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <ProductRating
                                rating={4.4}
                                totalReviews={120}
                                handleClick={handleClick}
                            />

                        </div>
                        <p className="mt-2 text-green-600">In Stock</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4 mt-4">
                        <button
                            onClick={decreaseQuantity}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            +
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded">
                            Buy Now
                        </button>
                        <button className="px-6 py-2 bg-gray-600 text-white rounded">
                            Add to Cart
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Description</h2>
                        <p className="text-gray-700">
                            This is a detailed description of the product.
                        </p>
                    </div>

                    {/* Specifications Table */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Specifications</h2>
                        <table className="w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Specification</th>
                                    <th className="border border-gray-300 px-4 py-2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Material</td>
                                    <td className="border border-gray-300 px-4 py-2">Example Material</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Dimensions</td>
                                    <td className="border border-gray-300 px-4 py-2">Example Size</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
            <div className='container mx-auto w-[50%] '>
                {/* Reviews */}
                <div ref={reviewSectionRef} className="mt-6">
                    <h2 className="text-xl font-semibold">Reviews</h2>
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
                        className="w-full border rounded mt-4 p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="4"
                    ></textarea>
                    <button
                        onClick={handleSubmitReview}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
                    >
                        Submit Review
                    </button>

                    {reviews.map((review, index) => (
                        <div key={index} className="flex items-start space-x-4 mt-4">
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
                                <p className="mt-2 text-gray-700">{review.comment}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default ProductDetails