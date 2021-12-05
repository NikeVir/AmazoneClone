import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

export default class SimpleSlider extends Component {
  render() {
      const photos=[
         { name:'Photo 1',
         url:"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
      },
      { name:'Photo 2',
         url:"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
      },
      { name:'Photo 3',
         url:"https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
      },
      { name:'Photo 4',
         url:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
      },
      { name:'Photo 5',
         url:"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
      }
      ]
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows:true,
      autoplay: true,
      pauseOnHover: false,
      slidesToScroll: 1,
      className:"slides"
    };
    return (
      <div className ="ad_slider_new">
        <Slider {...settings}>
          {photos.map((photo)=>{
              return(
                  <div>
                      <img className="new_img" width ="100%"src={photo.url}/>
                  </div>
              )
          })}
        </Slider>
      </div>
    );
  }
}