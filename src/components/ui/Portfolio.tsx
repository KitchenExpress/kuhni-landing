export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Наши работы</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/portfolio/1.jpeg" alt="Кухня 1" />
        <img src="/portfolio/2.jpeg" alt="Кухня 2" />
        <img src="/portfolio/3.jpeg" alt="Кухня 3" />
        <img src="/portfolio/4.jpeg" alt="Кухня 4" />
        <img src="/portfolio/5.jpeg" alt="Кухня 5" />
        <img src="/portfolio/6.jpeg" alt="Кухня 6" />
      </div>
    </section>
  );
}