import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Quote = () => {
  const [form, setForm] = useState({ name: "", phone: "", whatsapp: "", service: "Welding & Fabrication", desc: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Quote Request%0AName: ${form.name}%0APhone: ${form.phone}%0AWhatsApp: ${form.whatsapp}%0AService: ${form.service}%0ADescription: ${form.desc}`;
    window.open(`https://wa.me/231775094389?text=${msg}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Request a Free Quote – SAMPE</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
        <p className="mb-6 text-gray-600">Fill the form – we'll reply via WhatsApp or call within hours.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-2xl">
          <input
            required
            className="w-full border p-3 rounded-lg"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            className="w-full border p-3 rounded-lg"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="WhatsApp Number (optional)"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          />
          <select
            className="w-full border p-3 rounded-lg"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option>Welding & Fabrication</option>
            <option>General Furniture</option>
            <option>General Construction</option>
          </select>
          <textarea
            rows="3"
            className="w-full border p-3 rounded-lg"
            placeholder="Project description (dimensions, material, deadline...)"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          ></textarea>
          <button type="submit" className="bg-primary w-full py-3 rounded-lg font-bold text-white">
            Send via WhatsApp →
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          📸 If you have a photo/sketch, please send it directly on WhatsApp after submitting.
        </p>
      </div>
    </>
  );
};

export default Quote;
