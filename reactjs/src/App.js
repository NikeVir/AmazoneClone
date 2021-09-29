import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavDropdown, FormControl, Button, Nav, Form, Container } from "react-bootstrap"
import Login from "./components/Login";
import Location from "./components/Location";
import Cart from "./components/Cart";
import Home from './components/Home';
import Mainnavbar from './components/Nav/Navbar';
import ResultPage from './components/ResultPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Router>
        <Mainnavbar
        home = "/"
        adress ="/location"
        cart = "/cart"
        login = "/login"
        />
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route path='/resultpage'>
          <ResultPage />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>

      </Router>
    </Provider>
    </div>
  );
}

export default App;
