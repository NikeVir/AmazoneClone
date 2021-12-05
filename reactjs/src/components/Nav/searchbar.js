import React, { Component } from 'react'
import { searchProduct, fetchProducts } from '../../actions/Allaction';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap'
import {} from '@fortawesome/fontawesome-svg-core'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Searchbar extends Component {
    OnChangeKey = e => {
        this.props.searchProduct(e.target.value);
    }
    // onSubmit = e => {
    //     e.preventDefault()
    //     this.props.fetchProducts(this.props.text)

    // }
    render() {

        return (
            <Form onSubmit={this.onSubmit} >
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={this.OnChangeKey}
                />
                <Link to ={this.props.search}>
                <Button
                    className="search-btn"
                    variant="outline-success"
                    // type="submit"
                    onClick ={()=>this.props.fetchProducts(this.props.text)}
                >
                   <FontAwesomeIcon icon ={faSearch}/>
                </Button>
                </Link>
            </Form>
        )
    }
}
const mapStateToProps = state => ({
    text: state.products.text
})
export default connect(mapStateToProps, { searchProduct, fetchProducts })(Searchbar);