// TreatmentSections.js
import React from 'react';
import DoctorTreatments from './DoctorTreatments';
import ToothCleaning from './ToothCleaning';
import ContactForm from './ContactForm';
import './TreatmentSections.css';

function TreatmentSections() {
  return (
    <section className="treatment-sections">
      <div className="treatment-card">
        <DoctorTreatments />
      </div>
      <div className="treatment-card">
        <ToothCleaning />
      </div>
      <div className="treatment-card">
        <ContactForm />
      </div>
    </section>
  );
}

export default TreatmentSections;
