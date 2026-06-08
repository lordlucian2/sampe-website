import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const featured = [
  { title: "Security Gate", img: "https://picsum.photos/id/104/400/300" },
  { title: "Custom Bed", img: "https://picsum.photos/id/108/400/300" },
  { title: "Office Cabinet", img: "https://picsum.photos/id/20/400/300" },
  { title: "Residential Build", img: "https://picsum.photos/id/106/400/300" },
  { title: "Window Bars", img: "https://picsum.photos/id/116/400/300" },
  { title: "Welding Repair", img: "https://picsum.photos/id/124/400/300" },
  { title: "Restaurant Tables", img: "https://picsum.photos/id/90/400/300" },
  { title: "Industrial Gate", img: "https://picsum.photos/id/22/400/300" },
];

const services = [
  { icon: "🔧", title: "Welding & Fabrication", desc: "Iron doors, security gates, window bars, custom metalworks." },
  { icon: "🪑", title: "General Furniture", desc: "Beds, tables, chairs, cabinets, custom designs." },
  { icon: "🏗️", title: "General Construction", desc: "Building works, structural installations, renovations." },
];

const reasons = [
  "Custom‑built solutions",
  "Durable materials",
  "Skilled professionals",
  "Affordable pricing",
  "Fast delivery",
  "Reliable service",
  "On‑site installation",
];

const testimonials = [
  {
    text: "They delivered our gate and installed it perfectly. Very strong and professional work.",
    name: "Michael T.",
  },
  {
    text: "SAMPE built custom cabinets for our school – quality and on time.",
    name: "Mrs. K., School Director",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SAMPE – Welding, Furniture & Construction | Liberia</title>
        <meta
          name="description"
          content="Professional welding, furniture, and construction services in Monrovia, Liberia. Free quotes."
        />
      </Helmet>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-darker">
              Welding, Furniture & Construction Services in Liberia
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Strong, affordable, and professional fabrication, furniture, and construction solutions for homes and businesses.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="tel:+231880374248" className="bg-primary text-white px-6 py-3 rounded-full font-semibold">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/231775094389"
                className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white"
              >
                💬 WhatsApp Us
              </a>
              <Link to="/quote" className="bg-darker text-white px-6 py-3 rounded-full font-semibold">
                ✉️ Request a Quote
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img src="https://picsum.photos/id/104/600/400" alt="Welding work" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 after:block after:w-16 after:h-1 after:bg-primary after:mt-2">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-md">
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-3 bg-white">
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 after:block after:w-16 after:h-1 after:bg-primary">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
                <Link to="/services" className="text-primary font-semibold inline-block mt-4">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why Choose SAMPE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow italic">
                “{t.text}”
                <br />
                <strong className="not-italic">– {t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-darker text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready for Your Next Project?</h2>
          <p className="mt-2 mb-6">Get a free quote – fast response</p>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl text-dark">
            <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg mb-3" id="quoteName" />
            <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-lg mb-3" id="quotePhone" />
            <textarea placeholder="Project description" className="w-full border p-3 rounded-lg mb-3" rows="2" id="quoteDesc"></textarea>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/231775094389?text=Quote request from ${document.getElementById('quoteName').value}: ${document.getElementById('quoteDesc').value}`,
                  '_blank'
                )
              }
              className="bg-primary w-full py-3 rounded-lg font-bold"
            >
              Get My Free Quote →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
