import React from "react";
import BgVideo from "../assets/FAQsvideo.MP4";
import EventCard from "../components/EventCard";
import SpiderCrawler2 from "../components/BlackSpider2";
import RedSpidy from "../components/RedSpidy"

const events = [
    {
        id: 1,
        name: "TECHNO GRAPHIX",
        description:
            "An event based on graphic designing and poster making around the theme of the fest.",
        date: "02/02/2025",
        time: "4:00 PM - 5:00 PM",
        venue: "G-4",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/TechnoGraphixForm",
    },
    {
        id: 2,
        name: "DSA MARATHON",
        description:
            "A fast-paced challenge where participants solve maximum questions from a set of 30 standard DSA problems.",
        date: "01/02/2025",
        time: "11:30 AM - 1:00 PM",
        venue: "S-4",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/DsaMarathonForm",
    },
    {
        id: 3,
        name: "DRONE RACING",
        description:
            "Teams bring their own drone and compete to complete a challenging track in the minimum possible time.",
        date: "02/02/2025",
        time: "2:30 PM - 4:00 PM",
        venue: "Outdoors",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/DroneRaceForm",
    },
    {
        id: 4,
        name: "CODE SPRINT RELAY",
        description:
            "A team-based coding challenge testing collaboration, creativity, speed, and problem-solving.",
        date: "02/02/2025",
        time: "11:30 AM - 1:00 PM",
        venue: "CCC Lab",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/CodeSprintRelayForm",
    },
    {
        id: 5,
        name: "DIMENSIONS (AUTOCAD)",
        description:
            "AUTOCAD enthusiasts showcase their technical and creative skills through precision-based designs.",
        date: "01/02/2025",
        time: "11:30 AM - 1:00 PM",
        venue: "Any Classroom",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/DimensionsForm",
    },
    {
        id: 6,
        name: "ECOPOLIS",
        description:
            "A creative design challenge tackling real-world architectural problems and imagining better cities.",
        date: "02/02/2025",
        time: "2:30 PM - 4:00 PM",
        venue: "G-4",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/EcopolisForm",
    },
    {
        id: 7,
        name: "ROBO WARS",
        description:
            "An exhilarating robotics showdown where participants bring their machines into an epic battle.",
        date: "01/02/2025",
        time: "11:30 AM - 1:00 PM",
        venue: "Outdoors",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/RoboWarsForm",
    },
    {
        id: 8,
        name: "PIXEL PLAYGROUND",
        description:
            "A fast-paced video editing challenge where participants create a short film during the two-day fest.",
        date: "01/02/2025",
        time: "All day",
        venue: "Online",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/PixelPlaygroundForm",
    },
    {
        id: 9,
        name: "ROCKET RAGE",
        description:
            "A hands-on rocket launching challenge featuring self-made rockets and engineering creativity.",
        date: "01/02/2025",
        time: "2:30 PM - 3:30 PM",
        venue: "Outdoors",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/OctoberSkyForm",
    },
    {
        id: 10,
        name: "ESCAPE THE MATRIX",
        description:
            "A survival quiz combining knowledge, logic, problem-solving, and quick thinking to escape the virtual matrix.",
        date: "02/02/2025",
        time: "11:00 AM - 1:00 PM + 2:30 PM - 3:30 PM",
        venue: "Lecture Hall",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/EscapeTheMatrixForm",
    },
    {
        id: 11,
        name: "REVERSE CODING",
        description:
            "Work backward from outputs to uncover the logic behind hidden programs while testing creativity and reasoning.",
        date: "02/02/2025",
        time: "3:00 PM - 5:00 PM",
        venue: "CCC",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/ReverseCodingForm",
    },
    {
        id: 12,
        name: "WORKSHOP ON VEHICLE DATA ACQUISITION",
        description:
            "A certified workshop covering CAN protocol fundamentals, vehicle communication, data collection, and analysis.",
        date: "01/02/2025",
        time: "11:00 AM - 1:00 PM + 2:00 PM - 3:30 PM",
        venue: "E-Hall, NIT Raipur",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/WorkshopVDAForm",
    },
    {
        id: 13,
        name: "MOCK CID",
        description:
            "A thriller-inspired treasure hunt where participants follow clues, solve puzzles, and uncover the mystery.",
        date: "01/02/2025",
        time: "10:30 AM - 3:30 PM",
        venue: "Amul Parlor",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/TreasureHuntForm",
    },
    {
        id: 14,
        name: "CORN HOLE",
        description:
            "A classic lawn game where players compete by throwing bags onto or through a raised target platform.",
        date: "02/02/2025",
        time: "11:30 AM - onwards",
        venue: "Central Garden",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/CornHoleForm",
    },
    {
        id: 15,
        name: "OPEN MIC",
        description:
            "A stage for singing, poetry, mimicry, comedy, and creative performances, including group acts.",
        date: "01/02/2025",
        time: "2:00 PM - 5:00 PM",
        venue: "AMUL PARLOUR",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/OpenMicForm",
    },
    {
        id: 16,
        name: "SPEED CUBING",
        description:
            "A competitive cube-solving challenge where speed, accuracy, and consistency determine the winner.",
        date: "01/02/2025",
        time: "11:00 AM",
        venue: "Left Garden",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/SpeedCubingForm",
    },
    {
        id: 17,
        name: "VALORANT TOURNAMENT",
        description:
            "A competitive Valorant gaming tournament where teams battle through tactical rounds for victory.",
        date: "01/02/2025",
        time: "2:30 PM onwards",
        venue: "CCC",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/ValorantForm",
    },
    {
        id: 18,
        name: "JENGA",
        description:
            "A classic Jenga competition where precision, patience, and strategy determine who survives the tower.",
        date: "01/02/2025 & 02/02/2025",
        time: "11:00 AM onwards",
        venue: "Left Garden",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/JengaForm",
    },
    {
        id: 19,
        name: "ROBO RACE",
        description:
            "A high-stakes robotics race through challenging obstacles using autonomous or remote-controlled robots.",
        date: "01/02/2025",
        time: "3:00 PM - 4:30 PM",
        venue: "Outdoors",
        deadline: "31/01/2025",
        link: "https://technocracy.nitrr.ac.in/events/RoboRaceForm",
    },
];

const Events = () => {
    return (
        <section
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden
                bg-black
                px-6
                py-24
                text-white
                sm:px-10
                lg:px-16
                xl:px-20
            "
        >
            <div className="min-h-35"></div>

            {/* Background Video */}

            <video
                src={BgVideo}
                autoPlay
                muted
                loop
                playsInline
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    z-0
                    h-full
                    w-full
                    object-cover
                    opacity-70
                "
            />

            {/* Red Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    z-0
                    h-[30rem]
                    w-[60rem]
                    -translate-x-1/2
                    rounded-full
                    blur-[150px]
                "
            />

            {/* Grid */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    opacity-20
                    [background-image:linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
                    [background-size:4rem_4rem]
                "
            />

            {/* Main Container */}

            <div className="relative z-10 mx-auto max-w-[1500px]">

                {/* HEADER */}

                <header className="mb-16 flex flex-col items-center text-center">

                    {/* Badge */}

                    <div
                        className="
                            mb-6
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-red-500/20
                            bg-red-950/20
                            px-5
                            py-2.5
                            shadow-[0_0_25px_rgba(220,38,38,0.08)]
                            backdrop-blur-xl
                        "
                    >
                        <span
                            className="
                                relative
                                flex
                                h-2
                                w-2
                            "
                        >
                            <span
                                className="
                                    absolute
                                    inset-0
                                    animate-ping
                                    rounded-full
                                    bg-red-500
                                    opacity-60
                                "
                            />

                            <span
                                className="
                                    relative
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-red-500
                                    shadow-[0_0_12px_rgba(220,38,38,0.9)]
                                "
                            />
                        </span>

                        <span
                            className="
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.4em]
                                text-red-400
                            "
                        >
                            TECH EVENTS
                        </span>
                    </div>

                    {/* TITLE */}

                    <h1
                        className="
                            bg-gradient-to-b
                            from-white
                            via-neutral-200
                            to-neutral-500
                            bg-clip-text
                            text-center
                            text-5xl
                            font-black
                            uppercase
                            tracking-[0.14em]
                            text-transparent
                            drop-shadow-[0_0_30px_rgba(220,38,38,0.35)]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        EVENTS
                    </h1>

                    {/* Red Line */}

                    <div
                        className="
                            mx-auto
                            mt-6
                            h-[2px]
                            w-32
                            bg-gradient-to-r
                            from-transparent
                            via-red-600
                            to-transparent
                            shadow-[0_0_12px_rgba(220,38,38,0.6)]
                        "
                    />

                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-7
                            w-full
                            max-w-2xl
                            self-center
                            rounded-2xl
                            bg-black/50
                            px-6
                            py-3
                            text-center
                            text-sm
                            leading-7
                            text-white
                            md:text-base
                        "
                    >
                        Explore challenges where creativity, technology,
                        competition, and innovation collide.
                    </p>

                    {/* Event Count */}

                    <div
                        className="
                            mt-7
                            flex
                            items-center
                            justify-center
                            gap-3
                            text-[10px]
                            font-black
                            text-red-200
                            uppercase
                            tracking-[0.3em]
                            text-neutral-600
                            bg-black/30
                            rounded
                            -full
                        "
                    >
                        <span>{events.length} EVENTS</span>

                        <span className="h-1 w-1 rounded-full bg-red-600" />

                        <span>ONE WEB OF INNOVATION</span>
                    </div>
                </header>

                {/* EVENTS GRID */}

                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-[1500px]
                        grid-cols-1
                        justify-items-center
                        gap-5
                        sm:grid-cols-2
                    "
                >
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                        />
                    ))}
                </div>
                <div className="h-3"></div>
                {/* BOTTOM */}

                <div
                    className="
                        mt-16
                        flex
                        items-center
                        justify-center
                        gap-5
                    "
                >
                    <div
                        className="
                            h-px
                            w-20
                            bg-gradient-to-r
                            from-transparent
                            to-red-600/40
                        "
                    />


                    <span
                        className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.4em]
                            text-neutral-600
                        "
                    >
                        END OF EVENTS
                    </span>

                    <div
                        className="
                            h-px
                            w-20
                            bg-gradient-to-l
                            from-transparent
                            to-red-600/40
                        "
                    />
                </div>

            </div>
            <div className="h-3"></div>
            <SpiderCrawler2/>
            <RedSpidy/>
        </section>
    );
};

export default Events;