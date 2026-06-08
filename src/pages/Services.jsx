import { Helmet } from "react-helmet-async";
const categories = [
  { title: "Welding & Metal Fabrication", items: ["Iron doors", "Security gates", "Window bars", "Custom metal frames", "Structural welding", "Repairs & installation"], img: "https://images.unsplash.com/photo-1581612629679-7d8a7b9b8b1c?w=400&h=300&fit=crop" },
  { title: "General Furniture", items: ["Household furniture (beds, tables, chairs)", "Office furniture (desks, cabinets)", "Custom designs (any size, any style)", "Restaurant & hotel furniture"], img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop" },
  { title: "General Construction", items: ["Building construction (residential & commercial)", "Structural installations", "Renovations & repairs", "On-site project management"], img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" },
];
const Services = () => (
  <>
    <Helmet>
      <title>Services – Welding, Furniture, Construction | SAMPE Liberia</title>
      <meta name="description" content="Complete list of services: metal fabrication, custom furniture, construction, repairs, and installation in Monrovia." />
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img src={cat.img} className="h-48 w-full object-cover rounded-xl mb-4" alt={cat.title} />
            <h2 className="text-2xl font-bold mb-4 text-primary">{cat.title}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">📞 Free quotes – call <a href="tel:+231880374248" className="text-primary">+231880374248</a></p>
          </div>
        ))}
      </div>
    </div>
  </>
);
export default Services;
