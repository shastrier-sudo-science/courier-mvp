"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Air freight typically takes 3-5 business days from our US warehouse to Trinidad. Ocean freight takes 2-4 weeks. Local delivery is same-day or next-day depending on your location and selected speed.",
  },
  {
    q: "Is there a membership fee?",
    a: "No! Signing up for a member account is completely free. There are no monthly or annual fees. You only pay for the shipping and delivery services you use.",
  },
  {
    q: "Do you deliver on weekends?",
    a: "Yes, we deliver 7 days a week including weekends. The only exceptions are public holidays. You can schedule your delivery for any day that works for you.",
  },
  {
    q: "What is a Skybox?",
    a: "A Skybox is your personal US shipping address. When you shop online from US stores like Amazon, eBay, or any other retailer, you use your Skybox address as the delivery address. We receive your packages at our US warehouse and ship them to you in Trinidad.",
  },
  {
    q: "How do I track my package?",
    a: "Once your package is in our system, you'll receive a tracking number. You can track your package in real-time through your member dashboard on our website or mobile app. We also send SMS and email updates at every major milestone.",
  },
  {
    q: "Do you handle customs clearance?",
    a: "Yes, we handle all Customs & Excise clearance for non-trade items. This is included in our service — you don't need to visit customs offices or deal with paperwork yourself. For trade/commercial items, additional documentation may be required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about our services.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-white transition"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-5 pb-5 text-sm text-slate-600 leading-relaxed ${openIndex === i ? "block" : "hidden"}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}