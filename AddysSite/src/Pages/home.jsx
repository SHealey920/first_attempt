import React from 'react';
import ABB3 from './ABB3.png';
import './Bakery.css';


function Home() {
    return (
<div className="App">
    <header className="App-header">
        <img src={ABB3} className="App-logo" alt="logo" />
        <h1>Welcome to Addy's Batty Bakery.</h1>
      </header>    
</div>
  );
}

export default Home;