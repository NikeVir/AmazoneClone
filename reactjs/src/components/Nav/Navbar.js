import React, { Component } from 'react'
import {Nav,Navbar,FormControl,Button,Container, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./nav.css"
import Searchbar from './searchbar'
export default class Mainnavbar extends Component {

  render(){
    return (
            <Navbar className="main_nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="navbar1">
            <Navbar.Brand className="amazon-logo" href="#home"><Link to={this.props.home}><img src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="adress" href="#features"><Link className ="address" to={this.props.adress}><FontAwesomeIcon icon = {faMapMarkerAlt}/>Hello <p>Select Your Address</p></Link></Nav.Link>
               <Searchbar/>
                <Nav.Link href="#pricing" className="navitems"><Link to={this.props.login}></Link>flag</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="navorder"><Link to ={this.props.login}>Returns<p>andOrders</p></Link>x</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="navcart"><Link to={this.props.art}>Cart</Link>
                  
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )}

}
