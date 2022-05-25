import React from 'react'
import { Data } from './data'
import MenuItems from './MenuItems';
import '../App.css';
function Menu() {
  return (

    <div className='menu'>
      <div className='menutitle'>
        <div className='menuList'>
             {Data.map((items,key)=>{
                  return (<MenuItems key={key} image={items.image} name={items.name} price={items.price}/>);
             })}
        </div>
      </div>
    </div>
  )
}

export default Menu