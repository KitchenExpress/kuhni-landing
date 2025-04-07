import React from 'react';

import img1 from '@/assets/portfolio/1.jpeg';
import img2 from '@/assets/portfolio/2.jpeg';
import img3 from '@/assets/portfolio/3.jpeg';
import img4 from '@/assets/portfolio/4.jpeg';
import img5 from '@/assets/portfolio/5.jpeg';
import img6 from '@/assets/portfolio/6.jpeg';

export default function Portfolio() {
  return (
    <section className="portfolio py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Наши работы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src={img1} alt="Кухня 1" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={img2} alt="Кухня 2" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={img3} alt="Кухня 3" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={img4} alt="Кухня 4" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={img5} alt="Кухня 5" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={img6} alt="Кухня 6" className="w-full h-auto rounded-2xl shadow-md" />
      </div>
    </section>
  );
}