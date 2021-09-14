import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreat from './components/RestaurantCreat';
import RestaurantLogin from './components/RestaurantDetails';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import { Navbar, NavDropdown, FormControl, Button, Nav, Form } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" className = "navbarrr">
          <Navbar.Brand href="#">Amazon.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}critic tonight acid myself accident diamond prize flight post inquiry cram inflict just wish giggle fuel together perfect define maple offer remind mirror ensure
              navbarScroll
            >
              <span>Hello! address?</span>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
              <Nav.Link href="#link"><Link to='/List'><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to='/Create'><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
              {/* <Nav.Link href="#link"><Link to='/Search'><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link> */}
              <Nav.Link href="#link"><Link to='/Login'><FontAwesomeIcon icon={faSignInAlt} />Login/Signin</Link></Nav.Link>
              {/* <Nav.Link href="#link"><Link to='/Update'>Update</Link></Nav.Link> */}
            </Nav>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Navbar>


        <Route path='/Update/:id'
          render={props => (<RestaurantUpdate {...props} />)}
        >


        </Route>
        <Route path='/Create'>
          <RestaurantCreat />
        </Route>
        <Route path='/Login' render={props => (<RestaurantLogin{...props} />)} >
        </Route>
        <Route path='/List'>
          <RestaurantList />
        </Route>
        <Route path='/Search'>
          <RestaurantSearch />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
