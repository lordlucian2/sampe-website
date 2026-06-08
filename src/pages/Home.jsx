import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
const featuredWorks = [
  { title: "Custom Security Gate", img: "https://images.unsplash.com/photo-1581612629679-7d8a7b9b8b1c?w=400&h=300&fit=crop" },
  { title: "Solid Wood Bed", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop" },
  { title: "Office Cabinets", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop" },
  { title: "Residential Construction", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" },
  { title: "Window Bars", img: "https://images.unsplash.com/photo-1581578731548-cfa1c9d8d1e3?w=400&h=300&fit=crop" },
  { title: "Welding Repair", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop" },
  { title: "Restaurant Tables", img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400&h=300&fit=crop" },
  { title: "Industrial Gate", img: "https://images.unsplash.com/photo-1581092335871-4e6e7b9a1b9a?w=400&h=300&fit=crop" },
];
const services = [
  { icon: "🔧", title: "Welding & Fabrication", desc: "Iron doors, security gates, window bars, custom metalworks, repairs." },
  { icon: "🪑", title: "General Furniture", desc: "Beds, tables, chairs, cabinets, custom designs for home & office." },
  { icon: "🏗️", title: "General Construction", desc: "Building works, structural installations, renovations, on-site projects." },
];
const testimonials = [
  { text: "They delivered our gate and installed it perfectly. Very strong and professional work.", name: "Michael T., Monrovia" },
  { text: "SAMPE built custom cabinets for our school – quality and on time.", name: "Mrs. K., School Director" },
  { text: "Affordable and fast welding repairs. Highly recommend!", name: "James W., Business Owner" },
];
const Home = () => {
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteDesc, setQuoteDesc] = useState("");
  const sendWhatsApp = () => {
    if (!quoteName || !quotePhone) return alert("Please enter name and phone");
    window.open(`https://wa.me/231775094389?text=Quote Request from ${quoteName} (${quotePhone}): ${quoteDesc}`, "_blank");
  };
  return (
    <>
      <Helmet>
        <title>SAMPE – Best Welding, Furniture & Construction in Liberia</title>
        <meta name="description" content="Professional welding, furniture, and construction services in Monrovia, Liberia. Free quotes, on-site installation, affordable prices." />
        <meta name="keywords" content="Welding Liberia, Furniture Liberia, Construction Monrovia, Metal Fabrication, Iron Gates" />
      </Helmet>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-darker">Welding, Furniture & Construction Services in Liberia</h1>
            <p className="text-lg text-gray-600 mt-4">Strong, affordable, and professional solutions for homes and businesses.</p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="tel:+231880374248" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700">📞 Call Now</a>
              <a href="https://wa.me/231775094389" className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white">💬 WhatsApp</a>
              <Link to="/quote" className="bg-darker text-white px-6 py-3 rounded-full">✉️ Free Quote</Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop" className="rounded-2xl shadow-xl" alt="Welding work" />
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 after:block after:w-16 after:h-1 after:bg-primary after:mt-2">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredWorks.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={item.img} className="h-48 w-full object-cover" alt={item.title} />
              <div className="p-3 bg-white">
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
                <Link to="/services" className="text-primary font-semibold inline-block mt-4">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why Choose SAMPE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Custom‑built solutions",
            "Durable materials",
            "Skilled professionals",
            "Affordable pricing",
            "Fast delivery",
            "Reliable service",
            "On‑site installation",
          ].map((r) => (
            <div key={r} className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
            <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg mb-3" value={quoteName} onChange={(e) => setQuoteName(e.target.value)} />
            <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-lg mb-3" value={quotePhone} onChange={(e) => setQuotePhone(e.target.value)} />
            <textarea placeholder="Project description" rows="2" className="w-full border p-3 rounded-lg mb-3" value={quoteDesc} onChange={(e) => setQuoteDesc(e.target.value)}></textarea>
            <button onClick={sendWhatsApp} className="bg-primary w-full py-3 rounded-lg font-bold text-white">Get My Free Quote →</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
