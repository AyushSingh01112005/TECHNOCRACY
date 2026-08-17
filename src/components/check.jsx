import React, { useRef, useEffect, useState } from "react";
import redSpider from "../assets/redSpider.mp4";
import BlackSvg from "../components/BlackSvg";
import SpiderCrawler2 from "../components/BlackSpider2";
import LastYearImage from "../assets/round.png";
import TimeLine from "../components/TimeLine";
import Guidelines from "../components/Guidelines";
import PricePool from "../components/PricePool";
import BottomHome from "../components/BottomHome";
import { useLocation, useNavigate } from "react-router-dom";
import About1 from "../components/About1";

import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
} from "react-icons/fa6";
import FAQs from "./FAQs";

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
        <><BlackSvg />
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

            <div className="relative min-h-screen ">

                <video
                    ref={videoRef}
                    src={redSpider}
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
                        bg-black/60
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
                                    EDITION 26
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
                                🕷️<br />
                                TECHNOCRACY
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
                                    tracking-[0.1em]
                                    text-transparent
                                    drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]
                                    sm:text-2xl
                                    md:text-4xl
                                "
                            >
                                Where Ideas Become Innovation
                            </h2>

                            {/* Divider */}
                            <div className="my-6 h-0.5 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                            <div className="h-4" />
                            {/* Taglines */}
                            <div className="flex flex-col items-center gap-2">
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

                            <div
                                className="
         
        flex
        flex-row
        items-center
        justify-center
        gap-80
    "
                            >
                                <button
                                    onClick={() => { navigate("/vigyaan") }}
                                    className="
            group
            flex
            min-h-[50px]
            min-w-[200px]
            items-center
            justify-center
            rounded-full
            bg-red-600
            px-14
            py-6
            text-base
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
                                    <span className="flex items-center gap-3">
                                        VIGYAAN
                                    </span>
                                </button>

                                <button
                                    onClick={() => { navigate("/ignite") }}
                                    className="
            group
            flex
            min-h-[50px]
            min-w-[200px]
            items-center
            justify-center
            rounded-full
            bg-red-600
            px-14
            py-6
            text-base
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
                                    IGNITE
                                </button>
                            </div>
                        </div>
                    </section>
                    //About
                    <section className="relative flex w-full justify-center overflow-hidden">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="text-center">
                                <About1 />
                            </div>
                        </div>
                    </section>

                    <div className="h-20"></div>

                    //FAQS
                    <FAQs />


                    {/* Footer */}
                    <div className="h-32 w-full" />
                    <BottomHome />
                </div>

                <BlackSvg />
                <div className="creepy-crawler pointer-events-none fixed z-79">
                    <SpiderCrawler2 />
                </div>
            </div>


        </>
    );
};

export default Home;