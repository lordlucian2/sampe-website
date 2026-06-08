const Footer = () => (
  <footer className="bg-darker text-gray-300 py-12 mt-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white text-xl font-bold">SAMPE</h3>
        <p className="text-sm">Sheriff Abraham Multipurpose Enterprise</p>
      </div>
      <div>
        <h4 className="text-white">Contact</h4>
        <a href="tel:+231880374248" className="block">
          +231880374248
        </a>
        <a href="https://wa.me/231775094389">WhatsApp</a>
      </div>
      <div>
        <h4 className="text-white">Hours</h4>
        <p>
          Mon–Sat 8am–6pm
          <br />
          Sunday Closed
        </p>
      </div>
      <div>
        <h4 className="text-white">Policy</h4>
        <p className="text-xs">
          Installation available. Transport outside Monrovia/Paynesville may incur extra cost.
        </p>
      </div>
    </div>
    <div className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
      © 2025 SAMPE – All rights reserved.
    </div>
  </footer>
);

export default Footer;
