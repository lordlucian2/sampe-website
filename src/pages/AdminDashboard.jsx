import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { clearAdminToken, getAdminToken } from "../utils/auth";

const AdminDashboard = () => {
  const token = getAdminToken();
  const [form, setForm] = useState({ title: "", category: "Welding", image: "", description: "" });
  const [message, setMessage] = useState("");
  const [state, setState] = useState("idle");

  if (!token) {
    return <Navigate replace to="/admin" />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to save product.");
      }
      setMessage("Product added successfully.");
      setForm({ title: "", category: "Welding", image: "", description: "" });
    } catch (error) {
      setMessage(error.message || "Unable to save the product.");
    } finally {
      setState("idle");
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    window.location.href = "/admin";
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard – SAMPE</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Admin Dashboard</span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">Secure CMS Access</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">Add new product listings with your admin token. Your login gives you access to the hidden admin workflow.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1 rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Add Product Listing</h2>
                <p className="mt-2 text-slate-600">Only authenticated admins can submit new entries.</p>
              </div>
              <button onClick={handleLogout} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Log Out</button>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Title</label>
                <input name="title" value={form.title} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary" placeholder="Product title" />
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
              <button type="submit" disabled={state === "submitting"} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300">
                {state === "submitting" ? "Saving…" : "Save Product"}
              </button>
              {message && <div className="mt-4 rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">{message}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
