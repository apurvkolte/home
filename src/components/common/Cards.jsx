import React from 'react'
import Card from './Card'
import { motion } from "framer-motion"
import { products } from '@/data/products'


const Cards = () => {

    return (
        <div className='max-w-screen-xl mx-auto h-auto'>
            <h1 className='text-4xl font-normal py-10 p-5 tracking-tight leading-none overflow-hidden capitalize'>
                <motion.span
                    initial={{ rotate: 90, y: "40%", opacity: 0 }}
                    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='inline-block origin-left font-semibold text-zinc-700 tracking-tight leading-none'>
                    Trending
                </motion.span>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.slice(0, 20).map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Cards