// components/AboutSection.js
import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="hakkimizda">
      <div className="about-container">
        <div className="about-text">
          <h2>Hakkımızda</h2>
          <p>
            İzmirli Ortodonti olarak, estetik ve sağlıklı bir gülümseme için
            uzman kadromuzla sizlere hizmet veriyoruz. Modern ekipmanlarımız
            ve hasta odaklı yaklaşımımızla ortodontik tedavi sürecinizi konforlu
            hale getiriyoruz. Amacımız, sadece dişlerinizi düzeltmek değil;
            aynı zamanda güvenli, hijyenik ve güler yüzlü bir ortamda sizi ağırlamak.
          </p>
        </div>
        <div className="about-image">
          <img src="/about.jpg" alt="Klinik Görseli" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
