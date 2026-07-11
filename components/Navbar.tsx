"use client";

interface NavbarProps {
  onAuthClick: (type: "signup" | "login") => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Courier<span className="text-orange-500">Pro</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition">Services</button>
            <button onClick={() => scrollToSection("calculator")} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition">Calculator</button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition">Reviews</button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition">FAQ</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition">Contact</button>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onAuthClick("login")} className="hidden sm:block text-sm font-medium text-slate-600 hover:text-orange-500 transition">Sign In</button>
            <button onClick={() => onAuthClick("signup")} className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-sm">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}