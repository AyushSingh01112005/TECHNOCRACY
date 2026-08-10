import BlackSpider from "../assets/chorPolice.webm";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const [isEntered, setIsEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (video && !isEntered) {
      video.currentTime = 7;

      video.play().catch(() => {
        // Browser may block autoplay until interaction.
      });
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;

    if (video && !isEntered) {
      video.currentTime = 7;

      video.play().catch(() => {
        // Ignore autoplay errors.
      });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (
      isEntered &&
      video &&
      video.currentTime >= 30.7 &&
      !isTransitioning
    ) {
      setIsTransitioning(true);

      timeoutRef.current = setTimeout(() => {
        navigate("/home", {
          state: {
            from: "/",
            whiteTransition: true,
          },
        });
      }, 500);
    }
  };

  const handleEnter = async () => {
    // Prevent multiple clicks
    if (isEntered || isTransitioning) return;

    const video = videoRef.current;

    setIsEntered(true);

    if (!video) return;

    try {
      // Jump to the entrance animation
      video.currentTime = 24;

      await video.play();
    } catch (error) {
      console.log("Video play failed:", error);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      <video
        ref={videoRef}
        src={BlackSpider}
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        className="fixed inset-0 z-0 h-full w-full object-cover"
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-100
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]
        "
      />

      {isTransitioning && (
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[99999]
            bg-white
            animate-white-cover
          "
        />
      )}

      {!isEntered && (
        <div
          className="
            relative
            z-50
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            px-4
            text-center
          "
        >

          <div className="relative flex items-center justify-center">

            <svg
              className="
                pointer-events-none
                absolute
                right-[23%]
                top-1/2
                z-10
                h-48
                w-72
                -translate-y-1/2
                opacity-70
                sm:h-64
                sm:w-80
                md:h-80
                md:w-[400px]
              "
              viewBox="0 0 750 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  id="webGlow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="#ef4444"
                    stopOpacity="0.45"
                  />

                  <stop
                    offset="45%"
                    stopColor="#ef4444"
                    stopOpacity="0.12"
                  />

                  <stop
                    offset="100%"
                    stopColor="#000000"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>

              {/* WEB GLOW */}
              <circle
                cx="200"
                cy="150"
                r="115"
                fill="url(#webGlow)"
              />

              <g
                stroke="#ffffff"
                strokeWidth="3"
                opacity="0.42"
                strokeLinecap="round"
              >
                <line x1="200" y1="150" x2="15" y2="15" />
                <line x1="200" y1="150" x2="10" y2="45" />
                <line x1="200" y1="150" x2="5" y2="80" />
                <line x1="200" y1="150" x2="0" y2="115" />
                <line x1="200" y1="150" x2="0" y2="150" />
                <line x1="200" y1="150" x2="55" y2="0" />
                <line x1="200" y1="150" x2="100" y2="0" />
                <line x1="200" y1="150" x2="150" y2="0" />
                <line x1="200" y1="150" x2="200" y2="0" />
                <line x1="200" y1="150" x2="250" y2="0" />
                <line x1="200" y1="150" x2="300" y2="0" />
                <line x1="200" y1="150" x2="345" y2="5" />
                <line x1="200" y1="150" x2="385" y2="15" />
                <line x1="200" y1="150" x2="395" y2="45" />
                <line x1="200" y1="150" x2="400" y2="80" />
                <line x1="200" y1="150" x2="400" y2="115" />
                <line x1="200" y1="150" x2="400" y2="150" />
                <line x1="200" y1="150" x2="395" y2="185" />
                <line x1="200" y1="150" x2="385" y2="220" />
                <line x1="200" y1="150" x2="350" y2="270" />
                <line x1="200" y1="150" x2="310" y2="300" />
                <line x1="200" y1="150" x2="255" y2="300" />
                <line x1="200" y1="150" x2="200" y2="300" />
                <line x1="200" y1="150" x2="145" y2="300" />
                <line x1="200" y1="150" x2="90" y2="300" />
                <line x1="200" y1="150" x2="45" y2="270" />
                <line x1="200" y1="150" x2="15" y2="220" />
                <line x1="200" y1="150" x2="5" y2="185" />
              </g>

              <g
                fill="none"
                stroke="#ef4444"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M 188 150 Q 192 140 200 140 Q 208 140 212 150 Q 208 160 200 160 Q 192 160 188 150 Z"
                  strokeWidth="1.7"
                  opacity="0.7"
                />

                <path
                  d="M 175 150 Q 182 130 200 130 Q 218 130 225 150 Q 218 170 200 170 Q 182 170 175 150 Z"
                  strokeWidth="2"
                  opacity="0.65"
                />

                <path
                  d="M 160 150 Q 170 118 200 118 Q 230 118 240 150 Q 230 182 200 182 Q 170 182 160 150 Z"
                  strokeWidth="3"
                  opacity="0.62"
                />

                <path
                  d="M 142 150 Q 158 102 200 102 Q 242 102 258 150 Q 242 198 200 198 Q 158 198 142 150 Z"
                  strokeWidth="4"
                  opacity="0.58"
                />

                <path
                  d="M 122 150 Q 145 85 200 85 Q 255 85 278 150 Q 255 215 200 215 Q 145 215 122 150 Z"
                  strokeWidth="5"
                  opacity="0.55"
                />
              </g>

              <g
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M 102 150 Q 130 65 200 65 Q 270 65 298 150 Q 270 235 200 235 Q 130 235 102 150 Z"
                  strokeWidth="5"
                  opacity="0.42"
                />

                <path
                  d="M 82 150 Q 115 45 200 45 Q 285 45 318 150 Q 285 255 200 255 Q 115 255 82 150 Z"
                  strokeWidth="5"
                  opacity="0.38"
                />

                <path
                  d="M 60 150 Q 95 25 200 25 Q 305 25 340 150 Q 305 275 200 275 Q 95 275 60 150 Z"
                  strokeWidth="5"
                  opacity="0.34"
                />

                <path
                  d="M 38 150 Q 72 5 200 5 Q 328 5 362 150 Q 328 295 200 295 Q 72 295 38 150 Z"
                  strokeWidth="5"
                  opacity="0.28"
                />
              </g>
            </svg>

            <h1
              className="
                relative
                
                bg-gradient-to-b
                from-white
                via-gray-100
                to-gray-400
                bg-clip-text
                text-5xl
                font-black
                tracking-[0.15em]
                text-transparent
                drop-shadow-2xl
                sm:text-7xl
                md:text-8xl
              "
            >
              CODEUTSAVA 10.0
            </h1>
          </div>

          <h2
            className="
              relative
              z-10
              mt-2
              text-xl
              font-bold
              tracking-[0.3em]
              text-red-500
              drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]
              sm:text-3xl
              md:text-4xl
            "
          >
            THE WEB OF CODERS
          </h2>

          <div className="h-10" />

          <button
            type="button"
            onClick={handleEnter}
            disabled={isEntered || isTransitioning}
            className="
              group
              relative
              z-50
              flex
              w-48
              items-center
              justify-center
              overflow-hidden
              rounded-sm
              border
              border-red-500/80
              bg-red-950/20
              py-4
              text-xs
              font-bold
              uppercase
              tracking-[0.4em]
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              ease-out

              hover:scale-105
              hover:border-red-400
              hover:bg-red-600/80
              hover:shadow-[0_0_30px_rgba(239,68,68,0.55)]

              active:scale-95

              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-red-400/30
                to-transparent
                transition-transform
                duration-700
                ease-out
                group-hover:translate-x-full
              "
            />

            <span
              className="
                absolute
                inset-0
                bg-red-500/0
                transition-all
                duration-300
                group-hover:bg-red-500/20
              "
            />

            <span
              className="
                absolute
                left-0
                top-0
                h-3
                w-3
                border-l-2
                border-t-2
                border-red-400
                transition-all
                duration-300
                group-hover:h-5
                group-hover:w-5
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                h-3
                w-3
                border-b-2
                border-r-2
                border-red-400
                transition-all
                duration-300
                group-hover:h-5
                group-hover:w-5
              "
            />

            <span
              className="
                relative
                z-10
                font-black
                transition-all
                duration-300
                group-hover:tracking-[0.5em]
              "
            >
              ENTER
            </span>

            <span
              className="
                relative
                z-10
                ml-3
                translate-x-0
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              →
            </span>
          </button>
          <div
            className="
              relative
              mt-8
              w-32
              animate-spider-bob
              sm:w-40
            "
          >
            <div
              className="
                absolute
                -top-[150px]
                left-1/2
                h-[150px]
                w-[2.5px]
                -translate-x-1/2
                bg-gradient-to-b
                from-transparent
                via-white/80
                to-white
                shadow-[0_0_8px_rgba(255,255,255,0.8)]
              "
            />

            <svg
              viewBox="0 0 160 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  id="v-abdomenShell"
                  cx="30%"
                  cy="25%"
                  r="75%"
                >
                  <stop offset="0%" stopColor="#2a1212" />
                  <stop offset="25%" stopColor="#140505" />
                  <stop offset="65%" stopColor="#080202" />
                  <stop offset="92%" stopColor="#030000" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>

                <radialGradient
                  id="v-carapaceShell"
                  cx="35%"
                  cy="30%"
                  r="65%"
                >
                  <stop offset="0%" stopColor="#3d1818" />
                  <stop offset="40%" stopColor="#1a0808" />
                  <stop offset="80%" stopColor="#0a0202" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>

                <linearGradient
                  id="v-legSeg"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1f0a0a" />
                  <stop offset="40%" stopColor="#0d0404" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>

                <radialGradient
                  id="v-specular"
                  cx="35%"
                  cy="30%"
                  r="55%"
                >
                  <stop
                    offset="0%"
                    stopColor="#ffffff"
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="25%"
                    stopColor="#ffffff"
                    stopOpacity="0.05"
                  />

                  <stop
                    offset="100%"
                    stopColor="#ffffff"
                    stopOpacity="0"
                  />
                </radialGradient>

                <radialGradient
                  id="v-redGlow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="#dc2626"
                    stopOpacity="0.7"
                  />

                  <stop
                    offset="50%"
                    stopColor="#991b1b"
                    stopOpacity="0.3"
                  />

                  <stop
                    offset="100%"
                    stopColor="#000000"
                    stopOpacity="0"
                  />
                </radialGradient>

                <radialGradient
                  id="v-eyeLens"
                  cx="35%"
                  cy="30%"
                  r="65%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#fca5a5" />
                  <stop offset="55%" stopColor="#7f1d1d" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>

                <filter
                  id="v-threadGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="1"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter
                  id="v-softShadow"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="3"
                  />

                  <feOffset
                    dx="2"
                    dy="3"
                    result="offsetblur"
                  />

                  <feComponentTransfer>
                    <feFuncA
                      type="linear"
                      slope="0.5"
                    />
                  </feComponentTransfer>

                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <line
                x1="80"
                y1="10"
                x2="80"
                y2="38"
                stroke="#ffffff"
                strokeWidth="3"
                opacity="0.4"
                filter="url(#v-threadGlow)"
              />

              <line
                x1="80"
                y1="0"
                x2="80"
                y2="38"
                stroke="#ffffff"
                strokeWidth="1.8"
                opacity="0.9"
              />


              <g className="v-spider-limb animate-fast-l4">
                <path
                  d="M66 86 Q48 72 30 64"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M30 64 Q14 58 4 50"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M4 50 Q2 46 3 42"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="30" cy="64" r="3.2" fill="#0a0202" />
                <circle cx="4" cy="50" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-r4">
                <path
                  d="M94 86 Q112 72 130 64"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M130 64 Q146 58 156 50"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M156 50 Q158 46 157 42"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="130" cy="64" r="3.2" fill="#0a0202" />
                <circle cx="156" cy="50" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-l3">
                <path
                  d="M68 90 Q48 84 26 80"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5.2"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M26 80 Q10 78 2 70"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M2 70 Q0 66 1 62"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="26" cy="80" r="3.2" fill="#0a0202" />
                <circle cx="2" cy="70" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-r3">
                <path
                  d="M92 90 Q112 84 134 80"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5.2"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M134 80 Q150 78 158 70"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M158 70 Q160 66 159 62"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="134" cy="80" r="3.2" fill="#0a0202" />
                <circle cx="158" cy="70" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-l2">
                <path
                  d="M70 92 Q50 96 28 104"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5.2"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M28 104 Q14 112 8 122"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M8 122 Q6 126 7 130"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="28" cy="104" r="3.2" fill="#0a0202" />
                <circle cx="8" cy="122" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-r2">
                <path
                  d="M90 92 Q110 96 132 104"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5.2"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M132 104 Q146 112 152 122"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M152 122 Q154 126 153 130"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="132" cy="104" r="3.2" fill="#0a0202" />
                <circle cx="152" cy="122" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-l1">
                <path
                  d="M72 94 Q58 104 42 116"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M42 116 Q32 126 28 136"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M28 136 Q27 140 28 144"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="42" cy="116" r="3.2" fill="#0a0202" />
                <circle cx="28" cy="136" r="2.2" fill="#0a0202" />
              </g>

              <g className="v-spider-limb animate-fast-r1">
                <path
                  d="M88 94 Q102 104 118 116"
                  stroke="url(#v-legSeg)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#v-softShadow)"
                />

                <path
                  d="M118 116 Q128 126 132 136"
                  stroke="url(#v-legSeg)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M132 136 Q133 140 132 144"
                  stroke="url(#v-legSeg)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <circle cx="118" cy="116" r="3.2" fill="#0a0202" />
                <circle cx="132" cy="136" r="2.2" fill="#0a0202" />
              </g>


              <path
                d="M80 68 C62 68, 52 82, 52 102 C52 126, 62 140, 80 142 C98 140, 108 126, 108 102 C108 82, 98 68, 80 68 Z"
                fill="url(#v-abdomenShell)"
                filter="url(#v-softShadow)"
              />

              <path
                d="M80 72 C66 72, 58 84, 58 100 C58 110, 62 118, 68 122 C64 114, 62 104, 66 92 C70 80, 76 74, 80 72 Z"
                fill="url(#v-specular)"
              />

              <path
                d="M80 108 L76 116 L80 120 L84 116 Z"
                fill="#b91c1c"
                opacity="0.85"
              />

              <path
                d="M80 122 L76 130 L80 134 L84 130 Z"
                fill="#b91c1c"
                opacity="0.85"
              />

              <ellipse
                cx="80"
                cy="120"
                rx="10"
                ry="16"
                fill="url(#v-redGlow)"
                opacity="0.5"
              />

              <path
                d="M76 64 L76 72 L84 72 L84 64 Q80 62 76 64 Z"
                fill="#080202"
              />

              <path
                d="M80 38 C66 38, 58 46, 58 58 C58 66, 64 72, 72 74 L88 74 C96 72, 102 66, 102 58 C102 46, 94 38, 80 38 Z"
                fill="url(#v-carapaceShell)"
                filter="url(#v-softShadow)"
              />

              <circle cx="76" cy="46" r="3.5" fill="#000000" />

              <circle
                cx="76"
                cy="45"
                r="1.4"
                fill="url(#v-eyeLens)"
              />

              <circle
                cx="75.3"
                cy="44.3"
                r="0.5"
                fill="#ffffff"
                opacity="0.9"
              />

              <circle cx="84" cy="46" r="3.5" fill="#000000" />

              <circle
                cx="84"
                cy="45"
                r="1.4"
                fill="url(#v-eyeLens)"
              />

              <circle
                cx="83.3"
                cy="44.3"
                r="0.5"
                fill="#ffffff"
                opacity="0.9"
              />

              {/* CHELICERAE */}
              <path
                d="M76 62 L73 72 L78 68 Z"
                fill="#0a0202"
              />

              <path
                d="M84 62 L87 72 L82 68 Z"
                fill="#0a0202"
              />

              <path
                d="M74 70 L73 74"
                stroke="#dc2626"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.8"
              />

              <path
                d="M86 70 L87 74"
                stroke="#dc2626"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spiderBob {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes fastLegFlexL {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(-6deg);
          }
        }

        @keyframes fastLegFlexR {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(6deg);
          }
        }

        @keyframes fastLegAltL {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(7deg);
          }
        }

        @keyframes fastLegAltR {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(-7deg);
          }
        }

        .animate-spider-bob {
          animation: spiderBob 2.5s ease-in-out infinite;
        }

        .animate-fast-l1 {
          animation: fastLegFlexL 0.35s ease-in-out infinite;
          transform-origin: 80px 80px;
        }

        .animate-fast-r1 {
          animation: fastLegFlexR 0.35s ease-in-out infinite 0.08s;
          transform-origin: 80px 80px;
        }

        .animate-fast-l2 {
          animation: fastLegAltL 0.28s ease-in-out infinite 0.12s;
          transform-origin: 80px 80px;
        }

        .animate-fast-r2 {
          animation: fastLegAltR 0.28s ease-in-out infinite 0.05s;
          transform-origin: 80px 80px;
        }

        .animate-fast-l3 {
          animation: fastLegFlexL 0.4s ease-in-out infinite 0.15s;
          transform-origin: 80px 80px;
        }

        .animate-fast-r3 {
          animation: fastLegFlexR 0.4s ease-in-out infinite 0.1s;
          transform-origin: 80px 80px;
        }

        .animate-fast-l4 {
          animation: fastLegAltL 0.32s ease-in-out infinite 0.07s;
          transform-origin: 80px 80px;
        }

        .animate-fast-r4 {
          animation: fastLegAltR 0.32s ease-in-out infinite 0.18s;
          transform-origin: 80px 80px;
        }
      `}</style>

      <style>{`
        @keyframes radialWhiteExpand {
          0%, 9% {
            clip-path: circle(0% at 50% 50%);
            opacity: 0.3;
          }

          60% {
            opacity: 1;
          }

          100% {
            clip-path: circle(150% at 50% 50%);
            opacity: 1;
          }
        }

        .animate-white-cover {
          animation: radialWhiteExpand
            1100ms
            cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        }
      `}</style>
    </div>
  );
};

export default Intro;