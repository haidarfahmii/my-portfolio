"use client";

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// import data json
import contactInfo from "@/dummy/contact.json";

// import komponen
import SocialLinks from "@/features/Hero/components/SocialLinks";
import ContactForm from "@/features/Contact/forms/ContactForm";

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

export default function Contact() {
  // memilih ikon dari json
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
            <ContactForm />
          </div>

          {/* card get in touch */}
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

            {/* card conncet with me */}
            <div className="bg-[#2c2c32] p-6 md:p-8 rounded-lg border border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Connect With Me
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Follow me on social media for updates and insights.
              </p>
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
