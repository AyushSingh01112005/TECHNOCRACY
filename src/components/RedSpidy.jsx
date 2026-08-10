import React, { useEffect, useState , useRef} from "react";

const RandomSpider = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [rotation, setRotation] = useState(0);
    
    const positionRef = useRef(position);
    
    useEffect(() => {
        positionRef.current = position;
    }, [position]);

    useEffect(() => {
        const moveSpider = () => {
            const newX = Math.random() * 82 + 9;
            const newY = Math.random() * 76 + 12;

            const dx = newX - positionRef.current.x;
            const dy = newY - positionRef.current.y;

            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            setRotation(angle);
            setPosition({ x: newX, y: newY });
        };

        moveSpider(); // immediate first move

        const interval = setInterval(moveSpider, 1100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{`

                 
                .spider-leg {
                    transform-box: fill-box;
                    transform-origin: center;
                }

                /* Alternating tripod gait */

                .leg-a {
                    animation: legA 0.55s infinite ease-in-out;
                }

                .leg-b {
                    animation: legB 0.55s infinite ease-in-out;
                }

                @keyframes legA {

                    0% {
                        transform: rotate(0deg);
                    }

                    25% {
                        transform: rotate(-13deg);
                    }

                    50% {
                        transform: rotate(0deg);
                    }

                    75% {
                        transform: rotate(13deg);
                    }

                    100% {
                        transform: rotate(0deg);
                    }
                }

                @keyframes legB {

                    0% {
                        transform: rotate(0deg);
                    }

                    25% {
                        transform: rotate(13deg);
                    }

                    50% {
                        transform: rotate(0deg);
                    }

                    75% {
                        transform: rotate(-13deg);
                    }

                    100% {
                        transform: rotate(0deg);
                    }
                }


                /* =========================================
                   INDIVIDUAL LEG JOINTS
                ========================================= */

                .joint-a {
                    animation: jointA 0.55s infinite ease-in-out;
                }

                .joint-b {
                    animation: jointB 0.55s infinite ease-in-out;
                }

                @keyframes jointA {

                    0% {
                        transform: rotate(0deg);
                    }

                    25% {
                        transform: rotate(18deg);
                    }

                    50% {
                        transform: rotate(0deg);
                    }

                    75% {
                        transform: rotate(-18deg);
                    }

                    100% {
                        transform: rotate(0deg);
                    }
                }

                @keyframes jointB {

                    0% {
                        transform: rotate(0deg);
                    }

                    25% {
                        transform: rotate(-18deg);
                    }

                    50% {
                        transform: rotate(0deg);
                    }

                    75% {
                        transform: rotate(18deg);
                    }

                    100% {
                        transform: rotate(0deg);
                    }
                }


                /* =========================================
                   BODY BOB
                ========================================= */

                .spider-body {
                    animation: bodyBob 0.55s infinite alternate ease-in-out;
                    transform-box: fill-box;
                    transform-origin: center;
                }

                @keyframes bodyBob {

                    0% {
                        transform: translateY(0px);
                    }

                    100% {
                        transform: translateY(-2px);
                    }
                }


                /* =========================================
                   SMALL LEG TIP MOVEMENT
                ========================================= */

                .foot-a {
                    animation: footA 0.55s infinite ease-in-out;
                }

                .foot-b {
                    animation: footB 0.55s infinite ease-in-out;
                }

                @keyframes footA {

                    0% {
                        transform: translate(0px, 0px);
                    }

                    25% {
                        transform: translate(2px, -3px);
                    }

                    50% {
                        transform: translate(0px, 0px);
                    }

                    75% {
                        transform: translate(-2px, 2px);
                    }

                    100% {
                        transform: translate(0px, 0px);
                    }
                }

                @keyframes footB {

                    0% {
                        transform: translate(0px, 0px);
                    }

                    25% {
                        transform: translate(-2px, 2px);
                    }

                    50% {
                        transform: translate(0px, 0px);
                    }

                    75% {
                        transform: translate(2px, -3px);
                    }

                    100% {
                        transform: translate(0px, 0px);
                    }
                }


                /* =========================================
                   EYES
                ========================================= */

                .eye-glow {
                    animation: eyeGlow 1.2s infinite alternate;
                }

                @keyframes eyeGlow {

                    0% {
                        opacity: 0.5;
                    }

                    100% {
                        opacity: 1;
                    }
                }

            `}</style>

            {/* =========================================
                MOVING SPIDER
            ========================================= */}

            <div
                className="pointer-events-none fixed z-30"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,

                    transform: `
                        translate(-50%, -50%)
                        rotate(${rotation}deg)
                    `,

                   transition:
    "left 1.5s cubic-bezier(.45,.05,.55,.95), top 1.5s cubic-bezier(.45,.05,.55,.95), transform 1.5s ease-in-out",
  }}
            >

                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    {/* =====================================
                        SPIDER LEGS
                    ===================================== */}

                    {/* ---------------- LEFT REAR ---------------- */}

                    <g className="spider-leg leg-a">

                        <path
                            d="M58 65 Q42 55 25 40"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M25 40 Q15 32 8 20"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M8 20 Q5 15 6 9"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="25"
                            cy="40"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- LEFT MID REAR ---------------- */}

                    <g className="spider-leg leg-b">

                        <path
                            d="M53 70 Q35 65 18 62"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M18 62 Q8 60 3 52"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M3 52 Q0 47 2 42"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="18"
                            cy="62"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- LEFT MID FRONT ---------------- */}

                    <g className="spider-leg leg-a">

                        <path
                            d="M53 78 Q35 82 18 92"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M18 92 Q8 98 5 108"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M5 108 Q3 114 6 119"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="18"
                            cy="92"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- LEFT FRONT ---------------- */}

                    <g className="spider-leg leg-b">

                        <path
                            d="M58 84 Q45 95 32 110"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M32 110 Q24 119 23 130"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M23 130 Q22 136 25 141"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="32"
                            cy="110"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* =====================================
                        RIGHT LEGS
                    ===================================== */}

                    {/* ---------------- RIGHT REAR ---------------- */}

                    <g className="spider-leg leg-b">

                        <path
                            d="M92 65 Q108 55 125 40"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M125 40 Q135 32 142 20"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M142 20 Q145 15 144 9"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="125"
                            cy="40"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- RIGHT MID REAR ---------------- */}

                    <g className="spider-leg leg-a">

                        <path
                            d="M97 70 Q115 65 132 62"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M132 62 Q142 60 147 52"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M147 52 Q150 47 148 42"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="132"
                            cy="62"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- RIGHT MID FRONT ---------------- */}

                    <g className="spider-leg leg-b">

                        <path
                            d="M97 78 Q115 82 132 92"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M132 92 Q142 98 145 108"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M145 108 Q147 114 144 119"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="132"
                            cy="92"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* ---------------- RIGHT FRONT ---------------- */}

                    <g className="spider-leg leg-a">

                        <path
                            d="M92 84 Q105 95 118 110"
                            stroke="#450808"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M118 110 Q126 119 127 130"
                            stroke="#991b1b"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <path
                            d="M127 130 Q128 136 125 141"
                            stroke="#b91c1c"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="118"
                            cy="110"
                            r="3"
                            fill="#300505"
                        />

                    </g>


                    {/* =====================================
                        BODY
                    ===================================== */}

                    <g className="spider-body">

                        {/* Abdomen shadow */}

                        <ellipse
                            cx="75"
                            cy="82"
                            rx="28"
                            ry="35"
                            fill="#250303"
                        />

                        {/* Abdomen */}

                        <ellipse
                            cx="75"
                            cy="80"
                            rx="25"
                            ry="32"
                            fill="#7f1d1d"
                        />

                        <ellipse
                            cx="75"
                            cy="78"
                            rx="17"
                            ry="23"
                            fill="#991b1b"
                        />

                        {/* Abdomen highlight */}

                        <ellipse
                            cx="69"
                            cy="69"
                            rx="7"
                            ry="12"
                            fill="#b91c1c"
                            opacity="0.45"
                        />

                        {/* Abdomen marking */}

                        <path
                            d="M75 70 L70 78 L75 84 L80 78 Z"
                            fill="#dc2626"
                            opacity="0.7"
                        />

                        <path
                            d="M75 88 L71 95 L75 101 L79 95 Z"
                            fill="#dc2626"
                            opacity="0.55"
                        />


                        {/* =================================
                            HEAD
                        ================================= */}

                        <circle
                            cx="75"
                            cy="45"
                            r="21"
                            fill="#450808"
                        />

                        <circle
                            cx="75"
                            cy="43"
                            r="17"
                            fill="#7f1d1d"
                        />

                        <circle
                            cx="75"
                            cy="41"
                            r="11"
                            fill="#b91c1c"
                        />


                        {/* =================================
                            EYES
                        ================================= */}

                        <circle
                            cx="68"
                            cy="36"
                            r="4"
                            fill="#050000"
                        />

                        <circle
                            cx="82"
                            cy="36"
                            r="4"
                            fill="#050000"
                        />

                        <circle
                            className="eye-glow"
                            cx="67"
                            cy="35"
                            r="1.5"
                            fill="#ef4444"
                        />

                        <circle
                            className="eye-glow"
                            cx="81"
                            cy="35"
                            r="1.5"
                            fill="#ef4444"
                        />

                        {/* Small eyes */}

                        <circle
                            cx="63"
                            cy="42"
                            r="2.5"
                            fill="#050000"
                        />

                        <circle
                            cx="87"
                            cy="42"
                            r="2.5"
                            fill="#050000"
                        />

                        <circle
                            cx="66"
                            cy="47"
                            r="2"
                            fill="#050000"
                        />

                        <circle
                            cx="84"
                            cy="47"
                            r="2"
                            fill="#050000"
                        />


                        {/* =================================
                            FANGS
                        ================================= */}

                        <path
                            d="M68 53 L65 62 L71 58 Z"
                            fill="#050000"
                        />

                        <path
                            d="M82 53 L85 62 L79 58 Z"
                            fill="#050000"
                        />

                    </g>


                    {/* =====================================
                        WEB THREAD
                    ===================================== */}

                    <line
                        x1="75"
                        y1="0"
                        x2="75"
                        y2="20"
                        stroke="#ffffff"
                        strokeOpacity="0.12"
                        strokeWidth="0.7"
                        strokeDasharray="2 3"
                    />

                </svg>
            </div>
        </>
    );
};

export default RandomSpider;