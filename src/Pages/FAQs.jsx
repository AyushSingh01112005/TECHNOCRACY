import React, { useState } from "react";
import FAQsVideo from "../assets/FAQs.mp4";
import RedSpidy from '../components/RedSpidy'


const faqs = [
  {
    id: 1,
    question: "HOW DO I REGISTER FOR THE HACKATHON?",
    answer:
      'CLICK ON ANY "REGISTER NOW" BUTTON ON THE WEBSITE, OR HEAD OVER TO DEVFOLIO.',
  },
  {
    id: 2,
    question: "WHAT IS THE PARTICIPATION FEE?",
    answer:
      "JUST SOME ENTHUSIASM AND AN OPEN MIND ARE ENOUGH. WE DON'T CHARGE ANY MONEY!",
  },
  {
    id: 3,
    question: "WHAT IF I DON'T HAVE A TEAM OR IDEA?",
    answer:
      "WE'LL HAVE TEAM FORMATION AND IDEATION EVENTS TO HELP YOU FIND A TEAM. BE SURE TO JOIN OUR DISCORD SERVER.",
  },
  {
    id: 4,
    question: "WHO CAN PARTICIPATE?",
    answer:
      "ANYONE IS WELCOME TO APPLY—STUDENTS OR WORKING PROFESSIONALS. WHETHER YOU WANT TO INNOVATE OR JUST ENJOY A FUN WEEKEND, YOU'RE WELCOME!",
  },
  {
    id: 5,
    question: "WHEN AND HOW WILL THE TEAMS BE SHORTLISTED?",
    answer:
      "TEAM SHORTLISTING STARTS ON 15TH OCTOBER BASED ON INDIVIDUAL RESUMES. FINAL TEAMS WILL BE ANNOUNCED ON 26TH OCTOBER.",
  },
  {
    id: 6,
    question: "WHAT IS THE IDEAL TEAM SIZE?",
    answer: "TEAMS SHOULD CONSIST OF 2–4 MEMBERS.",
  },
  {
    id: 7,
    question: "WHY SHOULD I PARTICIPATE IN CODEUTSAVA 8.0?",
    answer:
      "WINNERS GET CASH PRIZES, AND ALL PARTICIPANTS WILL HAVE EXCELLENT NETWORKING OPPORTUNITIES, LEARN NEW SKILLS, AND GET COOL SWAG. 😊",
  },
  {
    id: 8,
    question: "WHAT OTHER PERKS ARE PROVIDED?",
    answer:
      "ACCOMMODATIONS AND MEALS WILL BE PROVIDED, AND TRAVEL EXPENSES UP TO RS. 1500 PER INDIVIDUAL WILL BE REIMBURSED FOR ALL THE SELECTED TEAMS PARTICIPATING IN CODEUTSAVA 8.0!",
  },
  {
    id: 9,
    question: "HOW WILL THE TEAMS BE JUDGED?",
    answer:
      "TEAMS WILL BE JUDGED ON VIABILITY, TECHNICAL COMPLEXITY, PRESENTATION SKILLS, GUIDELINES, AND MOST IMPORTANTLY, CREATIVITY. JUDGMENT CRITERIA.",
  },
  {
    id: 10,
    question: "WHAT IS THE CODE OF CONDUCT?",
    answer:
      "TO ENSURE A POSITIVE EXPERIENCE FOR ALL PARTICIPANTS, WE FOLLOW THE CODE OF CONDUCT. PLEASE REVIEW IT BEFORE THE EVENT.",
  },
];

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden   ">


      <video
        src={FAQsVideo}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 -z-30 h-screen w-screen object-cover"
      />
      <RedSpidy  />


      {/* Dark overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-black/50" />
      <div className="min-h-30" />


      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-5 py-20 sm:px-8 lg:px-12">

        <div className="mb-14 flex w-full flex-col items-center text-center">

          {/* Badge */}
          <div className="group mb-7 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-950/30 px-6 py-2 shadow-[0_0_25px_rgba(220,38,38,0.2)] backdrop-blur-2xl transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.35em] text-red-400">
              NEED HELP?
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-4xl font-black uppercase tracking-[0.08em] text-transparent drop-shadow-[0_0_35px_rgba(220,38,38,0.5)] sm:text-5xl md:text-6xl lg:text-7xl">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-xs font-bold uppercase tracking-[0.25em] bg-black/20 rounded-2xl text-neutral-300 sm:text-sm">
            EVERYTHING YOU NEED TO KNOW ABOUT CODEUTSAVA
          </p>

          {/* Divider */}
          <div className="my-7 h-0.5 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

          {/* Description */}
          <p className="max-w-xl text-xs leading-6 bg-black/10 rounded-2xl text-neutral-400 sm:text-sm">
            HAVE A QUESTION ABOUT THE HACKATHON?
          </p>
          <p className="max-w-xl text-xs leading-6 bg-black/10 rounded-2xl text-neutral-400 sm:text-sm">
            FIND THE ANSWERS BELOW.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl">

          <div className="flex w-full flex-col gap-4">

            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`group relative w-full overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-500 ${isOpen
                    ? "border-red-500/40 bg-black/60 shadow-[0_0_30px_rgba(220,38,38,0.12)]"
                    : "hover:-translate-y-1 hover:bg-black/60"
                    }`}
                >

                  {/* Red Top Glow */}
                  <div
                    className={`pointer-events-none absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-500 ${isOpen
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  />

                  {/* =================================================
                      QUESTION
                  ================================================== */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    {/* Number */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-black tracking-wider transition-all duration-300 ${isOpen
                        ? "border-red-500 bg-red-950/50 text-red-500"
                        : "border-white/15 bg-white/5 text-neutral-500 group-hover:border-red-500/50 group-hover:text-red-500"
                        }`}
                    >
                      {String(faq.id).padStart(2, "0")}
                    </div>

                    {/* Question */}
                    <span
                      className={`flex-1 text-xs font-black uppercase tracking-[0.15em] transition-colors duration-300 sm:text-sm ${isOpen
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                        }`}
                    >
                      {faq.question}
                    </span>

                    {/* Plus */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-light text-white transition-all duration-300 ${isOpen
                        ? "rotate-45 border-red-500/50 bg-red-950/40 text-red-500"
                        : "group-hover:border-red-500/40"
                        }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">

                      <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-6">

                        <div className="flex gap-5">

                          <div className="flex shrink-0 flex-col items-center">
                            <div className="h-2 w-2 rounded-full bg-red-500" />

                            <div className="mt-1 h-full w-px bg-gradient-to-b from-red-500/70 to-transparent" />
                          </div>

                          <p className="max-w-3xl text-xs font-semibold uppercase leading-6 tracking-[0.08em] text-neutral-300 sm:text-sm">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        <div className="mt-16 flex w-full flex-col items-center text-center">

          <div className="h-px w-40 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

          <div className="min-h-20"></div>

          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
            STILL HAVE QUESTIONS?
          </p>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-neutral-300">
            REACH OUT TO THE CODEUTSAVA TEAM
          </p>

        </div>

      </div>
    </section>
  );
};

export default FAQs;