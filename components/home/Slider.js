import React from "react";
const Slider = () => {
  return (
    <div className="slider -style-1 slider-arrow-middle">
      <div className="slider__carousel">
        <div className="slider__carousel__item slider-1">
          <div className="container">
            <div className="slider-background">
              <img
                className="slider-background"
                src="/app/assets/images/slider/SliderOne/1.png"
                alt="Slider background"
              />
            </div>
            <div className="slider-content">
              <h5
                className="slider-content__subtitle"
                data-animation-in="fadeInUp"
                data-animation-delay="0.1"
              >
                bringing you
              </h5>
              <h1
                className="slider-content__title"
                data-animation-in="fadeInUp"
                data-animation-delay="0.2"
              >
                Inner beauty out
              </h1>
              <div
                data-animation-in="fadeInUp"
                data-animation-out="fadeInDown"
                data-animation-delay="0.4"
              >
                <a className="btn -red" href="#">
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__carousel__item slider-2">
          <div className="container">
            <div className="slider-background">
              <img
                className="slider-background"
                src="/app/assets/images/slider/SliderOne/2.png"
                alt="Slider background"
              />
            </div>
            <div className="slider-content">
              <h5
                className="slider-content__subtitle"
                data-animation-in="fadeInUp"
                data-animation-delay="0.1"
              >
                When you look good
              </h5>
              <h1
                className="slider-content__title"
                data-animation-in="fadeInUp"
                data-animation-delay="0.2"
              >
                You feel good
              </h1>
              <div
                data-animation-in="fadeInUp"
                data-animation-out="fadeInDown"
                data-animation-delay="0.4"
              >
                <a className="btn -red" href="#">
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__carousel__item slider-3">
          <div className="container">
            <div className="slider-background">
              <img
                className="slider-background"
                src="/app/assets/images/slider/SliderOne/3.png"
                alt="Slider background"
              />
            </div>
            <div className="slider-content">
              <h5
                className="slider-content__subtitle"
                data-animation-in="fadeInUp"
                data-animation-delay="0.1"
              >
                We make best makeup
              </h5>
              <h1
                className="slider-content__title"
                data-animation-in="fadeInUp"
                data-animation-delay="0.2"
              >
                Beauty salon
              </h1>
              <div
                data-animation-in="fadeInUp"
                data-animation-out="fadeInDown"
                data-animation-delay="0.4"
              >
                <a className="btn -red" href="#">
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
