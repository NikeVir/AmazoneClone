import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import SignUp from "./components/authentication/Signup";
import Login from './components/authentication/Login';
import Location from "./components/Location";
import Cart from "./components/cart/Cart";
import Home from './components/Home/Home';
import Mainnavbar from './components/Nav/Navbar';
import ResultPage from './components/ResultPage';
import UploadProducts from './components/UploadProducts';
import ViewProduct from './components/viewProduct/viewProduct';
import { } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import SignUp from './components/authentication/Signup';
function App({ current }) {
  return (
    <div className="App">
      <Router>
        <Mainnavbar
        home = "/"
        adress ="/location"
        cartpage = "/cartpage"
        login = "/SignUp"
        upload = "/upload"
        resultpage = './resultpage'
        />
        <Route path='/SignUp'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/cartpage'>
          <Cart/>
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route path='/resultpage'>
          <ResultPage />
        </Route>
        <Route path='/upload'>
          <UploadProducts />
        </Route>{!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id">
          <ViewProduct />
        </Route>
          )}
        
        <Route exact path='/'>
          <Home />
        </Route>
        

      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.products.currentItem,
  };
};

export default connect(mapStateToProps)(App);
