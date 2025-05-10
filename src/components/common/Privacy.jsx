import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-6 lg:px-56 py-16 mt-16">
                <div className="bg-white rounded-lg shadow-lg p-8 lg:p-16">
                    <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Privacy Policy</h1>
                    <p className="text-sm text-gray-600 text-center mb-10">
                    </p>

                    <div className="mb-10">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Welcome to <span className="font-semibold text-green-700">Green Buy</span>. At Green Buy, we take your privacy seriously. Please read through this Privacy Policy to understand how we collect, use, and protect your personal information.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ligula et libero luctus, in feugiat nulla malesuada. Sed euismod suscipit felis, eu luctus eros bibendum id.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vivamus volutpat ligula et dui tincidunt scelerisque.</li>
                        <li>Maecenas volutpat mi a nisl pharetra sollicitudin.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-6">
                        Donec tincidunt libero non magna eleifend, id vehicula orci ultrices. Curabitur nec ante vel arcu tempor sagittis. Duis scelerisque ligula a elit tincidunt tincidunt.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Vestibulum quis arcu at velit venenatis dapibus.</li>
                        <li>Nulla facilisi. Aliquam tempor velit at diam egestas, vel sodales libero volutpat.</li>
                        <li>Quisque id quam vestibulum, cursus justo nec, suscipit est.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies and Tracking</h2>
                    <p className="text-gray-700 mb-6">
                        Nam ac est non turpis laoreet tincidunt sed a arcu. Duis facilisis libero vel metus suscipit efficitur. Morbi non justo feugiat, consequat magna eu, vehicula justo.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Protection</h2>
                    <p className="text-gray-700 mb-6">
                        Curabitur eu odio vel libero maximus rhoncus nec at quam. Integer convallis ligula nulla, id hendrerit purus elementum sed. Nullam sit amet urna id mauris dictum fringilla.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
                    <p className="text-gray-700 mb-6">
                        Nulla facilisi. Pellentesque mollis justo in dui feugiat, sit amet dictum metus bibendum. Cras tempor gravida augue, id tempor odio varius a.
                    </p>

                    <div className="mt-16">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                        <p className="text-gray-700">
                            For any queries regarding this privacy policy, you can reach us at:
                        </p>
                        <ul className="list-inside mt-4 text-gray-700">
                            <li><strong>Email:</strong> lorem@ipsum.com</li>
                            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                            <li><strong>Address:</strong> 456 Lorem Ipsum Avenue, City, ZIP Code, Country</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
