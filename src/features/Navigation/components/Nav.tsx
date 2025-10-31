"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "experience",
    path: "#experience",
  },
  {
    name: "project",
    path: "#project",
  },
  {
    name: "skills",
    path: "#skills",
  },
  {
    name: "testimonials",
    path: "#testimonials",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

export default function Nav() {
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash || "#home";
    }
    return "#home";
  });

  // efek ini untuk mendengarkan perubahan hash misal tombol back/forward
  useEffect(() => {
    const handleHashChange = () => {
      // jika hash menjadi kosong, set aktif ke #home
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); //h hanya jalan sekali saat di mount

  // efek untuk intersection observer (scroll-spy)
  useEffect(() => {
    // ambil ID dari setiap link
    const sectionIds = links.map((link) => link.path.substring(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null) as HTMLElement[];

    if (sectionIds.length === 0) return;

    const observerOptions = {
      rootMargin: "-140px 0px 0px 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash("#" + entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        // Link aktif jika path-nya sama dengan activeHash di state
        const isActive = activeHash === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            // Selalu set activeHash ke path link yang diklik
            onClick={() => {
              setActiveHash(link.path);
            }}
            className={`${
              isActive && "text-amber-400 border-b-2 border-amber-400"
            } capitalize font-medium hover:text-amber-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
