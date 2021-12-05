import React, { useState, useEffect } from 'react'
import { FormControl, Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faMapMarkedAlt, faMapMarkerAlt, faShoppingBag, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./nav.css"
import Searchbar from './searchbar'
import { connect } from 'react-redux'

const Mainnavbar = ({ cart, home, adress, login, upload, resultpage, cartpage }) => {

  const [cartCount, setcartCount] = useState(0)
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    })
    setcartCount(count)
  }, [cart, cartCount])
  return (

    <navbar className = "navbar">
      <ul>
        <li className="amazon-logo"><Link to={home}><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link></li>
        <li className="adress"><Link to={adress}><FontAwesomeIcon icon={faMapMarkerAlt} />Hello <p>Select Your Address</p></Link></li>
        <li className="searchbar"><Searchbar search={resultpage} /></li>
        <li className="navitems"><Link to={login}>Login/Singup</Link></li>
        <li className="navorder"><Link to={upload}>Upload Products</Link></li>
        <li className="navcart"><Link to={cartpage}><div className="cart_icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{cartCount}</span>
        </div></Link></li>
      </ul>
    </navbar>
    // <Navbar className="main_nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container className="navbar1">
    //     <Navbar.Brand className="amazon-logo" href="#home"><Link to={home}><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link className="adress" href="#features"><Link to={adress}><FontAwesomeIcon icon={faMapMarkerAlt} />Hello <p>Select Your Address</p></Link></Nav.Link>
    //         <Searchbar search={resultpage} />
    //         <Nav.Link href="#features" className="navitems"><Link to={login}>Login/Singup</Link></Nav.Link>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#features" className="navorder"><Link to={upload}>Upload Products</Link></Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes" className="navcart"><Link to={cartpage}><div className="cart_icon">
    //           <FontAwesomeIcon icon={faShoppingCart} />
    //           <span>{cartCount}</span>
    //         </div></Link>

    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart
  }
}
export default connect(mapStateToProps)(Mainnavbar)