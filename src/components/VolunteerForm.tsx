"use client";
import { useState } from "react";
import { submitVolunteer } from "../app/actions";
import { constituencyData } from "../data/constituency";

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLGA, setSelectedLGA] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Filter wards based on the selected LGA
  const lgas = Object.keys(constituencyData);
  const wards = selectedLGA
    ? constituencyData[selectedLGA as keyof typeof constituencyData]
    : [];

  async function handleFormAction(formData: FormData) {
    setIsSubmitting(true);
    const result = await submitVolunteer(formData);

    if (result.success) {
      setIsSuccess(true);
      // Optional: Redirect or reset form here
    } else {
      alert("Something went wrong: " + result.error);
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center space-y-6 border-t-8 border-apc-green animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-50 text-apc-green rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">
          ✓
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Registration Complete!
          </h2>
          <p className="text-slate-500 font-medium">
            Thank you for joining Hon. (Barr) Ibrahim Kunle Olarewaju’s vision
            for 2027.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">
            Final Step: Join the Inner Circle
          </p>
          {/* Replace the link below with the actual WhatsApp Group Link */}
          <a
            href="https://chat.whatsapp.com/your-official-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-green-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              className="w-6 h-6 invert"
              alt="WA"
            />
            Join WhatsApp Group
          </a>
        </div>

        <button
          onClick={() => setIsSuccess(false)}
          className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-apc-blue transition"
        >
          Register another person
        </button>
      </div>
    );
  }
  return (
    <form
      action={handleFormAction}
      className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border-t-8 border-apc-blue"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* 1. Full Name */}
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-apc-blue outline-none"
        />
        {/* 2. WhatsApp Number */}
        <input
          name="whatsapp"
          type="tel"
          placeholder="WhatsApp Number"
          required
          className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-apc-blue outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 3. LGA Dropdown */}
        <select
          name="lga"
          required
          value={selectedLGA}
          onChange={(e) => setSelectedLGA(e.target.value)}
          className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-apc-blue outline-none cursor-pointer"
        >
          <option value="">Select LGA</option>
          {lgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>

        {/* 4. Ward Dropdown (Chained to LGA) */}
        <select
          name="ward"
          required
          disabled={!selectedLGA}
          className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-apc-blue outline-none disabled:bg-stone-50 cursor-pointer"
        >
          <option value="">Select Ward</option>
          {wards.map((ward) => (
            <option key={ward} value={ward}>
              {ward}
            </option>
          ))}
        </select>
      </div>

      {/* 5. Free-Text Polling Unit */}
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-apc-blue ml-2">
          Your Polling Unit
        </label>
        <input
          name="pollingUnit"
          placeholder="e.g. PU 001 - Town Hall"
          required
          className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-apc-red outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-apc-blue text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-sky-700 transition-all disabled:bg-slate-300"
      >
        {isSubmitting ? "Submitting..." : "Register as Volunteer"}
      </button>
    </form>
  );
}
