import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import './Home1.css'
export default function Product({title,image,link})  {
        return (
                <Container className="product">
                    <div className="product-title">
                        {title}
                    </div>
                    <div className="product-image">
                        <img src ={image}/>
                    </div>
                    <p><Link to={link}>See more</Link></p>

                </Container>
        )
}
