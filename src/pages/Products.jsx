import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Unable to load product portfolio.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((product) => product.category)));
    return ["All", ...cats];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return filter === "All" ? products : products.filter((product) => product.category === filter);
  }, [filter, products]);

  return (
    <>
      <Helmet>
        <title>Products & Portfolio – SAMPE</title>
        <meta name="description" content="Browse SAMPE's product portfolio and custom solutions for welding, furniture, and construction." />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Products</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">Product Catalog & Custom Builds</h1>
            <p className="mt-6 text-lg text-slate-200 max-w-2xl">Explore our product gallery of finished industrial furniture, gate systems, cabinetry, and structural metalwork. Upload new products through the admin CMS.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/quote" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600">Request a Quote</Link>
              <Link to="/admin" className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/20">Admin CMS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Dynamic product gallery</p>
            <h2 className="text-3xl font-bold">Browse by category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${filter === category ? "bg-primary text-white" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-lg">Loading products…</div>
        ) : error ? (
          <div className="mt-12 rounded-3xl bg-red-50 p-12 text-center text-red-700 shadow-lg">{error}</div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <img src={product.image} alt={product.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">{product.category}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.title}</h3>
                  <p className="mt-3 text-slate-500">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
