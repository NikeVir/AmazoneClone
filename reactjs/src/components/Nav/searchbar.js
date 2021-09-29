import React, { Component } from 'react'
import { searchProduct ,fetchProducts} from '../../actions/Allaction';
import {connect} from 'react-redux';
import {Form,FormControl,Button} from 'react-bootstrap'
import axios from "axios";

class Searchbar extends Component {
    OnChangeKey = e =>{
        this.props.searchProduct(e.target.value);
      }
      onSubmit = e =>{
        e.preventDefault()
        this.props.fetchProducts(this.props.text)
        // window.location = '/resultpage';  
    }
    render() {
        
        return (
                <Form onSubmit ={this.onSubmit} >
                <FormControl 
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange ={this.OnChangeKey}
                />
                <Button 
                className="search-btn" 
                variant="outline-success"
                type="submit"
                >
                    Search
                </Button>
                </Form>
        )
    }
}
const mapStateToProps = state =>({
    text:state.products.text
})
export default connect(mapStateToProps,{searchProduct,fetchProducts})(Searchbar);