"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // Setting target to Jan 16, 2027
    const target = new Date("January 16, 2027 08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-campaign-blue py-12 border-y-8 border-campaign-yellow">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">
            The Clock is Ticking
          </h3>
          <p className="text-campaign-yellow font-black text-3xl md:text-4xl uppercase tracking-tighter">
            General Election 2027
          </p>
        </div>

        <div className="flex gap-4 md:gap-10">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hrs", value: timeLeft.hours },
            { label: "Min", value: timeLeft.mins },
            { label: "Sec", value: timeLeft.secs },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center min-w-[70px]"
            >
              <span className="text-4xl md:text-6xl font-black text-white tabular-nums drop-shadow-md">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-campaign-yellow mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#volunteer"
          className="bg-white text-campaign-blue px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-campaign-yellow transition-all shadow-xl"
        >
          Volunteer Now
        </a>
      </div>
    </section>
  );
}
