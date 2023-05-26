import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import './Header.css';


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
    dispatch({
      type: 'REMOVE_CART',
      payload: item
    });
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" sx={{ bgcolor: "#7bc96d" }}>
          <Toolbar>
            <span className='navLink'><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></span>
            {/* <Button color="inherit" onClick={handleClick}>Home</Button> */}
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
        {cart.length === 0 && <MenuItem><ListItemText>Your cart is empty.</ListItemText></MenuItem>}
        {cart.map((item, idx) =>
          <div>
            <MenuItem sx={{ width: 320, maxWidth: '100%' }} onClick={handleClose} id={idx} >{idx + 1} . {item.name}     (${item.price})
              <ListItemText></ListItemText>
              <Button variant="outlined" color="error" size="small" onClick={() => removeFromCart(item)}>REMOVE</Button>
            </MenuItem>
          </div>
        )
        }
        {cart.length !== 0 &&
          <>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemText >
                <Link to="/cart" style={{ textDecoration: 'none', color: 'blue' }}>Checkout (Total: ${cart.reduce((accumulator, object) => {
                  return accumulator + object.price;
                }, 0)})</Link>
              </ListItemText>
            </MenuItem>
          </>}
      </Menu>
    </>
  );
}

export default Header;