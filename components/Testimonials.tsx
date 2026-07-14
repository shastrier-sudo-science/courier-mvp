"use client";

const reviews = [
  {
    text: "Excellent service from start to finish. My package arrived in perfect condition and the tracking kept me updated every step of the way. Highly recommend!",
    name: "Sarah M.",
    location: "Port of Spain",
    initial: "S",
    color: "bg-orange-500",
  },
  {
    text: "I've tried several couriers and this is by far the best. The app makes tracking so easy and the delivery was faster than expected. Will definitely use again.",
    name: "Jason K.",
    location: "San Fernando",
    initial: "J",
    color: "bg-blue-500",
  },
  {
    text: "As a small business owner, reliable delivery is everything. They've helped me scale my e-commerce store with their merchant account and fast local delivery.",
    name: "Maria R.",
    location: "Chaguanas",
    initial: "M",
    color: "bg-green-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">Customer Love</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What our customers say</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real reviews from real people across Trinidad & Tobago.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>{r.initial}</div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
