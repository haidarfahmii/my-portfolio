import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "mailto:fahmi.aulady2@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
  {
    href: "https://github.com/haidarfahmii",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/haidarfahmii",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/haidarfahmi",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center items-center">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 text-amber-400 text-2xl no-underline transition-all duration-400 ease-in-out hover:-translate-y-[5px] hover:drop-shadow-[0_5px_10px_rgba(251,191,36,0.5)]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
