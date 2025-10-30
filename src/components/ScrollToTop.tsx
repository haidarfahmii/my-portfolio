"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // toggle visibility
  const toggleVisibility = () => {
    // tombol terlihat jika sudah di scroll sejauh 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // tambah dan hapus event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // menghapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            w-12 h-12
            rounded-full
            bg-amber-600
            hover:bg-amber-500
            text-slate-800
            flex
            items-center
            justify-center
            shadow-md
            hover:shadow-amber-400/80
            cursor-pointer
            transition-all
          "
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
