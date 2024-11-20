import React from "react";
import HeroImg from "../../../public/hero.png";
import CustImg1 from "../../../public/customers/customer-1.jpg";
import CustImg2 from "../../../public/customers/customer-2.jpg";
import CustImg3 from "../../../public/customers/customer-3.jpg";
import CustImg4 from "../../../public/customers/customer-4.jpg";
import CustImg5 from "../../../public/customers/customer-5.jpg";
import CustImg6 from "../../../public/customers/customer-6.jpg";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#try" className="btn btn--full margin-right-sm">
            Start Eating well
          </a>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={CustImg1} alt="Customer 1" />
              <img src={CustImg2} alt="Customer 2" />
              <img src={CustImg3} alt="Customer 3" />
              <img src={CustImg4} alt="Customer 4" />
              <img src={CustImg5} alt="Customer 5" />
              <img src={CustImg6} alt="Customer 6" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src={HeroImg}
            alt="Woman enjoying food, meals in storage container and food bowls on a table"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
