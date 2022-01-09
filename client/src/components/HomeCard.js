import React from 'react'
import { brands } from '../Contants/homeCards'
import "../styles/homecards.css"
import Slides from './Slides'
const HomeCard = () => {
    return (
        <div>
     <Slides />

            <div className='container_brand_box'>
                <h2>OUR PRODUCTS BRAND</h2>
                <div className='main_brand_box'>
                    {
                        brands.map((e, i) => (
                            <div key={i} className='brand_cards'>
                                <img src={e.img} alt="" />
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default HomeCard
