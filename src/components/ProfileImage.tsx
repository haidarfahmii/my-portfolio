"use client";

import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          relative w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] 
          rounded-full bg-gradient-to-br from-amber-400 to-amber-500 
          p-2 animate-[pulse_3s_ease-in-out_infinite]
        "
      >
        {/* Placeholder di dalam border */}
        <div
          className="
            flex h-full w-full items-center justify-center 
            overflow-hidden rounded-full border-[5px] border-slate-800 
            bg-gradient-to-br from-amber-400 to-amber-500
          "
        >
          <Image
            src="/images/foto.png"
            quality={100}
            width={320}
            height={320}
            alt=""
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
