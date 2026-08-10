import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const SpiderLogo = ({ className = "w-8 h-8" }) => (
        <svg
            className={`${className} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="spiderGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#ff5555" />
                    <stop offset="45%" stopColor="#ef2222" />
                    <stop offset="100%" stopColor="#7f0000" />
                </linearGradient>

                <filter
                    id="glow"
                    x="-40%"
                    y="-40%"
                    width="180%"
                    height="180%"
                >
                    <feGaussianBlur
                        stdDeviation="10"
                        result="blur"
                    />

                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g filter="url(#glow)">
                <path
                    fill="url(#spiderGrad)"
                    stroke="#ff5555"
                    strokeWidth="2"
                    d="M 250,140 C 246,140 240,145 240,152 C 240,165 244,180 242,195 C 238,185 228,170 210,150 C 195,132 178,110 162,80 C 160,76 155,80 157,86 C 168,118 185,152 195,178 C 200,190 206,204 200,210 C 194,216 180,210 170,202 C 152,188 135,168 120,142 C 117,137 112,140 114,146 C 128,180 148,212 165,232 C 174,242 185,250 178,258 C 170,265 152,258 138,252 C 118,242 98,228 80,210 C 77,207 72,210 74,215 C 90,250 115,282 135,302 C 145,312 155,322 150,332 C 145,342 132,360 120,380 C 108,400 95,420 85,438 C 83,442 88,445 91,440 C 108,412 128,375 142,342 C 150,322 158,300 168,280 C 175,266 182,255 192,258 C 202,260 208,272 212,285 C 218,310 222,340 228,370 C 235,405 242,440 248,485 C 249,492 251,492 252,485 C 258,440 265,405 272,370 C 278,340 282,310 288,285 C 292,272 298,260 308,258 C 318,255 325,266 332,280 C 342,300 350,322 358,342 C 372,375 392,412 409,440 C 412,445 417,442 415,438 C 405,420 392,400 380,380 C 368,360 355,342 350,332 C 345,322 355,312 365,302 C 385,282 410,250 426,215 C 428,210 423,207 420,210 C 402,228 382,242 362,252 C 348,258 330,265 322,258 C 315,250 326,242 335,232 C 352,212 372,180 386,146 C 388,140 383,137 380,142 C 365,168 348,188 330,202 C 320,210 306,216 300,210 C 294,204 300,190 305,178 C 315,152 332,118 343,86 C 345,80 340,76 338,80 C 322,110 305,132 290,150 C 272,170 262,185 258,195 C 256,180 260,165 260,152 C 260,145 254,140 250,140 Z"
                />
            </g>
        </svg>
    );

    const navItems = [
        "Home",
        "About",
        "Schedule",
        "Sponsors",
        "Guidelines",
        "FAQs",
    ];

    const handleNavigation = (item) => {
        setIsMenuOpen(false);

        if (item === "Home") {
            navigate("/home");
            return;
        }

        if (item === "Guidelines") {
            navigate("/home", {
                state: {
                    scrollTo: 2970,
                },
            });
            return;
        }

        navigate(`/${item.toLowerCase()}`);
    };

    const handleRegister = () => {
        // Change this route if your registration page is different
        navigate("/register");
    };

    const isActive = (item) => {
        if (item === "Home") {
            return location.pathname === "/home";
        }

        return location.pathname === `/${item.toLowerCase()}`;
    };

    return (
        <>
            {/* ================= DESKTOP / MAIN NAVBAR ================= */}
            <nav className="fixed left-0 top-0 z-[9999] w-full px-4 pt-4 sm:px-6 lg:px-10">

                <div
                    className="
                        group/navbar
                        relative mx-auto flex max-w-[1500px]
                        items-center justify-between
                        overflow-hidden
                        border border-white/[0.08]
                        bg-black/10
                        px-8 py-3
                        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
                        backdrop-blur-sm
                        transition-all duration-500
                        hover:border-red-500/20
                        hover:bg-black/50
                        sm:px-7
                        lg:px-10
                    "
                >

                    {/* Top red light */}
                    <div
                        className="
                            pointer-events-none
                            absolute left-[10%] top-0
                            h-px w-[80%]
                            bg-gradient-to-r
                            from-transparent
                            via-red-500/70
                            to-transparent
                            opacity-50
                            transition-all duration-500
                            group-hover/navbar:opacity-100
                        "
                    />

                    {/* Subtle red glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute -left-20 top-1/2
                            h-32 w-32
                            -translate-y-1/2
                            rounded-full
                            bg-red-600/10
                            blur-3xl
                            transition-all duration-700
                            group-hover/navbar:bg-red-600/20
                        "
                    />

                    {/* ================= LOGO ================= */}
                    <button
                        onClick={() => navigate("/home")}
                        className="
                            group
                            relative z-10
                            flex items-center gap-3
                            outline-none
                        "
                    >
                        {/* Logo container */}
                        <div
                            className="
                                relative flex h-11 w-11
                                items-center justify-center
                                rounded-xl
                                border border-red-500/20
                                bg-red-950/20
                                transition-all duration-500
                                group-hover:border-red-500/60
                                group-hover:bg-red-950/40
                                group-hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]
                            "
                        >
                            {/* Rotating border */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute inset-0
                                    rounded-xl
                                    border border-transparent
                                    border-t-red-500/70
                                    opacity-0
                                    transition-all duration-500
                                    group-hover:rotate-180
                                    group-hover:opacity-100
                                "
                            />

                            <SpiderLogo className="h-8 w-8" />
                        </div>

                        {/* Brand text */}
                        <div className="flex  items-start justify-center items-center leading-none">
                            <span
                                className="
                                    text-base font-black
                                    tracking-[0.12em]
                                    text-white
                                    transition-all duration-300
                                    group-hover:text-red-50
                                "
                            >
                                CODEUTSAVA
                            </span>

                           <span
    className="
        mt-4
        text-sm
        font-black
        tracking-[0.35em]
        text-red-500
        transition-all
        duration-300
        group-hover:text-red-400
        group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]
    "
>
    10
</span>
                        </div>
                    </button>


                    {/* ================= DESKTOP LINKS ================= */}
                    <div className="hidden items-center gap-1 md:flex">

                        {navItems.map((item) => {
                            const active = isActive(item);

                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    className="
                                        group/link
                                        relative
                                        rounded-lg
                                        px-4 py-[20px]
                                        text-sm
                                        font-semibold
                                        tracking-wide
                                        outline-none
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* Hover background */}
                                    <span
                                        className="
                                            absolute inset-0
                                            rounded-lg
                                            bg-white/[0.04]
                                            opacity-0
                                            transition-all duration-300
                                            group-hover/link:opacity-100
                                        "
                                    />

                                    {/* Text */}<div className="min-w-20"></div>
                                    <span
                                        className={`
                                            relative z-10 
                                            transition-all duration-300
                                            ${active
                                                ? "text-white"
                                                : "text-white/60 group-hover/link:text-white"
                                            }
                                        `}
                                    >
                                        {item}
                                    </span>

                                    {/* Bottom active line */}
                                    <span
                                        className={`
                                            absolute 
                                            bottom-0 left-1/2
                                            h-[2px]
                                            -translate-x-1/2
                                            rounded-full
                                            bg-red-500
                                            shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                            transition-all duration-300
                                            ${active
                                                ? "w-5"
                                                : "w-0 group-hover/link:w-5"
                                            }
                                        `}
                                    />
                                    

                                </button>
                            );
                        })}

                    </div>


                    {/* ================= REGISTER BUTTON ================= */}
                    <button
                        onClick={handleRegister}
                        className="
                            group/register
                            relative hidden
                            items-center
                            gap-2
                            overflow-hidden
                            rounded-xl
                            border border-red-500/50
                            bg-red-600/10
                            px-6 py-3
                            text-xs
                            font-black
                            uppercase
                            tracking-[0.18em]
                            text-white
                            shadow-[0_0_20px_rgba(239,68,68,0.08)]
                            transition-all
                            duration-300
                            hover:scale-[1.04]
                            hover:border-red-400
                            hover:bg-red-600
                            hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
                            active:scale-95
                            md:flex
                        "
                    >

                        {/* Sweep */}
                        <span
                            className="
                                absolute inset-y-0 -left-full
                                w-1/2
                                skew-x-[-20deg]
                                bg-gradient-to-r
                                from-transparent
                                via-white/30
                                to-transparent
                                transition-all duration-700
                                group-hover/register:left-[130%]
                            "
                        />

                        {/* Glow */}
                        <span
                            className="
                                absolute inset-0
                                bg-red-400/0
                                transition-all duration-300
                                group-hover/register:bg-red-400/10
                            "
                        />

                        <span className="relative z-10">
                            REGISTER
                        </span>

                        <span
                            className="
                                relative z-10
                                text-base
                                transition-transform duration-300
                                group-hover/register:translate-x-1
                            "
                        >
                            →
                        </span>
                    </button>


                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="
                            relative z-10
                            flex h-10 w-10
                            items-center justify-center
                            rounded-lg
                            border border-white/10
                            bg-white/[0.03]
                            text-white
                            transition-all duration-300
                            hover:border-red-500/40
                            hover:bg-red-500/10
                            md:hidden
                        "
                        aria-label="Toggle menu"
                    >
                        <div className="flex w-5 flex-col gap-1.5">

                            <span
                                className={`
                                    h-[2px] w-full rounded-full bg-white
                                    transition-all duration-300
                                    ${isMenuOpen
                                        ? "translate-y-[4px] rotate-45"
                                        : ""
                                    }
                                `}
                            />

                            <span
                                className={`
                                    h-[2px] w-3/4 self-end rounded-full bg-red-500
                                    transition-all duration-300
                                    ${isMenuOpen
                                        ? "translate-x-3 opacity-0"
                                        : ""
                                    }
                                `}
                            />

                            <span
                                className={`
                                    h-[2px] w-full rounded-full bg-white
                                    transition-all duration-300
                                    ${isMenuOpen
                                        ? "-translate-y-[4px] -rotate-45"
                                        : ""
                                    }
                                `}
                            />

                        </div>
                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`
                        mx-auto mt-2
                        max-w-[1500px]
                        overflow-hidden
                        rounded-2xl
                        border border-white/[0.08]
                        bg-black/10
                        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                        backdrop-blur-xl
                        transition-all duration-500
                        md:hidden
                        ${isMenuOpen
                            ? "max-h-[500px] translate-y-0 opacity-100"
                            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
                        }
                    `}
                >

                    <div className="p-3">

                        {navItems.map((item, index) => {
                            const active = isActive(item);

                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    style={{
                                        transitionDelay: isMenuOpen
                                            ? `${index * 40}ms`
                                            : "0ms",
                                    }}
                                    className={`
                                        group/mobile
                                        relative flex w-full
                                        items-center justify-between
                                        rounded-xl
                                        px-4 py-3.5
                                        text-left
                                        text-sm font-semibold
                                        transition-all duration-300
                                        ${active
                                            ? "bg-red-500/10 text-white"
                                            : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                                        }
                                    `}
                                >

                                    <span>
                                        {item}
                                    </span>

                                    <span
                                        className="
                                            text-red-500
                                            opacity-0
                                            transition-all duration-300
                                            group-hover/mobile:translate-x-1
                                            group-hover/mobile:opacity-100
                                        "
                                    >
                                        →
                                    </span>

                                    {active && (
                                        <span
                                            className="
                                                absolute left-0
                                                h-5 w-[2px]
                                                rounded-full
                                                bg-red-500
                                                shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                            "
                                        />
                                    )}

                                </button>
                            );
                        })}


                        {/* Mobile register */}
                        <button
                            onClick={handleRegister}
                            className="
                                group/mobile-register
                                relative mt-2 flex w-full
                                items-center justify-center
                                gap-2
                                overflow-hidden
                                rounded-xl
                                border border-red-500/50
                                bg-red-600
                                px-5 py-3.5
                                text-xs font-black
                                uppercase
                                tracking-[0.2em]
                                text-white
                                transition-all duration-300
                                hover:bg-red-500
                                hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
                                active:scale-[0.98]
                            "
                        >
                            <span>
                                REGISTER NOW
                            </span>

                            <span
                                className="
                                    transition-transform duration-300
                                    group-hover/mobile-register:translate-x-1
                                "
                            >
                                →
                            </span>
                        </button>

                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;