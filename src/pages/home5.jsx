import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { products } from '@/data/products';
import Services from '@/components/common/Services';
import { useCart } from '../contexts/cart/cartContext';
import { addItemToCart } from '../contexts/cart/cartReducer';
import Link from 'next/link';

// Mock Data
const featuredProducts = [
    { id: '1', name: 'Product 1', price: 25, imageUrl: '/home/home.jpg', category: 'Electronics', rating: 4.5, description: "A high-quality electronic device." },
    { id: '2', name: 'Product 2', price: 50, imageUrl: '/home/about.jpg', category: 'Clothing', rating: 3.8, description: "Comfortable and stylish clothing item." },
    { id: '3', name: 'Product 3', price: 75, imageUrl: '/home/anoutus.jpg', category: 'Home Goods', rating: 4.9, description: "Elegant home good for modern living." },
    { id: '4', name: 'Product 4', price: 100, imageUrl: '/home/aa.jpg', category: 'Books', rating: 4.2, description: "An interesting book to read." },
];

const categories = [
    { name: 'Electronics', image: '/images/camera.jpg' },
    { name: 'Clothing', image: '/images/menshirt2.jpg' },
    { name: 'Home Goods', image: '/images/coffeecupset1.jpg' },
    { name: 'Bags', image: '/images/bag.jpg' },
    { name: 'Furniture', image: '/images/homedecor2.jpg' },
];

const flashSaleProducts = [
    { id: '5', name: 'This stylish 3-seater sofa is perfect for any living room', price: 50, discount: 50, imageUrl: '/images/sofa1.jpg', endTime: Date.now() + 3600000 },
    { id: '6', name: 'This versatile kitchen trolley provides extra storage and workspace', price: 84, discount: 50, imageUrl: '/images/kitchentrolley1.jpg', endTime: Date.now() + 3600000 },
    { id: '7', name: 'This ergonomic chair is designed for maximum comfort and support', price: 150, discount: 50, imageUrl: '/images/chair1.jpg', endTime: Date.now() + 3600000 },
];

// Simple UI Components
const Button = ({ children, className = '', ...props }) => (
    <button
        className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Card = ({ children, className = '', ...props }) => (
    <div className={`rounded-lg border bg-white shadow-sm overflow-hidden ${className}`} {...props}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
    <div className={`p-0 ${className}`} {...props}>
        {children}
    </div>
);

const CardContent = ({ children, className = '', ...props }) => (
    <div className={`p-4 ${className}`} {...props}>
        {children}
    </div>
);

// Simple Carousel Implementation
const Carousel = ({ children, autoPlay = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);
    const slides = React.Children.toArray(children);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    }, [slides.length]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(goToNext, interval);
            return () => {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        }
    }, [autoPlay, interval, goToNext]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {slide}
                    </div>
                ))}
            </div>
            <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 text-black hover:bg-white/70 p-2 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 text-black hover:bg-white/70 p-2 rounded-full"
            >
                ▶
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const HeroCarousel = () => {
    const slides = [
        {
            imageUrl: '/home/anoutus.jpg',
            title: 'Welcome to Our Store',
            description: 'Discover amazing products and deals.',
            buttonText: 'Shop Now',
            buttonLink: '/',
        },
        {
            imageUrl: '/home/aa.jpg',
            title: 'New Arrivals',
            description: 'Check out our latest collection.',
            buttonText: 'See New Arrivals',
            buttonLink: '/products',
        },
    ];

    return (
        <Carousel autoPlay={true} interval={5000}>
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    <img
                        src={slide.imageUrl}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center text-white p-4 sm:p-8">
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-2xl sm:text-7xl font-bold tracking-tighter text-slate-50 mb-2 sm:mb-4"
                            >
                                {slide.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-sm sm:text-base mb-4 sm:mb-6"
                            >
                                {slide.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Button
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                                >
                                    <div className='cursor-pointer'>{slide.buttonText}</div>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

const CategoryList = () => {
    return (
        <div className="py-12 px-5 sm:px-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-14 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-4">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="flex flex-col items-center justify-center cursor-pointer"
                    >
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-zinc-700 font-medium tracking-tight text-sm">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addItemToCart(product.id, 1));
    };
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader>
                <div className="relative w-full h-64">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <Button
                            onClick={handleAddToCart}
                            className="text-white border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            🛒 Add to Cart
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Link href={`/product-details/${product.id}`}><h3 className="text-lg font-semibold cursor-pointer text-gray-800">{product.name}</h3></Link>
                <p className="text-gray-600 text-sm mb-2">{product.catgeory}</p>
                <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span
                            key={i}
                            className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
                </div>
                <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </CardContent>
        </Card>
    );
};

const FeaturedProducts = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="py-12 sm:px-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
                    {products.slice(30, 40).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
            <div className="mt-8 text-center">
                <Link href="/products">
                    <Button className="text-gray-700 hover:bg-gray-100 border border-gray-300">
                        View All Products →
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = {};
            flashSaleProducts.forEach(product => {
                const distance = product.endTime - Date.now();
                if (distance > 0) {
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    newTimeLeft[product.id] = `${hours}h ${minutes}m ${seconds}s`;
                } else {
                    newTimeLeft[product.id] = "Ended";
                }
            });
            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                % Flash Sale
            </h2>
            <div className="flex flex-col px-10 sm:flex-row gap-8">
                {flashSaleProducts.map((product) => (
                    <Card key={product.id} className="group  overflow-hidden relative">
                        <CardHeader>
                            <div className="relative w-full h-48">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                                    {product.discount}% Off
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, architecto.</h3>
                            <p className="text-gray-600 text-sm mb-2">
                                Price: <span className="line-through">${product.price.toFixed(2)}</span>
                                <span className="text-red-500 font-bold"> ${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                            </p>
                            <p className="text-gray-500 text-sm">
                                Time Left: {timeLeft[product.id] || "Loading..."}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

function NewsletterSection() {
    return (
        <section className="py-12 bg-white rounded-xl shadow-md">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Stay Updated
                </h2>
                <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter for the latest products and exclusive offers
                </p>

                <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        aria-label="Email address for newsletter"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
// Enhanced Hero Section with gradient background


function HeroSection() {
    return (
        <section className="bg-gray-100 py-16 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h1>
                <p className="text-gray-600 mb-6">Trendy collections curated for you.</p>
                <button
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Shop now"
                >
                    Shop Now
                </button>
            </div>
        </section>
    );
}

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <HeroCarousel />
            <CategoryList />
            <FeaturedProducts />
            <HeroSection />

            <FlashSale />
            <Services />
            <NewsletterSection />

            <Footer />
        </div>
    );
};

export default HomePage;