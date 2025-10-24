"use client";

import React from "react";
import { FaBriefcase, FaCode, FaMapMarkerAlt } from "react-icons/fa";
import experiences from "@/dummy/experience.json";

// 1. Data untuk Timeline Experience
interface Experience {
  company: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-10 lg:py-20 scroll-mt-[140px] min-h-screen h-full flex items-center"
    >
      <div className="container mx-auto max-w-[1400px] px-5 lg:px-10">
        {/* Judul */}
        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-400 tracking-widest uppercase">
            experience
          </span>
        </div>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Professional Journey
        </h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          A timeline of my professional growth, key achievements, and the
          technologies I've mastered along the way.
        </p>
        {/* Divider */}
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        {/* Timeline*/}
        <div className="relative">
          {/* Garis Vertikal di Tengah */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-amber-400/30 hidden lg:block"></div>

          {/* Kontainer untuk item timeline */}
          <div className="relative flex flex-col gap-12">
            {(experiences as Experience[]).map((exp, index) => (
              <div key={index} className="relative">
                {/* Titik pada Garis */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full hidden lg:block z-10"></div>

                {/* Kontainer Kartu */}
                <div
                  className={`
                    lg:w-[calc(50%-2.5rem)]
                    ${
                      index % 2 !== 0
                        ? "lg:ml-[calc(50%+2.5rem)]" // Kartu Kanan (index 1)
                        : "lg:mr-auto" // Kartu Kiri (index 0, 2)
                    }
                  `}
                >
                  {/* === Konten Kartu === */}
                  <div className="p-6 bg-[#2c2c32] border border-amber-400/20 rounded-lg shadow-lg hover:border-amber-400/50 transition-all duration-300 hover:shadow-amber-400/10">
                    {/* Header Kartu */}
                    <div className="mb-3">
                      <span className="text-xs bg-amber-400/10 text-amber-400 py-1 px-3 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-300 mb-1">
                      {exp.company}
                    </p>
                    <div className="text-xs text-gray-400 mb-4 space-x-2 flex">
                      <span>{exp.date}</span>
                      {/* <span>&bull;</span> */}
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>

                    {/* Deskripsi */}
                    <p className="text-sm text-gray-300 mb-5">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-5">
                      <h4 className="flex items-center gap-2 text-md font-semibold text-amber-400 mb-2">
                        <FaBriefcase /> Key Achievements
                      </h4>
                      <ul className="list-none pl-5 space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-300 relative before:content-['+'] before:absolute before:-left-5 before:text-amber-400"
                          >
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="flex items-center gap-2 text-md font-semibold text-amber-400 mb-3">
                        <FaCode /> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-700 text-gray-200 py-1 px-3 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* === Akhir Konten Kartu === */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
