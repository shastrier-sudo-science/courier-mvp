"use client";

interface ToastProps {
  toast: { message: string; visible: boolean };
}

export default function Toast({ toast }: ToastProps) {
  return (
    <div className={`fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-300 z-50 flex items-center gap-3 ${toast.visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}>
      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
      <span className="text-sm">{toast.message}</span>
    </div>
  );
}