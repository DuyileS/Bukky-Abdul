"use client";

import React from "react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    quote: "It was a beautiful discussion session. It helped see certain area of grad school with a new perspective",
    author: "Oluwadara Alabi "

  },
  {
    quote: "My session was very enlightening, not tensed at all(this makes me too nervous to ask questions). I’m going to start putting in place everything I learnt ASAP.",
    author: "Yvonne Sado"
  },
  {
    quote:
      "Honestly, I wasnt expecting so much from this but after my conversation with Bukky I understood a lot of gaps in my application. " +
      "Unlike most career coaches who use a one size fits all, Bukky tends to tailor the advice according to your specific requirements. " +
      "Her suggestions were detailed to absolute lines",
    author: "Arimoro Olayinka Imisioluwa"
  },
  {
    quote: "After working together, Bukky gave me tips on handling my LinkedIn profile, one of which was to start including videos of my projects. My current employer stumbled on one of those videos and that was the key thing that made him realize he wanted me on his team!",
    author: "Tomiwa Toye",
  },
  {
    quote: "Bukky was very friendly, and she tried to tailor the experience to my field. The coaching was fun and gave me new insights!",
    author: "Chinaza Esiaba"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="px-6 space-y-4 mb-12">
        <div className="flex items-center gap-4 uppercase font-semibold text-sm md:text-base">
          <p className="uppercase tracking-[0.22em] font-medium text-secondary text-xs">See what others have said</p>
          <hr className="w-8 md:w-12 border-secondary" />
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold">
          Testi<span className="italic text-secondary">monials</span>
        </h3>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-500 flex flex-col group h-full"
            >
              <div className="text-secondary mb-6">
                <Icon icon="ri:double-quotes-l" className="w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>

              <p className="text-lg md:text-xl italic font-playfair leading-relaxed mb-8 grow">
                "{t.quote}"
              </p>

              <div className="mt-auto pt-6 border-t border-white/5">
                <h4 className="font-semibold text-white tracking-wide text-lg">{t.author}</h4>
                {/* <p className="text-sm text-secondary uppercase tracking-wider font-medium">{t?.role}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
