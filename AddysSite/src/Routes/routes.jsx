
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App.js';
import ByTheDozen from '../Pages/Bakery/byTheDozen';
import CakeGoodness from '../Pages/Bakery/cakeGoodness';
import DeliciousBreads from '../Pages/Bakery/deliciousBreads';
import MarvelousMiscellaneous from '../Pages/Bakery/marvelousMiscellaneous.jsx';

  
const Routers = () => {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/byTheDozen" element={<ByTheDozen />} />
          <Route path="/cakeGoodness" element={<CakeGoodness />} />
          <Route path="/deliciousBreads" element={<DeliciousBreads />} />
          <Route path="/marvelousMiscellaneous" element={<MarvelousMiscellaneous />} />
        </Routes>
    </Router>
  );
};

export default Routers;

