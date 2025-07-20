// ContactForm.js
import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div>
      <h2>Sorun Cevaplayalım</h2>
      <form className="contact-form">
        <div className="form-row">
          <div className="icon"><i className="fa-solid fa-user"></i></div>
          <input type="text" placeholder="Ad Soyad" />
        </div>
        <div className="form-row">
          <div className="icon"><i className="fa-solid fa-phone"></i></div>
          <input type="text" placeholder="Telefon" />
        </div>
        <div className="form-row">
          <div className="icon"><i className="fa-solid fa-envelope"></i></div>
          <input type="email" placeholder="Mail Adres" />
        </div>
        <div className="form-row textarea-row">
          <div className="icon"><i className="fa-solid fa-bars"></i></div>
          <textarea placeholder="Mesaj" rows="4"></textarea>
        </div>
        <button type="submit">GÖNDER</button>
      </form>
    </div>
  );
}

export default ContactForm;
