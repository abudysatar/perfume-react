import React from "react";
import "./productSlider.css";
const ProductSlider = () => {
  return (
    <section className="ProductsSliderCont">
      <h2 className="heading2">Unveiling creative mastery.</h2>
      <div className="GridProduct">
        <div className="ProductsSliderTxt">
          <img src="/logos/pen.png" alt="" />
          <h6 className="heading6">Artisanal Craftsmanship</h6>
          <p className="pargraf1">
            Our fragrances are meticulously crafted by skilled artisans who
            blend science with creativity. Every note is carefully chosen and
            combined, resulting in captivating scents.
          </p>
        </div>
        <div className="ProductsSliderTxt">
          <img src="/logos/Flower.png" alt="" />
          <h6 className="heading6">Scent Journey Innovation</h6>
          <p className="pargraf1">
            Our fragrances take you on a dynamic scent journey. As the day
            unfolds, our perfumes reveal different facets, adapting to your body
            chemistry and surroundings.
          </p>
        </div>
        <div className="ProductsSliderTxt">
          <img src="/logos/Group.png" alt="" />
          <h6 className="heading6">Inspired by Nature</h6>
          <p className="pargraf1">
            Our fragrances are born from nature's palette, capturing the essence
            of blooming flowers, lush landscapes, and serene moments. We draw
            inspiration from the beauty around us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
