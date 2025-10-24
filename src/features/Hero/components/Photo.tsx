"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, MouseEventHandler } from "react";

export default function Photo() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const rotateY = useTransform(x, [-250, 250], [-10, 10]);
  const rotateX = useTransform(y, [-250, 250], [10, -10]);

  //  handler untuk gerak mouse
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // kalkulasi agar relative ke tengah
    const rotX = event.clientX - rect.left - rect.width / 2;
    const rotY = event.clientY - rect.top - rect.height / 2;
    x.set(rotX);
    y.set(rotY);

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    opacity.set(1);
  };

  // handler ketika mouse keluar dari card
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    opacity.set(0);
  };

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="w-[300px] h-[300px] lg:w-[498px] lg:h-[498px]
                   bg-neutral-900/60 border border-neutral-700
                   rounded-2xl shadow-xl overflow-hidden"
      >
        <div
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              opacity,
              background: useTransform(
                [mouseX, mouseY],
                ([newX, newY]) =>
                  `radial-gradient(400px at ${newX}px ${newY}px, rgba(255, 255, 255, 0.1), transparent 80%)`
              ),
              transform: "translateZ(50px)",
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-full h-full absolute top-0 left-0"
            style={{ transform: "translateZ(30px) scale(1)" }}
          >
            <Image
              src="/images/photo.jpg"
              priority
              quality={100}
              fill
              alt=""
              className="object-cover object-top rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
