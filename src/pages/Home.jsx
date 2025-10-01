import PerfumeSlide from "../components/Perfume/PerfumeSlide";
import Standard from "../components/Standard/Standard";
import StandardBar from "../components/standardBar/StandardBar";
import StandardDetals from "../components/standardDetals/standardDetals";
import Rated from "../components/Rated/Rated";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Hero/Brands.jsx";
import Button from "../components/Button/Button.jsx";

const Home = () => {
  return (
    <>
      <Hero
        title={"Elevate everyday moments to extraordinary."}
        button={
          <Button href={"/collection"} rounded={true}>
            SHOP OUR FRAGRANCES
          </Button>
        }
        img={"/Hero/hero.png"}
        fullHight
      />
      <Brands />
      <PerfumeSlide
        heading="Featured Perfumes"
        showViewMore={true}
        viewMoreLink="/collection"
      />
      <Standard />
      <StandardBar />
      <StandardDetals />
      <Rated />
    </>
  );
};

export default Home;
