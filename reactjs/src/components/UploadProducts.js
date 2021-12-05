import React, { Component } from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import axios from 'axios';
export default class UploadProducts extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            images: '',
            price: ''
        }
        this.changeTitle= this.changeTitle.bind(this)
        this.changeDescription= this.changeDescription.bind(this)
        this.changeImages = this.changeImages.bind(this)
        this.changePrice= this.changePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    changeDescription(event){
        this.setState({
            description:event.target.value
        })
    }
    changeImages(event){
        this.setState({
            images:event.target.value
        })
    }
    changePrice(event){
        this.setState({
            price:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registered = {
            title: this.state.title,
            description: this.state.description,
            images:this.state.images,
            price:this.state.price
        }
        axios.post('http://localhost:4000/app/add',registered)
        window.location = '/'
        
    }
    render() {
        return (
            <Container>
                
                <Form className="login_form" onSubmit = {this.onSubmit}>
                <h1>Add Product</h1>
                <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={this.changeTitle}
                        value = {this.state.title}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={this.changeDescription}
                        value = {this.state.description}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder=""
                        onChange ={this.changeImages}
                        value = {this.state.images}
                        />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Price In Rs</Form.Label>
                        <Form.Control 
                        className = "login-box"
                        type="text" 
                        placeholder="" 
                        onChange ={this.changePrice}
                        value = {this.state.price}
                        />
                    </Form.Group>
                    <Button className="login-btn" variant="primary" type="submit">
                        Continue
                    </Button>
                </Form>
            </Container>
        )
    }
}
