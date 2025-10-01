import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./perfume.css";

const data = [
  {
    onSale: true,
    img: "/parfumes/Image.png",
    name: "Meadow",
    detals: "BREEZY & JOYFUL",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: false,
    img: "/parfumes/jardinea.png",
    name: "Jardinea",
    detals: "STRONGLY FLORAL",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: true,
    img: "/parfumes/lavanda.png",
    name: "Lavanda",
    detals: "CALMING",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: false,
    img: "/parfumes/neroli.png",
    name: "Neroli",
    detals: "DEEP & SWEET",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: false,
    img: "/parfumes/spritz.png",
    name: "Spritz",
    detals: "FRUITY & LIGHT",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: false,
    img: "/parfumes/powder.png",
    name: "Powder",
    detals: "ultra clean",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
  {
    onSale: true,
    img: "/parfumes/cirtuz.png",
    name: "Citrus",
    detals: "ultra clean",
    price: "$39.95",
    button: { name: "SHOP NOW", link: "/about" },
  },
];

const PerfumeSlide = ({
  heading,
  showViewMore = true,
  viewMoreLink = null,
}) => {
  const visibleItems = showViewMore ? data.slice(0, 4) : data;

  return (
    <section className="perfumeSection">
      {heading && <h2 className="heading2">{heading}</h2>}
      <div className="cardContainer">
        {visibleItems.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.name} className="cardImg" />
            <h5 className="heading5">{item.name}</h5>
            <p className="pargraf2">{item.detals}</p>
            <p className="price">{item.price}</p>
            <Button href={`/products/${index + 1}`} className="cardBtn" rounded>
              {item.button.name}
            </Button>
            {item.onSale && (
              <Button rounded className="onSale">
                ON SALE
              </Button>
            )}
          </div>
        ))}
      </div>

      {showViewMore && viewMoreLink && data.length > 4 && (
        <div className="viewMoreContainer">
          <Link to={viewMoreLink}>
            <Button rounded>View More</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default PerfumeSlide;
