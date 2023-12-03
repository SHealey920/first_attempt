
import './App.css';
import DrawerNavigation from './Components/NavBar/navBar';
import { Routes, Route } from 'react-router-dom';
import ByTheDozen from './Pages/byTheDozen';
import CakeGoodness from './Pages/cakeGoodness';
import DeliciousBreads from './Pages/deliciousBreads';
import MarvelousMiscellaneous from './Pages/marvelousMiscellaneous';
import Home from './Pages/home';
// import BakeryRouters from './Routes/BakeryRouters';


function App() {
  return (

    
    <div className="App">

    <DrawerNavigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/byTheDozen" element={<ByTheDozen />} />
      <Route path="/cakeGoodness" element={<CakeGoodness />} />
      <Route path="/deliciousBreads" element={<DeliciousBreads />} />
      <Route path="/marvelousMiscellaneous" element={<MarvelousMiscellaneous />} />
    </Routes>
    <header className="App-header">
       
      </header>
    

    </div>

  );
}

export default App;
