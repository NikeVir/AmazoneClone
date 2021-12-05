import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/Allaction'
import "./viewproduct.css"
const viewProduct=({addToCart,currentItem})=>{
        return (
            <div>
                <Container className = "view_product_container">
                    <div className="view_product_img">
                        <div><img src ={currentItem.images}/></div></div>
                    <div className="view_product_description">
                        <h2>{currentItem.title}</h2>
                        <div>{currentItem.description}</div>
                        <div> <b>₹ {currentItem.price}</b></div>
                    </div>
                    <div className="buy_add_cart">
                        <input pllaceholder="Qty"/>
                        <Button  onClick={() => addToCart(currentItem.id)}>ADD TO CART</Button>
                        <Button>BUY NOW</Button>

                    </div>
                </Container>
            </div>
        )
    }
    const mapStateToProps = (state) => {
        return {
          currentItem: state.products.currentItem,
        };
      };
const mapDispatchToProps = (dispatch) =>{
    return{
    addToCart: (id)=> dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(viewProduct);