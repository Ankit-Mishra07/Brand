import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../styles/productDetail.css"
const ProductDetail = () => {
    const {id} = useParams();
    const [oneData, setOneData] = useState({})
    console.log(id)
    const getOneData = async () => {
        const res = await fetch(`http://localhost:5000/data/${id}`)
        const dat = await res.json()
        setOneData(dat)
        console.log(dat)
    }
    useEffect(() => {
       getOneData()
    }, [])
    return (
        <div className='productdetail_container'>
            <div className='prod_img_box'>
                <img className='prod_img' src={oneData.img} alt="" />
            </div>
            <div className='text_box'>
                <p>{oneData.title}</p>
                <p>Price : {oneData.price}₹</p>
                <p>Size available : 8 9 10 11</p>
                <button className='addtocart'>ADD TO CART</button>

            </div>
            
        </div>
    )
}

export default ProductDetail
