import React from "react";


const Cta = () => {
  return (
    <section className="section-cta" id="try">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" action="#">
              <div>
                <label for="full-name">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  id="full-name"
                  required
                />
              </div>

              <div>
                <label for="email">E-mail address</label>
                <input
                  type="email"
                  placeholder="me@example.com"
                  id="email"
                  required
                />
              </div>

              <div>
                <label for="select-where">Where did you hear about us?</label>
                <select required id="select-where">
                  <option value="">Please choose one option:</option>
                  <option value="Friends">Friends and family</option>
                  <option value="Youtube">Youtube video</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Ad">Facebook ad</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
