import { Helmet } from "react-helmet-async";

const categories = [
  { name: "Welding Projects", images: Array(10).fill("https://picsum.photos/id/104/300/200") },
  { name: "Furniture Projects", images: Array(10).fill("https://picsum.photos/id/108/300/200") },
  { name: "Construction Projects", images: Array(10).fill("https://picsum.photos/id/106/300/200") },
];

const Gallery = () => (
  <>
    <Helmet>
      <title>Project Gallery – SAMPE Liberia</title>
    </Helmet>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Work Gallery</h1>
      {categories.map((cat) => (
        <div key={cat.name} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cat.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="rounded-xl shadow h-40 w-full object-cover"
                alt={`${cat.name} sample`}
              />
            ))}
          </div>
        </div>
      ))}
      <p className="text-center text-gray-500 mt-8">Need more photos? Request via WhatsApp</p>
    </div>
  </>
);

export default Gallery;
