
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Contact from './Contact';

function App() {
  return (
    <Router>
      

      <div><h1>this is always on top</h1></div>
      <NavBar />
      
      < Route path="/about">
        <About/>
      </Route>

      < Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
