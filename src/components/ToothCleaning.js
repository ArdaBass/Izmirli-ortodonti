// ToothCleaning.js
import React from 'react';
import './ToothCleaning.css';

function ToothCleaning() {
  const items = [
    "Braketlerin Temizliği",
    "Diş ipi Kullanımı",
    "Arayüz Fırçası Kullanımı"
  ];

  return (
    <div>
      <h2>Diş Temizliği</h2>
      <ul className="tc-list">
        {items.map((item, index) => (
          <li key={index} className="tc-list-item">
            <div className="tc-left">
              <i className="fa-solid fa-bookmark tc-icon"></i>
              <span className="tc-text">{item}</span>
            </div>
            <div className="tc-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToothCleaning;
