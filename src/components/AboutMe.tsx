"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-10 lg:py-20 scroll-target scroll-mt-[140px] min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <h2
          className="
            text-center text-3xl md:text-5xl font-bold text-amber-400 mb-5
            [text-shadow:0_0_20px_rgba(251,191,36,0.3)]
          "
        >
          About Me
        </h2>

        {/* .divider */}
        <div
          className="
            w-[100px] h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent
            mx-auto mb-[60px] rounded-[2px]
          "
        ></div>

        <div
          className="
            grid grid-cols-1 gap-10 items-center 
            lg:grid-cols-2 lg:gap-[60px]
          "
        >
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-5">
            <h3
              className="
                text-[22px] lg:text-[28px] font-semibold text-amber-400 mb-2.5
              "
            >
              Halo! Saya Muhammad Haidar Fahmi 👋
            </h3>
            <p className="text-[15px] lg:text-base text-slate-200 text-justify leading-[1.8]">
              Saya adalah seorang
              <strong className="text-amber-400 font-semibold">
                Newbie di bidang Web Developer
              </strong>{" "}
              yang sedang belajar ilmu dalam membangun aplikasi web modern dan
              responsive. Saya mulai masuk dibidang IT pada tahun 2018 atau pada
              saat saya pertama kali menjadi salah satu mahasiswa di salah satu
              perguruan tinggi.
            </p>

            <p className="text-[15px] lg:text-base text-slate-200 text-justify leading-[1.8]">
              Saya sempat hiatus atau berhenti dalam menekuni bidang IT selama 2
              Tahun. Namun, saat ini saya mulai menekuni dan explore kembali di
              dalam bidang IT dengan semangat baru tentunya. Saat ini saya
              tertarik di bidang Web Development mulai dari{" "}
              <strong className="text-amber-400 font-semibold">
                Frontend dan Backend Developer.
              </strong>
            </p>

            <p className="text-[15px] lg:text-base text-slate-200 text-justify leading-[1.8]">
              Saya memiliki keahlian dalam menggunakan teknologi seperti{" "}
              <strong className="text-amber-400 font-semibold">
                HTML, CSS, JavaScript, React.js, Next.js
              </strong>
              , dan berbagai tools modern lainnya. Saya juga memiliki pemahaman
              yang baik tentang UI/UX design dan selalu berusaha untuk
              menciptakan pengalaman pengguna yang terbaik.
            </p>

            <div className="grid grid-cols-1 gap-5 mt-[30px] lg:grid-cols-3">
              <div
                className="
                  flex flex-col md:flex-row items-center text-center md:text-left
                  gap-3 bg-amber-400/10 p-5 rounded-2xl 
                  border-2 border-amber-400/30
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-[5px] hover:border-amber-400 
                  hover:shadow-[0_5px_15px_rgba(251,191,36,0.3)]
                "
              >
                <span className="text-3xl">💼</span>
                <div>
                  <h4 className="text-lg text-amber-400 m-0">1+ Years</h4>
                  <p className="text-sm text-slate-400 m-0">Experience</p>
                </div>
              </div>

              <div
                className="
                  flex flex-col md:flex-row items-center text-center md:text-left
                  gap-3 bg-amber-400/10 p-5 rounded-2xl 
                  border-2 border-amber-400/30
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-[5px] hover:border-amber-400 
                  hover:shadow-[0_5px_15px_rgba(251,191,36,0.3)]
                "
              >
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="text-lg text-amber-400 m-0">5+ Projects</h4>
                  <p className="text-sm text-slate-400 m-0">Completed</p>
                </div>
              </div>

              <div
                className="
                  flex flex-col md:flex-row items-center text-center md:text-left
                  gap-3 bg-amber-400/10 p-5 rounded-2xl 
                  border-2 border-amber-400/30
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-[5px] hover:border-amber-400 
                  hover:shadow-[0_5px_15px_rgba(251,191,36,0.3)]
                "
              >
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="text-lg text-amber-400 m-0">Lulusan S1</h4>
                  <p className="text-sm text-slate-400 m-0">
                    Teknik Informatika
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="
              relative flex justify-center items-center order-first lg:order-none
            "
          >
            <div
              className="
                relative w-full max-w-[300px] h-[400px] 
                md:max-w-[400px] md:h-[500px] rounded-2xl overflow-hidden
                bg-gradient-to-br from-amber-400 to-amber-500 p-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                animate-[float_3s_ease-in-out_infinite]
              "
            >
              <Image
                src="/images/profile.jpg"
                alt="Haidar Fahmi"
                width={400}
                height={500}
                // .image
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* <div
              className="
                absolute bottom-5 -left-5 bg-emerald-500 text-white 
                py-[15px] px-[25px] rounded-full flex items-center 
                gap-2.5 font-semibold 
                shadow-[0_5px_15px_rgba(16,185,129,0.4)]
                animate-[pulse_2s_ease-in-out_infinite]
              "
            >
              <span className="text-xl">✨</span>
              <span>Available for Freelance</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
