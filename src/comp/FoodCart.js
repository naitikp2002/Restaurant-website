import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function MediaControlCard(props) {
  const dispatch = useDispatch();
  const handleClikCart=(item)=>{
    dispatch(addToCart(item));
  }
 const {id, name, description, imageId, defaultPrice, price}= props.props;
//  console.log(props.props)
  return (
    <Card sx={{ display: 'flex', margin:"1rem", maxWidth:"40rem",justifyContent: "space-between"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <b><Typography sx={{ textDecorationStyle: "solid"}} m={2}>₹ {price/100 || defaultPrice/100}</Typography></b>
        <Button variant="outlined" onClick={()=>handleClikCart(props.props)}>Add to cart</Button>
        </Box>
      </Box>
      {imageId && <CardMedia
        component="img"
        sx={{ maxWidth: 190, maxHeight: 190 , objectFit: "cover"}}
        image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt="Live from space album cover"
      />}
    </Card>
  );
}
