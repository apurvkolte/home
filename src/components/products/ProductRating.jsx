import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductRating = ({ rating, totalReviews, handleClick }) => {
    return (
        <div className="flex items-center space-x-2 mt-2">
            {/* Rating Outer */}
            <div className="relative flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) =>
                    star <= rating ? (
                        <AiFillStar key={star} className="text-yellow-400 text-xl" />
                    ) : (
                        <AiOutlineStar key={star} className="text-yellow-500 text-xl" />
                    )
                )}
            </div>
            {/* Reviews Count */}
            <p
                className="cursor-pointer text-gray-600 hover:text-blue-600"
                onClick={handleClick}
            >
                ({totalReviews} reviews)
            </p>
        </div>
    );
};

export default ProductRating;
