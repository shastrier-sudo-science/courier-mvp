"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-sm">C</div>
              <span className="text-lg font-bold text-white">Courier<span className="text-orange-500">Pro</span></span>
            </div>
            <p className="text-sm leading-relaxed">Trusted courier services for Trinidad & Tobago. Bringing the world to your doorstep since 2024.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-orange-400 transition">Air Freight</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Ocean Freight</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Skybox</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Local Delivery</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">News & Updates</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Connect</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">WhatsApp</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Download App</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2024 CourierPro. All rights reserved.</p>
          <p className="text-xs text-slate-600">Built with care for Trinidad & Tobago.</p>
        </div>
      </div>
    </footer>
  );
}