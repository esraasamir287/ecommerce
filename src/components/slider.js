import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/slider.css"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 2000,
      fade: true,
    //   cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide-div">
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/bg-01-free-img.jpg" alt="slide-1"/>
          </div>
          <div className="slide-div">
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/hero.jpg" alt="slide-2"/>

          </div>
          <div className="slide-div">
            <img src="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-hero-img-bg.jpg" alt="slide-3"/>
          </div>
         
        </Slider>
      </div>
    );
  }
}
