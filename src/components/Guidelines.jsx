import React from "react";
import img from "../assets/spider.png";

import {
  FaUserCheck,
  FaUsers,
  FaCode,
  FaShieldHalved,
} from "react-icons/fa6";

const guidelineItems = [
  {
    icon: FaUsers,
    title: "Team Formation",
    description:
      "Teams can consist of 2 to 4 members. Cross-college and cross-branch teams are allowed.",
  },
  {
    icon: FaUserCheck,
    title: "Eligibility",
    description:
      "Open to all undergraduate and postgraduate students enrolled in any recognized institution.",
  },
  {
    icon: FaCode,
    title: "Original Work",
    description:
      "All code must be written during the hackathon. Pre-existing projects will be disqualified.",
  },
  {
    icon: FaShieldHalved,
    title: "Code of Conduct",
    description:
      "Maintain professional behavior. Plagiarism or harassment of any kind leads to immediate removal.",
  },
];

const Guidelines = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black/  px-6 py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        
        <div className="text-center">
          <p className="flex h-10 items-center justify-center bg-black/30 text-xl font-bold uppercase tracking-[0.35em] text-red-500">
    RULES & REGULATIONS
</p>

          <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.15em] text-white drop-shadow-[0_0_20px_rgba(220,38,38,0.3)] sm:text-5xl md:text-6xl">
            HACKATHON GUIDELINES
          </h2>

          <div className="mx-auto mt-4 h-[2px] ml-5 w-84  rounded-full bg-red-600" />

          <p className="mx-auto mt-6 max-w-5xl text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-base">
            Follow the rules, understand the process, and ensure a seamless
            journey throughout 
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-relaxed tracking-wide uppercase font-bold  text-red-500   sm:text-base">
            CodeUtsava 10.0.
          </p>

        </div>
        <div className="h-10"/>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guidelineItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-neutral-950/60 p-6 text-center backdrop-blur-xl transition-all duration-300 "
              >
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-80 transition-transform duration-500  "
                />

                 

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/30 bg-red-950/40 text-red-500">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;