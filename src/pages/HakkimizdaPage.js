import React, { useEffect, useState } from "react";
import "./HakkimizdaPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsSection from "../components/DoctorsSection";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import doktorlarImage from "../assets/doktorlar.jpg";

const doctors = [
  {
    name: "Dr. Berna İzmirli Evrenol",
    bio: `Dr. Berna İzmirli Evrenol, ortodontik tedavi alanında uzun yıllar deneyim kazanmış,
    hastalarına güvenli ve yenilikçi çözümler sunmayı ilke edinmiş bir uzmandır.
    Estetik ve fonksiyonel uyumu bir arada değerlendirerek, her yaştan hastaya özel tedavi planları oluşturur.`,
  },
  {
    name: "Dt. Bekir Sıtkı İzmirli",
    bio: `Dt. Bekir Sıtkı İzmirli, ortodonti alanında sabit ve fonksiyonel tedavi yaklaşımlarıyla
    tanınır. Hasta memnuniyetini ön planda tutarak modern tekniklerle kişiye özel çözümler geliştirir.`,
  },
];

const generalBio = `
İzmirli Ortodonti Kliniği olarak amacımız, hastalarımız için gereken doğru ve sağlıklı tedaviyi yapmak ve onların sıkıntısını gidermektir. Doğruyu seçerken kriterimiz hekim olarak kendimize ne yapılmasını istiyorsak onu hastamıza tavsiye etmektir. Tedavi açısından doğrudan ödün vermeden alternatifleri hastamız ile birlikte değerlendirir, ortak yol bulmaya çalışırız.

Tedavilerimiz sırasında tecrübeli uzman hekimlerimizle birlikte, son yenilikleri takip ederek kaliteli ve kişiye özel hizmet vermeyi hedefleriz. Hastalarımızı sağlıklı, güzel dişlere ve gülüşlere kavuşturduktan sonra bu durumu uzun yıllar koruyabilmek için takiplerini yapar, kontrol randevularını hatırlatırız.
`;

function HakkimizdaPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const bioText = selectedDoctor
    ? `${selectedDoctor.name}\n\n${selectedDoctor.bio}`
    : generalBio;

  return (
    <>
      <Navbar />
      <div className="hakkimizda-page">
        <h1 className="hakkimizda-title">Hakkımızda</h1>

        <div className="hakkimizda-content" data-aos="fade-up">
          <div className="hakkimizda-left">
            <img
              src={doktorlarImage}
              alt="Doktorlar"
              className="doktorlar-image"
            />
          </div>

          <div className="hakkimizda-center">
            <div className="hakkimizda-description">
              {bioText.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          <div className="hakkimizda-right">
            <div className="hakkimizda-form">
              <ContactForm />
            </div>
          </div>
        </div>

        <DoctorsSection
          onDoctorClick={(doctor) => {
            const found = doctors.find((d) => d.name === doctor.name);
            setSelectedDoctor(found || null);
          }}
        />
      </div>
      <Footer />
    </>
  );
}

export default HakkimizdaPage;
