"use client";
import { useState } from "react";
import Image from "next/image";

const impactData = [
  {
    title: "Mobile Clinics",
    category: "Health",
    img: "/ambulance.jpg",
    desc: "Emergency response for rural wards.",
  },
  {
    title: "Mobile Clinics",
    category: "Health",
    img: "/ambulance-inside.jpg",
    desc: "Fully Equipped for emergency response.",
  },
  {
    title: "School Renovations",
    category: "Education",
    img: "/education classroom.jpg",
    desc: "Modern and conducive learning environments for our children.",
  },
  {
    title: "School Renovations",
    category: "Education",
    img: "/education.jpg",
    desc: "Modern and conducive learning environments for our children.",
  },
  {
    title: "School Renovations",
    category: "Education",
    img: "/education classroom1.jpg",
    desc: "Modern and conducive learning environments for our children.",
  },
  {
    title: "School Renovations",
    category: "Education",
    img: "/education classroom2.jpg",
    desc: "Modern and conducive learning environments for our children.",
  },
  {
    title: "Skills Acquisition",
    category: "Empowerment",
    img: "/youth empowerment2.jpg",
    desc: "Equipping youth with tools for self-reliance.",
  },
  {
    title: "Skills Acquisition",
    category: "Empowerment",
    img: "/constituency project.jpg",
    desc: "Equipping youth with tools for self-reliance.",
  },
  {
    title: "Skills Acquisition",
    category: "Empowerment",
    img: "/public-transportation.jpg",
    desc: "Equipping youth with tools for self-reliance and reducing cost of transportation.",
  },
  {
    title: "Skills Acquisition",
    category: "Empowerment",
    img: "/public-transpotation.jpg",
    desc: "Equipping youth with tools for self-reliance and reducing cost of transportation.",
  },
  {
    title: "Primary Care",
    category: "Health",
    img: "/health.jpg",
    desc: "Upgraded health access to rural dwellers in Ekiti North II.",
  },
  {
    title: "Legislative Reform",
    category: "Policy",
    img: "/legislative 2.jpg",
    desc: "Advocating for grassroots development bills.",
  },
  {
    title: "Legislative Reform",
    category: "Policy",
    img: "/legislative 3.jpg",
    desc: "Advocating for grassroots development bills.",
  },
  {
    title: "Legislative Reform",
    category: "Policy",
    img: "/national engagement.jpg",
    desc: "Advocating for grassroots development bills.",
  },
  {
    title: "Legislative Reform",
    category: "Policy",
    img: "/national engagement1.jpg",
    desc: "Advocating for grassroots development bills.",
  },
  {
    title: "Infrastructural Development",
    category: "Infrastructure",
    img: "/borehole.jpg",
    desc: "Providing Clean and Safe water access to underserved communities.",
  },
  {
    title: "Infrastructural Development",
    category: "Infrastructure",
    img: "/road.jpg",
    desc: "Providing accessible and safe roads for rural communities.",
  },
  {
    title: "Infrastructural Development",
    category: "Infrastructure",
    img: "/rural electrification.jpg",
    desc: "Providing access to electricity for rural communities.",
  },
  {
    title: "Infrastructural Development",
    category: "Infrastructure",
    img: "/townhall1.jpg",
    desc: "Providing a space for community engagement and dialogue.",
  },
];

const categories = [
  "All",
  "Health",
  "Education",
  "Empowerment",
  "Policy",
  "Infrastructure",
];

export default function ImpactTracker() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? impactData
      : impactData.filter((item) => item.category === activeTab);

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-apc-red font-black uppercase tracking-widest text-sm">
              Proven Results
            </h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">
              Impact Tracker
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === cat
                    ? "bg-campaign-blue text-white shadow-lg"
                    : "bg-stone-100 text-slate-500 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-campaign-blue">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
