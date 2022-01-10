import React, { useState } from 'react'
import "../styles/store.css"
import StoreSideBar from './StoreSideBar'
import {shoes} from "../Products/shoes"

const Store = () => {
    const [data, setData] = useState(shoes.data)
    const [brand, setBrand] = useState("All")

    const filterProduct = (prod) => {
        const newData = shoes.data.filter((e) => {
            return e.brand === prod
        })
        setData(newData)
        setBrand(prod)
    }



    const filterCatProduct = (cat) => {
        let newData;
        if(cat === "All" && brand === "All") {
           newData = shoes.data
        }else if(cat === "All" && brand !== "All"){
             newData = shoes.data.filter((e) => {
                return brand === e.brand
            })
        }else if (cat !== "All" && brand === "All") {
            newData = shoes.data.filter((e) => {
                return cat === e.for
            })
        }else {
            newData = shoes.data.filter((e) => {
                return (cat === e.for) && (brand === e.brand)
            })
        }

        setData(newData)


    }


    return (
        <div>
            <div className='store_top_bar'>
                <div onClick={() => {
                    setData(shoes.data)
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
                        data.map((e, i) => (
                            <div key={i} className='product_card'>

                            <div>
                                <img src={e.img} alt="" className='prod_img'/>
                            </div>
                            <div className='text_box'>
                                <p>{e.title.substring(0,50)}</p>
                                <p>Price : {e.price}₹</p>
                            </div>
                            <div className='btn_box'>
                            <button>ADD TO CART</button>
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
