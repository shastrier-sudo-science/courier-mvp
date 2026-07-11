"use client";

const steps = [
  { num: "1", title: "Sign Up Free", desc: "Create your account in under 2 minutes. No monthly fees." },
  { num: "2", title: "Ship to Us", desc: "Use your unique address for online shopping or send us your package." },
  { num: "3", title: "We Handle Customs", desc: "Our team clears your package through Customs & Excise." },
  { num: "4", title: "Delivered to You", desc: "Pick up at our location or get doorstep delivery — your choice." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Four simple steps from order to delivery.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-orange-500/30">{step.num}</div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}