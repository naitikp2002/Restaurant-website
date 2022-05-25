import React from 'react'
// import '../App.css';

function MenuItems({name,image,price}) {
  return (
    <div className='menuItems'>
        <div style={{backgroundImage:`url(${image})`}}>
            <h1>{name}</h1>
            <p>{price}</p>
            </div>
    </div>
  )
}

export default MenuItems