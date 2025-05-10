import React from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/Dashboard/Footer'
import Dashboard from '@/components/orders/Invoice'

const login = () => {
    return (
        <div>
            <Header />
            <Dashboard />
        </div>
    )
}

export default login