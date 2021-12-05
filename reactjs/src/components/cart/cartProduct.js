import React,{useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart,adjustItemQty,loadcurrentItem} from "../../actions/Allaction.js"
import "./cart.css"

const CartProduct = ({ product, adjustItemQty, removeFromCart,loadcurrentItem}) => {
    const [input, setInput] = useState(product.qty);
  
    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustItemQty(product._id, e.target.value);
    };
        return (
            <div >
                <Container className="cart_product">
                    <div><img src={product.images} /></div>
                    <div className="cart_content">
                        <Link to={`/product/${product.id}`}><button onClick={()=>loadcurrentItem(product)}>{product.title}</button></Link>
                        <p>{product.description}</p>
                        <h5>₹ {product.price}</h5>
                        <div className="cartItem__actions">
                            <div className="cartItem__qty">
                                <label htmlFor="qty">Qty</label>
                                <input
                                    min="1"
                                    type="number"
                                    id="qty"
                                    name="qty"
                                    value={input}
                                    onChange={onChangeHandler}

                                />
                            </div>
                        </div>
                        <Button onClick={() => removeFromCart(product._id)}>Remove From Cart</Button>
                    </div>


                </Container>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
      adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
      loadcurrentItem: (id) => dispatch(loadcurrentItem(id))
    };
  };
  
export default connect(null,mapDispatchToProps)(CartProduct);
