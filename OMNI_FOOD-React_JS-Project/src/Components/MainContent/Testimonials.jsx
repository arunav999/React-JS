import React from "react";

import BenImg from "../../../public/customers/ben.jpg";
import DaveImg from "../../../public/customers/dave.jpg";
import HannahImg from "../../../public/customers/hannah.jpg";
import SteveImg from "../../../public/customers/steve.jpg";

import Gallery1 from "../../../public/gallery/gallery-1.jpg";
import Gallery2 from "../../../public/gallery/gallery-2.jpg";
import Gallery3 from "../../../public/gallery/gallery-3.jpg";
import Gallery4 from "../../../public/gallery/gallery-4.jpg";
import Gallery5 from "../../../public/gallery/gallery-5.jpg";
import Gallery6 from "../../../public/gallery/gallery-6.jpg";
import Gallery7 from "../../../public/gallery/gallery-7.jpg";
import Gallery8 from "../../../public/gallery/gallery-8.jpg";
import Gallery9 from "../../../public/gallery/gallery-9.jpg";
import Gallery10 from "../../../public/gallery/gallery-10.jpg";
import Gallery11 from "../../../public/gallery/gallery-11.jpg";
import Gallery12 from "../../../public/gallery/gallery-12.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="sub-heading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={DaveImg}
              alt="Photo of customer Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={BenImg}
              alt="Photo of customer Ben Hadley"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={SteveImg}
              alt="Photo of customer Steve Miller"
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={HannahImg}
              alt="Photo of customer Hannah Smith"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={Gallery1} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery2} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery3} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery4} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery5} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery6} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery7} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery8} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery9} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery10} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery11} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={Gallery12} alt="Photo of beautifully arranged food" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
