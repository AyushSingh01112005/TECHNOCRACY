import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is Team Technocracy?",
    answer:
      "Team Technocracy is the official technical committee of NIT Raipur, dedicated to fostering innovation, technical skills, and a passion for technology among students.",
  },
  {
    id: 2,
    question: "How can I join Team Technocracy?",
    answer:
      "You can apply during recruitment drives or volunteer for Aavartan in your first year.",
  },
  {
    id: 3,
    question: "Why should I choose Team Technocracy?",
    answer:
      "We provide a perfect blend of technical learning, teamwork, and innovation.",
  },
  {
    id: 4,
    question: "Can non-technical students join?",
    answer:
      "Yes, students from all backgrounds are welcome.",
  },
  {
    id: 5,
    question: "What are the perks of joining Team Technocracy?",
    answer:
      "Skill development, networking, leadership experience, and hands-on exposure to real projects.",
  },
  {
    id: 6,
    question: "What kind of events does Team Technocracy organize?",
    answer:
      "Hackathons, coding contests, workshops, seminars, and technical talks under Aavartan.",
  },
  {
    id: 7,
    question: "What is Vigyaan?",
    answer:
      "Vigyaan is the science exhibition during Aavartan showcasing innovative projects.",
  },
  {
    id: 8,
    question: "How to participate in Vigyaan?",
    answer:
      "Teams of 2–3 members submit documentation followed by real-world implementation.",
  },
  {
    id: 9,
    question: "What are the eligibility criteria?",
    answer:
      "You must be a current student with interest in technology and participation.",
  },
];

const FAQs = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden  text-white">

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,29,29,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center px-6 py-24">

        {/* ================= HEADER ================= */}
        <div className="mb-14 flex w-full flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-6 flex items-center gap-3 rounded-full border border-red-500/30 bg-red-950/30 px-5 py-2 backdrop-blur-xl shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-red-500 opacity-70" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>

            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-red-400">
              NEED HELP?
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-4xl
              bg-gradient-to-b
              from-white
              via-neutral-200
              to-neutral-500
              bg-clip-text
              text-5xl
              font-black
              uppercase
              tracking-[0.08em]
              text-transparent
              drop-shadow-[0_0_30px_rgba(220,38,38,0.35)]
              md:text-6xl
            "
          >
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h1>
          <div className="h-5"></div>

          <p className="mt-5 rounded-xl border border-white/5 bg-black/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-xl">
            EVERYTHING YOU NEED TO KNOW ABOUT{" "}
            <span className="text-red-500">TECHNOCRACY</span>
          </p>

          {/* Divider */}
          <div className="mt-7 h-[2px] w-40 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
        </div>

        {/* ================= FAQ ================= */}

        {/* ~50% width */}
        <div className="w-full max-w-4xl">
      <div className="h-5"></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-black/60
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-red-500/60
                  hover:bg-black/80
                  hover:shadow-[0_10px_40px_rgba(220,38,38,0.18)]
                "
              >

                {/* Top red line */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-red-500
                    shadow-[0_0_15px_rgba(239,68,68,1)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Spider-web style corner */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-16
                    w-16
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-red-500/50 to-transparent" />
                  <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-red-500/50 to-transparent" />
                </div>

                {/* ================= QUESTION ================= */}
                <div className="flex items-center gap-4 px-5 py-5">

                  {/* Number */}
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-[10px]
                      font-black
                      text-neutral-500
                      transition-all
                      duration-300
                      group-hover:border-red-500/60
                      group-hover:bg-red-500/10
                      group-hover:text-red-400
                      group-hover:shadow-[0_0_15px_rgba(239,68,68,0.25)]
                    "
                  >
                    {String(faq.id).padStart(2, "0")}
                  </div>

                  {/* Question */}
                  <h3
                    className="
                      flex-1
                      text-sm
                      min-h-10
                      font-black
                      uppercase
                      items-center
                      justify-center
                      leading-relaxed
                      tracking-[0.08em]
                      text-white/90
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {faq.question}
                  </h3>

                  {/* + icon */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-red-500
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-red-500/60
                      group-hover:bg-red-500/10
                      group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]
                    "
                  >
                    +
                  </div>
                </div>

                {/* ================= ANSWER ================= */}
                <div
                  className="
                    grid
                    grid-rows-[0fr]
                    opacity-0
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:grid-rows-[1fr]
                    group-hover:opacity-100
                  "
                >
                  <div className="overflow-hidden">

                    <div className="mx-5 mb-5 border-t border-white/10 pt-4">

                      <div className="flex gap-3">

                        {/* Red indicator */}
                        <div className="flex shrink-0 flex-col items-center">
                          <div className="mt-1 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />

                          <div className="mt-1 h-full w-px bg-gradient-to-b from-red-500/70 to-transparent" />
                        </div>

                        {/* Answer */}
                        <p
                          className="
                            text-xs
                            font-medium
                            leading-6
                            tracking-wide
                            text-neutral-400
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div className="h-10"></div>

        {/* ================= FOOTER ================= */}

        <div className="mt-20 flex flex-col items-center text-center">

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

          <p className="mt-7 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
            STILL HAVE QUESTIONS<span className="text-red-500">?</span>
          </p>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
            REACH OUT TO THE{" "}
            <span className="text-red-500">TECHNOCRACY</span> TEAM
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQs;