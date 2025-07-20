// components/Treatments.js
import React from "react";
import "./Treatments.css";

const treatments = [
  { name: "Ortodontik Tedavi", image: "/braces.png" },
  { name: "Şeffaf Plak", image: "/aligner.png" },
  { name: "Diş Beyazlatma", image: "/whitening.png" },
  { name: "Çene Ortopedisi", image: "/jaw.png" },
  { name: "Pekiştirme Tedavisi", image: "/retainer.png" },
  { name: "Diş Teli Temizliği", image: "/cleaning.png" },
];

function Treatments() {
  return (
    <section className="treatments-section" id="tedaviler">
      <h2>Tedavilerimiz</h2>
      <div className="treatments-grid">
        {treatments.map((item, index) => (
          <div className="treatment-card" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Treatments;
