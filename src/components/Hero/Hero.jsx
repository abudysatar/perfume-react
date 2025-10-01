import "./hero.css";
const Hero = ({ title, button, img, fullHight }) => {
  return (
    <div className="hero-sec" data-full={fullHight}>
      {img && <img src={img} alt="img" />}
      {title && <h1 className="heading1">{title}</h1>}
      {button && button}
    </div>
  );
};

export default Hero;
