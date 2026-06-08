import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="bg-darker text-white py-2 px-4 flex justify-between items-center text-sm flex-wrap">
        <span>📍 Monrovia, Liberia</span>
        <div className="space-x-3">
          <a href="tel:+231880374248" className="text-primary">📞 +231880374248</a>
          <a href="https://wa.me/231775094389" className="text-primary">💬 WhatsApp</a>
        </div>
      </div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-darker">
            SAMPE<span className="text-primary">®</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : "text-dark hover:text-primary"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 flex flex-col space-y-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-dark hover:text-primary"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
