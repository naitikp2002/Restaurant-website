import React from 'react'
import '../App.css';
import ButtonSizes from './Button';

function Home() {
  return (
    <div className="Container">
    <div className='banner'>
      <div className='homedata'>
        <div style={{fontSize:"70px",margin:"15px"}}>Food Corner</div>
        <div style={{fontSize:"30px",margin:"15px"}}>INDIAN FOOD AT CLICK!</div>
        <ButtonSizes/>
      </div>
    </div>
    </div>
  )
}

export default Home