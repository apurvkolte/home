import React from 'react'
import Footer from '@/components/Dashboard/Footer'
import Header from '@/components/common/Header'
import Profiles from '@/components/User/Profiles'

const login = () => {
    return (
        <div>
            <Header />
            <Profiles />
            <Footer />
        </div>
    )
}

export default login