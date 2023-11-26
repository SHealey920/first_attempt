import './Bakery.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Cookies from './BakeryImages/Cookies.jpg';

export default function CakeGoodness() {
  return (
    <div>
      <div className="btd">
      <h1>Cookies, Brownies, Cupcakes, Blondies </h1>
      <p>These yummy treats are only sold by the dozen, which makes them much better for sharing!</p>
      </div>
    <div classname='cookies'>
    <img src={Cookies} className="cookies-img" alt="plate of Cookies" />

    </div>
    </div>  
  );
}