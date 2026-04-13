import Image from "next/image";
import AboutUs from "@/sections/AboutUs";
import ImpactTracker from "@/components/ImpactTracker";
import VolunteerForm from "@/components/VolunteerForm";
import Countdown from "@/components/Countdown";
import NewsFlash from "@/components/NewsFlash";

/**
 * Hon. (Barr) Ibrahim Kunle Olarewaju - Campaign Landing Page
 */

export default function Home() {
  const containerStyle = "max-w-7xl mx-auto px-6 lg:px-12";

  return (
    <main className="min-h-screen bg-[#fdfcfb] selection:bg-campaign-yellow selection:text-campaign-blue">
      {/* 1. STICKY NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div
          className={`${containerStyle} flex justify-between items-center h-20`}
        >
          {/* Brand Identity */}
          <div className="font-black text-2xl tracking-tighter text-campaign-blue uppercase">
            IBOO 4 REPS<span className="text-apc-red"> APC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            {["The Vision", "Impact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="font-black text-sm uppercase tracking-[0.2em] text-slate-900 hover:text-campaign-blue transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-campaign-yellow transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href="#volunteer"
            className="bg-campaign-blue text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-campaign-blue/90 transition-all shadow-md active:scale-95"
          >
            Join Movement
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-campaign-blue">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/official-portrait.jpg"
            alt="Hon. (Barr) Ibrahim Kunle Olarewaju Official Campaign Portrait"
            fill
            priority
            className="object-cover object-top opacity-50 grayscale-[10%]"
            sizes="100vw"
          />
          {/* Security & Readability Layer: Linear Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-campaign-blue via-campaign-blue/40 to-campaign-blue/60"></div>
        </div>

        <div
          className={`${containerStyle} relative z-10 flex flex-col items-center text-center py-20`}
        >
          <div className="w-24 h-2 bg-campaign-yellow mb-10 rounded-full shadow-lg animate-pulse"></div>

          <div className="space-y-8 max-w-5xl">
            <span className="inline-block border-2 border-campaign-yellow text-campaign-yellow px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-campaign-blue/40 backdrop-blur-sm shadow-xl">
              Moving Our Constituency Forward
            </span>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-white drop-shadow-2xl">
              IBOO<span className="text-campaign-yellow">2027</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                Hon. (Barr) Ibrahim <br />
                <span className="text-campaign-yellow">Kunle Olarewaju</span>
              </h2>
              <div className="h-1.5 w-24 bg-apc-red mx-auto rounded-full shadow-lg"></div>
            </div>

            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
              Establishing a new standard of representation for Ekiti North II.{" "}
              <br className="hidden md:block" />
              Join the movement for sustainable development.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
              <a
                href="#about"
                className="bg-campaign-yellow text-campaign-blue px-14 py-5 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl hover:scale-105 transition-all active:scale-95"
              >
                The Vision
              </a>
              <a
                href="#volunteer"
                className="bg-white text-campaign-blue px-14 py-5 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl hover:bg-slate-100 transition-all active:scale-95"
              >
                Volunteer Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 LIVE COUNTDOWN TIMER */}
      <Countdown />

      {/* 2.7 NEWS FLASH */}
      <div className="bg-white border-b border-stone-100">
        <NewsFlash />
      </div>

      {/* 3. TRANSITION QUOTE */}
      <section className="bg-campaign-blue py-24 border-y-8 border-campaign-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden text-white font-black text-[200px] leading-none uppercase">
          IBOO 2027
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-2xl md:text-4xl font-bold text-white leading-relaxed italic drop-shadow-sm">
            "We are building a constituency where every ward feels the impact of
            progress. 2027 is about our collective growth."
          </p>
        </div>
      </section>

      {/* 4. CONTENT SECTIONS */}
      <div className="space-y-0">
        <AboutUs />
        <section id="impact" className="py-32 bg-stone-50">
          <ImpactTracker />
        </section>
        <section id="volunteer" className="py-32 bg-white">
          <VolunteerForm />
        </section>
      </div>

      {/* 5. COHESIVE FOOTER */}
      <footer className="py-24 bg-campaign-blue text-white border-t-8 border-campaign-yellow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          {/* Secure Social Integration */}
          <div className="flex gap-12 items-center">
            <a
              href="https://www.facebook.com/p/Kunle-Ibrahim-Olarewaju-100063553787546/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Hon. Ibrahim on Facebook"
              className="text-white hover:text-campaign-yellow transition-transform hover:scale-125 duration-300"
            >
              <span className="text-5xl font-black italic">f</span>
            </a>
            <a
              href="https://x.com/HonOlarewajuIk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Hon. Ibrahim on X (Twitter)"
              className="text-white hover:text-campaign-yellow transition-transform hover:scale-125 duration-300"
            >
              <span className="text-4xl font-black">𝕏</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-10 font-black uppercase tracking-[0.25em] text-xs">
            {["The Vision", "Impact", "Volunteer"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="hover:text-campaign-yellow transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="text-center space-y-4 opacity-70 text-[10px] font-bold uppercase tracking-[0.3em] max-w-md">
            <div className="h-px w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="leading-loose">
              Kunle Ibrahim Olarewaju Campaign Organization.
            </p>
            <p className="text-campaign-yellow/80">
              © 2026 Supporters of Hon. (Barr) Ibrahim Kunle Olarewaju.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
