import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <div className="contact-content">
      <div className="contact-info">
        <p className="contact-intro">Get in touch with me!</p>
        <p>
          <i className="fas fa-envelope"></i>
          Email: <a href="mailto:jerichosespene@gmail.com">jerichosespene@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i>
          Phone: <a href="tel:0955-032-8919">09651128274</a>
        </p>
        <p>
          <i className="fab fa-github"></i>
          Follow me on <a href="https://github.com/">vannymacs</a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;