import Link from "next/link";
import { FiCode, FiNavigation, FiShare2 } from "react-icons/fi";
import SocialLinks from "@/features/Hero/components/SocialLinks";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Project", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer className="text-slate-300 pt-16 pb-8">
      <div className="container mx-auto max-w-[1400px] px-5 lg:px-10">
        {/* bagian atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* logo */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <FiCode className="text-amber-400 text-2xl group-hover:animate-pulse" />
              <span className="text-xl font-bold text-white">
                Haidar Fahmi
                <span className="text-amber-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Passionate developer specializing in modern web technologies, and
              building smooth digital experiences with clean code & creative
              flow.
            </p>
          </div>

          {/* navigasi */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiNavigation className="text-amber-400 text-lg" />
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* find me */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <FiShare2 className="text-amber-400 text-lg" />
              <h3 className="text-lg font-semibold text-white">
                Find Me Online
              </h3>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* bagian bawah */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col-reverse md:flex-row justify-between items-center text-sm">
          <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center mt-4 md:mt-0">
            <Link
              href="#privacy-policy"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="#sitemap"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Haidar Fahmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
