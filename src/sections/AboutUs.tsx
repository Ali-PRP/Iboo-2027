import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Narrative Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest">
              The Voice of Progress
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              A Legacy of Service, <br />
              <span className="text-emerald-700 font-serif italic">
                A Future for All.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong>Hon. (Barr.) Ibrahim Kunle Olarewaju</strong> is a
                distinguished legal practitioner, a seasoned legislator, and a
                devoted family man. Representing the Ido/Osi/Moba/Ilejemeje
                Federal Constituency in the 9th National Assembly, he earned a
                reputation as one of the most productive and impactful lawmakers
                from Ekiti State.
              </p>
              <p>
                A man of peace and deep-rooted community values, Hon.
                Olarewaju’s leadership is defined by a simple philosophy:
                <span className="text-slate-900 font-semibold italic">
                  {" "}
                  "Legislating with a human face."
                </span>
              </p>
            </div>

            {/* Family & Character Highlight */}
            <div className="p-6 bg-white rounded-xl border border-stone-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold uppercase text-xs tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>A
                Man of Character & Family
              </div>
              <p className="text-slate-600">
                A dedicated husband and proud father, Hon. Olarewaju understands
                the challenges facing Nigerian families. His approach is always
                calm, legalistic, and centered on the common good.
              </p>
            </div>
          </div>

          {/* Visual Content with Next.js Image */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-stone-200 aspect-[4/5] rounded-2xl flex flex-col items-center justify-center overflow-hidden relative shadow-xl">
              <Image
                src="/legislative 3.jpg"
                alt="Hon. Ibrahim Kunle Olarewaju"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                <p className="text-white font-bold text-xl uppercase tracking-wide">
                  Hon. Ibrahim Kunle Olarewaju
                </p>
                <p className="text-emerald-400 text-sm font-medium">
                  SSA to the President (National Assembly Matters)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 9th Assembly Track Record Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              9th Assembly Track Record
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Ranked 2nd among Ekiti lawmakers for bill sponsorship with 23
              bills introduced to reform agriculture, welfare, and our national
              institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Agrotech Hub",
                desc: "Sponsored the Bill for Federal College of Agricultural Technology, Otun-Ekiti.",
              },
              {
                title: "Elderly Welfare",
                desc: "Amended the National Senior Citizens Centre Act for state-wide care centers.",
              },
              {
                title: "Compliance",
                desc: "Championed motions ensuring MDAs implement House resolutions.",
              },
              {
                title: "Infrastructure",
                desc: "Facilitated rural electrification and road maintenance across Ido/Osi, Moba, and Ilejemeje.",
              },
              {
                title: "Education",
                desc: "Provided scholarship schemes and materials for schools across the constituency.",
              },
              {
                title: "Agri-Revitalization",
                desc: "Pushed for federal farm settlement centers and abattoir management reform.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-emerald-200 transition-all"
              >
                <div className="w-8 h-1 bg-emerald-600 mb-6 rounded-full"></div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-slate-900 rounded-3xl p-10 lg:p-16 text-white text-center">
          <h3 className="text-3xl font-bold mb-10 text-white">
            The Vision for Re-election
          </h3>
          <div className="grid lg:grid-cols-3 gap-12 text-left">
            <div>
              <div className="text-emerald-500 font-bold mb-2 uppercase text-sm tracking-widest">
                01. Agriculture
              </div>
              <p className="text-slate-400">
                Turning our constituency into the food basket of the South-West
                through agrotech.
              </p>
            </div>
            <div>
              <div className="text-emerald-500 font-bold mb-2 uppercase text-sm tracking-widest">
                02. Youth Economy
              </div>
              <p className="text-slate-400">
                Expanding training in tech and vocational skills to make our
                youth globally competitive.
              </p>
            </div>
            <div>
              <div className="text-emerald-500 font-bold mb-2 uppercase text-sm tracking-widest">
                03. Peace & Security
              </div>
              <p className="text-slate-400">
                Advocating for community policing and enhanced local security
                frameworks.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-800">
            <p className="text-2xl font-serif italic max-w-3xl mx-auto text-emerald-50">
              "Our constituency deserves a representative who doesn't just
              speak, but delivers. I am Ibrahim Kunle Olarewaju, and I am asking
              for your mandate."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
