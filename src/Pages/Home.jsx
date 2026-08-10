import React, { useRef, useEffect, useState } from "react";
import BlackSpider from "../assets/redSpider.mp4";
import BlackSvg from "../components/BlackSvg";
import LastYearImage from "../assets/1.png";
import TimeLine from "../components/TimeLine";
import Guidelines from "../components/Guidelines";
import PricePool from "../components/PricePool";
import BottomHome from "../components/BottomHome";
import { useLocation, useNavigate } from "react-router-dom";

import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
} from "react-icons/fa6";

const Home = () => {
    const videoRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    const [showTransition, setShowTransition] = useState(
        location.state?.from === "/" &&
        location.state?.whiteTransition === true
    );

    // =========================================================
    // WHITE TRANSITION
    // Only runs when coming from "/"
    // =========================================================
    useEffect(() => {
        const cameFromIntro =
            location.state?.from === "/" &&
            location.state?.whiteTransition === true;

        if (!cameFromIntro) {
            setShowTransition(false);
            return;
        }

        setShowTransition(true);

        const timer = setTimeout(() => {
            setShowTransition(false);

            // Remove navigation state so animation cannot replay
            navigate(location.pathname, {
                replace: true,
                state: {},
            });
        }, 5000);

        return () => clearTimeout(timer);
    }, [location.state, location.pathname, navigate]);

    // =========================================================
    // VIDEO
    // First play: 0s → 13.4s
    // Then loop: 3s → 13.4s
    // =========================================================
    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        let isLooping = false;
        let resetTimer = null;

        const handleTimeUpdate = () => {
            if (video.currentTime >= 13.4 && !isLooping) {
                isLooping = true;

                video.currentTime = 3.0;

                video.play().catch((err) => {
                    console.log("Video loop play error:", err);
                });

                resetTimer = setTimeout(() => {
                    isLooping = false;
                }, 100);
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        video.play().catch((err) => {
            console.log("Initial video play error:", err);
        });

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);

            if (resetTimer) {
                clearTimeout(resetTimer);
            }
        };
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo === undefined) return;

        const timer = setTimeout(() => {
            window.scrollTo({
                top: location.state.scrollTo,
                behavior: "smooth",
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [location.state?.scrollTo]);

    return (
        <><BlackSvg/>
            {showTransition && (
                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        z-[99999]
                        bg-white
                        animate-home-white
                    "
                />
            )}

            <div className="relative min-h-screen bg-black/50">

                <video
                    ref={videoRef}
                    src={BlackSpider}
                    autoPlay
                    muted
                    playsInline
                    className="
                        fixed
                        inset-0
                        z-0
                        h-full
                        w-full
                        object-cover
                    "
                />

                {/* Dark overlay */}
                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        z-0
                        bg-black/50
                    "
                />

                {/* Red radial glow */}
                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        z-0
                        bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18)_0%,transparent_70%)]
                    "
                />

                <div className="relative z-10">

                    <section
                        className="
                            relative
                            flex
                            min-h-[720px]
                            w-full
                            items-center
                            justify-center
                            overflow-hidden
                            py-12
                        "
                    >
                        {/* Cyber Grid */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
                                bg-[size:4rem_4rem]
                                [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
                            "
                        />

                        {/* Ambient red glow */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -top-24
                                left-1/2
                                h-96
                                w-96
                                -translate-x-1/2
                                rounded-full
                                bg-red-600/20
                                blur-[120px]
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-10
                                left-1/2
                                h-64
                                w-[32rem]
                                -translate-x-1/2
                                rounded-full
                                bg-red-900/30
                                blur-[100px]
                            "
                        />

                        <aside
                            className="
                                fixed
                                left-6
                                top-1/2
                                z-30
                                hidden
                                -translate-y-1/2
                                flex-col
                                items-center
                                gap-5
                                rounded-2xl
                                border
                                border-red-500/10
                                bg-black/40
                                px-3.5
                                py-6
                                backdrop-blur-xl
                                md:flex
                            "
                        >
                            <div className="h-12 w-px bg-gradient-to-b from-transparent via-red-500 to-red-500" />

                            {[
                                {
                                    icon: FaInstagram,
                                    href: "https://www.instagram.com/codeutsavanitrr/",
                                    label: "Instagram",
                                },
                                {
                                    icon: FaFacebookF,
                                    href: "https://www.facebook.com/codeutsava/",
                                    label: "Facebook",
                                },
                                {
                                    icon: FaLinkedinIn,
                                    href: "https://www.linkedin.com/company/codeutsava/",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: FaXTwitter,
                                    href: "https://x.com/codeutsavanitrr?lang=en",
                                    label: "X",
                                },
                                {
                                    icon: FaGithub,
                                    href: "https://github.com/TCP-Tech",
                                    label: "GitHub",
                                },
                            ].map((social, index) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="
                                            group
                                            text-neutral-400
                                            transition-all
                                            duration-300
                                            hover:scale-125
                                            hover:text-red-500
                                        "
                                    >
                                        <Icon
                                            size={18}
                                            className="
                                                transition-all
                                                duration-300
                                                group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]
                                            "
                                        />
                                    </a>
                                );
                            })}

                            <div className="h-12 w-px bg-gradient-to-b from-red-500 via-red-500/50 to-transparent" />
                        </aside>

                        <div
                            className="
                                relative
                                z-10
                                flex
                                max-w-5xl
                                flex-col
                                items-center
                                px-6
                                py-12
                                text-center
                            "
                        >
                            {/* Badge */}
                            <div
                                className="
                                    group
                                    mb-8
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-red-500/30
                                    bg-red-950/30
                                    px-6
                                    py-2
                                    shadow-[0_0_25px_rgba(220,38,38,0.2)]
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-300
                                    hover:border-red-500/60
                                    hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]
                                "
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span
                                        className="
                                            absolute
                                            inline-flex
                                            h-full
                                            w-full
                                            animate-ping
                                            rounded-full
                                            bg-red-500
                                            opacity-75
                                        "
                                    />

                                    <span
                                        className="
                                            relative
                                            inline-flex
                                            h-2.5
                                            w-2.5
                                            rounded-full
                                            bg-red-600
                                        "
                                    />
                                </span>

                                <span
                                    className="
                                        text-xs
                                        font-black
                                        uppercase
                                        tracking-[0.35em]
                                        text-red-400
                                    "
                                >
                                    EDITION 10.0
                                </span>
                            </div>

                            {/* Heading */}
                            <h1
                                className="
                                    relative
                                    bg-gradient-to-b
                                    from-white
                                    via-neutral-200
                                    to-neutral-500
                                    bg-clip-text
                                    text-6xl
                                    font-black
                                    uppercase
                                    tracking-[0.1em]
                                    text-transparent
                                    drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]
                                    sm:text-7xl
                                    md:text-8xl
                                    lg:text-9xl
                                "
                            >
                                🕷️CODEUTSAVA
                            </h1>

                            {/* Subtitle */}
                            <h2
                                className="
                                    mt-3
                                    bg-gradient-to-r
                                    from-red-600
                                    via-red-500
                                    to-red-700
                                    bg-clip-text
                                    text-xl
                                    font-black
                                    uppercase
                                    tracking-[0.4em]
                                    text-transparent
                                    drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]
                                    sm:text-2xl
                                    md:text-4xl
                                "
                            >
                                THE WEB OF CODERS
                            </h2>

                            {/* Divider */}
                            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                            {/* Taglines */}
                            <div className="flex flex-col items-center gap-2">
                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.35em]
                                        text-neutral-300
                                        sm:text-base
                                        md:text-lg
                                    "
                                >
                                    WHERE CODE MEETS CREATIVITY
                                </p>

                                <p
                                    className="
                                        text-[11px]
                                        font-bold
                                        uppercase
                                        tracking-[0.3em]
                                        text-red-500/80
                                        sm:text-sm
                                    "
                                >
                                    BUILD • INNOVATE • COLLABORATE
                                </p>
                            </div>

                            <div className="h-10" />

                            {/* Buttons */}
                            <div
                                className="
                                    mt-15
                                    flex
                                    flex-col
                                    items-center
                                    gap-4
                                    sm:flex-row
                                    sm:gap-6
                                "
                            >
                                <button
                                    className="
                                        group
                                        flex
                                        min-w-[220px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-red-600
                                        px-12
                                        py-5
                                        text-sm
                                        font-black
                                        tracking-[0.25em]
                                        text-white
                                        shadow-[0_0_25px_rgba(220,38,38,0.5)]
                                        transition-all
                                        duration-300
                                        hover:scale-105
                                        hover:bg-red-500
                                        hover:shadow-[0_0_40px_rgba(220,38,38,0.8)]
                                    "
                                >
                                    <span className="flex items-center gap-2">
                                        REGISTER NOW

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </span>
                                </button>

                                <button
                                    className="
                                        flex
                                        min-w-[220px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/15
                                        bg-white/5
                                        px-12
                                        py-5
                                        text-sm
                                        font-black
                                        tracking-[0.25em]
                                        text-neutral-200
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:scale-105
                                        hover:border-red-500/60
                                        hover:bg-red-950/30
                                        hover:text-white
                                        hover:shadow-[0_0_20px_rgba(220,38,38,0.25)]
                                    "
                                >
                                    EXPLORE EVENTS
                                </button>
                            </div>
                        </div>
                    </section>

                    <section
                        className="
                            relative
                            flex
                            min-h-[520px]
                            w-full
                            justify-center
                            overflow-hidden
                        "
                    >
                        <div className="mx-auto max-w-5xl px-6">

                            <div className="text-center">
                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.35em]
                                        text-red-500
                                    "
                                >
                                    LAST YEAR AT A GLANCE
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-3xl
                                        font-black
                                        tracking-wider
                                        text-white
                                        sm:text-4xl
                                    "
                                >
                                    CODEUTSAVA 9.0
                                    <span className="text-neutral-500">
                                        {" "}•{" "}
                                    </span>
                                    2025
                                </h2>

                                <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-600" />
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

                                <div className="group relative h-48 w-full overflow-hidden rounded-xl">
                                    <img
                                        src={LastYearImage}
                                        alt="Participants"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            opacity-50
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            flex
                                            items-center
                                            justify-center
                                            bg-black/40
                                            transition-colors
                                            duration-300
                                            group-hover:bg-black/0
                                        "
                                    >
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-white md:text-5xl">
                                                150+
                                            </div>

                                            <p
                                                className="
                                                    mt-2
                                                    text-xs
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-neutral-300
                                                "
                                            >
                                                Participants
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative h-48 w-full overflow-hidden rounded-xl">
                                    <img
                                        src={LastYearImage}
                                        alt="Teams"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            opacity-50
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            flex
                                            items-center
                                            justify-center
                                            bg-black/40
                                            transition-colors
                                            duration-300
                                            group-hover:bg-black/0
                                        "
                                    >
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-white md:text-5xl">
                                                40+
                                            </div>

                                            <p
                                                className="
                                                    mt-2
                                                    text-xs
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-neutral-300
                                                "
                                            >
                                                Teams
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative h-48 w-full overflow-hidden rounded-xl">
                                    <img
                                        src={LastYearImage}
                                        alt="Projects"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            opacity-50
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            flex
                                            items-center
                                            justify-center
                                            bg-black/40
                                            transition-colors
                                            duration-300
                                            group-hover:bg-black/0
                                        "
                                    >
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-white md:text-5xl">
                                                29
                                            </div>

                                            <p
                                                className="
                                                    mt-2
                                                    text-xs
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-neutral-300
                                                "
                                            >
                                                Projects
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div className="m-5 h-[3px] w-full bg-red-600/50" />

                    <section className="relative flex w-full justify-center overflow-hidden">
                        <div className="w-full max-w-7xl">
                            <TimeLine />
                        </div>
                    </section>

                    <section className="relative flex w-full justify-center overflow-hidden">
                        <div className="w-full">
                            <Guidelines />
                            <PricePool />
                        </div>
                    </section>

                    <div className="h-40 w-full " />

                    {/* Footer */}
                    <div>
                        <BottomHome />
                    </div>
                </div>

                <BlackSvg />

                <div className="creepy-crawler pointer-events-none fixed z-30">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Left legs */}
                        <path
                            className="spider-leg"
                            d="M35 45 Q20 35 10 25"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M38 50 Q20 50 8 48"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M40 55 Q22 62 12 68"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M42 60 Q25 72 18 82"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Right legs */}
                        <path
                            className="spider-leg"
                            d="M65 45 Q80 35 90 25"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M62 50 Q80 50 92 48"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M60 55 Q78 62 88 68"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            className="spider-leg"
                            d="M58 60 Q75 72 82 82"
                            stroke="#991b1b"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Abdomen */}
                        <ellipse
                            cx="50"
                            cy="58"
                            rx="18"
                            ry="22"
                            fill="#7f1d1d"
                        />

                        <ellipse
                            cx="50"
                            cy="58"
                            rx="12"
                            ry="16"
                            fill="#991b1b"
                        />

                        {/* Head */}
                        <circle
                            cx="50"
                            cy="38"
                            r="14"
                            fill="#7f1d1d"
                        />

                        <circle
                            cx="50"
                            cy="38"
                            r="9"
                            fill="#b91c1c"
                        />

                        {/* Eyes */}
                        <circle
                            cx="45"
                            cy="34"
                            r="2.5"
                            fill="#000"
                        />

                        <circle
                            cx="55"
                            cy="34"
                            r="2.5"
                            fill="#000"
                        />

                        <circle
                            cx="43"
                            cy="36"
                            r="1"
                            fill="#ef4444"
                        />

                        <circle
                            cx="57"
                            cy="36"
                            r="1"
                            fill="#ef4444"
                        />

                        {/* Fangs */}
                        <path
                            d="M46 44 L44 50 L48 48 Z"
                            fill="#000"
                        />

                        <path
                            d="M54 44 L56 50 L52 48 Z"
                            fill="#000"
                        />

                        {/* Web */}
                        <line
                            x1="50"
                            y1="0"
                            x2="50"
                            y2="20"
                            stroke="#ffffff15"
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                        />
                    </svg>
                </div>
            </div>

            <style>{`
                @keyframes homeWhite {
                    0% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                .animate-home-white {
                    animation: homeWhite 5s ease-in-out forwards;
                }
            `}</style>
        </>
    );
};

export default Home;