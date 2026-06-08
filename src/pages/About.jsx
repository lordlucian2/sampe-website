import { Helmet } from "react-helmet-async";

const About = () => (
  <>
    <Helmet>
      <title>About SAMPE – Welding, Furniture & Construction</title>
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About Sheriff Abraham Multipurpose Enterprise</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-700 mb-4">
            SAMPE is a professional welding, furniture production, and construction company serving clients across Liberia.
            Founded by Abraham V. Sheriff, SAMPE focuses on delivering strong, reliable, and affordable solutions for residential,
            commercial, and institutional projects.
          </p>
          <p className="text-gray-700">
            Mission: To build durable infrastructure and furniture that empowers local communities while maintaining highest craftsmanship.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/id/91/600/400" className="rounded-2xl shadow" alt="Workshop" />
        </div>
      </div>
    </div>
  </>
);

export default About;
