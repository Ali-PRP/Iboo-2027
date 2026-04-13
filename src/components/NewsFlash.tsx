"use client";
import { useState } from "react";
import Image from "next/image";

export default function NewsFlash() {
  const [isExpanded, setIsExpanded] = useState(false);

  const newsData = {
    title:
      "Hon Kunle Ibrahim Olarewaju resigns Presidential appointment to clinch Reps Ticket for Ekiti North II!",
    lead: '"I have worked throughout my life to better the lots of people around me." ',
    fullContent: `I see myself a servant.
My first term in the 9th National Assembly was another great opportunity to prove detractors wrong. I hit the ground running immediately and the four years were full of impactful activities and the legacies are not hidden across all the towns and villages in Moba, Ido Osi and Ilejemeje local governments which I represented.

At the expiration of my tenure in 2023, I have thought I'd take a break from politics and pursue my legal activities which was my actual profession, little did I know that another national duty already waiting for my attendance.

Who am I to refuse the call from the NUMBER ONE CITIZEN of Nigeria President Asiwaju Bola Ahmed Tinubu (GCFR), to handle the liaison activities between the Nigerian House of Representatives and the Presidency as Senior Special Assistant to Mr President on National Assembly Matters (House of Reps).

As the clock ticks and I was already counting my days at the presidency, another calls for a rescue mission begin to come from the good people of Ekiti North Federal Constituency II, the constituency I earlier represented.

The number of calls were enormous and the caliber of the callers were not those somebody like me can decline.
I made my consultations wide, I listened carefully to all reasons made forward for my intervention and I asked for the directive from Allah as my Alpha and Omega.

I can see clearly where I left Ekiti Oke 2 and what has happened afterwards.
I can understand truly the rescue mission call was needed to reshape the Constituency.

To the glory of God and service to humanity, I have again wholeheartedly answered the clarion calls and the race for the reclaim and reshape of Ekiti North Federal Constituency II had began with the support of God and the good people of Ekiti North Federal Constituency II.

This facility, equipped with modern maternity wards and emergency response units, is part of a larger initiative to ensure no ward is left behind in the 2027 agenda. During the ceremony, the candidate emphasized that healthcare is a fundamental right, not a privilege, and pledged to renovate three more centers before the end of the quarter.

So help me God.`,
    image: "/health.jpg",
    tag: "Latest Update",
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-50 rounded-[3rem] overflow-hidden border border-stone-100 shadow-xl flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image
              src={newsData.image}
              alt="Campaign News"
              fill
              className="object-cover"
            />
            <div className="absolute top-8 left-8">
              <span className="bg-apc-red text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                {newsData.tag}
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              {newsData.title}
            </h2>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-4">
              {newsData.lead}
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[1000px] opacity-100 mb-8" : "max-h-0 opacity-0"}`}
            >
              <p className="text-lg text-slate-500 leading-relaxed pt-4 border-t border-stone-200">
                {newsData.fullContent}
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-3 text-campaign-blue font-black uppercase tracking-widest text-sm"
            >
              {isExpanded ? "Show Less" : "Read Full Story"}
              <span
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-x-2"}`}
              >
                {isExpanded ? "↑" : "→"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
