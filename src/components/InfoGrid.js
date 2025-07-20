// InfoGrid.js
import React from "react";
import "./InfoGrid.css";
import { FiTarget, FiAlertTriangle } from "react-icons/fi";
import { MdOutlineSick } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const infoItems = [
  {
    icon: <FiTarget />,
    title: "Pekiştirme Tedavisi",
    description: "Yapım aşamasında",
    link: null,
  },
  {
    icon: <MdOutlineSick />,
    title: "Kötü Alışkanlıklar",
    description:
      "Ortodontik bozuklukların kalıtsal olduğu yönünde yaygın bir kanı vardır...",
    link: "#",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Aman Dikkat",
    description: "Yapım aşamasında",
    link: null,
  },
  {
    icon: <FaBookOpen />,
    title: "Ortodonti Sözlüğü",
    description: "Ortodonti ile ilgili herşey...",
    link: "#",
  },
];

function InfoGrid() {
  return (
    <section className="info-grid">
      <div className="info-grid-container">
        {infoItems.map((item, idx) => (
          <div key={idx} className="info-card">
            <div className="info-icon-square">{item.icon}</div>
            <div className="info-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            {item.link && (
              <div className="info-card-arrow">
                <a href={item.link}>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoGrid;
