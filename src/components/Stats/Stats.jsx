import React from "react";
import "./stats.css";
const Stats = () => {
  return (
    <section className="AboutCont">
      <h2 className="heading2">The artisanal difference.</h2>
      <div className="StatsCont">
        <div className="Stats">
          <h1 className="heading1">95%</h1>
          <p className="pargraf2">Sustainability First</p>
          <p className="pargraf2 StatsP">
            Over 95% of our ingredients are responsibly sourced, supporting
            local communities and preserving biodiversity. Our commitment to
            sustainability is more than a principle.
          </p>
        </div>

        <div className="Stats">
          <h1 className="heading1">100%</h1>
          <p className="pargraf2">Cruelty-Free Excellence</p>
          <p className="pargraf2 StatsP">
            We are proudly cruelty-free, ensuring that none of our products are
            tested on animals. This principle is woven into our brand's DNA, and
            our dedication to ethical standards.
          </p>
        </div>

        <div className="Stats">
          <h1 className="heading1">100%</h1>
          <p className="pargraf2">Artistic Expression</p>
          <p className="pargraf2 StatsP">
            Each of our fragrances is a result of creative vision. This
            commitment to artistic expression leads to scents that are 100%
            unique, testaments to our creativity and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
