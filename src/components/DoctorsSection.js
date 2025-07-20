
import React, { useEffect, useRef, useState } from "react";
import "./DoctorsSection.css";
import { useNavigate } from "react-router-dom";

const defaultDoctors = [
  {
    id: "berna",
    name: "Dr. Berna İzmirli Evrenol",
    role: "Ortodontist",
    image: null
  },
  {
    id: "bekir",
    name: "Dt. Bekir Sıtkı İzmirli",
    role: "Ortodontist",
    image: null
  },
  {
    id: "ayşe1",
    name: "Dr. Ayşe Deniz",
    role: "Pedodontist",
    image: null
  },
  {
    id: "ayşe2",
    name: "Dr. Ayşe Deniz",
    role: "Pedodontist",
    image: null
  },
  {
    id: "ayşe3",
    name: "Dr. Ayşe Deniz",
    role: "Pedodontist",
    image: null
  }
];

function DoctorsSection({ doctors = defaultDoctors, onDoctorClick }) {
  const navigate = useNavigate();
  const scrollContainer = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleClick = (doctor) => {
    if (onDoctorClick) {
      onDoctorClick(doctor);
    } else {
      navigate("/hakkimizda");
    }
  };

  const handleScroll = () => {
    const container = scrollContainer.current;
    if (!container) return;

    const scrollPosition = container.scrollLeft;
    const cardWidth = container.querySelector(".doctor-card")?.offsetWidth || 240;
    const index = Math.round(scrollPosition / (cardWidth + 28)); // 28 is the gap
    setActiveDot(index);
  };

  const scrollToCard = (index) => {
    const container = scrollContainer.current;
    if (!container) return;

    const cardWidth = container.querySelector(".doctor-card")?.offsetWidth || 240;
    container.scrollTo({
      left: index * (cardWidth + 28),
      behavior: "smooth"
    });
  };

  const handleMouseDown = (e) => {
    const container = scrollContainer.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainer.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust drag speed
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainer.current;
    if (container) {
      container.style.cursor = "grab";
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="doctors-section">
      <h2>Hekimlerimiz</h2>
      <div
        className="doctor-cards"
        ref={scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {doctors.map((doc) => (
          <div
            className="doctor-card"
            key={doc.id}
            onClick={() => handleClick(doc)}
          >
            <div className="avatar">
              {doc.image ? (
                <img src={doc.image} alt={doc.name} />
              ) : (
                <i className="fa-solid fa-user-doctor"></i>
              )}
            </div>
            <div className="doctor-info">
              <p className="doctor-name">{doc.name}</p>
              <span className="doctor-role">{doc.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {doctors.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeDot ? "active" : ""}`}
            onClick={() => scrollToCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;
