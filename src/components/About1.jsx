import React from "react";
import LastYearImage from "../assets/round.png";

const About = () => {
    const stats = [
        {
            value: "10,000+",
            label: "Footfall",
            alt: "Footfall",
        },
        {
            value: "50+",
            label: "Colleges",
            alt: "Colleges",
        },
        {
            value: "30+",
            label: "Events",
            alt: "Events",
        },
        {
            value: "6 Lacs+",
            label: "Prizes",
            alt: "Prizes",
        },
        {
            value: "200+",
            label: "Participants",
            alt: "Participants",
        },
    ];

    return (
        <section className="relative flex w-full justify-center  overflow-hidden py-16">
            <div className="mx-auto w-full max-w-6xl px-6">

                {/* Section Heading */}
                <div className="flex flex-col items-center text-center">

                    <p
                        className="
                text-4xl
                font-bold
                uppercase
                tracking-[0.35em]
                text-red-500
            "
                    >
                        ABOUT
                    </p>

                    <div className="mx-auto mt-4 h-[2px] w-20 rounded-full  bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />

                    {/* Quote */}
                    <div className="h-3"></div>
                    <blockquote
                        className="
                mx-auto
                mt-7
                max-w-3xl
                text-center
                text-base
                font-bold
                leading-relaxed
                text-white/90
                sm:text-lg
            "
                    >
                        The measure of a real champion is not whether they can triumph,
                        but whether they can overcome defeat.
                    </blockquote>

                    {/* Description */}
                    <p
                        className="
                mx-auto
                mt-5
                max-w-4xl
                text-center
                text-sm
                leading-relaxed
                text-neutral-400
                sm:text-base
            "
                    >
                        <span className="font-semibold text-neutral-200">
                            Team
                        </span>{" "}
                        <span className="font-semibold text-red-500">
                            Technocracy
                        </span>{" "}
                        is the official technical committee of NIT Raipur, dedicated to
                        fostering innovation, technical skills, and a passion for technology
                        among students. We organize various technical events under the
                        Aavartan fest, workshops, and projects throughout the year.
                    </p>
                </div>
                <div className="h-10"></div>

                {/* Stats */}
                <div
                    className="
            mx-auto
            mt-12
            flex
            w-full
            max-w-6xl
            flex-wrap
            items-center
            justify-center
            gap-6
        "
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                    group
                    relative
                    h-40
                    w-full
                    overflow-hidden
                    gap-20
                    rounded-3xl
                    border
                    border-neutral-800
                    bg-neutral-900
                    shadow-lg
                    transition-all
                    duration-300
                    hover:border-red-500/50
                    hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]
                    sm:w-[280px]
                    lg:w-[300px]
                "
                        >
                            <img
                                src={LastYearImage}
                                alt={stat.alt}
                                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        opacity-90
                        transition-all
                        duration-500
                        group-hover:scale-110
                    "
                            />

                            {/* Overlay */}
                            <div
                                className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/10
                        transition-all
                        duration-300
                    "
                            >
                                <div className="px-4 text-center">

                                    {/* Number */}
                                    <div
                                        className="
                                text-4xl
                                font-black
                                tracking-tight
                                text-white
                                drop-shadow-[0_0_15px_rgba(220,38,38,0.7)]
                                sm:text-5xl
                            "
                                    >
                                        {stat.value}
                                    </div>

                                    {/* Label */}
                                    <p
                                        className="
                                mt-2
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-red-400
                            "
                                    >
                                        {stat.label}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;