"use client";

import React from "react";
import Image from "next/image";

// import data json
import skills from "@/dummy/skill.json";

interface Skill {
  name: string;
  iconUrl: string;
}

export default function Skill() {
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
        
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {(skills as Skill[]).map((skill) => (
            <div
              key={skill.name}
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
              <p className="text-sm font-medium text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
