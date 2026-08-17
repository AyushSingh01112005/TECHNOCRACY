import React from "react";
import {
    FaCalendarDays,
    FaClock,
    FaLocationDot,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const EventCard = ({ event }) => {
    return (
        <article
            className="
               group
        relative
        flex
        min-h-[300px]
        max-w-[350px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.09]
        bg-black/60
        backdrop-blur-xl

        transition-all
        duration-500
        ease-out

        hover:-translate-y-3
        hover:border-red-500/50
        hover:bg-red-950/15
        hover:shadow-[0_25px_70px_rgba(220,38,38,0.18)]"
        >
            {/* =====================================================
                TOP RED LINE
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-20
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-transparent
                    via-red-500
                    to-transparent
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:w-full
                    group-hover:opacity-100
                "
            />

            {/* =====================================================
                CORNER GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-48
                    w-48
                    rounded-full
                    bg-red-600/[0.07]
                    blur-[75px]
                    transition-all
                    duration-700
                    group-hover:bg-red-600/20
                    group-hover:scale-125
                "
            />

            {/* =====================================================
                CARD CONTENT
            ====================================================== */}

            <div
                className="
                    flex
                    h-full
                    flex-1
                    flex-col
                    px-10
                    py-7
                "
            >

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-between
                    "
                >

                    {/* Event Number */}

                    <div
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            border-red-500/25
                            bg-red-950/30
                            text-[11px]
                            font-black
                            tracking-wider
                            text-red-500
                            shadow-[inset_0_0_15px_rgba(220,38,38,0.08)]

                            transition-all
                            duration-300

                            group-hover:border-red-500/60
                            group-hover:bg-red-600
                            group-hover:text-white
                            group-hover:shadow-[0_0_20px_rgba(220,38,38,0.35)]
                        "
                    >
                        {String(event.id).padStart(2, "0")}
                    </div>

                    {/* Arrow */}

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/[0.06]
                            bg-white/[0.025]

                            transition-all
                            duration-300

                            group-hover:border-red-500/30
                            group-hover:bg-red-600/10
                            group-hover:scale-110
                        "
                    >
                        <FaArrowUpRightFromSquare
                            size={13}
                            className="
                                text-neutral-600

                                transition-all
                                duration-300

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                group-hover:text-red-500
                            "
                        />
                    </div>
                </div>

                <div className="mt-8">

                    <h2
                        className="
                            relative
                            z-10
                            min-h-[64px]

                            text-xl
                            font-black
                            uppercase
                            leading-[2.5]
                            tracking-[0.08em]

                            text-white

                            transition-all
                            duration-300

                            group-hover:text-red-500
                        "
                    >
                        {event.name}
                    </h2>

                </div>

                <p
                    className="
                        relative
                        z-10

                        mt-2
                        min-h-[80px]

                        text-[13px]
                        leading-6

                        text-neutral-500

                        transition-colors
                        duration-300

                        group-hover:text-neutral-300
                    "
                >
                    {event.description}
                </p>

                <div
                    className="
                        relative
                        z-10

                        my-7

                        h-px
                        w-full

                        bg-gradient-to-r
                        from-red-600/50
                        via-white/[0.08]
                        to-transparent
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        flex
                        flex-col
                        gap-3
                    "
                >

                    {/* DATE */}

                    <div className="flex items-start gap-4">

                        <div
                            className="
                                mt-0.5
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-red-500/10
                                bg-red-600/10
                                text-red-500

                                transition-all
                                duration-300

                                group-hover:bg-red-600/20
                            "
                        >
                            <FaCalendarDays size={14} />
                        </div>

                        <div className="min-w-0">

                            <p
                                className="
                                    text-[8px]
                                    font-black
                                    uppercase
                                    tracking-[0.25em]
                                    text-neutral-600
                                "
                            >
                                DATE
                            </p>

                            <p
                                className="
                                    mt-1.5
                                    text-xs
                                    font-bold
                                    leading-5
                                    text-neutral-300
                                "
                            >
                                {event.date}
                            </p>

                        </div>
                    </div>

                    {/* TIME */}

                    <div className="flex items-start gap-4">

                        <div
                            className="
                                mt-0.5
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-red-500/10
                                bg-red-600/10
                                text-red-500

                                transition-all
                                duration-300

                                group-hover:bg-red-600/20
                            "
                        >
                            <FaClock size={14} />
                        </div>

                        <div className="min-w-0">

                            <p
                                className="
                                    text-[8px]
                                    font-black
                                    uppercase
                                    tracking-[0.25em]
                                    text-neutral-600
                                "
                            >
                                TIME
                            </p>

                            <p
                                className="
                                    mt-1.5
                                    text-xs
                                    font-bold
                                    leading-5
                                    text-neutral-300
                                "
                            >
                                {event.time}
                            </p>

                        </div>
                    </div>

                    {/* VENUE */}

                    <div className="flex items-start gap-4">

                        <div
                            className="
                                mt-0.5
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-red-500/10
                                bg-red-600/10
                                text-red-500

                                transition-all
                                duration-300

                                group-hover:bg-red-600/20
                            "
                        >
                            <FaLocationDot size={14} />
                        </div>

                        <div className="min-w-0">

                            <p
                                className="
                                    text-[8px]
                                    font-black
                                    uppercase
                                    tracking-[0.25em]
                                    text-neutral-600
                                "
                            >
                                VENUE
                            </p>

                            <p
                                className="
                                    mt-1.5
                                    text-xs
                                    font-bold
                                    leading-5
                                    text-neutral-300
                                "
                            >
                                {event.venue}
                            </p>

                        </div>
                    </div>

                </div>

                <div
                    className="
                        mt-auto
                        flex
                        items-center
                        justify-center
                        pt-8
                    "
                >

                    <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group/button
                            relative
                            flex
                            w-1/2
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-xl
                            border
                            border-red-500/25
                            bg-red-600/[0.08]
                            px-5
                            py-4
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.25em]
                            text-red-500

                            transition-all
                            duration-300

                            hover:border-red-500
                            hover:bg-red-600
                            hover:text-white
                            hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]

                            active:scale-[0.98]
                        "
                    >

                        {/* Shine */}

                        <span
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                -translate-x-full
                                bg-gradient-to-r
                                from-transparent
                                via-white/10
                                to-transparent
                                transition-transform
                                duration-700
                                group-hover/button:translate-x-full
                            "
                        />

                        {/* Button Content */}

                        <span
                            className="
                                relative
                                z-10
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                whitespace-nowrap
                            "
                        >
                            VIEW EVENT

                            <span
                                className="
                                    text-sm
                                    transition-transform
                                    duration-300
                                    group-hover/button:translate-x-1
                                "
                            >
                                →
                            </span>

                        </span>


                    </a>


                </div>
                <div className="h-3"></div>
            </div>

        </article>
    );
};

export default EventCard;