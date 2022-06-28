import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './About';
import Items from './Items';
import Shop from './Shop';



function App() {
return(
    <Router>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About us</Link>
        <Link to="/contacts" className='link'>Contacts</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Items/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Shop/>}/>
      </Routes>
    </Router>
  ) 
}

export default App;
