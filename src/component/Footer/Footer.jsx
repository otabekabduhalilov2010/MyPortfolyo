import React from 'react';
import s from './Footer.module.scss';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrap}>
          {/* Кнопка "Back to Top" */}
          <div className={s.backToTop}>
            <a href="#top">▲</a>
            <p>BACK TO TOP</p>
          </div>

          {/* Социальные иконки */}
          <div className={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope />
            </a>
          </div>

          {/* Авторские права */}
          <p className={s.copyright}>
            ©2024 Your Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
