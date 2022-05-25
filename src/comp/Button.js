import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 5 } }}>
        <Button style={{background:"white",color:"black",width:"160px",height:"50px"}} variant="contained" size="large">
          Order Now
        </Button>
    </Box>
  );
}
