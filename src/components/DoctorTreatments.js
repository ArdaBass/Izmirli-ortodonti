// DoctorTreatments.js
import React, { useState } from 'react';
import './DoctorTreatments.css';

const treatmentData = [
  {
    title: 'Sabit Ortodontik Tedavi',
    icon: 'fa-cubes',
    content: 'Ortodontik tedavinin en çok tercih edilen şeklidir...'
  },
  {
    title: 'Müteaharik Ortodontik Tedavi',
    icon: 'fa-user-doctor',
    content: 'Basit çapraşıklıkların düzeltilmesinde...'
  },
  {
    title: 'Fonksiyonel Ortodontik Tedavi',
    icon: 'fa-stethoscope',
    content: 'Çocuğun büyüme gelişiminden yararlanılarak uygulanan...'
  },
  {
    title: 'Lingual Ortodontik Tedavi',
    icon: 'fa-heart',
    content: 'Braketler dişlerin iç yüzeyine yerleştirilir...'
  }
];

function DoctorTreatments() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      <h2>Ortodontik Tedaviler</h2>
      <ul className="treatment-list">
        {treatmentData.map((item, index) => (
          <li key={index} className={`treatment-item ${expandedIndex === index ? 'expanded' : ''}`}>
            <div className="treatment-header" onClick={() => toggleContent(index)}>
              <div className="icon-container">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="treatment-title">{item.title}</span>
              <div className="toggle-icon">{expandedIndex === index ? '−' : '+'}</div>
            </div>
            {expandedIndex === index && (
              <div className="treatment-content">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorTreatments;
