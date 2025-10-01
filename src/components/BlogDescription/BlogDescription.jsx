import React from "react";
import "./BlogDescription.css";

const BlogDescription = () => {
  const Dscption = [
    {
      heading: "Mauris maximus mi sit amet urna placerat vestibulum.",
      pargraf: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis leo erat. 
      Donec sed dolor nulla. Morbi fringilla eget massa non imperdiet. Fusce semper ligula enim, 
      sed porttitor neque malesuada vel. Proin ut eleifend arcu, at venenatis est. Nulla tristique 
      sed ante ut pellentesque. Praesent ultricies suscipit mauris, non sollicitudin nunc fermentum 
      sit amet. Nullam urna velit, efficitur ut lacus ut, elementum tincidunt nunc. Etiam volutpat, 
      velit id mollis efficitur, mauris nulla dignissim diam, quis tincidunt nibh augue eu quam. 
      Curabitur laoreet aliquet ipsum quis congue. Orci varius natoque penatibus et magnis dis 
      parturient montes, nascetur ridiculus mus. Sed et laoreet urna, quis auctor eros. 
      Mauris maximus mi sit amet urna placerat vestibulum.`,
      FiPargraf: `Curabitur malesuada dictum velit, 
      nec lacinia est rhoncus sit amet. Praesent elementum, elit quis blandit consectetur, 
      nibh lacus pharetra augue, et maximus odio est gravida turpis. Nullam dapibus condimentum 
      ex sit amet suscipit. Sed viverra vehicula dictum. Proin magna tellus, vehicula nec rutrum 
      vitae, mattis malesuada risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
      Morbi sed dui in mi placerat tincidunt in sed lectus. Fusce lacus sem, dapibus in fringilla non, 
      finibus quis quam. Integer scelerisque nisi facilisis nunc dignissim faucibus. 
      Mauris varius accumsan metus.`,
      img: "/sectionImage/Description.png",
      SeHading:
        "“Nullam dapibus condimentum ex sit amet suscipit. Sed viverra vehicula dictum. Proin magna tellus, vehicula nec rutrum vitae, mattis malesuada risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.”",
      name: "-Nicole S.",
      SePargraf:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis leo erat. Donec sed dolor nulla. Morbi fringilla eget massa non imperdiet. Fusce semper ligula enim, sed porttitor neque malesuada vel. Proin ut eleifend arcu, at venenatis est. Nulla tristique sed ante ut pellentesque.",
    },
  ];

  const UlList = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit.",
    "Donec quis leo erat.",
  ];

  const OrList = [
    "Donec sed dolor nulla.",
    "Morbi fringilla eget massa non imperdiet.",
    "Fusce semper ligula enim.",
    "Sed porttitor neque malesuada vel.",
    "Proin ut eleifend arcu, at venenatis est.",
    "Nulla tristique sed ante ut pellentesque.",
  ];

  return (
    <section>
      {Dscption.map((desc, i) => (
        <div className="DescriptionCont" key={i}>
          <h2 className="heading2">{desc.heading}</h2>
          <br />
          <p className="pargraf2">
            {desc.pargraf}
            <br />
            <br />
            {desc.FiPargraf}
          </p>
          <img src={desc.img} alt="" />
          <h2 className="heading2">{desc.SeHading}</h2>
          <br />
          <h2 className="heading3">{desc.name}</h2>
          <br />
          <p className="pargraf1">{desc.SePargraf}</p>
        </div>
      ))}

      <div className="lists">
        <ul>
          {UlList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <ol>
          {OrList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BlogDescription;
