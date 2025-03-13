import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import s from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {/* Логотип с анимацией */}
          <motion.img 
            src="./Group.png" 
            alt="Logo"
            className={s.logo}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.1, 1], 
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Десктопное меню */}
          <div className={s.menuDesktop}>
            {[
              { name: 'About me', to: 'section3' },
              { name: 'Skills', to: 'section4' },
              { name: 'Portfolio', to: 'portfolio' },
              { name: 'Contact Me', to: 'section5' }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.to} 
                smooth={true} 
                duration={800} 
                offset={-70} 
                className={s.link}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Бургер-меню (показывается только на мобильных) */}
          <div className={s.burger} onClick={toggleMenu}>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>

          {/* Мобильное меню с анимацией */}
          <motion.div 
            className={`${s.menuMobile} ${menuOpen ? s.menuOpen : ''}`}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -100 }}
            transition={{ duration: 0.5 }}
          >
            {menuOpen && ( // Показываем ссылки только если меню открыто
              <>
                {[
                  { name: 'About me', to: 'section3' },
                  { name: 'Skills', to: 'section4' },
                  { name: 'Portfolio', to: 'portfolio' },
                  { name: 'Contact Me', to: 'section5' }
                ].map((item, index) => (
                  <motion.div key={index}>
                    <Link 
                      to={item.to} 
                      smooth={true} 
                      duration={800} 
                      offset={-70} 
                      className={s.link}
                      onClick={() => setMenuOpen(false)} // Закрываем меню при клике на ссылку
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
