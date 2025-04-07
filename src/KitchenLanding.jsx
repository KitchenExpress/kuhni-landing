import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function KitchenLanding() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const serviceID = "service_1dfo4df";
    const templateID = "template_zfymg2f";
    const userID = "Xlw8V8v2LngmP646R";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: form.name,
          phone: form.phone,
          message: form.message,
        },
        userID
      );

      setSubmitted(true);

      const phone = form.phone.replace(/[^\d+]/g, "");
      const message = encodeURIComponent(`Здравствуйте! Меня зовут ${form.name}. Я оставил(а) заявку на расчёт кухни.`);
      window.open(`https://wa.me/79141032700?text=${message}`, "_blank");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      {/* Hero Section */}
      <motion.section
        className="py-16 px-6 text-center bg-gradient-to-r from-orange-600 to-violet-500 text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Модульные кухни в наличии!</h1>
        <p className="text-lg mb-4 font-medium">Бесплатный 3D-проект и расчёт</p>
        <p className="italic text-xl mb-6">«Уже готово!»</p>
        <ul className="mb-6 space-y-2">
          <li>🚛 Доставка и установка под ключ</li>
          <li>📦 Модули уже в наличии на складе</li>
          <li>⏱ Сроки — 2–3 дня</li>
          <li>💸 Честные цены — без скрытых платежей</li>
        </ul>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#form"
          className="bg-white text-orange-600 px-6 py-3 rounded-2xl font-semibold shadow transition"
        >
          Получить расчёт
        </motion.a>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">Примеры работ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"].map((img, i) => (
            <div key={i} className="rounded-2xl shadow overflow-hidden">
              <img
                src={`/portfolio/${img}`}
                alt={`Пример работы ${i + 1}`}
                className="w-full h-60 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-16 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Как мы работаем</h2>
        <div className="max-w-3xl mx-auto text-center text-lg space-y-4">
          <p>1. Звонок или заявка</p>
          <p>2. Дизайн и просчёт — бесплатно</p>
          <p>3. Доставка и монтаж</p>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        id="form"
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto font-medium">
          <h2 className="text-2xl font-semibold mb-6 text-center">Получить расчёт</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Сообщение (необязательно)"
                value={form.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2"
                rows={4}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow disabled:opacity-50"
              >
                {loading ? "Отправка..." : "Получить расчёт"}
              </motion.button>
              {error && <p className="text-red-600 text-center">{error}</p>}
            </form>
          ) : (
            <p className="text-green-600 text-lg text-center">
              Спасибо! Ваша заявка успешно отправлена.
            </p>
          )}
        </div>
      </motion.section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/79141032700"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Contact Section */}
      <motion.section
        className="py-10 px-6 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Email: kuhni-ykt@yandex.ru | Тел: +7 914 103 2700</p>
        <p>© КухниЭкспресс</p>
      </motion.section>
    </div>
  );
}
