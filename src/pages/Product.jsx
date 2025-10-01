import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProductDetals from "../components/productDetals/ProductDetals";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Info from "../components/productInfo/Info";
import PerfumeSlide from "../components/Perfume/PerfumeSlide";

const data = [
  {
    onSale: true,
    img: "/parfumes/Image.png",
    imgs: "/parfumes/perfum2.png",
    name: "Meadow",
    detals: "BREEZY & JOYFUL",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, optio asdasd asdsad gseawdf awdawd.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Wildflowers, green grass, soft jasmine, and morning dew.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Geraniol, Citral.",
  },
  {
    onSale: false,
    img: "/parfumes/jardinea.png",
    imgs: "/parfumes/perfum2.png",
    name: "Jardinea",
    detals: "STRONGLY FLORAL",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet elit. Eos, optio.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Rose petals, lily, magnolia, and a hint of gardenia.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Eugenol, Citronellol.",
  },
  {
    onSale: true,
    img: "/parfumes/lavanda.png",
    imgs: "/parfumes/perfum2.png",
    name: "Lavanda",
    detals: "CALMING",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet  adipisicing elit. Eos, optio.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Lavender blossoms, chamomile, fresh herbs, and soft musk.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Coumarin, Farnesol.",
  },
  {
    onSale: false,
    img: "/parfumes/neroli.png",
    imgs: "/parfumes/perfum2.png",

    name: "Neroli",
    detals: "DEEP & SWEET",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, optio asdasd tjhfthjd qaewev aerd awedAW.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Orange blossom, neroli oil, honeyed amber, and white musk.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Benzyl Alcohol.",
  },
  {
    onSale: false,
    img: "/parfumes/spritz.png",
    imgs: "/parfumes/perfum2.png",

    name: "Spritz",
    detals: "FRUITY & LIGHT",
    price: "$39.95",
    info: "Lorem consectetur adipisicing elit. Eos, optio.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Sparkling citrus, peach, juicy pear, and white flowers.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citral, Limonene, Hexyl Cinnamal.",
  },
  {
    onSale: false,
    img: "/parfumes/powder.png",
    imgs: "/parfumes/perfum2.png",

    name: "Powder",
    detals: "ULTRA CLEAN",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, optio.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Iris, violet, soft musk, and fresh linen.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Alpha-Isomethyl Ionone, Linalool, Hydroxycitronellal.",
  },
  {
    onSale: true,
    img: "/parfumes/cirtuz.png",
    imgs: "/parfumes/perfum2.png",
    name: "Citrus",
    detals: "ZESTY & BRIGHT",
    price: "$39.95",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, optio.",
    button: { name: "SHOP NOW", link: "/about" },
    scentNotes: "Lemon zest, bergamot, grapefruit, and light cedarwood.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citral, Limonene, Geraniol.",
  },
];

const Product = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const product = data[id - 1];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <ProductDetals product={product} />
      <ProductSlider />
      <Info />
      <PerfumeSlide
        heading="We know you’ll love these."
        viewMoreLink="/collection"
      />
    </div>
  );
};

export default Product;
