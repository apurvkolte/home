import Link from "next/link";
import React, { useState } from "react";

const FAQ = () => {
    const faqData = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Please contact our support team to initiate a return.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can track your package directly on our website or through the carrier's tracking system.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes! We ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination. Duties and taxes may apply depending on your location.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are securely processed.",
        },
        {
            question: "How do I contact customer support?",
            answer: "Our support team is available 24/7 via live chat, email (support@example.com), or phone (1-800-123-4567). Average response time is under 2 hours.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet? <Link href="/contact-us" className="text-blue-600 hover:underline">Contact our support team</Link>.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${openIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                        >
                            <button
                                className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-${index}`}
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        {faq.question}
                                    </h2>
                                    <svg
                                        className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>
                            <div
                                id={`faq-${index}`}
                                className={`px-6 pb-5 sm:px-8 transition-all duration-300 ease-in-out ${openIndex === index ? "block" : "hidden"}`}
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta, quia quo officiis dignissimos provident incidunt voluptatem laudantium dicta. Est natus dolore nobis.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        Still have questions?
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        Contact Support
                        <svg
                            className="ml-3 -mr-1 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;