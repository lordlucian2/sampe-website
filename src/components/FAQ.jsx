import { useState } from "react";
const faqs = [
  { q: "How much does a custom gate cost?", a: "Pricing depends on size, design, and materials. We provide free, no-obligation quotes." },
  { q: "Do you make custom sizes?", a: "Yes, all products are made to your exact specifications." },
  { q: "How long does fabrication take?", a: "Typically 3-10 days depending on complexity. We'll give a timeline during quotation." },
  { q: "Do you offer installation?", a: "Absolutely. We install gates, furniture, and construction works on-site." },
  { q: "Can I request a quote on WhatsApp?", a: "Yes! WhatsApp, calls, and website forms are all accepted." },
  { q: "What areas do you serve?", a: "Monrovia, Paynesville, Brewerville, Johnsonville, and surrounding communities." },
  { q: "Do you require a deposit?", a: "Yes, most projects require a 50% advance payment before work begins." },
];
const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border rounded-xl p-4 bg-white shadow-sm">
          <button className="w-full text-left font-bold flex justify-between items-center" onClick={() => setOpen(open === idx ? null : idx)}>
            {faq.q}
            <span className="text-primary text-xl">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && <p className="mt-2 text-gray-600 pl-2">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
};
export default FAQ;
