import React, { useEffect } from 'react';
import s from './Section3.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Инициализация AOS с анимацией 1 секунда
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>

        <section id="section3" className={s.section3}>
  <div className="container">
  </div>
</section>

          
          {/* Заголовок и описание */}
          <div className={s.header} data-aos="fade-up">
            <h2 className={s.title}>ABOUT ME</h2>
            <p className={s.description}>
              Hey, my name is Abduxalilov Otabek, and I’m a frontend developer with a passion for creating seamless and innovative web experiences. I continue to freelance, developing websites of varying complexities. Outside of work, I enjoy playing basketball and diving into books, always looking for ways to grow both personally and professionally.
            </p>
            <div className={s.explore} data-aos="zoom-in" data-aos-delay="300">
              <a href="#">EXPLORE</a>
            </div>
          </div>

          {/* Блоки сервисов */}
          <div className={s.services}>
            
            <div className={s.service} data-aos="fade-right" data-aos-delay="200">
              <h3 className={s.serviceTitle}>DESIGN</h3>
              <p className={s.serviceText}>
                I can design the site based on your needs and suggestions. I can also design the site from scratch 
                and consult you during the job.
              </p>
            </div>

            <div className={s.service} data-aos="fade-up" data-aos-delay="400">
              <h3 className={s.serviceTitle}>DEVELOPMENT</h3>
              <p className={s.serviceText}>
                I can design the site based on your needs and suggestions. I can also design the site from scratch 
                and consult you during the job.
              </p>
            </div>

            <div className={s.service} data-aos="fade-left" data-aos-delay="600">
              <h3 className={s.serviceTitle}>MAINTENANCE</h3>
              <p className={s.serviceText}>
                I can design the site based on your needs and suggestions. I can also design the site from scratch 
                and consult you during the job.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Section3;
