import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Scores from './Scores';

function App() {
  const title = 'GlowLife Scorekeeper';
  const link = "http://www.glowlife.com"

  return (
    <div className="App">
      <div className="content">
        <Home/>

        

        <a href={link}>GlowLife.com</a>


    </div>
  </div>
  );
}

export default App;

//TODO: 
//Create a /admin route (does not have to be linked in the main app) that creates events in the database:
// Have a tab for events with columns for name and location
// The admin page would have a create event form with name and location fields with a list of all events, including the id of the event
