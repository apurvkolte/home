import React from 'react'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Services from '@/components/common/Services'
import Products from '@/components/products/ProductsRTL'

const login = () => {
    return (
        <div>
            <Header />
            <Products />
            <Services />
            <Footer />
        </div>
    )
}

export default login