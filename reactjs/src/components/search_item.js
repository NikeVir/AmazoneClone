import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addToCart } from '../actions/Allaction';
const Search_item = ({ product, addToCart, loadcurrentItem }) => {
    return (
        <div className="img_div">
            <Card className="d-flex">
                    <Card.Img className="rp-img" variant="top" src={product.images} />

                <Card.Body className="rp-body">
                    <Link to={`/product/${product.id}`}><p style={{textAlign:"left",padding:"0",margin:"0"}} onClick={() => loadcurrentItem(product)}><Card.Title className="rp-title">{product.title}</Card.Title></p></Link>
                    <div className="rp-price">₹ {product.price}</div>
                    <Card.Text className="rp-details">
                        {product.description}
                    </Card.Text>
                    <Button style={{width:"250px",background:"#ffc107",borderColor:"#ffc107",height:"30px",fontSize:"12px",color:"black"}} onClick={() => addToCart(product._id)}>ADD TO CART</Button>
                </Card.Body>

            </Card>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadcurrentItem: (id) => dispatch(loadcurrentItem(id))
    }
}
export default connect(null, mapDispatchToProps)(Search_item)