import Hero from "../components/Hero/Hero";
import PerfumeSlide from "../components/Perfume/PerfumeSlide";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Hero title={"All fragrances."} img={"/Hero/hero2.png"} />
      <PerfumeSlide showViewMore={false} />
    </div>
  );
};

export default Collection;
