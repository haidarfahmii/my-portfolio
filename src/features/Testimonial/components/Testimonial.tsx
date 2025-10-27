"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TestimonialCard from "@/features/Testimonial/components/TestimonialCard";
import testimonials from "@/dummy/testimonial.json";

interface Testimonial {
  name: string;
  title: string;
  initials: string;
  rating: number;
  quote: string;
}

export default function Testimonial() {
  // Setup Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Fungsi untuk tombol navigasi
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-10 md:py-20 scroll-mt-[140px]">
      <div className="container mx-auto max-w-6xl px-5 md:px-10">
        {/* Judul */}
        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-400 tracking-widest uppercase">
            TESTIMONIALS
          </span>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Client Feedback
        </h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          Here is what clients and colleagues have said about working with me.
          Their feedback drives my commitment to excellence.
        </p>
        {/* Divider */}
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        {/* slider carousel */}
        <div className="relative">
          {/* Viewport Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Track Slider */}
            <div className="flex -ml-3">
              {(testimonials as Testimonial[]).map((item, index) => (
                <TestimonialCard key={index} testimonial={item} />
              ))}
            </div>
          </div>

          {/* tombol next-prev */}
          <button
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 hover:bg-amber-400/50 flex items-center justify-center transition-all"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 hover:bg-amber-400/50 flex items-center justify-center transition-all"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
