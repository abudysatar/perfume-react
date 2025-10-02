import Hero from "../components/Hero/Hero";
import Button from "../components/Button/Button.jsx";
import Stats from "../components/Stats/Stats.jsx";
import FAQ from "../components/Q&A/Faq.jsx";

const About = () => {
  return (
    <div>
      <Hero
        img={"/Hero/Section Split Image Banner.png"}
        title={"Our guiding principles."}
        fullHight
        button={<Button rounded={true}>SHOP OUR FRAGRANCES</Button>}
      />
      <Stats />
      <Hero
        img={"/Hero/split2.png"}
        title={"Infusing passion into every bottle."}
        fullHight
      />
      <FAQ />
    </div>
  );
};

export default About;
