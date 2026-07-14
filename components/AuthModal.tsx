"use client";

import { useState } from "react";

interface AuthModalProps {
  type: "signup" | "login" | null;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export default function AuthModal({ type, onClose, showToast }: AuthModalProps) {
  const [mode, setMode] = useState<"signup" | "login">(type || "signup");

  if (!type) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast(mode === "signup" ? "Account created! Welcome aboard." : "Welcome back!");
    onClose();
    e.currentTarget.reset();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 className="text-xl font-bold text-slate-900 mb-6">{mode === "signup" ? "Create Your Account" : "Welcome Back"}</h3>
        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition" placeholder="John Doe" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition" placeholder="john@example.com" />
          </div>
          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition" placeholder="(868) 555-0199" />
            </div>
          )}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input type="password" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition" placeholder={mode === "signup" ? "Min 8 characters" : "Your password"} />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-orange-500/20">
            {mode === "signup" ? "Create Free Account" : "Sign In"}
          </button>
          <p className="text-center text-sm text-slate-500 mt-4">
            {mode === "signup" ? "Already have an account? " : "Don't have an account? "}
            <button type="button" onClick={() => setMode(mode === "signup" ? "login" : "signup")} className="text-orange-500 font-semibold hover:underline">
              {mode === "signup" ? "Sign In" : "Get Started"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
