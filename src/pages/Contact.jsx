import { Helmet } from "react-helmet-async";
const Contact = () => (
  <>
    <Helmet><title>Contact SAMPE – Welding, Furniture, Construction in Monrovia</title></Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <span className="font-bold text-primary text-xl">📞 Phone</span>
            <br />
            <a href="tel:+231880374248" className="text-dark text-2xl font-semibold">+231880374248</a>
          </div>
          <div>
            <span className="font-bold text-primary text-xl">💬 WhatsApp</span>
            <br />
            <a href="https://wa.me/231775094389" className="text-dark text-2xl font-semibold">+231775094389</a>
          </div>
          <div>
            <span className="font-bold text-primary text-xl">📍 Address</span>
            <br />
            Monrovia, Montserrado County, Liberia
            <br />
            (Behind SKD Stadium, Paynesville)
          </div>
          <div>
            <span className="font-bold text-primary text-xl">🕒 Working Hours</span>
            <br />
            Monday – Saturday: 8:00 AM – 6:00 PM
            <br />
            Sunday: Closed
          </div>
          <div>
            <span className="font-bold text-primary text-xl">📧 Email</span>
            <br />
            <a href="mailto:info@sampe.com">info@sampe.com</a>
          </div>
          <a href="tel:+231880374248" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold mt-4">Click to Call Now</a>
        </div>
        <div className="h-96 rounded-2xl overflow-hidden shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260214375!2d-10.796788!3d6.310581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf06a2b9e1e8e2b9%3A0x8b9a7c1e2f3d4a5!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </>
);
export default Contact;
