import ABB3 from './ABB3.png';
import './App.css';
import DrawerNavigation from './Components/NavBar/navBar';
import { Routes, Route } from 'react-router-dom';
import ByTheDozen from './Pages/Bakery/byTheDozen';
import CakeGoodness from './Pages/Bakery/cakeGoodness';
import DeliciousBreads from './Pages/Bakery/deliciousBreads';
import MarvelousMiscellaneous from './Pages/Bakery/marvelousMiscellaneous';
// import BakeryRouters from './Routes/BakeryRouters';


function App() {
  return (

    <div className="App">
     
      <DrawerNavigation/>
      <Routes>
          <Route path="/byTheDozen" element={<ByTheDozen />} />
          <Route path="/cakeGoodness" element={<CakeGoodness />} />
          <Route path="/deliciousBreads" element={<DeliciousBreads />} />
          <Route path="/marvelousMiscellaneous" element={<MarvelousMiscellaneous />} />
       </Routes>
      <header className="App-header">
        <img src={ABB3} className="App-logo" alt="logo" />
        <h1>Welcome to Addy's Batty Bakery.</h1>
      </header>

    </div>

  );
}

export default App;
