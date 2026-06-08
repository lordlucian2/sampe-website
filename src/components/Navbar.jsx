import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <nav className="bg-darker text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">SAMPE<span className="text-primary">®</span></Link>
        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <NavLink key={link.path} to={link.path} className={({isActive}) => isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary transition"}>
              {link.name}
            </NavLink>
          ))}
          <Link to="/quote" className="bg-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-700">Request Quote</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-darker border-t border-gray-800 p-4 flex flex-col space-y-3">
          {links.map(link => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className="block py-2 hover:text-primary">{link.name}</NavLink>
          ))}
          <Link to="/quote" className="bg-primary text-center py-2 rounded-full">Request Quote</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
