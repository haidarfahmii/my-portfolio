"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
    path: "/contact",
  },
];

export default function Nav() {
  const pathName = usePathname();
  const [activeHash, setActiveHash] = useState("");

  // untuk hash
  useEffect(() => {
    // fungsi untuk update hash
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    // Set hash awal saat komponen dimuat
    handleHashChange();
    // Dengarkan perubahan hash
    window.addEventListener("hashchange", handleHashChange);
    // Cleanup listener saat komponen dibongkar
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // berarti efek ini hanya berjalan sekali saat di mount

  useEffect(() => {
    // jalankan saat scrollspy di halaman utama
    if (pathName !== "/") {
      return;
    }

    // 1. Dapatkan daftar ID section dari 'links'
    // Kita tambahkan "home" secara manual (dari Langkah 1)
    const sectionIds = [
      "home",
      ...links
        .map((link) => link.path)
        .filter((path) => path.startsWith("#"))
        .map((path) => path.substring(1)), // Ambil "about" dari "/#about"
    ];

    // 2. Dapatkan elemen section-nya
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    // 3. Buat Observer
    const observerOptions = {
      // 'threshold: 0.4' berarti 40% dari section harus terlihat
      // sebelum dianggap "aktif". Sesuaikan nilai ini (0.0 - 1.0)
      // jika Anda merasa kurang pas.
      rootMargin: "-140px 0px 0px 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Saat section masuk ke layar, update hash aktif
          setActiveHash("#" + entry.target.id);
        } else {
          // 2. Elemen KELUAR dari area pandang
          const leavingId = "#" + entry.target.id;

          // Periksa apakah elemen yang keluar adalah yang sedang aktif
          // Ini penting agar kita hanya bereaksi saat scroll ke atas
          if (leavingId === activeHash) {
            // Temukan index dari section yang keluar
            const currentIndex = sectionIds.indexOf(entry.target.id);
            if (currentIndex > 0) {
              // Aktifkan section SEBELUMNYA
              const prevSectionId = sectionIds[currentIndex - 1];
              setActiveHash("#" + prevSectionId);
            }
          }
        }
      });
    }, observerOptions);

    // 4. Amati setiap section
    sections.forEach((section) => observer.observe(section));

    // 5. Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathName, activeHash]);

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        // menentukan link aktif
        const isActive = () => {
          // Kalo link berupa hash
          if (link.path.startsWith("#")) {
            // Aktif jika pathName = "/"  dan hash cocok
            return pathName === "/" && activeHash === link.path;
          }

          // kalo link adalah halaman home, aktif kalo pathName cocok DAN tidak ada hash
          if (link.path === "/") {
            return (
              pathName === "/" && (activeHash === "" || activeHash === "#home")
            );
          }

          // untuk halaman lain
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
                setActiveHash("#home"); // Arahkan ke "home" saat klik "Home"
              } else {
                setActiveHash(""); // Hapus hash jika pindah halaman
              }
            }}
            className={`${
              isActive() && "text-amber-400 border-b-2 border-amber-400"
            } capitalize font-medium hover:text-amber-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
