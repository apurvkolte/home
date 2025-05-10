import React from 'react'
import Footer from '@/components/Dashboard/Footer'
import Header from '@/components/common/Header'
import Checkout from '@/components/orders/Checkout'

const login = () => {
    return (
        <div>
            <Header />
            <Checkout />
            <Footer />
        </div>
    )
}

export default login