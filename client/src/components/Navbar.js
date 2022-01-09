import React from 'react'
import "../styles/navbar.css"
import {Link} from "react-router-dom"
import DealOfDay from './DealOfDay'



const Navbar = () => {
    return (
        <>

        <DealOfDay />
        <nav className='navbar'>
            <div>
                <div className='logo'>🅱🆁🅰🅽🅳</div>
            </div>
            <div className='link-box'>
                <Link className='link' to="/" >Home</Link>
                <Link className='link' to="/store">Store</Link>
                <Link className='link' to="/aboutus">About us</Link>
                <Link className='link' to="/contactus">Contact us</Link>
                <Link className='link' to="/login">Login</Link>
                <div className='cart_icon'><i class="fas fa-cart-plus cart_icon"></i><sup>0</sup></div>
            </div>
        </nav>

            
        </>
    )
}

export default Navbar
