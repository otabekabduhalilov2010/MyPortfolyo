import React, { useState, useEffect } from 'react';
import s from './Section5.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section5 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Обновление данных формы
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Отправка данных в Telegram
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const botToken = '7556415457:AAG_o-ULD3NptvbBxYasq5mgjK5K2EKgowg';
    const chatId = '6059580218';

    const text = `
      📩 Новая заявка с сайта:
      👤 Имя: ${formData.name}
      📧 Email: ${formData.email}
      📞 Телефон: ${formData.phone || 'Не указан'}
      📝 Сообщение: ${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения');
      }

      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setError('Ошибка отправки. Попробуйте снова.');
    }
  };

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>

                    <section id="section5" className={s.section5}>
              <div className="container">
                
              </div>
            </section>

          {/* Заголовок с анимацией */}
          <h1 data-aos="fade-up">CONTACT</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
            Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ac ac est.
          </p>
          <div className={s.decor} data-aos="fade-up" data-aos-delay="400"></div>

          {/* Форма с анимацией */}
          <form className={s.form} onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="600">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" data-aos="zoom-in" data-aos-delay="800">SUBMIT</button>
          </form>

          {/* Сообщение об успешной отправке или ошибке */}
          {isSent && <p className={s.successMessage} data-aos="fade-in">✅ Заявка успешно отправлена!</p>}
          {error && <p className={s.errorMessage} data-aos="fade-in">❌ {error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Section5;
