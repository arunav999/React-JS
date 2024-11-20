import React from "react";

const Pricing = () => {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="sub-heading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>

        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="list-icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M416 128L192 384l-96-96"
                />
              </svg>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="container grid grid--4-cols">
        <div className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="feature-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="feature-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z" />
            <ellipse cx="216" cy="304" rx="24" ry="48" />
            <ellipse cx="296" cy="304" rx="24" ry="48" />
          </svg>
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="feature-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
          <p className="feature-title">No waste!</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="feature-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M176 96h16v320h-16zM320 96h16v320h-16z"
            />
          </svg>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
