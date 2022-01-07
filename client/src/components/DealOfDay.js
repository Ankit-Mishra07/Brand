import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/dealofDay.css"
const DealOfDay = () => {
    return (
        <nav className='topbar'>
            <marquee behavior="scroll" direction="left">
               Special Offer buy above 1000rs and get 1 special gift from us.
            </marquee>
        </nav>
    )
}

export default DealOfDay
