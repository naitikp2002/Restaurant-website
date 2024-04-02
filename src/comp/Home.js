import React, { useContext, useState } from 'react'
import '../App.css';
import ButtonSizes from './Button';
import { Box, TextField } from '@mui/material';
import UserContext from '../store/item-context';

function Home() {
  const {loggedinUser, setName} = useContext(UserContext)
  return (
    <div className="Container">
    <div className='banner'>
      <div className='homedata'>
      <div style={{fontSize:"30px",margin:"15px"}}>Welcome {loggedinUser}!</div>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', borderColor:"white" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={loggedinUser} onSubmit={(e)=>{
        e.preventDefault();
      }} onChange={(event)=>{
        setName(event.target.value)
      }} id="outlined-basic" label="Name" variant="outlined" />
    </Box>
        <div style={{fontSize:"70px",margin:"15px"}}>Food Corner</div>
        <div style={{fontSize:"30px",margin:"15px"}}>INDIAN FOOD AT CLICK!</div>
        <ButtonSizes/>
      </div>
    </div>
    </div>
  )
}

export default Home