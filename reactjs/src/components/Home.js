import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import './Home1.css'
import Product from './Product'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Container className="home_container">
                    <Container className="ad-baner"><img src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" /></Container>
                    <Container className="product-container">

                        <Product
                            title="Up to 70% off | Electronics clearance store"
                            image=""
                            link=""
                        />
                        <Product
                            title="Automotive essentials | Up to 60% off"
                            image=""
                            link=""
                        />
                        <Product
                            title="Styles for Men | Up to 70% off"
                            image=""
                            link=""
                        />
                        <Product
                            title="Styles for Women | Up to 70% off"
                            image=""
                            link=""
                        />
                        <Product
                            title="Revamp your home in style"
                            image=""
                            link=""
                        />
                        <Product
                            title="Upgrade your home | Amazon Brands & more"
                            image=""
                            link=""
                        />
                        <Product
                            title="Up to 50% off | Garden & outdoor"
                            image=""
                            link=""
                        />
                        <Product
                            title="Food, fitness and WFH essentials | Amazon"
                            image=""
                            link=""
                        />

                        <Container className="baner"></Container>

                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />
                        <Product
                            title=""
                            image=""
                            link=""
                        />

                        <Container className="baner"></Container>

                    </Container>
                </Container>

            </div>
        )
    }
}
