import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccordionSection from "../components/AccordionSection";
import "./TedavilerPage.css";
import ortodontiBanner from "../assets/ortodonti-nedir.jpg";
import ortodontidata from "../data/ortodontidata";

function TedavilerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="tedaviler-container">
        <div className="banner-wrapper">
          <img
            src={ortodontiBanner}
            alt="Ortodonti Banner"
            className="banner-image"
          />
          <h1 className="tedavi-title">Ortodonti Hakkında</h1>
        </div>

        <div className="tedaviler-divider" />

        <AccordionSection items={ortodontidata} />
      </div>
      <Footer />
    </div>
  );
}

export default TedavilerPage;
