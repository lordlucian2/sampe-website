import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Unable to load gallery items.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to load gallery.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((item) => item.category)));
    return ["All", ...unique];
  }, [products]);

  const displayItems = useMemo(
    () => (filter === "All" ? products : products.filter((item) => item.category === filter)),
    [filter, products]
  );

  return (
    <>
      <Helmet>
        <title>Project Gallery – SAMPE | Welding, Furniture, Construction</title>
        <meta name="description" content="View SAMPE's latest product gallery and completed industrial projects." />
      </Helmet>

      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Project Gallery</p>
          <h1 className="mt-4 text-5xl font-bold">Craftsmanship That Shows</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Explore our portfolio of finished product installations, custom furniture, gates, and structural welding work.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${filter === category ? "bg-primary text-white" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="rounded-3xl bg-white p-10 text-center text-slate-700 shadow-lg">Loading gallery...</div>
        ) : error ? (
          <div className="rounded-3xl bg-red-50 p-10 text-center text-red-700 shadow-lg">{error}</div>
        ) : displayItems.length === 0 ? (
          <div className="rounded-3xl bg-slate-100 p-10 text-center text-slate-700 shadow-lg">No gallery items found yet.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {displayItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{item.category}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 rounded-3xl bg-slate-100 p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-slate-900">Want to add more product photos?</h3>
          <p className="mt-3 text-slate-600">Use the admin portal to upload new product listings and refresh your live gallery instantly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/admin" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">Go to Admin Portal</Link>
            <Link to="/products" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">Browse All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
