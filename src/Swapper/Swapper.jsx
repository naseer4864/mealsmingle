import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-container">
        <Slider {...settings} className="slide">
          <div className="slider">
            <img
              src="https://i.ibb.co/wY2DKQ5/Whats-App-Image-2023-03-20-at-7-16-53-PM.jpg"
              alt=""
            />
            <p>
              Mealmingle's meals are a taste sensation! So many flavors in one
              bite; it's a culinary adventure
            </p>
            <h3>NASIRUDEEN NURUDEEN</h3>
          </div>
          <div className="slider">
            <img
              src="https://i.ibb.co/JnDg35Q/Whats-App-Image-2023-04-17-at-9-01-05-PM.jpg"
              alt=""
            />
            <p>
              The convenience of Mealmingle is unbeatable, and the meals always
              hit the spot.
            </p>
            <h3>MR ISAAC</h3>
          </div>
          <div className="slider">
            <img
              src="https://i.ibb.co/Yy3Bjxg/Whats-App-Image-2023-04-17-at-8-58-23-PM.jpg"
              alt=""
            />
            <p>
              I love how Mealmingle caters to my dietary preferences - it's like
              they read my mind!
            </p>
            <h3>MR TAIWO</h3>
          </div>
          <div className="slider">
            <img
              src="https://i.ibb.co/St3pMGr/Whats-App-Image-2023-04-17-at-9-14-23-PM.jpg"
              alt=""
            />
            <p>
              "Fresh ingredients, vibrant colors, and deliciousness in every
              dish. Mealmingle never disappoints.
            </p>
            <h3>MUSEFIU ADEBISI</h3>
          </div>
          <div className="slider">
            <img
              src="https://i.ibb.co/swDn323/Whats-App-Image-2023-04-17-at-9-29-31-PM.jpg"
              alt=""
            />
            <p>
              Mealmingle's meals make my busy life easier and tastier. A
              game-changer for weeknight dinners
            </p>
            <h3>NASIRUDEEN ABIBAT</h3>
          </div>
          <div className="slider">
            <img
              src="https://i.ibb.co/3YYYFcC/Whats-App-Image-2023-04-17-at-9-17-49-PM.jpg"
              alt=""
            />
            <p>
              Finally, a meal subscription that understands my cravings!
              Mealmingle's variety keeps me excited.
            </p>
            <h3>HAWAU OYENIYI</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
