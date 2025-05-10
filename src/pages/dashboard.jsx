import React from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/Dashboard/Footer'
import Dashboard from '@/components/User/Dashboard'

const login = () => {
    return (
        <div>
            <Header />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default login