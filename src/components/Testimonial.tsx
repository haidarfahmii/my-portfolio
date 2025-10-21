// "use client";

// import React, { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import {
//   FaQuoteRight,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// // 1. Impor data dari file JSON
// import testimonials from "@/dummy/testimonial.json";

// // 2. Definisikan Tipe data
// interface Testimonial {
//   name: string;
//   title: string;
//   initials: string;
//   rating: number;
//   quote: string;
// }

// // 3. Buat Sub-Komponen Kartu Testimonial
// const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
//   return (
//     // Setiap kartu di dalam slider
//     <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3">
//       <div className="h-full bg-[#2c2c32] p-6 rounded-lg border border-gray-700/50 flex flex-col justify-between shadow-lg hover:border-amber-400/50 transition-colors duration-300">
//         <div>
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-lg">
//                 {testimonial.initials}
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white">{testimonial.name}</h4>
//                 <p className="text-xs text-gray-400">{testimonial.title}</p>
//               </div>
//             </div>
//             <FaQuoteRight className="text-5xl text-gray-700/50" />
//           </div>
//           <div className="flex items-center gap-1 my-3">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <FaStar
//                 key={i}
//                 className={
//                   i < testimonial.rating
//                     ? "text-amber-400"
//                     : "text-gray-600"
//                 }
//               />
//             ))}
//           </div>
//           <p className="text-sm text-gray-300 italic">
//             "{testimonial.quote}"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // 4. Komponen Utama Section Testimonial
// export default function Testimonial() {
//   // Setup Embla Carousel
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//   });

//   // Fungsi untuk tombol navigasi
//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     // Tambahkan id="testimonials" dan scroll-mt untuk scrollspy
//     <section id="testimonials" className="py-10 md:py-20 scroll-mt-[140px]">
//       <div className="container mx-auto max-w-6xl px-5 md:px-10">
//         {/* === Bagian Judul === */}
//         <div className="text-center mb-4">
//           <span className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
//             TESTIMONIALS
//           </span>
//         </div>
//         <h2 className="text-center text-3xl md:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
//           Client Feedback
//         </h2>
//         <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
//           Here is what clients and colleagues have said about working with me.
//           Their feedback drives my commitment to excellence.
//         </p>
//         {/* Divider */}
//         <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

//         {/* === Slider Carousel === */}
//         <div className="relative">
//           {/* Viewport Carousel */}
//           <div className="overflow-hidden" ref={emblaRef}>
//             {/* Track Slider */}
//             <div className="flex -ml-3">
//               {(testimonials as Testimonial[]).map((item, index) => (
//                 <TestimonialCard key={index} testimonial={item} />
//               ))}
//             </div>
//           </div>

//           {/* Tombol Navigasi */}
//           <button
//             className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 hover:bg-amber-400/50 flex items-center justify-center transition-all"
//             onClick={scrollPrev}
//             aria-label="Previous testimonial"
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 hover:bg-amber-400/50 flex items-center justify-center transition-all"
//             onClick={scrollNext}
//             aria-label="Next testimonial"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
// 1. HAPUS 'motion' dan 'useRef'
// import { motion } from "framer-motion";
// import { useRef } from "react";
import {
  FaQuoteRight,
  FaStar,
  FaChevronLeft, // Kita tidak pakai ini lagi, tapi boleh dihapus
  FaChevronRight, // Kita tidak pakai ini lagi, tapi boleh dihapus
} from "react-icons/fa";

import testimonials from "@/dummy/testimonial.json";

interface Testimonial {
  name: string;
  title: string;
  initials: string;
  rating: number;
  quote: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    // 2. UBAH 'motion.div' MENJADI 'div'
    //    Tambahkan 'snap-start' untuk efek snap
    <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3 snap-start">
      <div className="h-full bg-[#2c2c32] p-6 rounded-lg border border-gray-700/50 flex flex-col justify-between shadow-lg h-full">
        {/* ... (Isi kartu tidak berubah) ... */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            </div>
            <FaQuoteRight className="text-5xl text-gray-700/50" />
          </div>
          <div className="flex items-center gap-1 my-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < testimonial.rating
                    ? "text-amber-400"
                    : "text-gray-600"
                }
              />
            ))}
          </div>
          <p className="text-sm text-gray-300 italic">
            "{testimonial.quote}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  // 3. HAPUS 'scrollRef'
  // const scrollRef = useRef(null);

  return (
    <section id="testimonials" className="py-10 md:py-20 scroll-mt-[140px]">
      <div className="container mx-auto max-w-6xl px-5 md:px-10">
        {/* === Bagian Judul (Tidak berubah) === */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
            TESTIMONIALS
          </span>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Client Feedback
        </h2>
        {/* ... (Deskripsi dan divider tidak berubah) ... */}
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          Here is what clients and colleagues have said about working with me.
          Their feedback drives my commitment to excellence.
        </p>
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        {/* === Slider Carousel (Native Scroll) === */}
        <div className="relative">
          {/* 4. GANTI 'motion.div' DENGAN 'div'
                 TAMBAHKAN 'overflow-x-auto', 'snap-x', 'snap-mandatory'
                 TAMBAHKAN 'scrollbar-hide' (akan kita buat di Langkah 2)
                 TAMBAHKAN '-ml-3' (sama seperti Embla) */}
          <div className="overflow-x-auto -ml-3 pb-4 scrollbar-hide snap-x snap-mandatory">
            {/* 5. GANTI 'motion.div' DENGAN 'div'
                   HAPUS 'drag' dan 'dragConstraints' */}
            <div className="flex">
              {(testimonials as Testimonial[]).map((item, index) => (
                <TestimonialCard key={index} testimonial={item} />
              ))}
            </div>
          </div>

          {/* 6. HAPUS TOMBOL (karena sekarang pakai native scroll) */}
          {/* <button ... /> */}
          {/* <button ... /> */}
        </div>
      </div>
    </section>
  );
}