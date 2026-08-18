import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FAQsvideo from "../assets/FAQsvideo.MP4";
import BlackSvg from "../components/BlackSvg";

const Register = () => {
    const navigate = useNavigate();

    const [videoReady, setVideoReady] = useState(false);

    const [position, setPosition] = useState({
        x: 50,
        y: 50,
    });

    useEffect(() => {
        const moveSpider = () => {
            setPosition({
                x: Math.random() * 90 + 5,
                y: Math.random() * 80 + 10,
            });
        };

        moveSpider();

        const interval = setInterval(moveSpider, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">

            {/* Loading Screen */}
            {!videoReady && (
                <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black">
                    <div className="mb-6">
                        <BlackSvg />
                    </div>

                    <p className="text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        LOADING...
                    </p>

                    <div className="mt-4 h-[2px] w-32 overflow-hidden bg-white/10">
                        <div className="h-full w-1/2 animate-pulse bg-red-500" />
                    </div>
                </div>
            )}

            {/* Background Video */}
            <video
                src={FAQsvideo}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                autoPlay
                loop
                preload="auto"
                onCanPlay={() => setVideoReady(true)}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Red Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_55%)]" />

            {/* Main Content */}
            <div
                className={`relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ${
                    videoReady ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Small Label */}
                <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-red-500" />

                    <p className="text-xs font-black uppercase tracking-[0.45em] text-red-500">
                        REGISTRATION
                    </p>

                    <span className="h-px w-10 bg-red-500" />
                </div>

                {/* Heading */}
                <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
                    REGISTRATION
                    <br />

                    <span className="text-red-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.45)]">
                        STARTS SOON
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-lg text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-white/55 sm:text-sm">
                    THE REGISTRATION PORTAL IS CURRENTLY CLOSED.
                    <br />
                    STAY TUNED FOR UPDATES.
                </p>

                {/* Divider */}
                <div className="my-8 h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                {/* Home Button */}
                <button
                    onClick={() => navigate("/home")}
                    className="
                        border border-red-500
                        bg-black/20
                        px-9 py-3.5
                        text-xs font-black uppercase
                        tracking-[0.3em]
                        text-red-500
                        backdrop-blur-sm
                        transition-all duration-300
                        hover:bg-red-500
                        hover:text-white
                        hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]
                    "
                >
                    BACK TO HOME
                </button>
            </div>

            {/* Black Spider */}
            <div className="pointer-events-none absolute right-[35%] top-[70px] z-20">
                <BlackSvg />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-6 left-0 z-10 w-full text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.45em] text-white/30">
                    TECHNOCRACY 26
                </p>
            </div>

        </div>
    );
};

export default Register;