// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content" data-aos="fade-out">
        <h2>Contact Me</h2>
        <p>You can reach out to me via the following channels:</p>

        <div className="contact-info">
          <p><strong>📧 Work Email:</strong> <a href="mailto:ksharonwork@gmail.com">ksharonwork@gmail.com</a></p>
          <p><strong>📧 Personal Email:</strong> <a href="mailto:sharongiftyk@gmail.com">sharongiftyk@gmail.com</a></p>
          <p><strong>📞 Phone:</strong> <a href="tel:9342299207">9342299207</a></p>
          <p><strong>🔗 LinkedIn:</strong> <a 
              href="https://www.linkedin.com/in/sharon-giftyk-010020286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View My Profile
          </a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
