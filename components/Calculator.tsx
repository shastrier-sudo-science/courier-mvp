"use client";

import { useState } from "react";

interface CalculatorProps {
  showToast: (msg: string) => void;
}

export default function Calculator({ showToast }: CalculatorProps) {
  const [result, setResult] = useState<string | null>(null);

  const calculateCost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const weight = parseFloat((form.elements.namedItem("weight") as HTMLInputElement).value) || 0;
    const destination = (form.elements.namedItem("destination") as HTMLSelectElement).value;
    const speed = (form.elements.namedItem("speed") as HTMLSelectElement).value;

    if (weight <= 0) {
      showToast("Please enter a valid weight");
      return;
    }

    const baseRates: Record<string, number> = { air: 12, ocean: 4, local: 25, skybox: 10 };
    const speedMultipliers: Record<string, number> = { standard: 1, express: 1.5, same: 2.5 };

    let total = weight * baseRates[service] * speedMultipliers[speed];
    if (destination === "tobago") total += 15;

    setResult(`$${total.toFixed(2)} TTD`);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Estimate Your Cost</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Calculate your shipping cost</h2>
          <p className="text-slate-600">Get an instant estimate based on weight, dimensions, and destination.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
          <form onSubmit={calculateCost}>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                <select name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition bg-white">
                  <option value="air">Air Freight</option>
                  <option value="ocean">Ocean Freight</option>
                  <option value="local">Local Delivery</option>
                  <option value="skybox">Skybox</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Weight (lbs)</label>
                <input name="weight" type="number" placeholder="e.g. 5" min="0" step="0.1" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination</label>
                <select name="destination" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition bg-white">
                  <option value="trinidad">Trinidad</option>
                  <option value="tobago">Tobago (+$15 TTD)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Delivery Speed</label>
                <select name="speed" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition bg-white">
                  <option value="standard">Standard (3-5 days)</option>
                  <option value="express">Express (1-2 days)</option>
                  <option value="same">Same Day</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-orange-500/20 mb-6">
              Calculate Estimate
            </button>
          </form>
          {result && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600">Estimated Cost:</span>
                <span className="text-3xl font-bold text-orange-600">{result}</span>
              </div>
              <p className="text-xs text-slate-500">*This is an estimate only. Final cost may vary based on actual weight, dimensions, and customs fees. Contact us for a formal quote.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}