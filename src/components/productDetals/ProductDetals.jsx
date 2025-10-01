import "./Products.css";
import Button from "../Button/Button";
import { DotMark } from "@carbon/icons-react";
import * as Accordion from "@radix-ui/react-accordion";
const ProductDetals = ({ product }) => {
  return (
    <div className="product-grid">
      {/* Left column */}
      <div className="product-images">
        <img src={product.img} alt="perfume" />
        <img src={product.imgs} alt="perfume" />
      </div>

      {/* Right column */}
      <div className="product-info">
        <h1 className="heading1 Name">{product.name}</h1>
        <div className="PriceCont">
          <p className="pargraf2">{product.detals}</p>
          <p className="pargraf2">{product.price}</p>
        </div>
        <p className="pargraf1">{product.info}</p>

        <button className="news sold-out">
          {" "}
          <DotMark className={"DotNews"} /> SOLD OUT
        </button>

        <div className="quantity">
          <label>Qty</label>
          <input type="number" defaultValue="1" min="1" />
        </div>

        <Button rounded className={"cardBtn"}>
          ADD TO CART
        </Button>

        {/* Product Accordion */}
        <Accordion.Root
          className="ProductAccordionRoot"
          type="single"
          collapsible
        >
          <Accordion.Item value="scent-notes" className="ProductAccordionItem">
            <Accordion.Trigger className="ProductAccordionTrigger">
              <span>SCENT NOTES</span>
              <span className="ProductAccordionIcon">+</span>
            </Accordion.Trigger>
            <Accordion.Content className="ProductAccordionContent">
              <div className="ProductAccordionText">{product.scentNotes}</div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="ingredients" className="ProductAccordionItem">
            <Accordion.Trigger className="ProductAccordionTrigger">
              <span>INGREDIENTS</span>
              <span className="ProductAccordionIcon">+</span>
            </Accordion.Trigger>
            <Accordion.Content className="ProductAccordionContent">
              <div className="ProductAccordionText">{product.ingredients}</div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};
export default ProductDetals;
