import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminToken, setAdminToken } from "../utils/auth";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("idle");
  const navigate = useNavigate();

  useEffect(() => {
    if (getAdminToken()) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Login failed.");
      }
      setAdminToken(result.token);
      navigate("/admin/dashboard");
    } catch (error) {
      setMessage(error.message || "Unable to login.");
    } finally {
      setState("idle");
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login – SAMPE</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Admin Login</span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">Hidden Admin Access</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">This page provides secure access to the hidden admin dashboard. Enter your admin password to continue.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">Sign in to Admin</h2>
          <p className="mt-3 text-slate-600">This route is not linked from the public navigation. Use it only if you have admin credentials.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" disabled={state === "submitting"} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300">
              {state === "submitting" ? "Signing in…" : "Sign in"}
            </button>
            {message && <div className="mt-4 rounded-3xl bg-red-50 p-4 text-sm text-red-700">{message}</div>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Admin;
