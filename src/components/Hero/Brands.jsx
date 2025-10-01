import "./brands.css";

const image = [
  { img: "/logos/flow.png" },
  { img: "/logos/InTrend.png" },
  { img: "/logos/JUNE.png" },
  { img: "/logos/MAX.png" },
  { img: "/logos/NINO.png" },
  { img: "/logos/ZINE.png" },
];

const Brands = () => {
  return (
    <section>
      <p className="pargraf4 brandP ">As seen in</p>
      <div className="brands-container">
        {image.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={`Image ${index + 1}`}
            className="brand-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
