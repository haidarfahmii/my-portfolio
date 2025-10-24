"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import data json
import skillsData from "@/dummy/skill.json";

interface Skill {
  name: string;
  iconUrl: string;
}

// Tipe untuk data skills yang terstruktur
interface SkillCategories {
  [key: string]: Skill[];
}

export default function Skill() {
  const skillCategories: SkillCategories = skillsData.skills;
  const categoryNames = Object.keys(skillCategories);

  // State untuk melacak kategori yang aktif, default-nya "Frontend"
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);

  return (
    <section
      id="skills"
      className="py-10 md:py-20 scroll-mt-[140px] min-h-screen h-full flex items-center"
    >
      <div className="container mx-auto max-w-4xl px-5 lg:px-10">
        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-400 tracking-widest uppercase">
            SKILLS & TOOLS
          </span>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Technical Proficiency
        </h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          A comprehensive overview of my technical skills and expertise areas,
          from frontend frameworks to backend.
        </p>

        {/* divider */}
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[40px] rounded-[2px]"></div>

        {/* untuk pilih fe, be, tools */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 rounded-full bg-[#2c2c32] border border-gray-700/50 p-1">
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-skill-pill"
                    className="absolute inset-0 rounded-full bg-amber-500/80"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {skillCategories[activeCategory].map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[#2c2c32] p-6 rounded-lg flex flex-col items-center justify-center gap-3
                           border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300
                           hover:scale-105 hover:shadow-lg hover:shadow-amber-400/10"
              >
                <Image
                  src={skill.iconUrl}
                  alt={`${skill.name} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <p className="text-sm font-medium text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
