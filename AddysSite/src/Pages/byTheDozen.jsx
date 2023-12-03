import './ByTheDozen.css';
import  React, { useState } from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import Cookies from './Cookies.jpg';

export default function ByTheDozen() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cookieFlavors, setCookieFlavors] = useState([]);
  const [brownieFlavors, setBrownieFlavors] = useState([]);
  const [cupcakeFlavors, setCupcakeFlavors] = useState([]);
  const [blondieFlavors, setBlondieFlavors] = useState([]);
  const cookieflavors = ['Christmas Sugar Cookie', 'Gingerbread', 'Peanut Blossom', 'Candy Cane', 'Hot Chocolate', 'Chocolate Peppermint thumbprint',]
  // const amounts = ['1', '2', '3', '4', '5'];
  // const [amount, setAmount] = useState('');
  // const [amountAnchorEl, setAmountAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleAmountClick = (event, amount) => {
  //   setAmountAnchorEl(event.currentTarget); 
  //   setAmount(amount);
  //   handleClose();
  // };

  const handleClose = () => {
    setAnchorEl(null);
    // setAmountAnchorEl(null);
  };

  const handleCookieFlavorClick = (flavor) => {
    if (cookieFlavors.includes(flavor)) {
      setCookieFlavors(cookieFlavors.filter(f => f !== flavor));
    } else {
      setCookieFlavors([...cookieFlavors, flavor]);
    }
    handleClose();
  };

  const handleBrownieFlavorClick = (flavor) => {
    if (brownieFlavors.includes(flavor)) {
      setBrownieFlavors(brownieFlavors.filter(f => f !== flavor));
    } else {
      setBrownieFlavors([...brownieFlavors, flavor]);
    }
    handleClose();
  };

  const handleCupcakeFlavorClick = (flavor) => {
    if (cupcakeFlavors.includes(flavor)) {
      setCupcakeFlavors(cupcakeFlavors.filter(f => f !== flavor));
    } else {
      setCupcakeFlavors([...cupcakeFlavors, flavor]);
    }
    handleClose();
  };

  const handleBlondieFlavorClick = (flavor) => {
    if (blondieFlavors.includes(flavor)) {
      setBlondieFlavors(blondieFlavors.filter(f => f !== flavor));
    } else {
      setBlondieFlavors([...blondieFlavors, flavor]);
    }
    handleClose();
  };

  return (
    <div>
        
        <div className="byTheDozen_description">
        <h1>Cookies, Brownies, Cupcakes, Blondies </h1>
        <p>These yummy treats are only sold by the dozen, which makes them much better for sharing!</p>
        </div>

      <div className='cookies'>
        <h1>Cookies</h1>
        <img src={Cookies} className="cookies-img" alt="plate of Cookies" />
        
        <div className='price'>$10</div>
        
        <div className='cookies_menu'>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Select Flavor
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
> 
        {cookieflavors.map((flavor) => (
         
      <MenuItem key={flavor} onClick={() => handleCookieFlavorClick(flavor)}>
        {flavor}
      </MenuItem>))}
      {/* <Menu 
        id="amount-menu"
        anchorEl={amountAnchorEl}
        keepMounted
        open={Boolean(amountAnchorEl)}
        onClose={handleClose}
      >
        {amounts.map((amount) => (
          <MenuItem key={amount} onClick={() => handleAmountClick(amount)}>
            {amount}
          </MenuItem>
        ))}
      </Menu> */}
    
            
</Menu>
           
          <div className='cookies_selection'>
          {cookieFlavors.length > 0 && <p>You have selected: {cookieFlavors.join(', ')}</p>}
          </div>
        </div>
      </div>
    </div>  
  );
}