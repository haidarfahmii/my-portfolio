"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// ambil data json
import projects from "@/dummy/project.json";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  isFeatured: boolean;
  liveLink: string;
  githubLink: string;
}

// Komponen project card
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-[#2c2c32] rounded-xl overflow-hidden border border-gray-700 hover:border-amber-400/50 transition-all duration-300 flex flex-col shadow-lg">
      <div className="relative">
        {project.isFeatured && (
          <span className="absolute top-3 left-3 bg-amber-400 text-black text-xs font-bold py-1 px-3 rounded-full z-10">
            Featured
          </span>
        )}
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover aspect-video opacity-80 group-hover:opacity-100 transition-opacity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c32] via-[#2c2c32]/50 to-transparent"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 text-gray-200 py-1 px-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link
            href={project.liveLink}
            target="_blank"
            className="flex-1 text-center bg-amber-600 hover:bg-amber-500 text-slate-800 rounded-md py-2 px-4 font-bold cursor-pointer shadow-md hover:shadow-amber-400/80 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            View Project
            <FaExternalLinkAlt size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <section
      id="project"
      className="py-10 lg:py-20 scroll-mt-[140px] min-h-screen h-full flex items-center"
    >
      <div className="container mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-400 tracking-widest uppercase">
            projects
          </span>
        </div>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Featured Work
        </h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          A showcase of my recent projects demonstrating expertise in full-stack
          development, modern frameworks, and creative problem-solving.
        </p>

        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects as Project[]).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">
            Interested in seeing more of my work?
          </p>
          <Link
            href="https://github.com/haidarfahmii"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 text-amber-400 rounded-full border border-amber-400 py-2 px-6 font-bold cursor-pointer hover:bg-amber-400 hover:text-white shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View All Projects on GitHub
            <FaGithub size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
