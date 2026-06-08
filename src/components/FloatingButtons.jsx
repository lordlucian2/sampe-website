const FloatingButtons = () => (
  <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
    <a href="https://wa.me/231775094389" target="_blank" rel="noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"><img src="https://img.icons8.com/color/48/whatsapp--v1.png" className="w-7 h-7" alt="WhatsApp" /></a>
    <a href="tel:+231880374248" className="bg-primary p-3 rounded-full shadow-lg hover:scale-110 transition"><img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" className="w-7 h-7" alt="Call" /></a>
  </div>
);
export default FloatingButtons;
