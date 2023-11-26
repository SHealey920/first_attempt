import ABB3 from './ABB3.png';
import './App.css';
import DrawerNavigation from './Components/NavBar/navBar';
import { Route, Router, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <DrawerNavigation/>
      <Routes>
        
      </Routes>
      <header className="App-header">
        <img src={ABB3} className="App-logo" alt="logo" />
        
        <h1>
          Welcome to Addy's Batty Bakery .
        </h1>
        
       
      </header>
    </div>
  );
}

export default App;
