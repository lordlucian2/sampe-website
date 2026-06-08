import { Helmet } from "react-helmet-async";
const About = () => (
  <>
    <Helmet>
      <title>About SAMPE – Trusted Welding & Construction in Liberia</title>
      <meta name="description" content="Sheriff Abraham Multipurpose Enterprise – professional welding, furniture, and construction services in Monrovia, Liberia." />
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About Sheriff Abraham Multipurpose Enterprise</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-700 mb-4">
            <strong>SAMPE</strong> is a leading provider of welding, metal fabrication, custom furniture, and general construction services across Liberia.
            Founded by <strong>Abraham V. Sheriff</strong>, our mission is to deliver strong, reliable, and affordable solutions for residential, commercial, and institutional projects.
          </p>
          <p className="text-gray-700 mb-4">
            We combine modern techniques with local craftsmanship to create durable gates, furniture, and buildings that stand the test of time.
          </p>
          <p className="text-gray-700">
            📞 Call us today for a free consultation: <a href="tel:+231880374248" className="text-primary">+231880374248</a>
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1581092335871-4e6e7b9a1b9a?w=600&h=400&fit=crop" className="rounded-2xl shadow" alt="SAMPE workshop" />
          <p className="text-center text-sm text-gray-500 mt-2">Our workshop in Monrovia</p>
        </div>
      </div>
    </div>
  </>
);
export default About;
