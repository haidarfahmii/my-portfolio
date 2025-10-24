"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import CVModal from "@/components/modals/CVModal";
import ContactModal from "@/components/modals/ContactModal";

// components
import SocialLinks from "@/features/Hero/components/SocialLinks";
import Photo from "@/features/Hero/components/Photo";

export default function Hero() {
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  return (
    <>
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen}
      />

      <section
        id="#home"
        className="min-h-screen h-full flex items-center pt-15"
      >
        <div className="container mx-auto h-full lg:max-w-[1400px] px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* text */}
            <div className="text-center lg:text-left order-2 lg:order-none">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400 py-1 px-3 rounded-full mb-3 text-sm lg:text-md">
                <span>👨‍💻</span>
                <span>Newbie Web Developer</span>
              </div>
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="text-amber-400 ">Muhammad Haidar Fahmi</span>
              </h1>
              <p className="max-w-[500px] mb-7 text-white/80">
                Hai kawan! saya adalah seorang Newbie Web Developer. Kalian
                ingin mengenal saya lebih jauh? kalian bisa kepo-in web
                portfolio saya dengan scroll web ini atau kalian bisa download
                CV saya apabila tertarik dengan saya.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="flex items-center justify-center gap-2 text-amber-400 rounded-full border border-amber-400 py-2 px-5 font-bold cursor-pointer hover:bg-amber-400 hover:text-white shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Download CV
                  <FiDownload className="text-xl" />
                </button>
                <div className="mb-8 lg:mb-0">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
