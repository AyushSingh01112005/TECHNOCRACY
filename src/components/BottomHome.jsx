import React from 'react';
import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaArrowUp,
} from "react-icons/fa6";
import nit from "../assets/nit.png"

const BottomHome = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socials = [
        { icon: FaInstagram, href: "https://www.instagram.com/codeutsavanitrr/", label: "Instagram" },
        { icon: FaFacebookF, href: "https://www.facebook.com/codeutsava/", label: "Facebook" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/codeutsava/", label: "LinkedIn" },
        { icon: FaXTwitter, href: "https://x.com/codeutsavanitrr?lang=en", label: "X" },
        { icon: FaGithub, href: "https://github.com/TCP-Tech", label: "GitHub" },
    ];



    return (
        <footer
            id="contact"
            className="relative w-full overflow-hidden bg-gradient-to-b z-100 from-black/30 via-black/60 to-black text-white"
        >

            <div className="relative h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />

            <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-red-900/8 blur-[140px]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
             <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">

                    <div className="space-y-8">

                        <div className="flex items-center gap-5">
                            <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-red-500/20 bg-black/10 p-1 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                                <img
                                    src={nit}
                                    alt="NIT Raipur"
                                    className="h-full w-full scale-115
                                     object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = '<span class="text-red-500 font-black text-xl">NIT</span>';
                                    }}
                                />
                                {/* Glow ring */}
                                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-red-500/10" />
                            </div>

                            <div>
                                <h3 className="text-lg font-black tracking-[0.2em] text-white uppercase">
                                    NIT Raipur
                                </h3>
                                <p className="mt-0.5 text-[11px] font-bold tracking-[0.3em] text-red-500 uppercase">
                                    Institute of National Importance
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="max-w-md text-sm leading-[1.8] text-neutral-400">
                            National Institute of Technology Raipur is committed to the challenging task of
                            developing technical education by preparing seasoned graduates in highly sophisticated
                            fields of engineering and technology. For over five decades, NIT Raipur has been
                            shaping the future with sincerity and commitment.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socials.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-red-500/40 hover:bg-red-950/20 hover:text-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.35)]"
                                    >
                                        <Icon size={15} className="transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>



                  <div className="md:justify-self-end md:w-full lg:max-w-md">
                        <h4 className="mb-8 flex items-center gap-3 text-sm font-black tracking-[0.25em] text-white uppercase">
                            <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                            Contact
                        </h4>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-red-500">
                                    <FaLocationDot size={14} />
                                </div>
                                <p className="text-sm leading-relaxed text-neutral-400">
                                    Great Eastern Rd, Amanaka,<br />
                                    Raipur, Chhattisgarh — 492010
                                </p> 
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-red-500">
                                    <FaEnvelope size={14} />
                                </div>
                                <a
                                    href="mailto:codeutsava@nitrr.ac.in"
                                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-red-500"
                                >
                                    codeutsava@nitrr.ac.in
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-red-500">
                                    <FaPhone size={14} />
                                </div>
                                <a
                                    href="tel:+917712254001"
                                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-red-500"
                                >
                                    +91 771 225 4001
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-4 backdrop-blur-sm">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-500 ring-1 ring-red-500/20">
                                <span className="text-xl font-black">C</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
                                    Organized By
                                </p>
                                <p className="mt-0.5 text-sm font-black tracking-[0.15em] text-white uppercase">
                                    CodeUtsava 10.0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/[0.04] bg-black/40 backdrop-blur-2xl">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12">

                    <p className="text-[11px] font-bold tracking-[0.2em] text-neutral-600 uppercase">
                        © 2026 CodeUtsava 10.0 • All Rights Reserved
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-neutral-600 uppercase transition-colors duration-300 hover:text-red-500">
                            Privacy
                        </a>
                        <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-neutral-600 uppercase transition-colors duration-300 hover:text-red-500">
                            Terms
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-500 transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/20 hover:text-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                    >
                        <FaArrowUp
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default BottomHome;