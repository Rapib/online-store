import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
  let cart = useSelector(currentState => currentState.cartReducer.cart);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(cart);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeFromCart = (item) => {
    console.log('25item', item);
    dispatch({
      type: 'REMOVE_CART',
      payload: item
    });
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rapib's Online Store
            </Typography>
            <Button color="inherit" onClick={handleClick}>Cart({cart.length})</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {cart.map((item,idx) =>
          <div>
            <MenuItem onClick={handleClose} id={idx}>{item.name}
            </MenuItem>
            <Button variant="outlined" color="error" onClick={() => removeFromCart(item)}>REMOVE</Button>
          </div>
        )
        }
      </Menu>
    </>
  );
}

export default Header;