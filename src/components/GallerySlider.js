import React, { useState, useEffect, useRef } from 'react';
import './GallerySlider.css';

const slides = [
  {
    image: "/galleryy1.jpg",
    title: "ANNE & BABALARA",
    subtitle: "BİLGİLER",
    link: "/bilgiler1",
  },
  {
    image: "/galleryy2.jpg",
    title: "ORTODONTİK",
    subtitle: "TEDAVİLER",
    link: "/tedaviler",
  },
  {
    image: "/galleryy3.jpg",
    title: "ÇOCUKLAR İÇİN",
    subtitle: "İPUÇLAR",
    link: "/ipuclar",
  },
];

function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  return (
    <div className="gallery-slider-modern">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-modern ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="slide-overlay">
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <h1>{slide.subtitle}</h1>
                <a href={slide.link} className="devam-modern">
                  DEVAM
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="arrow-controls">
        <button onClick={prevSlide} className="arrow left" aria-label="Previous Slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button onClick={nextSlide} className="arrow right" aria-label="Next Slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default GallerySlider;
