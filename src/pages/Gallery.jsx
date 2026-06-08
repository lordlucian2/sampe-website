import { Helmet } from "react-helmet-async";
const categories = [
  { name: "Welding Projects (Gates, Doors, Bars)", images: Array(12).fill().map((_, i) => `https://images.unsplash.com/photo-1581612629679-7d8a7b9b8b1c?w=400&h=300&fit=crop&sig=${i}`) },
  { name: "Furniture Projects (Beds, Tables, Cabinets)", images: Array(12).fill().map((_, i) => `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop&sig=${i}`) },
  { name: "Construction Projects (Buildings, Renovations)", images: Array(12).fill().map((_, i) => `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&sig=${i}`) },
];
const Gallery = () => (
  <>
    <Helmet>
      <title>Project Gallery – SAMPE Liberia | Real Work Photos</title>
      <meta name="description" content="View our completed welding, furniture, and construction projects in Monrovia, Liberia." />
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Work Gallery</h1>
      <p className="mb-8 text-gray-600">Browse real projects completed for clients across Monrovia, Paynesville, and surrounding areas.</p>
      {categories.map((cat) => (
        <div key={cat.name} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cat.images.map((img, idx) => (
              <img key={idx} src={img} className="rounded-xl shadow h-40 w-full object-cover hover:scale-105 transition" alt={`${cat.name} example ${idx + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      ))}
      <p className="text-center text-gray-500 mt-8">📸 Want more photos? Request via WhatsApp: <a href="https://wa.me/231775094389" className="text-primary">+231775094389</a></p>
    </div>
  </>
);
export default Gallery;
