import chorPolice from "../assets/chorPolice.webm";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpiderCrawler2 from "../components/BlackSpider2";

const Intro = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const [isEntered, setIsEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleVideoReady = () => {
    setVideoReady(true);
  };

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

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={chorPolice}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={handleVideoReady}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        className={`fixed inset-0 z-0 h-full w-full object-cover transition-opacity duration-300 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK OVERLAY */}
      {videoReady && (
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-50
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]
          "
        />
      )}

      {/* WHITE TRANSITION */}
      {isTransitioning && (
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[1000]
            bg-white
            animate-white-cover
          "
        />
      )}

      {/* INTRO CONTENT */}
      {!isEntered && videoReady && (
        <div
          className="
            relative
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

            {/* WEB SVG */}
            <svg
              className="
                pointer-events-none
                absolute
                right-[16%]
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

              {/* WEB RADIAL LINES */}
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

              {/* RED WEB */}
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

              {/* WHITE WEB */}
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

            {/* TITLE */}
            <h1
              className="
                relative
                z-20
                bg-gradient-to-b
                from-white
                via-gray-200
                to-gray-500
                bg-clip-text
                text-transparent
                text-5xl
                sm:text-7xl
                md:text-8xl
                font-black
                uppercase
                tracking-[0.18em]
                leading-[0.85]
                animate-title-in
                drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
                [text-shadow:0_0_25px_rgba(239,68,68,0.25)]
                transition-all
                duration-500
                hover:tracking-[0.24em]
              "
            >
              TEAM <br />

              <span className="text-white">
                TECHNO
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-red-500
                  via-red-400
                  to-red-600
                  bg-clip-text
                  text-transparent
                "
              >
                CRACY
              </span>
            </h1>
          </div>

          <div className="min-h-3"></div>

          <div className="h-10" />

          {/* ENTER BUTTON */}
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
                animate-title-in
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

          {/* SPIDER */}
          <div className="relative mt-8 z-30 w-32 sm:w-40 animate-spider-bob">
            <div className="spider-silk" />

            <SpiderCrawler2 className="animate-title-in" />
          </div>
        </div>
      )}

      {/* ANIMATION */}
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