import React from 'react'
import "../styles/storesidebar.css"

const StoreSideBar = ({filterCatProduct}) => {
    return (
        <div className='sidenavigate'>
            <div onClick={() => filterCatProduct("All")}>All</div>
            <div onClick={() => filterCatProduct("men")}>Men</div>
            <div onClick={() => filterCatProduct("women")}>Women</div>
            <div onClick={() => filterCatProduct("unisex")}>Unisex</div>
        </div>
    )
}

export default StoreSideBar
