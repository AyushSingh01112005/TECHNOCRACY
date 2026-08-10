import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Not from "../assets/NotFound.mp4";
import BlackSvg from "../components/BlackSvg";
import RedSpidy from "../components/RedSpidy";

const NotFound = () => {
    const navigate = useNavigate();

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

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">

            <video
                src={Not}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                autoPlay
                loop
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">

                <p className="mb-4 text-sm font-bold uppercase tracking-[0.5em] text-red-500">
                    ERROR 404
                </p>

                <h1 className="text-6xl font-black uppercase tracking-tight text-white sm:text-8xl">
                    Page Not Found
                </h1>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                    The page you're looking for doesn't exist or may have
                    been moved to another location.
                </p>

                <button
                    onClick={() => navigate("/home")}
                    className="
                        mt-8
                        border border-red-500
                        px-8 py-3
                        text-xs font-black uppercase tracking-[0.3em]
                        text-red-500
                        transition-all duration-300
                        hover:bg-red-500
                        hover:text-white
                    "
                >
                    Back To Home
                </button>

            </div>

            <div className="absolute left-10 top-1/2 z-10 -translate-x-1/2">
                <BlackSvg />
            </div>

            <div className="absolute left-[60%] top-2/3 z-10 translate-y-1/2">
                <BlackSvg />
            </div>

            <div className="absolute right-50 top-1/2 z-10 -translate-x-1/2">
                <BlackSvg />
            </div>

            <div
                className="pointer-events-none fixed z-30"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: "translate(-50%, -50%)",
                    transition: "left 0.35s linear, top 0.35s linear",
                }}
            >
                <RedSpidy />
            </div>

        </div>
    );
};

export default NotFound;