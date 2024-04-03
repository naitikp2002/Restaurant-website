import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import MediaControlCard from './FoodCart';
import { UseDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { Typography } from '@mui/material';
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({numberOfCartItems}) {
  const dispatch= useDispatch();
const cartItems = useSelector((store)=> store.cart.items)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClear=()=>{
    setOpen(false);
    dispatch(clearCart())

  };
  return (
    <React.Fragment>
      <Button  variant="outlined" style={{color:"white", borderColor:'white', marginInline: '2rem'}} onClick={handleClickOpen}>
        cart ({numberOfCartItems})
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Cart
        </DialogTitle>
        <div style={{overflowY:"scroll"}}>
        {cartItems.length!==0 ? cartItems.map((item, index)=>{
          return <MediaControlCard props={item}/>
        }): <Typography sx={{margin: 2}}>Your cart is empty</Typography>}
        </div>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}