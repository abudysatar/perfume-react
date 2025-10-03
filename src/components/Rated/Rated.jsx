import React, { useRef } from "react";
import "./Rated.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "@carbon/icons-react";
import "swiper/css";
import "swiper/css/navigation";

const RateSlide = [
  {
    text: "In love with these floral perfumes! The scents are balanced, not overpowering, and evoke a sense of serenity. I appreciate their commitment to sustainability too.",
    name: "Samantha R.",
    location: "Miami, FL",
    img: "/logos/miami.png",
  },
  {
    text: "A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!",
    name: "Natalie F.",
    location: "Atlanta, GA",
    img: "/logos/natalia.png",
  },
  {
    text: "Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature’s finest flowers fresh everyday.",
    name: "Jessica C.",
    location: "Tampa, FL",
    img: "/logos/tampi.png",
  },
  {
    text: "In love with these floral perfumes! The scents are balanced, not overpowering, and evoke a sense of serenity. I appreciate their commitment to sustainability too.",
    name: "Samantha R.",
    location: "Miami, FL",
    img: "/logos/miami.png",
  },
  {
    text: "A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!",
    name: "Natalie F.",
    location: "Atlanta, GA",
    img: "/logos/natalia.png",
  },
  {
    text: "Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature’s finest flowers fresh everyday.",
    name: "Jessica C.",
    location: "Tampa, FL",
    img: "/logos/tampi.png",
  },
];

const Rated = () => {
  const swiperRef = useRef(null);

  return (
    <section className="ratedSection">
      <h2 className="heading2">Everyone is enchanted by us.</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        loop={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {RateSlide.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="ratedCard">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} />
                ))}
              </div>
              <p className="text">“{item.text}”</p>
              <div className="author">
                <img src={item.img} alt={item.name} className="authorImg" />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom buttons */}
      <div className="rated-nav">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <ArrowLeft Add size="25" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <ArrowRight Add size="25" />
        </button>
      </div>
    </section>
  );
};

export default Rated;
