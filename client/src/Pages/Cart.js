import React,{useState, useContext, useEffect} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link , useNavigate} from 'react-router-dom'
import '../styles/cart.css'
import swal from 'sweetalert'

const Cart = () => {

    const {email} = useContext(AuthContext)
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const getCart = async() => {
        let res = await fetch(`http://localhost:5000/cart`)
        let dat = await res.json()


        const newDat = dat.filter((e) => {
            return e.email === email
        })
        console.log(newDat)
        let i = 0
        newDat.map(e => {
            i = i + Number(e.price)
        })
        setTotal(i)
        setData(newDat)
    }
    useEffect(() => {
       getCart()
    }, [])


    const ProceedTopay = () => {
        swal("Thank You", "Congrats Ordered Successfully!", "success");
        navigate("/store")
    }

    

    return (
        <>

        <div className='cardcont'>
            {
                data.map((e) => (
                    
                    <Link to={`/store/${e.id}`} className='link1'>
                        <div className='cart_card'>
                        <div className='imgbox'>
                            <img src={e.img} alt="" />
                        </div>
                        <div className='textbox'>
                          <p>{e.title}</p>
                          <p>Price : ₹{e.price}</p>  
                        <p>Size : 8, 9, 10, 11</p>

                        </div>
                    </div>
                    </Link>
                ))
            }
            <button className='proceed' onClick={ProceedTopay}>PROCEED TO PAY {total}</button>
        </div>

        </>
    )
}

export default Cart
