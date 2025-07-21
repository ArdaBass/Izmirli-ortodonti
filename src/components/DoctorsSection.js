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
    name: "Dt. Begüm Evrenol",
    role: "2027", // Will be replaced by countdown
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
  const [begumCountdown, setBegumCountdown] = useState("");

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
    const cardWidth = container.offsetWidth;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveDot(index);
  };

  const scrollToCard = (index) => {
    const container = scrollContainer.current;
    if (!container) return;

    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
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
    const walk = (x - startX) * 1.5;
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

  useEffect(() => {
    const targetDate = new Date("2027-07-01T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setBegumCountdown("🥳 Mezun oldu!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);
      const remainingDays = days - (years * 365 + months * 30);

      setBegumCountdown(`${years} yıl ${months} ay ${remainingDays} gün kaldı`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update hourly
    return () => clearInterval(interval);
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
              <span className="doctor-role">
                {doc.name.includes("Begüm") ? begumCountdown : doc.role}
              </span>
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
