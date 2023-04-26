import logo from './logo.png';
import './index.css';
import Home from './Home';
import Scores from './scores/Scores.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const title = 'GlowLife Scorekeeper';
  const link = "http://www.glowlife.com"

 


  return (
    <div className="App">
      <Router>
      <div className="content">

      {/* <br/><br/> */}
      <p class="logo"><img src={logo} width={300} height={300} /> </p>
      <Routes>
       <Route path="/" element={ <Home />} />
      <Route path="/scores" element={<Scores/>}/>
    
      </Routes>

        <div className="web-button">
          <button><a href={link}>Visit GlowLife.com</a></button>
          </div>


    </div>
    </Router>
  </div>
  );
}

export default App;

