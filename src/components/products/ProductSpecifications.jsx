import React, { useState } from "react";

const ProductSpecifications = () => {
    // Specifications Data
    const productDetails = [
        { title: "Feature One", description: "Lorem ipsum dolor sit amet" },
        { title: "Feature Two", description: "Consectetur adipiscing elit" },
        { title: "Feature Three", description: "Sed do eiusmod tempor" },
        { title: "Feature Four", description: "Incididunt ut labore et dolore" },
        { title: "Feature Five", description: "Magna aliqua ut enim" },
        { title: "Feature Six", description: "Ad minim veniam quis" },
        { title: "Feature Seven", description: "Nostrud exercitation ullamco" },
    ];


    // State for toggling visibility of extra details
    const [showMore, setShowMore] = useState(false);

    // Toggle functionality
    const handleToggleShow = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-zinc-600 tracking-tight">Product Specifications</h2>
            {productDetails.length ? (
                <table className="w-full border-collapse border border-dashed border-zinc-200 mt-2 table-auto">
                    <thead>
                        <tr>
                            <th
                                className="border border-dashed border-zinc-200 px-4 py-2 bg-zinc-100"
                                colSpan="2"
                            >
                                <h5 className="prod-heading text-left font-semibold text-zinc-600 tracking-tight">
                                    Technical Details
                                </h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productDetails
                            .slice(0, showMore ? productDetails.length : 3)
                            .map((field, index) => (
                                <tr
                                    key={index}
                                    className={`border border-dashed border-zinc-200 ${index % 2 === 0 ? "bg-zinc-100" : "bg-white"
                                        } hover:bg-zinc-100`}
                                >
                                    <td className="border border-dashed border-zinc-200 px-4 py-2 text-zinc-500">
                                        {field.title}
                                    </td>
                                    <td className="border border-dashed border-zinc-200 px-4 py-2 text-zinc-800">
                                        {field.description}
                                    </td>
                                </tr>
                            ))}
                        <tr>
                            <td colSpan="2" className="pt-2 pb-2 px-5 text-left">
                                <button
                                    className="text-zinc-600 hover:text-zinc-800 text-sm focus:outline-none"
                                    onClick={handleToggleShow}
                                >
                                    {showMore ? (
                                        <div>
                                            <small>SHOW LESS</small> <b>&#8744;</b>
                                        </div>
                                    ) : (
                                        <div>
                                            <small>SHOW MORE</small> <b>&#8743;</b>
                                        </div>
                                    )}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No specifications available.</p>
            )}
        </div>
    );
};

export default ProductSpecifications;
