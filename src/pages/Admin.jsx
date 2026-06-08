import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Admin = () => {
  const [form, setForm] = useState({ title: "", category: "Welding", image: "", description: "", password: "" });
  const [message, setMessage] = useState("");
  const [state, setState] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitProduct = async (event) => {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to save product.");
      }
      setMessage("Product added successfully. Check the Products page to confirm.");
      setForm({ title: "", category: "Welding", image: "", description: "", password: "" });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setState("idle");
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin CMS – SAMPE</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Admin CMS</span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">Add Product Photos & Listings</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">Use this admin portal to upload new product entries and keep your product library up to date. Entries are saved through the backend API.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">New Product Entry</h2>
            <p className="mt-3 text-slate-600">Complete the form below with the product title, category, image URL, description, and admin password.</p>
            <form onSubmit={submitProduct} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Title</label>
                <input name="title" value={form.title} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary" placeholder="e.g. Heavy-Duty Gate" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Category</label>
                <select name="category" value={form.category} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary">
                  <option>Welding</option>
                  <option>Furniture</option>
                  <option>Construction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Image URL</label>
                <input name="image" value={form.image} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary" placeholder="https://example.com/photo.jpg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary" rows="4" placeholder="A short description of the product."></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Admin Password</label>
                <input name="password" type="password" value={form.password} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary" placeholder="Enter admin password" />
              </div>
              <button type="submit" disabled={state === "submitting"} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300">
                {state === "submitting" ? "Saving…" : "Save Product"}
              </button>
            </form>
            {message && <div className="mt-6 rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">{message}</div>}
          </div>

          <aside className="rounded-3xl bg-slate-950 p-8 text-slate-100 shadow-xl">
            <h3 className="text-2xl font-semibold">CMS Notes</h3>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <li>• Use a direct image URL for each product photo.</li>
              <li>• Set the category so products appear correctly in filters.</li>
              <li>• The backend API will save the entry if the password is correct.</li>
              <li>• On Vercel, persistent file updates require a writable backend or GitHub content integration.</li>
            </ul>
            <div className="mt-8 rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Default password</p>
              <p className="mt-3 text-lg font-semibold text-slate-50">sampeadmin</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Admin;
