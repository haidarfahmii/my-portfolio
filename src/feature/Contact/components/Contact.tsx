"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

// Impor data JSON
import contactInfo from "@/dummy/contact.json";

// Impor komponen SocialLinks
import SocialLinks from "@/feature/Hero/components/SocialLinks";

// Definisikan Tipe data
interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

export default function Contact() {
  // Fungsi untuk memilih ikon berdasarkan nama dari JSON
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "email":
        return <FaEnvelope />;
      case "phone":
        return <FaPhoneAlt />;
      case "location":
        return <FaMapMarkerAlt />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-20 scroll-mt-[140px]">
      <div className="container mx-auto max-w-6xl px-5 lg:px-10">
        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-400 tracking-widest uppercase">
            CONTACT
          </span>
        </div>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-amber-400 mb-5 [text-shadow:0_0_20px_rgba(251,191,36,0.3)]">
          Let's Work Together
        </h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you. Let's create something amazing together.
        </p>
        {/* Divider */}
        <div className="w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-[60px] rounded-[2px]"></div>

        {/* Kartu "Send Message" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#2c2c32] p-6 md:p-8 rounded-lg border border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Send Message
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    required
                    className="w-full p-3 rounded-md bg-[#1c1c22] border border-gray-700 focus:outline-none focus:border-amber-400 transition-colors text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    required
                    className="w-full p-3 rounded-md bg-[#1c1c22] border border-gray-700 focus:outline-none focus:border-amber-400 transition-colors text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full p-3 rounded-md bg-[#1c1c22] border border-gray-700 focus:outline-none focus:border-amber-400 transition-colors text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full p-3 rounded-md resize-none bg-[#1c1c22] border border-gray-700 focus:outline-none focus:border-amber-400 transition-colors text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-center bg-amber-600 hover:bg-amber-500 text-slate-800 rounded-md py-3 px-4 font-bold cursor-pointer shadow-md hover:shadow-amber-400/80 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                <FaPaperPlane size={14} />
                Send Message
              </button>
            </form>
          </div>

          {/* Kartu "Get In Touch" */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#2c2c32] p-6 md:p-8 rounded-lg border border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Get In Touch
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Prefer to reach out directly? Here are my contact details.
              </p>
              <ul className="space-y-4">
                {(contactInfo as ContactInfo[]).map((item) => (
                  <li key={item.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center text-xl">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kartu "Connect With Me" */}
            <div className="bg-[#2c2c32] p-6 md:p-8 rounded-lg border border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Connect With Me
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Follow me on social media for updates and insights.
              </p>
              {/* Menggunakan kembali komponen SocialLinks Anda */}
              <div className="flex justify-start">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
