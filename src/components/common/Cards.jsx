import React from 'react'
import Card from './Card'
import { motion } from "framer-motion"



const Cards = () => {
    const products = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "category": "Electronics",
            "price": 2000,
            "originalPrice": 2800,
            "discount": 30,
            "image": "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            "id": 2,
            "name": "Smartphone",
            "category": "Mobile Phones",
            "price": 15000,
            "originalPrice": 18000,
            "discount": 15,
            "image": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            "id": 3,
            "name": "Gaming Laptop",
            "category": "Computers",
            "price": 75000,
            "originalPrice": 90000,
            "discount": 20,
            "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            "id": 4,
            "name": "Bluetooth Speaker",
            "category": "Audio",
            "price": 3000,
            "originalPrice": 4000,
            "discount": 25,
            "image": "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGFsZXhhfGVufDB8fDB8fHww"
        },
        {
            "id": 5,
            "name": "Smartwatch",
            "category": "Wearables",
            "price": 5000,
            "originalPrice": 6000,
            "discount": 17,
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            "id": 6,
            "name": "DSLR Camera",
            "category": "Photography",
            "price": 45000,
            "originalPrice": 50000,
            "discount": 10,
            "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            "id": 7,
            "name": "Running Shoes",
            "category": "Footwear",
            "price": 2500,
            "originalPrice": 3000,
            "discount": 17,
            "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            "id": 8,
            "name": "Backpack",
            "category": "Accessories",
            "price": 1200,
            "originalPrice": 1500,
            "discount": 20,
            "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            "id": 9,
            "name": "Wrist Watch",
            "category": "Fashion",
            "price": 3500,
            "originalPrice": 4500,
            "discount": 22,
            "image": "https://images.unsplash.com/photo-1605407160285-3d972384390c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxwcm9kdWN0fGVufDB8fDB8fHww"
        },
        {
            "id": 10,
            "name": "Table Lamp",
            "category": "Home Decor",
            "price": 1800,
            "originalPrice": 2200,
            "discount": 18,
            "image": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxwcm9kdWN0fGVufDB8fDB8fHww"
        },
        {
            "id": 11,
            "name": "Fitness Band",
            "category": "Wearables",
            "price": 3200,
            "originalPrice": 4000,
            "discount": 20,
            "image": "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxwcm9kdWN0fGVufDB8fDB8fHww"
        },
        {
            "id": 12,
            "name": "Coffee Maker",
            "category": "Kitchen",
            "price": 5000,
            "originalPrice": 6000,
            "discount": 16,
            "image": "https://plus.unsplash.com/premium_photo-1719454275650-a33877fb3146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwcm9kdWN0fGVufDB8fDB8fHww"
        }
    ]

    return (
        <div className='max-w-screen-xl mx-auto h-auto '>

            <h1 className='text-4xl font-normal py-10 p-5 tracking-tight leading-none overflow-hidden capitalize'>
                <motion.span
                    initial={{ rotate: 90, y: "40%", opacity: 0 }}
                    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='inline-block origin-left'>
                    Trending
                </motion.span>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Cards