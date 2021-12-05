import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import './login.css';
import { Link } from 'react-router-dom';
class SignUp extends Component {


    onSubmit = e =>{
        e.preventDefault();
        const registered = {
            fullName: this.fullName,
            email:this.email,
            password:this.password,
            checkPassword: this.checkPassword
        }
        if(registered.password == registered.checkPassword){
            
            const picked = (({ fullName, email,password }) => ({ fullName, email,password }))(registered);
            console.log(picked);
        axios.post('http://localhost:4000/auth/registered',picked)

        }else{
            alert("re-entered password and password not matched")
        }
        
        // window.location = '/'
        
    }
    render() {
        return (
            <div>
                <Form className="login_form" onSubmit = {this.onSubmit}>
                    <h2>Create account</h2>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={e =>this.fullName = e.target.value}
                        />
                    </Form.Group>
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="password" 
                        placeholder="" 
                        onChange ={e =>this.checkPassword= e.target.value}
                        />
                    </Form.Group>
                    <Button className="login-btn" variant="primary" type="submit">
                        Creat your Amazon account
                    </Button>
                    <p className="legal-txt">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                    <div className="bottom_line">Already have an account? <Link to ="/login">Sign-In</Link></div>
                </Form>
            </div>
        )
    }
}
export default SignUp;