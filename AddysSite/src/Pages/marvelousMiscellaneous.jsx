import './Bakery.css';
import * as React from 'react';

import Cookies from './Cookies.jpg';

export default function MarvelousMiscellaneous() {
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