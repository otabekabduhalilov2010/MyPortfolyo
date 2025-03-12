import React from 'react';
import { motion } from 'framer-motion';
import s from './Section1.module.scss';

const Section1 = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          
          {/* Текстовая часть с анимацией появления */}
          <motion.div
            className={s.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.b
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi, I am
            </motion.b>
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Abduhalilov Otabek
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Front-end Developer
            </motion.p>

            {/* GitHub ссылка с анимацией */}
            <motion.div
              className={s.links}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <a 
                href="https://github.com/otabekabduhalilov2010" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.img 
                  src="./Vector.png" 
                  alt="GitHub"
                  whileHover={{ scale: 1.2 }}
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Анимация появления фото */}
          <motion.img
            src="./Otabek1.png"
            alt="Otabek"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
