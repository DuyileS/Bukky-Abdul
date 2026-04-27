"use client";

import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AUTOPLAY_INTERVAL = 4000;

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    if (paused || !instanceRef.current) return;

    timerRef.current = setTimeout(() => {
      instanceRef.current?.next();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, paused, instanceRef]);

  const images =
    [
      "/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg",
      "/gallery5.jpg", "/gallery6.jpg", "/gallery7.jpg", "/gallery8.jpg",
      "/gallery9.jpg", "/gallery10.jpg", "/gallery11.jpg", "/gallery12.jpg",
    ];

  return (
    <>
      <div className="px-6 space-y-4 mt-8">
        <div className="flex items-center gap-4 uppercase font-semibold text-sm md:text-base">
          <p className="uppercase tracking-[0.22em] font-medium text-secondary text-xs">in the frame</p>
          <hr className="w-8 md:w-12 border-secondary" />
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold">Photo <span className="italic text-secondary">Gallery</span></h3>
      </div>
      <section className="py-16 px-4 mx-auto md:mx-24 2xl:mx-auto max-w-7xl">
        <div
          className="relative group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main Slider Container */}
          <div ref={sliderRef} className="keen-slider overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            {images.map((src, idx) => (
              <div key={idx} className="keen-slider__slide relative h-[300px] md:h-[460px] flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Gallery photo ${idx + 1}`}
                  fill
                  className="object-contain p-1 md:p-2"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 hover:bg-white/20 border border-white/20 active:scale-95 z-10 shadow-lg"
                aria-label="Previous slide"
              >
                <Icon icon="lucide:chevron-left" className="w-8 h-8" />
              </button>
              <button
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 hover:bg-white/20 border border-white/20 active:scale-95 z-10 shadow-lg"
                aria-label="Next slide"
              >
                <Icon icon="lucide:chevron-right" className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-3 mt-8">
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx
                    ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;