// components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="iletisim">
      <div className="footer-container">
        <div className="footer-info">
          <h3>İzmirli Ortodonti</h3>
          <p>Nispetiye Cad. Kerem2 Apt. No:30 Daire:17</p>
          <p>Levent - İstanbul</p>
          <p>Tel: <a href="tel:+902122835790">0212 283 57 90</a></p>
          <p>Fax: 0212 284 22 46</p>
          <p>Mail: <a href="mailto:info@izmirliortodonti.com">info@izmirliortodonti.com</a></p>
        </div>
        <div className="footer-map">
          <iframe
            title="İzmirli Ortodonti Harita"
            src="https://www.google.com/maps?q=Nispetiye+Cad.+No%3A30+Levent+%C4%B0stanbul&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} İzmirli Ortodonti - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
