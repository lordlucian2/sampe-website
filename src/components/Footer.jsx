import { Link } from "react-router-dom";
const Footer = () => (
  <footer className="bg-darker text-gray-400 py-12 mt-20 border-t border-gray-800">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div><h3 className="text-white text-xl font-bold mb-3">SAMPE</h3><p className="text-sm">Professional welding, furniture, and construction services in Liberia. We build for the future with the strength of steel.</p></div>
      <div><h4 className="text-white font-semibold mb-3">Quick Links</h4><ul className="space-y-1 text-sm"><li><Link to="/products" className="hover:text-primary">Products</Link></li><li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li><li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li><li><Link to="/admin" className="hover:text-primary">Admin Portal</Link></li></ul></div>
      <div><h4 className="text-white font-semibold mb-3">Contact</h4><ul className="space-y-1 text-sm"><li>Monrovia, Montserrado County, Liberia</li><li><a href="mailto:info@sampe.com" className="hover:text-primary">info@sampe.com</a></li><li><a href="tel:+231880374248" className="hover:text-primary">+231 880 374 248</a></li></ul></div>
      <div><h4 className="text-white font-semibold mb-3">Hours</h4><p className="text-sm">Mon–Sat: 8am – 6pm<br/>Sunday: Closed</p></div>
    </div>
    <div className="text-center text-xs pt-8 border-t border-gray-800 mt-8">© 2025 SAMPE – Sheriff Abraham Multipurpose Enterprise. All rights reserved.</div>
  </footer>
);
export default Footer;
