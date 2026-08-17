import React from "react";
import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
    FaXTwitter,
    FaEnvelope,
    FaLocationDot,
    FaArrowUp,
} from "react-icons/fa6";
import nit from "../assets/nit.png";

const BottomHome = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const socials = [
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/",
            label: "Instagram",
        },
        {
            icon: FaYoutube,
            href: "https://www.youtube.com/",
            label: "YouTube",
        },
        {
            icon: FaFacebookF,
            href: "https://www.facebook.com/",
            label: "Facebook",
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/",
            label: "LinkedIn",
        },
        {
            icon: FaXTwitter,
            href: "https://x.com/",
            label: "X",
        },
        {
            icon: FaGithub,
            href: "https://github.com/",
            label: "GitHub",
        },
    ];

    const navigation = [
        { name: "Technocracy", href: "#home" },
        { name: "Aavartan", href: "#aavartan" },
        { name: "Vigyaan", href: "#vigyaan" },
        { name: "Ignite", href: "#ignite" },
        { name: "Sponsors", href: "#sponsors" },
        { name: "Team", href: "#team" },
    ];

    return (
        <footer
            id="contact"
            className="relative z-[100] w-full overflow-hidden bg-black text-white"
        >
            {/* TOP RED LINE */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(220,38,38,0.8)]" />

            {/* RED GLOW */}
            <div
                className="pointer-events-none absolute -top-40 left-1/2 h-[35rem] w-[70rem] -translate-x-1/2 rounded-full bg-red-900/10 blur-[150px]"
            />

            {/* GRID */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 50%, transparent 100%)',
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 mx-auto w-full  px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto grid w-full   grid-cols-1 gap-6 md:grid-cols-3 ">
                    
                    {/* BRAND */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-2">
                            {/* NIT LOGO */}
                            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-red-500/30 bg-black p-2 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                                <img
                                    src={nit}
                                    alt="NIT Raipur"
                                    className="h-full w-full scale-114 object-contain"
                                />
                                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-red-500/30" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-[0.18em] text-white">
                                    TECHNO<span className="text-red-500">CRACY</span>
                                </h2>
                                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                                    Technical Committee • NIT Raipur
                                </p>
                            </div>
                        </div>

                        <p className=" max-w-sm text-sm leading-5 text-neutral-500">
                            Building a community where technology meets creativity, 
                            innovation meets curiosity, and students transform ideas into impact.
                        </p>

                        {/* SOCIALS */}
                         
                    </div>

                    {/* EXPLORE */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-8 flex items-center gap-5">
                            <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.9)]" />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                                Explore
                            </h3>
                        </div><div className="h-5"></div>

                        <nav className="flex flex-col items-center gap-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-5" />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACT */}
                   <div className="flex flex-col items-center text-center">

    {/* ================= CONTACT HEADING ================= */}
    <div className="mb-9 flex items-center gap-3">
        <span
            className="
                h-2
                w-2
                rounded-full
                bg-red-600
                shadow-[0_0_12px_rgba(220,38,38,0.9)]
            "
        />

        <h3
            className="
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-white
            "
        >
            Contact
        </h3>
    </div>
    <div className="h-5"></div>

    {/* ================= CONTACT ITEMS ================= */}
    <div className="flex w-full max-w-sm flex-col gap-4">

        {/* EMAIL 1 */}
        <a
            href="mailto:nitrr.technocracy@gmail.com"
            className="
                group
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-4
                py-3
                text-left
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-red-500/30
                hover:bg-red-950/10
                hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)]
            "
        >
            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-black/40
                    text-red-500
                    transition-all
                    duration-300
                    group-hover:border-red-500/40
                    group-hover:bg-red-950/30
                    group-hover:shadow-[0_0_18px_rgba(220,38,38,0.25)]
                "
            >
                <FaEnvelope size={14} />
            </div>

            <div className="min-w-0">
                <p
                    className="
                        mb-1
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-neutral-600
                    "
                >
                    Email
                </p>

                <p
                    className="
                        truncate
                        text-sm
                        font-medium
                        text-neutral-400
                        transition-colors
                        duration-300
                        group-hover:text-red-400
                    "
                >
                    nitrr.technocracy@gmail.com
                </p>
            </div>
        </a>

        {/* EMAIL 2 */}
        <a
            href="mailto:aavartan@nitrr.ac.in"
            className="
                group
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-4
                py-3
                text-left
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-red-500/30
                hover:bg-red-950/10
                hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)]
            "
        >
            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-black/40
                    text-red-500
                    transition-all
                    duration-300
                    group-hover:border-red-500/40
                    group-hover:bg-red-950/30
                    group-hover:shadow-[0_0_18px_rgba(220,38,38,0.25)]
                "
            >
                <FaEnvelope size={14} />
            </div>

            <div className="min-w-0">
                <p
                    className="
                        mb-1
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-neutral-600
                    "
                >
                    Official Mail
                </p>

                <p
                    className="
                        truncate
                        text-sm
                        font-medium
                        text-neutral-400
                        transition-colors
                        duration-300
                        group-hover:text-red-400
                    "
                >
                    aavartan@nitrr.ac.in
                </p>
            </div>
        </a>

        {/* LOCATION */}
        <div
            className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-4
                py-3
                text-left
                backdrop-blur-xl
            "
        >
            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-black/40
                    text-red-500
                "
            >
                <FaLocationDot size={14} />
            </div>

            <div>
                <p
                    className="
                        mb-1
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-neutral-600
                    "
                >
                    Location
                </p>

                <p className="text-sm leading-5 text-neutral-400">
                    NIT Raipur
                    <br />
                    Raipur, Chhattisgarh{" "}
                    <span className="text-neutral-600">
                        • 492013
                    </span>
                </p>
            </div>
        </div>
    </div>

    {/* ================= CONNECT BOX ================= */}
    <div
        className="
            group
            relative
            mt-7
            w-full
            max-w-sm
            overflow-hidden
            rounded-xl
            border
            border-red-500/10
            bg-gradient-to-br
            from-red-950/20
            via-white/[0.02]
            to-transparent
            p-5
            text-center
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-red-500/25
            hover:shadow-[0_0_35px_rgba(220,38,38,0.1)]
        "
    >
        {/* Glow */}
        <div
            className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-24
                w-24
                rounded-full
                bg-red-600/10
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-red-600/20
            "
        />

        
    </div>
</div>
                </div>

                {/* DIVIDER */}
                <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
            </div>

            {/* BOTTOM BAR */}
            <div className="relative z-10 border-t border-white/[0.04] bg-black/60 backdrop-blur-2xl">
                <div className="mx-auto flex   flex-col items-center justify-center  px-6 py- text-center md:flex-row md:justify-between md:px-12">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-700">
                        © 2026 Team Technocracy • NIT Raipur
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-700">
                        BUILT WITH <span className="text-red-500">PASSION</span> & CODE
                    </p>
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                    >
                        <FaArrowUp
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default BottomHome;