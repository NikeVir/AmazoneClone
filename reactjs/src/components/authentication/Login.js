import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import './login.css';
import { Link } from 'react-router-dom';
class login extends Component {


    onSubmit = e =>{
        e.preventDefault();
        const registered = {
            email:this.email,
            password:this.password
        }
        console.log(registered);
        axios.post('http://localhost:4000/auth/login',registered)
        // window.location = '/'
        
    }
    render() {
        return (
            <div>
                <Form className="login_form" onSubmit = {this.onSubmit}>
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="email" 
                        placeholder=""
                        onChange ={e =>this.email= e.target.value}
                        />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="password" 
                        placeholder="" 
                        onChange ={e =>this.password= e.target.value}
                        />
                        <Form.Text className="text-muted">
                        <i>i</i>Passwords must be at least 6 characters.
                        </Form.Text>
                    </Form.Group>
                    <Button className="login-btn" variant="primary" type="submit">
                        Sign-In
                    </Button>
                    <p className="legal-txt">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                    <div className="bottom_line"> If you don't have account? <Link to ="/SignUp">Sign-Up</Link></div>
                </Form>
            </div>
        )
    }
}
export default login;