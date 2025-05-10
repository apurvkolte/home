import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ShippingAddress from '@/components/User/ShippingAddress'
import React from 'react'


const shippingAddress = () => {
    return (
        <div>
            <Header />
            <ShippingAddress />
            <Footer />
        </div>
    )
}

export default shippingAddress