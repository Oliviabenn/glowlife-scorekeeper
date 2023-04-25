import logo from './logo.png';
import './index.css';
import Home from './Home';
import Scores from './Scores';
import Form from './form';

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

//TODO: 
//Create a /admin route (does not have to be linked in the main app) that creates events in the database:
// Have a tab for events with columns for name and location
// The admin page would have a create event form with name and location fields with a list of all events, including the id of the event
