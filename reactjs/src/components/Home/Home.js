import React, { Component, useState } from 'react'
import { Container } from "react-bootstrap"
import Slider from './SimpleSlider'
import './Home1.css'
import Product from './Product'
import { connect } from 'react-redux'
import Banner from './ad_banner'
import Banner2 from './ad_banner2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {




    return (
        <div>
            <Container className="home_container">
                <Container className="ad-baner">
                <Slider/>
                </Container>
                <Container className="product-container">

                    <Product
                        title="Up to 40% off | Mobiles & accessories "
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/DesktopGateway_CategoryCard_379X304._SY304_CB639629275_.jpg"
                        Category ="mobile"
                        link=""
                    />
                    <Product
                        title="Computers & Accessories"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                        Category ="laptop"
                        link=""
                    />
                    <Product
                        title="For your Fitness Needs"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
                        Category ="gym"
                        link=""
                    />
                    <Product
                        title="Explore home bedding"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
                        Category ="bed"
                        link=""
                    />
                    <Product
                        title="Home & Kitchen"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg"
                        Category ="home"
                        link=""
                    />
                    <Product
                        title="Shop activity trackers and smartwatches"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                        Category ="watch"
                        link=""
                    />
                    <Product
                        title="Create with strip lights"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
                        Category ="light"
                        link=""
                    />
                    <Product
                        title="Shop Pet supplies"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
                        Category ="pet"
                        link=""
                    />

                    <Container className="baner"><Banner/></Container>
                    <Container className="baner"><Banner2/></Container>

                </Container>
                <Container className="Footer">
                    
                </Container>
            </Container>

        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(mapStateToProps)(Home);