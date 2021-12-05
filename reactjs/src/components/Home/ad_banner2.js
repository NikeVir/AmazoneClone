import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
  { width: 1200, itemsToShow: 7 },
];

const Banner2 =({key})=> {
    const img1 =[
        "https://m.media-amazon.com/images/I/61-ReEnTmIS._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71E+hd3S4NL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71d+75qY9lL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71zGigxQOdL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81DFHJe52+L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61tciztlBnL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61WGF6S-mPL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61Din3efGgL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71vsPmbeAoL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61puQKUFsfL._AC_SY200_.jpg"
    ]
  return (
    <>
      <h1 style={{ textAlign: "left" ,fontSize:"18px",padding:"15px 0",fontFamily:"sans-serif"}}>Top Sellers in Books for you</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {img1.map(item => <Item ><img src={item}/></Item>)}
        </Carousel>
      </div>
    </>
  );
}
export default Banner2;