// MainPage.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // 👈 replaced GallerySlider
import InfoGrid from "./components/InfoGrid";
import DoctorsSection from "./components/DoctorsSection";
import TreatmentSections from './components/TreatmentSections';
import Footer from "./components/Footer";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <Hero /> {/* now contains the gallery and info boxes */}
      <InfoGrid />
      <DoctorsSection />
      <TreatmentSections />
      <Footer />
    </div>
  );
}

export default MainPage;
