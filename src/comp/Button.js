import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
import { Link } from 'react-router-dom';
export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 5 } }}>
        <Link to="/Menu"><Button style={{background:"white",color:"black",width:"160px",height:"50px"}} variant="contained" size="large">
          Order Now
        </Button>
        </Link>
    </Box>
  );
}
