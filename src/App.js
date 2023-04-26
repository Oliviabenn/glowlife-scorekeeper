import logo from './logo.png';
import './index.css';
import Home from './Home';
import Scores from './scores/Scores.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const title = 'GlowLife Scorekeeper';
  const link = "http://www.glowlife.com"
  
  const [id, setId]= useState(0);
  const [username, setUsername]= useState("");


  const getData=(id, name)=> {
        setId(id);
        setUsername(name);
  }

  return (
    <div className="App">
      <Router>
      <div className="content">

      {/* <br/><br/> */}
      <img src={logo} width={300} height={300} />
      <Routes>
       <Route path="/" element={ <Home getData={getData}/>} />
      <Route path="/scores" element={<Scores eventId={id} username={username}/>}/>
    
      </Routes>

        <div className="web-button">
          <button><a href={link}>GlowLife.com</a></button>
          </div>


    </div>
    </Router>
  </div>
  );
}

export default App;

