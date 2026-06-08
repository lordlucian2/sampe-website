import { Helmet } from "react-helmet-async";

const serviceCategories = [
  {
    title: "Welding & Metal Fabrication",
    items: ["Iron doors", "Security gates", "Window bars", "Custom metal frames", "Repairs & installation"],
  },
  {
    title: "General Furniture",
    items: ["Household furniture", "Office furniture", "Custom designs", "Beds, tables, cabinets"],
  },
  {
    title: "General Construction",
    items: ["Building construction", "Structural work", "Renovations", "Site installations"],
  },
];

const Services = () => (
  <>
    <Helmet>
      <title>Services – Welding, Furniture & Construction</title>
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {serviceCategories.map((cat) => (
          <div key={cat.title} className="bg-gray-50 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-primary">{cat.title}</h2>
            <ul className="list-disc list-inside space-y-1">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <img src={`https://picsum.photos/300/200?random=${cat.title}`} className="mt-4 rounded-lg" alt={cat.title} />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Services;
