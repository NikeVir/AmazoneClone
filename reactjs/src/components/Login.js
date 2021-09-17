import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/app/signup',registered)
        window.location = '/'
        
    }
    render() {
        return (
            <div>
                <Form className="login_form" onSubmit = {this.onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={this.changeFullName}
                        value = {this.state.fullName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User name</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={this.changeUserName}
                        value = {this.state.username}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="email" 
                        placeholder=""
                        onChange ={this.changeEmail}
                        value = {this.state.email}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="password" 
                        placeholder="" 
                        onChange ={this.changePassword}
                        value = {this.state.password}
                        />
                    </Form.Group>
                    <Button className="login-btn" variant="primary" type="submit">
                        Continue
                    </Button>
                    <p className="legal-txt">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                </Form>
            </div>
        )
    }
}
export default Login;