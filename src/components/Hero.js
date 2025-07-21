import React from "react";
import "./Hero.css";
import GallerySlider from "./GallerySlider"; // 👈 Make sure this path is correct

function Hero() {
  const handleBoxClick = (title) => {
    // Placeholder for click action; replace with desired functionality (e.g., navigation)
    console.log(`Clicked box: ${title}`);
  };

  return (
    <section className="hero" id="anasayfa">
      <GallerySlider />
      <div className="hero-info-boxes">
        {infoBoxes.map((box, index) => (
          <div
            className="info-box"
            key={index}
            onClick={() => handleBoxClick(box.title)}
          >
            <img src={box.icon} alt={box.title} className="info-icon" />
            <h4>{box.title}</h4>
            <p>{box.description}</p>
            <div className="plus">+</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const infoBoxes = [
  {
    icon: "/tooth1.png",
    title: "Braketlerle İlk Gün",
    description: "İlk hafta uyum süreci biraz zordur, sabırlı olun.",
  },
  {
    icon: "/tooth2.png",
    title: "Braketlilere Özel",
    description: "Tedavi süreci, hasta-doktor uyumuyla başarıya ulaşır.",
  },
  {
    icon: "/tooth3.png",
    title: "Görünmeyen Teller",
    description: "Teller dişin iç yüzeyine yerleştirilir, dışarıdan görünmez.",
  },
  {
    icon: "/tooth4.png",
    title: "Mini İmplantlar",
    description: "Diş hareketlerini yönlendirmek için destek sağlar.",
  },
];


export default Hero;