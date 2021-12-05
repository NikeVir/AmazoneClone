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

const Banner =({key})=> {
    const img1 =[
        "https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/712zTX7XvxL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71AWhiptouS._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81knqIxxBPL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81AT+Flc+EL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61GCKHqbcxL._AC_SY200_.jpg"
    ]
  return (
    <>
      <h1 style={{ textAlign: "left" ,fontSize:"18px",padding:"15px 0",fontFamily:"sans-serif"}}>International top sellers in Wireless</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {img1.map(item => <Item ><img src={item}/></Item>)}
        </Carousel>
      </div>
    </>
  );
}
export default Banner;