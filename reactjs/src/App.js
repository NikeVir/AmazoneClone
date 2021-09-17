import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavDropdown, FormControl, Button, Nav, Form, Container } from "react-bootstrap"
import Login from "./components/Login";
import Location from "./components/Location";
import Cart from "./components/Cart";
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="main_nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="navbar1">
            <Navbar.Brand href="#home"><Link to='/'>React-Bootstrap</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="adress" href="#features"><Link to='/location'>Hello <p>select your adress</p></Link></Nav.Link>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button className="search-btn" variant="outline-success">Search</Button>
                <Nav.Link href="#pricing" className="navitems"><Link to='/Login'></Link>flag</Nav.Link>
                <NavDropdown className="navitems" title="Hello! Sign In" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <Form className="d-flex">
                  </Form>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="navitems"><Link to='/login'>Returns<p>andOrders</p></Link>x</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="navitems"><Link to='/cart'>Cart</Link>
                  
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>

      </Router>
    </div>
  );
}

export default App;
