import './ShoppingCart.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function ShoppingCart() {
  const [orderSubmit, setOrderSubmit] = React.useState(false);
  let cart = useSelector(currentState => currentState.cartReducer.cart);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
    <>
      <div className='total'>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={3}>
                  Items
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.name}>
                  <TableCell colSpan={3}>{item.name}</TableCell>
                  <TableCell align="right">{ccyFormat(item.price)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="center">Total</TableCell>
                <TableCell align="right">{cart.reduce((accumulator, object) => {
                  return accumulator + object.price;
                }, 0)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='cartForm'>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div >
            <TextField
              label="First Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
            />
            <TextField
              label="Last Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
            />
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-address">Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-Address"
                label="Address"
              />
            </FormControl>
            <TextField
              label="City"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
            />
            <TextField
              label="State"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '10ch' }}
            />
            <TextField
              label="Zip Code"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '15ch' }}

            />
          </div>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Credit Card Number</InputLabel>
              <Input
                id="standard-adornment-cc"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">EXP (MM/YY)</InputLabel>
              <Input
                id="standard-adornment-EXP"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">CVV</InputLabel>
              <Input
                id="standard-adornment-CVV"
              />
            </FormControl>
          </div>
          <Button variant="contained" color="success" onClick={() => setOrderSubmit(true)}>
            Submit Order
          </Button>
        </Box>
        {orderSubmit && <Alert>The order has been submitted!</Alert>}
      </div>
    </>
  );
}

export default ShoppingCart;