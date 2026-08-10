import React from "react";
import img2 from "../assets/spider.png";
import img3 from "../assets/spider2.png";


const TimeLine = () => {
    const events = [
    {
        date: "AUG 10, 2026",
        title: "REGISTRATION",
        description: "Registration opens for CodeUtsava 10.0.",
        bgImage: img2,
    },
    {
        date: "AUG 20, 2026",
        title: "SHORTLISTING BEGINS",
        description: "Submissions are reviewed and teams are shortlisted for the hackathon.",
        bgImage: img3,
    },
    {
        date: "AUG 25, 2026",
        title: "REGISTRATION CLOSED",
        description: "Registration closes. No further team registrations will be accepted.",
        bgImage: img2,
    },
    {
        date: "AUG 28, 2026",
        title: "FINAL TEAM ANNOUNCED",
        description: "The final list of selected teams for CodeUtsava 10.0 is announced.",
        bgImage: img3,
    },
    {
        date: "SEP 05, 2026",
        title: "HACKATHON BEGINS",
        description: "The CodeUtsava 10.0 hackathon officially begins.",
        bgImage: img2,
    },
    {
        date: "SEP 06, 2026",
        title: "FINAL SUBMISSION",
        description: "Submit your final project before the deadline.",
        bgImage: img3,
    },
    {
        date: "SEP 07, 2026",
        title: "RESULTS",
        description: "Winners of CodeUtsava 10.0 are announced.",
        bgImage: img2,
    },
];

    return (
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-5 py-24 text-white md:px-10 lg:px-16">

            <div className="w-full px-10 text-center">

                <div className="flex p-3 justify-center rounded-full  bg-black/50">
                    <p className="mb-4 inline-block rounded-xl    font-black uppercase tracking-[0.5em] text-red-500    ">
                        TIMELINE
                    </p>
                </div>

                <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl">
                    CODEUTSAVA{" "}
                    <span className="text-red-600">10.0</span>
                </h2>

                <div className="mx-auto mt-6 flex w-fit items-center justify-center gap-3">
                    <span className="h-px w-12 bg-red-600/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
                    <span className="h-px w-12 bg-red-600/50" />
                </div>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                    The roadmap to innovation. Mark your calendars for the ultimate
                    coding odyssey.
                </p>

            </div>
            <div className="relative z-10 mx-auto max-w-6xl translate-x-[5%]">

                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-600/70 to-transparent md:block" />

                {events.map((event, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`relative mb-28 flex items-center last:mb-0 md:min-h-[230px] ${isEven ? "md:justify-start" : "md:justify-end"
                                }`}
                        >

                            <div
                                className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-red-600/80 to-red-600/10 md:block ${isEven
                                    ? "left-[50%] w-[10%]"
                                    : "right-[50%] w-[10%] rotate-180"
                                    }`}
                            />

                            <div className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-red-500/70 bg-black shadow-[0_0_25px_rgba(220,38,38,0.35)]">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(239,68,68,1)]" />

                                    <div className="absolute inset-[-7px] rounded-full border border-red-500/10" />
                                </div>
                            </div>

                            <div
                                className={`group relative w-full overflow-hidden border border-white/10   backdrop-blur-xl transition-all duration-500   md:w-[43%] ${isEven ? "md:mr-[7%]" : "md:ml-[7%]"
                                    }`}
                            >

                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-700   "
                                    style={{
                                        backgroundImage: `url(${event.bgImage})`,
                                    }}
                                />

                                <div
                                    className={`absolute top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-600 to-transparent ${isEven ? "left-0" : "right-0"
                                        }`}
                                />

                                <div className="relative z-10 p-7 sm:p-8">

                                    <div className="mb-7 flex items-center justify-between">

                                        <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-red-500">
                                            EVENT {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                                            {event.date}
                                        </span>
                                    </div>

                                    <h3 className="ml-6 text-2xl font-black uppercase tracking-[0.08em] text-white transition-colors duration-300 sm:text-3xl">
    {event.title}
</h3>

                                    <div className="my-5 h-px w-12 bg-red-600 transition-all duration-500  " />

                                    <p className="max-w-md text-sm leading-7 text-neutral-400">
                                        {event.description}
                                    </p>

                                    <div className="mt-7 flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-red-600" />
                                        <span className="h-px w-10 bg-white/10 transition-all duration-500 " />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-600">
                                            CODEUTSAVA 10.0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TimeLine;
