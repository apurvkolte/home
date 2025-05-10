import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductSpecifications from "./ProductSpecifications";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductDetailsWithTabs = () => {
    const [activeTab, setActiveTab] = useState("description");
    const MySwal = withReactContent(Swal);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");

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
            });
        }
    };

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
    ]);

    const renderContent = () => {
        if (activeTab === "description") {
            return (
                <div className="mt-6 md:mt-12">
                    <h2 className="text-xl mb-3 font-semibold text-zinc-600 tracking-tight">
                        Description
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500">✔</span>
                            <span>Crystal-clear sound with deep bass.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500">✔</span>
                            <span>Ergonomic design for all-day comfort.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500">✔</span>
                            <span>Advanced noise cancellation for immersive listening.</span>
                        </li>
                    </ul>
                </div>
            );
        } else if (activeTab === "specifications") {
            return (
                <div className="mt-6 md:mt-12">
                    <ProductSpecifications />
                </div>
            );
        } else if (activeTab === "reviews") {
            return (
                <div className="mt-6 md:mt-12">
                    <h2 className="text-xl mb-4 font-semibold text-zinc-600 tracking-tight">
                        Submit Review
                    </h2>
                    <div className="flex space-x-2">
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
                        placeholder="Write your review here..."
                        className="w-full border rounded mt-4 p-3 text-gray-700 focus:ring-green-300"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="3"
                    ></textarea>
                    <button
                        onClick={handleSubmitReview}
                        className="mt-4 bg-green-600 text-white px-6 py-2 rounded shadow-md hover:bg-green-700 transition"
                    >
                        Submit Review
                    </button>
                    <div className="mt-6 md:mt-12">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            Customer Reviews
                        </h2>
                        {reviews.map((review, index) => (
                            <div key={index} className="flex items-start space-x-4 mt-4">
                                <img
                                    src={review.profileImage}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="text-gray-800 font-semibold">{review.name}</p>
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
                                    <p className="mt-1 text-gray-600">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto w-full md:w-[80%] p-4 md:p-16 border">
            <div className="flex justify-around border-b border-gray-300">
                <button
                    className={`px-4 md:px-6 py-3 bg-zinc-800 text-white font-semibold ${activeTab === "description"
                            ? "border-b-4 border-green-500 text-green-500"
                            : "text-gray-600 hover:text-green-500"
                        }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`px-4 md:px-6 py-3 bg-zinc-800 text-white font-semibold ${activeTab === "specifications"
                            ? "border-b-4 border-green-500 text-green-500"
                            : "text-gray-600 hover:text-green-500"
                        }`}
                    onClick={() => setActiveTab("specifications")}
                >
                    Specifications
                </button>
                <button
                    className={`px-4 md:px-6 py-3 bg-zinc-800 text-white font-semibold ${activeTab === "reviews"
                            ? "border-b-4 border-green-500 text-green-500"
                            : "text-gray-600 hover:text-green-500"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews
                </button>
            </div>
            <div className="">{renderContent()}</div>
        </div>
    );
};

export default ProductDetailsWithTabs;