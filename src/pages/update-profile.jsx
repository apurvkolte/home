import React from 'react'
import Footer from '@/components/Dashboard/Footer'
import Header from '@/components/common/Header'
import UpdateProfile from '@/components/User/UpdateProfile'

const login = () => {
    return (
        <div>
            <Header />
            <UpdateProfile />
            <Footer />
        </div>
    )
}

export default login