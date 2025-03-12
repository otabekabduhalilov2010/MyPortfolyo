
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Импортируем Link из react-scroll
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>

          {/* Логотип с анимацией */}
          <motion.img 
            src="./Group.png" 
            alt="Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.1, 1], 
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Меню с анимацией и плавным скроллом */}
          <motion.div 
            className={s.menu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { name: 'About me', to: 'section3' }, 
              { name: 'Skills', to: 'section4' }, // Теперь ведет к section4
              { name: 'Portfolio', to: 'portfolio' }, 
              { name: 'Contact Me', to: 'section5' }
            ].map((item, index) => (
              <motion.div key={index}>
                <Link 
                  to={item.to} 
                  smooth={true} 
                  duration={800} 
                  offset={-70} // Смещение для корректного отображения
                  className={s.link}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
