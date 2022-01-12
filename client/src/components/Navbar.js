import React, {useContext} from 'react'
import "../styles/navbar.css"
import {Link} from "react-router-dom"
import DealOfDay from './DealOfDay'
import { AuthContext } from '../Context/AuthContext'



const Navbar = () => {

    const {email, handleLogout} = useContext(AuthContext)

    return (
        <>

        <DealOfDay />
        <nav className='navbar'>
            <div>
               <Link to="/" className='logolink'><div className='logo'>🅱🆁🅰🅽🅳</div></Link> 
            </div>
            <div className='link-box'>
                <Link className='link' to="/" >Home</Link>
                <Link className='link' to="/store">Store</Link>
                <Link className='link' to="/aboutus">About us</Link>
                <Link className='link' to="/contactus">Contact us</Link>
                {
                email ?   <Link className='link' to="/" style={{textTransform: "uppercase"}}>{email[0] + email[1]}</Link> :
                <Link className='link' to="/login">Login</Link>
                }
                <Link className='link' to="/cart"><div className='cart_icon'><i class="fas fa-cart-plus cart_icon"></i></div></Link>
            {email && <button className='logoutbtn' onClick={() => handleLogout()}>LOGOUT</button> }
            </div>
        </nav>

            
        </>
    )
}

export default Navbar
