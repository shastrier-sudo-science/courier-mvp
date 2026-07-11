"use client";

const servicesList = [
  {
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    color: "orange",
    title: "Air Freight",
    desc: "Fast international shipping by air. Receive packages from the US within days, not weeks.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "blue",
    title: "Ocean Freight",
    desc: "Cost-effective sea shipping for large or heavy items. Ideal for bulk orders and furniture.",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "green",
    title: "Skybox",
    desc: "Your own US shipping address. Shop online from any store and we'll bring it to you.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "purple",
    title: "Local Delivery",
    desc: "Same-day and next-day delivery across Trinidad. From business to doorstep.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "hover:border-orange-200" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "hover:border-blue-200" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "hover:border-green-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "hover:border-purple-200" },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Courier services that prioritize you.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From international freight to local doorstep delivery, we've got every mile covered.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((s) => (
            <div key={s.title} className={`group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 ${colorMap[s.color].border} hover:shadow-xl transition-all duration-300`}>
              <div className={`w-14 h-14 ${colorMap[s.color].bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                <svg className={`w-7 h-7 ${colorMap[s.color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {s.icon.split(" ").map((path, i) => (
                    <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={path} />
                  ))}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}