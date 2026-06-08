import { Helmet } from "react-helmet-async";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact SAMPE – Monrovia, Liberia</title>
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <span className="font-bold text-primary">📞 Phone:</span>{" "}
            <a href="tel:+231880374248" className="text-dark">
              +231880374248
            </a>
          </div>
          <div>
            <span className="font-bold text-primary">💬 WhatsApp:</span>{" "}
            <a href="https://wa.me/231775094389">+231775094389</a>
          </div>
          <div>
            <span className="font-bold text-primary">📍 Address:</span> Monrovia, Montserrado County, Liberia
          </div>
          <div>
            <span className="font-bold text-primary">🕒 Hours:</span> Mon–Sat 8:00–18:00, Sunday Closed
          </div>
          <div>
            <span className="font-bold text-primary">📧 Email:</span>{" "}
            <a href="mailto:info@sampe.com">info@sampe.com</a>
          </div>
          <a href="tel:+231880374248" className="inline-block bg-primary text-white px-6 py-3 rounded-full mt-4">
            Click to Call
          </a>
        </div>
        <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
          📍 Map placeholder – Monrovia area
        </div>
      </div>
    </div>
  </>
);

export default Contact;
