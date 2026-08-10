import React, { useRef } from "react";
import BlackSpider from "../assets/BlackSpider.mp4";

const About = () => {
    const videoRef = useRef(null);

    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.currentTime >= 15) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const stats = [
        { value: "28", label: "HOURS", sub: "HACKATHON" },
        { value: "₹3+L", label: "PRIZE POOL", sub: "UP FOR GRABS" },
        { value: "500+", label: "TEAMS", sub: "NATIONWIDE" },
        { value: "4", label: "EDITIONS", sub: "YEARS STRONG" },
    ];

     

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">

            <div className="fixed inset-0 h-screen w-screen overflow-hidden">
                <video
                    ref={videoRef}
                    src={BlackSpider}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <section className="relative z-10 mx-auto flex min-h-185 w-full flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">

                <div className="mb-6 w-full shrink-0 flex flex-col items-center">
                    <p className="mb-3 text-xs font-black w-[60%] uppercase bg-black/40  tracking-[0.5em] text-red-500 sm:text-sm">
                        CODEUTSAVA 10.0
                    </p>
                    <div className="h-px w-16 bg-red-500" />
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
                    ABOUT
                    <span className="mt-2 block text-red-500">CODEUTSAVA</span>
                </h1>

                <div className="mt-10 max-w-3xl  ">
                    <p className="text-[10px] leading-7 text-white/70 sm:text-base sm:leading-8">
                        CodeUtsava is an annual event organized by the{" "}
                        <span className="font-semibold text-white">Turing Club of Programmers</span>.
                        The event brings like-minded coders from across the nation together and aims to
                        foster a strong coding culture among students through a diverse range of programs.
                    </p>
                    <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        From workshops and coding competitions to gaming battles, mic sessions, and much more,
                        CodeUtsava creates an environment where students can learn, compete, collaborate, and build.
                    </p>
                    <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        At the heart of CodeUtsava lies its most envisioned event — the{" "}
                        <span className="font-bold text-red-500">Hackathon</span>. A high-intensity{" "}
                        <span className="font-bold text-white">28-hour-long</span> challenge where teams
                        from across the nation come together to turn ambitious ideas into innovative applications.
                    </p>
                </div>
                <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center border border-white/10 bg-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:bg-black/50"
                        >
                            <p className={`text-3xl font-black sm:text-4xl ${i === 1 ? "text-red-500" : "text-white"}`}>
                                {stat.value}
                            </p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                                {stat.label}
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-wider text-red-500">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex max-w-2xl flex-col items-center gap-3 border-t border-white/10 pt-8 text-center">

                    <span className="text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        TCP × CODEUTSAVA
                    </span>
                </div>

            </section>
        </div>
    );
};

export default About;