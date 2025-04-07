export default function Portfolio() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="portfolio py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Наши работы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src={`${base}portfolio/1.jpeg`} alt="Кухня 1" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={`${base}portfolio/2.jpeg`} alt="Кухня 2" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={`${base}portfolio/3.jpeg`} alt="Кухня 3" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={`${base}portfolio/4.jpeg`} alt="Кухня 4" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={`${base}portfolio/5.jpeg`} alt="Кухня 5" className="w-full h-auto rounded-2xl shadow-md" />
        <img src={`${base}portfolio/6.jpeg`} alt="Кухня 6" className="w-full h-auto rounded-2xl shadow-md" />
      </div>
    </section>
  );
}