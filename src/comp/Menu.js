import React from 'react'
import { Data } from './data'
import '../App.css';
import ActionAreaCard from './Mcard';
function Menu() {
  return (

    <div className='menu'>
      {/* <div className='menutitle'> */}
        <div className='menuList'>
             {Data.map((items,key)=>{
                  return (<ActionAreaCard key={key} image={items.image} name={items.name} price={items.price}/>);
             })}
        </div>
      {/* </div> */}
    </div>

  )
}

export default Menu