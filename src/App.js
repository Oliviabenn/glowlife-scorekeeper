import logo from './logo.png';
import './index.css';
import Home from './Home';
import Scores from './Scores';
import Form from './Form';

function App() {
  const title = 'GlowLife Scorekeeper';
  const link = "http://www.glowlife.com"



  return (
    <div className="App">
      <div className="content">

      <br/><br/>
      <img src={logo} width={300} height={300} />

        <Home/>
          <Form/>

          <Scores/>

        <div className="web-button">
          <button><a href={link}>GlowLife.com</a></button>
          </div>


    </div>
  </div>
  );
}

export default App;

