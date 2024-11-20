import React from "react";

import BusinessInsider from "../../../public/logos/business-insider.png";
import Forbes from "../../../public/logos/forbes.png";
import TechCrunch from "../../../public/logos/techcrunch.png";
import NewYorkTimes from "../../../public/logos/the-new-york-times.png";
import UsaToday from "../../../public/logos/usa-today.png";

const Featured = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in.</h2>
        <div className="logos">
          <img src={TechCrunch} alt="Techcrunch logo" />
          <img src={BusinessInsider} alt="Business insider logo" />
          <img src={NewYorkTimes} alt="The New York Times logo" />
          <img src={Forbes} alt="Forbes logo" />
          <img src={UsaToday} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
