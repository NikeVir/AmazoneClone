import Button from '@restart/ui/esm/Button'
import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import CartProduct from './cartProduct'
import './cart.css'
import { connect } from 'react-redux'
const Cart = ({cart})=>{
        const [totalPrice,setTotalPrice] = useState(0);
        const [totalItems,setTotalItems] = useState(0);
        useEffect(()=>{
            var b;
            var items =0;
            var prices = 0;
            cart.forEach(item=>{
                items +=item.qty;
                var b = parseFloat(item.price)
                prices += item.qty * b;

            })
            setTotalItems(items)
            setTotalPrice(prices)
        },[cart,totalPrice,totalItems,setTotalPrice,setTotalItems])
        return (
            <div>
                <Container className="full_cart">
                    <Container className="cart_container">
                        <div className="shoping_head">
                            <h2>Shopping Cart</h2>
                        </div>
                        {cart.length !="0"?cart.map((product,index)=>(
            <CartProduct key = {product.id} product = {product}/>
        )):<p>Cart is Empty</p>} 
                    </Container>
                    <Container className="Total">
                        <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" /></div>
                        <div className="sub_total">
                            <p>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
                            <h4>Subtotal ({totalItems} items): </h4>
                            <h4>₹ {totalPrice}</h4>
                        <Button>Proceed to buy</Button>
                        </div>
                    </Container>
                </Container>
            </div>
        )
    }

const mapStateToProps= (state) =>{
    return{
        cart:state.products.cart
    }
}
export default connect(mapStateToProps)(Cart)
