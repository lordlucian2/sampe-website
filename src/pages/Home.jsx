import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    { title: "Solid Wood Bed", category: "CUSTOM FURNITURE - LIBERIA", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop" },
    { title: "Office Cabinets", category: "INTERIOR FIT-OUT - COMMERCIAL", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop" },
    { title: "Industrial Security Gate", category: "PRECISION WELDING - RESIDENTIAL", img: "https://images.unsplash.com/photo-1581612629679-7d8a7b9b8b1c?w=400&h=300&fit=crop" },
  ];
  const testimonials = [
    { text: "They delivered our security gates and installed it perfectly. Very strong and professional metalwork. Highly recommended in Monrovia.", name: "Mark T., Monrovia" },
    { text: "SAMPE built custom cabinets for our school – quality and on time. Their team is professional and easy to work with.", name: "Max S., School Director" },
    { text: "Affordable and fast welding repairs. These guys know their trade. I wouldn’t go anywhere else for my shop repairs.", name: "James W., Business Owner" },
  ];
  return (
    <>
      <Helmet><title>SAMPE – Precision Welding, Furniture & Construction in Liberia</title><meta name="description" content="Expert welding, custom furniture, and general construction services in Monrovia, Liberia. Free quotes, on‑site installation." /></Helmet>
      <section className="relative bg-gradient-to-r from-dark to-darker text-white py-24 md:py-32"><div className="container mx-auto px-4 text-center"><h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Precision Welding &<br/>Industrial Craftsmanship</h1><div className="flex flex-wrap justify-center gap-4 mt-8"><Link to="/quote" className="bg-primary px-8 py-3 rounded-full font-semibold hover:bg-orange-700">GET A FREE QUOTE</Link><Link to="/gallery" className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-dark">OUR PORTFOLIO</Link></div></div></section>
      <section className="py-20 container mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-12">Our Core Expertise</h2><p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">We combine traditional craftsmanship with modern engineering standards to provide durable, high-quality industrial solutions.</p><div className="grid md:grid-cols-3 gap-8"><div className="bg-gray-50 p-6 rounded-2xl text-center"><h3 className="text-xl font-bold mb-2">Welding & Fabrication</h3><p className="text-gray-600">Specializing in high‑wage iron, gas, and electric welding. Custom metalwork with precision.</p><Link to="/services" className="inline-block mt-4 text-primary">View Details →</Link></div><div className="bg-gray-50 p-6 rounded-2xl text-center"><h3 className="text-xl font-bold mb-2">Custom Furniture</h3><p className="text-gray-600">Handcrafted solid wood desks, office cabinets, and furniture tailored to your space.</p><Link to="/services" className="inline-block mt-4 text-primary">Explore Catalog →</Link></div><div className="bg-gray-50 p-6 rounded-2xl text-center"><h3 className="text-xl font-bold mb-2">General Construction</h3><p className="text-gray-600">Comprehensive building services from structural installations to commercial renovations.</p><Link to="/services" className="inline-block mt-4 text-primary">Our Projects →</Link></div></div></section>
      <section className="py-16 bg-gray-100"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-12">Project Showcase</h2><div className="grid md:grid-cols-3 gap-6">{projects.map((p, idx) => (<div key={idx} className="bg-white rounded-2xl overflow-hidden shadow"><img src={p.img} alt={p.title} className="h-56 w-full object-cover" /><div className="p-4"><h3 className="font-bold">{p.title}</h3><p className="text-sm text-gray-500">{p.category}</p></div></div>))}</div></div></section>
      <section className="py-20 container mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-12">Built on Trust and Integrity</h2><div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, idx) => (<div key={idx} className="bg-gray-50 p-6 rounded-2xl italic">“{t.text}”<br/><strong className="not-italic block mt-2">– {t.name}</strong></div>))}</div></section>
      <section className="bg-primary text-white py-16"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold">Ready to Start Your Next Project?</h2><p className="mt-2 mb-6">Connect with us today for a free consultation and quote.</p><div className="flex flex-wrap justify-center gap-4"><a href="tel:+231880374248" className="bg-white text-primary px-6 py-3 rounded-full font-bold">QUICK CALL</a><Link to="/quote" className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary">REQUEST QUOTE</Link></div></div></section>
    </>
  );
};
export default Home;
