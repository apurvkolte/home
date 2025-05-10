import React from 'react'
import Footer from '@/components/Dashboard/Footer'
import Header from '@/components/common/Header'
import AdminDashboard from '@/components/orders/AdminDashboard'

const login = () => {
    return (
        <div>
            <Header />
            <AdminDashboard />
            <Footer />
        </div>
    )
}

export default login