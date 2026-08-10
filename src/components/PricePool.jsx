import React from "react";
import img2 from "../assets/spider.png";
import img3 from "../assets/spider2.png";

const prizes = [
    {
        position: "01",
        title: "FIRST PRIZE",
        amount: "₹50,000",
        img: img2,
        badge: "CHAMPION",
        featured: true,
    },
    {
        position: "02",
        title: "SECOND PRIZE",
        amount: "₹20,000",
        img: img3,
        badge: "RUNNER UP",
    },
    {
        position: "03",
        title: "THIRD PRIZE",
        amount: "₹10,000",
        img: img2,
        badge: "2ND RUNNER UP",
    },
    {
        position: "04",
        title: "SPECIAL PRIZE",
        amount: "₹5,000",
        img: img3,
        badge: "CATEGORICAL",
    },
];

const PricePool = () => {
    return (
        <section className="relative flex w-full items-center justify-center overflow-hidden  px-6 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <img
                src={img2}
                alt=""
                className="pointer-events-none absolute -left-28 top-12 h-[650px] w-[650px] rotate-[-12deg] object-contain opacity-15 blur-[1px] transition-all duration-700  md:-left-16"
            />
            <img
                src={img3}
                alt=""
                className="pointer-events-none absolute -right-28 bottom-6 h-[650px] w-[650px] rotate-[12deg] object-contain opacity-15 blur-[1px] transition-all duration-700  md:-right-16"
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full   blur-[160px]" />

            <div className="relative z-10 w-full max-w-6xl">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[11px] font-black tracking-[0.35em] text-red-400 uppercase">
                            REWARDS & RECOGNITION
                        </span>
                    </div>

                    <h2 className="mt-4 text-5xl font-black uppercase tracking-[0.1em] text-white drop-shadow-[0_0_35px_rgba(220,38,38,0.5)] sm:text-6xl md:text-7xl">
                        PRIZE POOL
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-base">
                        Build something remarkable. Compete with the best and take home your share of the CodeUtsava 10.0 prize pool.
                    </p>
                </div>

                <div className="relative mx-auto mt-10 w-fit overflow-hidden justify-center rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-950/40 to-black/80 px-10 py-5 text-center backdrop-blur-xl shadow-[0_0_30px_rgba(220,38,38,0.25)]">
                    <p className="text-[10px] font-black p-10 uppercase tracking-[0.4em] text-red-400/90">
                        TOTAL CUMULATIVE POOL
                    </p>
                    <div className="mt-1 mb-3 bg-gradient-to-b from-white via-red-200 to-red-500 bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] sm:text-6xl">
                        ₹85,000
                    </div>
                </div>
                <div className="h-5"/>

                <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {prizes.slice(0, 3).map((prize, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl border p-7 text-center backdrop-blur-2xl transition-all duration-500 ${prize.featured
                                ? "border-red-500/80 bg-gradient-to-b from-red-950/60 via-black/80 to-black/90 shadow-[0_0_45px_rgba(220,38,38,0.35)] sm:col-span-2 lg:col-span-1"
                                : "border-red-500/20 bg-black/60 "
                                }`}
                        >
                            {/* Dynamic Image Background Layer */}
                            <img
                                src={prize.img}
                                alt=""
                                className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 object-contain opacity-20 transition-all duration-500  "
                            />

                            {/* Position Watermark */}
                            <span className="pointer-events-none absolute -left-2 -top-6 text-9xl font-black text-white/[0.04] transition-colors duration-500 ">
                                {prize.position}
                            </span>

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="rounded-full border border-red-500/30 bg-red-950/60 px-3 py-1 text-[10px] font-black tracking-[0.25em] text-red-400">
                                    {prize.badge}
                                </span>

                                <h3 className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-neutral-300">
                                    {prize.title}
                                </h3>

                                <div className="mt-3 text-4xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] sm:text-5xl">
                                    {prize.amount}
                                </div>

                                <div className="mt-4 h-0.5 w-12 bg-red-600 transition-all duration-300  " />
                            </div>
                        </div>
                    ))}

                    <div className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-black/60 p-6 text-center backdrop-blur-2xl transition-all duration-500 sm:col-span-2 lg:col-span-3">
                        <img
                            src={img3}
                            alt=""
                            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 object-contain opacity-15 transition-all duration-500  "
                        />

                        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:px-8">
                            <div className="flex items-center gap-4 text-left">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/40 bg-red-950/60 text-sm font-black text-red-400">
                                    04
                                </div>
                                <div>
                                    <span className="text-[10px] font-black tracking-[0.25em] text-red-500 uppercase">
                                        SPECIAL CATEGORY
                                    </span>
                                    <h3 className="text-base font-black tracking-wider text-white">
                                        ALL-WOMEN / FRESHERS / TRACK PRIZES
                                    </h3>
                                </div>
                            </div>

                            <div className="text-3xl font-black text-white sm:text-4xl">
                                ₹5,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricePool;