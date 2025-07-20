import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./GaleriPage.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";

const imageData = [
  { src: gallery1, caption: "İzmirli Ortodonti" },
  { src: gallery2, caption: "Bekleme Odası" },
  { src: gallery3, caption: "Hol Alanı" },
  { src: gallery4, caption: "Diş Ünitesi 1" },
  { src: gallery5, caption: "Muayene Ekranı" },
  { src: gallery6, caption: "Hijyen Seti" },
  { src: gallery7, caption: "Bekleme Köşesi" },
  { src: gallery8, caption: "Klinik Girişi" },
  { src: gallery9, caption: "Tedavi Ünitesi" },
  { src: gallery10, caption: "Işık Sistemleri" },
  { src: gallery11, caption: "Dijital Ekipmanlar" },
  { src: gallery12, caption: "Genel Görünüm" },
];

function GaleriPage() {
  const [modalImage, setModalImage] = useState(null);

  // Escape to close modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "auto";
  }, [modalImage]);

  return (
    <>
      <Navbar />
      <div className="gallery-page">
        <h1 className="gallery-title">Kliniğimizden Görseller</h1>
        <div className="gallery-grid">
          {imageData.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setModalImage(img)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="caption-overlay">{img.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
            <img src={modalImage.src} alt={modalImage.caption} />
            <p>{modalImage.caption}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default GaleriPage;
