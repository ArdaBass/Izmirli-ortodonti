import React from "react";
import "./Hero.css";
import GallerySlider from "./GallerySlider";

function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <GallerySlider />
      <div className="hero-info-boxes">
        {infoBoxes.map((box, index) => (
          <div className="info-box" key={index}>
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
    description:
      "Braket takmanın en zor kısmı ilk bir haftadır. İnsan ağzındaki bir tüy parçasını bile hissedip çıkarmaya...",
  },
  {
    icon: "/tooth2.png",
    title: "Braketlilere Özel",
    description:
      "Ortodontik tedavi, hasta ve doktorun uyum içinde çalışması ile yürütülebilecek bir tedavidir...",
  },
  {
    icon: "/tooth3.png",
    title: "Görünmeyen Teller",
    description:
      "Sabit tedavinin bir şeklidir. Braketler dişlerin ön yüzlerine değil, iç yüzlerine yapıştırılır...",
  },
  {
    icon: "/tooth4.png",
    title: "Mini İmplantlar",
    description:
      "Ortodontik tedavi sırasında her çekme ve itme hareketine yani aksiyona dişlerden...",
  },
];

export default Hero;
