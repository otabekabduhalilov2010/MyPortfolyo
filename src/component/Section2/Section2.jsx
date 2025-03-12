import React, { useEffect } from 'react';
import s from './Section2.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Инициализация AOS с анимацией 1 секунда
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <h2 className={s.title} data-aos="fade-up">IT BERRIES</h2>
          
          <p className={s.text} data-aos="fade-up" data-aos-delay="200">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
            In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, 
            in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          </p>
          
          <div className={s.readMore} data-aos="zoom-in" data-aos-delay="400">
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
