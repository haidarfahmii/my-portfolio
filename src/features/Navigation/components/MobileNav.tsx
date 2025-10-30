"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/",
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

export default function MobileNav() {
  const pathName = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (pathName !== "/") {
      return;
    }

    const sectionIds = [
      "home",
      ...links
        .map((link) => link.path)
        .filter((path) => path.startsWith("#"))
        .map((path) => path.substring(1)),
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    const observerOptions = {
      rootMargin: "-140px 0px 0px 0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // elemen masuk
          setActiveHash("#" + entry.target.id);
        } else {
          // elemen keluar misal saat kita kembali scroll ke atas
          const leavingId = "#" + entry.target.id;
          if (leavingId === activeHash) {
            const currentIndex = sectionIds.indexOf(entry.target.id);
            if (currentIndex > 0) {
              const prevSectionId = sectionIds[currentIndex - 1];
              setActiveHash("#" + prevSectionId);
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathName, activeHash]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-2xl text-amber-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col py-8 px-4">
        {/* logo */}
        <div className="mt-30 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Haidar<span className="text-amber-400">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = () => {
              if (link.path.startsWith("#")) {
                return pathName === "/" && activeHash === link.path;
              }
              if (link.path === "/") {
                return (
                  pathName === "/" &&
                  (activeHash === "" || activeHash === "#home")
                );
              }
              return pathName === link.path;
            };
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => {
                  if (link.path.startsWith("#")) {
                    setActiveHash(link.path);
                  } else if (link.path === "/") {
                    setActiveHash("#home");
                  } else {
                    setActiveHash("");
                  }
                  setOpen(false);
                }}
                className={`${
                  isActive() && "text-amber-400 border-b-2 border-amber-400"
                }text-xl capitalize hover:text-amber-400 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
