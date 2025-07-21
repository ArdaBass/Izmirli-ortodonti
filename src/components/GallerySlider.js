import React, { useEffect, useRef, useState, useCallback } from "react";
import "./GallerySlider.css";

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
  const scrollRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        if (window.innerWidth <= 768 && scrollRef.current) {
          scrollRef.current.scrollTo({
            left: next * scrollRef.current.clientWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 6000);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      resetTimer();
    }
    return () => clearInterval(intervalRef.current);
  }, [resetTimer]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.clientWidth
      );
      setCurrent(index);
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="gallery-slider-modern">
      <div
        className={`slide-container ${isMobile ? "mobile-scroll" : ""}`}
        ref={scrollRef}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-modern ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <h1>{slide.subtitle}</h1>
                <a href={slide.link} className="devam-modern">
                  DEVAM
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isMobile && (
        <div className="arrow-controls">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="arrow left"
          >
            ◀
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="arrow right"
          >
            ▶
          </button>
        </div>
      )}

      {isMobile && (
        <div className="mobile-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}

export default GallerySlider;
