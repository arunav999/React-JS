import React, { useState } from "react";

const Cta = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    heardAbout: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5173/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Data saved successfully!");
      } else {
        setMessage("Failed to save data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred while saving data.");
    }
  };

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

            <form className="cta-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">E-mail address</label>
                <input
                  type="email"
                  placeholder="me@example.com"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="heardAbout">Where did you hear about us?</label>
                <select
                  id="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please choose one option:</option>
                  <option value="Friends">Friends and family</option>
                  <option value="Youtube">Youtube video</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Ad">Facebook ad</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <button type="submit" className="btn btn--form">
                Sign up now
              </button>
              {message && <p>{message}</p>}
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
