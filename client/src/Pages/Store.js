import React, { useState } from 'react'
import "../styles/store.css"
import StoreSideBar from './StoreSideBar'
import {shoes} from "../Products/shoes"
import {Link, useNavigate} from "react-router-dom"
import { useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import swal from 'sweetalert';

const Store = () => {
    const [data, setData] = useState([])
    const [brand, setBrand] = useState("All")
    const [shoes, setShoes] = useState()

    const navigate = useNavigate()
    const {email} = useContext(AuthContext)

    const getDB = async () => {
        let get = await fetch("http://localhost:5000/data")
        let res = await get.json()
        setData(res)
    }

    useEffect(() => {
        getDB()
    }, [])

    

    const filterProduct = async (prod) => {
        let get = await fetch("http://localhost:5000/data")
        let res = await get.json()
        // setData(res)
        const newData = res.filter((e) => {
            return e.brand === prod
        })
        setData(newData)
        setBrand(prod)
    }



    const filterCatProduct = async (cat) => {
        let get = await fetch("http://localhost:5000/data")
        let res = await get.json()
        // setData(res)
        let newData;
        if(cat === "All" && brand === "All") {
           newData = res
        }else if(cat === "All" && brand !== "All"){
             newData = res.filter((e) => {
                return brand === e.brand
            })
        }else if (cat !== "All" && brand === "All") {
            newData = res.filter((e) => {
                return cat === e.for
            })
        }else {
            newData = res.filter((e) => {
                return (cat === e.for) && (brand === e.brand)
            })
        }

        setData(newData)


    }


    const addtoCart = (e) => {
        if(!email) {
            swal("Please login to add products in cart", "failure")
            navigate("/login")
            return
        }
        e["email"] = email

        fetch("http://localhost:5000/cart", {
            method : "POST",
            body : JSON.stringify(e),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(res => {
            swal("Porduct is Added to your cart")
        })
    }

    return (
        <div>
            <div className='store_top_bar'>
                <div onClick={() => {
                    getDB()
                    setBrand("All")
                }
                }>All</div>
                <div onClick={() => filterProduct("nike")}>Nike</div>
                <div onClick={() => filterProduct("adidas")}>Adidas</div>
                <div onClick={() => filterProduct("puma")}>Puma</div>
                <div onClick={() => filterProduct("reebok")}>Reebok</div>
                <div>Aldo</div>
            </div>
            <div className='store-container'>
                <StoreSideBar filterCatProduct={filterCatProduct}/>
                <div className='products_container'>
                    {
                        data.map((e) => (
                           
                            <div key={e.id} className='product_card'>
                            <Link to={`/store/${e.id}`} className='links'>
                            
                            <div>
                                <img src={e.img} alt="" className='prod_img'/>
                            </div>
                            <div className='text_box'>
                                <p>{e.title.substring(0,50)}</p>
                                <p>Price : ₹{e.price}</p>
                                
                            </div>
                            </Link>
                            <div className='btn_box'>
                            <button onClick={() => addtoCart(e)}>ADD TO CART</button>
                                <button><i class="far fa-heart"></i></button>
                            </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Store
