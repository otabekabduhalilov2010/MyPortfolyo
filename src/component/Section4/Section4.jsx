import React, { useEffect } from 'react';
import s from './Section4.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Инициализация AOS с длительностью анимации 1 секунда
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>

        <section id="section4" className={s.section4}>
  <div className="container">
    
  </div>
</section>


          {/* Заголовок с анимацией */}
          <h1 data-aos="fade-up">Skills</h1>
          <p data-aos="fade-up" data-aos-delay="200">Using now:</p>

          {/* Логотипы с анимацией */}
          <div className={s.logo}>
            <img src="./html5.svg" alt="HTML5" data-aos="zoom-in" data-aos-delay="200" />
            <img src="./css3.svg" alt="CSS3" data-aos="zoom-in" data-aos-delay="300" />
            <img src="./sass.svg" alt="SASS" data-aos="zoom-in" data-aos-delay="400" />
            <img src="./javascript.svg" alt="JavaScript" data-aos="zoom-in" data-aos-delay="500" />
            <img src="./react.svg" alt="React" data-aos="zoom-in" data-aos-delay="600" />
            <img src="./git.svg" alt="Git" data-aos="zoom-in" data-aos-delay="700" />
            <img src="./figma.svg" alt="Figma" data-aos="zoom-in" data-aos-delay="800" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
