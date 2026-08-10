export default function SpiderCrawler() {
  return (
    <div className="spider-crawler">
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* ── Exoskeleton materials ── */}
          <radialGradient id="abdomenShell" cx="30%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#2a1212" />
            <stop offset="25%" stopColor="#140505" />
            <stop offset="65%" stopColor="#080202" />
            <stop offset="92%" stopColor="#030000" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <radialGradient id="carapaceShell" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#3d1818" />
            <stop offset="40%" stopColor="#1a0808" />
            <stop offset="80%" stopColor="#0a0202" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <linearGradient id="legSeg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f0a0a" />
            <stop offset="40%" stopColor="#0d0404" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* ── Lighting & Depth ── */}
          <radialGradient id="specular" cx="35%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#991b1b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* ── Eye lens ── */}
          <radialGradient id="eyeLens" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="20%" stopColor="#fca5a5" />
            <stop offset="55%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* ── Filters ── */}
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="3" result="offsetblur" />
            <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <style>{`
          /* --- Gait Phase 1 (L1, R2, L3, R4) --- */
          .gait-1-left {
            animation: moveLegLeft 0.6s infinite alternate ease-in-out;
          }
          .gait-1-right {
            animation: moveLegRight 0.6s infinite alternate ease-in-out;
          }

          /* --- Gait Phase 2 (R1, L2, R3, L4) --- */
          .gait-2-left {
            animation: moveLegLeft 0.6s infinite alternate-reverse ease-in-out;
          }
          .gait-2-right {
            animation: moveLegRight 0.6s infinite alternate-reverse ease-in-out;
          }

          /* --- Leg Pivot Animations --- */
          @keyframes moveLegLeft {
            0% {
              transform: rotate(-5deg) translateY(0px);
            }
            50% {
              transform: rotate(3deg) translateY(-3px);
            }
            100% {
              transform: rotate(8deg) translateY(2px);
            }
          }

          @keyframes moveLegRight {
            0% {
              transform: rotate(5deg) translateY(0px);
            }
            50% {
              transform: rotate(-3deg) translateY(-3px);
            }
            100% {
              transform: rotate(-8deg) translateY(2px);
            }
          }

          /* --- Body Breathing / Crawl Bob --- */
          .spider-body {
            animation: bodyBob 0.6s infinite alternate ease-in-out;
            transform-origin: 80px 80px;
          }

          @keyframes bodyBob {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-1.5px); }
          }

          /* Define transforms origins relative to leg joints on cephalothorax */
          .pivot-left-rear   { transform-origin: 66px 86px; }
          .pivot-right-rear  { transform-origin: 94px 86px; }
          .pivot-left-mid1   { transform-origin: 68px 90px; }
          .pivot-right-mid1  { transform-origin: 92px 90px; }
          .pivot-left-mid2   { transform-origin: 70px 92px; }
          .pivot-right-mid2  { transform-origin: 90px 92px; }
          .pivot-left-front  { transform-origin: 72px 94px; }
          .pivot-right-front { transform-origin: 88px 94px; }
        `}</style>

        {/* ═══════════════════════════════════════
            LEGS (Layered with Gait Classes)
        ═══════════════════════════════════════ */}

        {/* Leg IV Left (Rearmost - Gait Phase 2) */}
        <g className="leg-group gait-2-left pivot-left-rear">
          <path d="M66 86 Q48 72 30 64" stroke="url(#legSeg)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M30 64 Q14 58 4 50" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M4 50 Q2 46 3 42" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="30" cy="64" r="3.2" fill="#0a0202" />
          <circle cx="4" cy="50" r="2.2" fill="#0a0202" />
          <path d="M24 62 L20 58 M18 60 L14 56 M10 56 L7 52 M32 66 L28 62" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg IV Right (Rearmost - Gait Phase 1) */}
        <g className="leg-group gait-1-right pivot-right-rear">
          <path d="M94 86 Q112 72 130 64" stroke="url(#legSeg)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M130 64 Q146 58 156 50" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M156 50 Q158 46 157 42" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="130" cy="64" r="3.2" fill="#0a0202" />
          <circle cx="156" cy="50" r="2.2" fill="#0a0202" />
          <path d="M136 62 L140 58 M142 60 L146 56 M150 56 L153 52 M128 66 L132 62" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg III Left (Gait Phase 1) */}
        <g className="leg-group gait-1-left pivot-left-mid1">
          <path d="M68 90 Q48 84 26 80" stroke="url(#legSeg)" strokeWidth="5.2" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M26 80 Q10 78 2 70" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M2 70 Q0 66 1 62" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="26" cy="80" r="3.2" fill="#0a0202" />
          <circle cx="2" cy="70" r="2.2" fill="#0a0202" />
          <path d="M20 78 L16 74 M12 76 L8 72 M6 72 L3 68" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg III Right (Gait Phase 2) */}
        <g className="leg-group gait-2-right pivot-right-mid1">
          <path d="M92 90 Q112 84 134 80" stroke="url(#legSeg)" strokeWidth="5.2" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M134 80 Q150 78 158 70" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M158 70 Q160 66 159 62" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="134" cy="80" r="3.2" fill="#0a0202" />
          <circle cx="158" cy="70" r="2.2" fill="#0a0202" />
          <path d="M140 78 L144 74 M148 76 L152 72 M154 72 L157 68" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg II Left (Gait Phase 2) */}
        <g className="leg-group gait-2-left pivot-left-mid2">
          <path d="M70 92 Q50 96 28 104" stroke="url(#legSeg)" strokeWidth="5.2" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M28 104 Q14 112 8 122" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M8 122 Q6 126 7 130" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="28" cy="104" r="3.2" fill="#0a0202" />
          <circle cx="8" cy="122" r="2.2" fill="#0a0202" />
          <path d="M22 106 L18 110 M16 108 L12 114 M10 118 L7 124" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg II Right (Gait Phase 1) */}
        <g className="leg-group gait-1-right pivot-right-mid2">
          <path d="M90 92 Q110 96 132 104" stroke="url(#legSeg)" strokeWidth="5.2" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M132 104 Q146 112 152 122" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M152 122 Q154 126 153 130" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="132" cy="104" r="3.2" fill="#0a0202" />
          <circle cx="152" cy="122" r="2.2" fill="#0a0202" />
          <path d="M138 106 L142 110 M144 108 L148 114 M150 118 L153 124" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg I Left (Front - Gait Phase 1) */}
        <g className="leg-group gait-1-left pivot-left-front">
          <path d="M72 94 Q58 104 42 116" stroke="url(#legSeg)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M42 116 Q32 126 28 136" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M28 136 Q27 140 28 144" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="42" cy="116" r="3.2" fill="#0a0202" />
          <circle cx="28" cy="136" r="2.2" fill="#0a0202" />
          <path d="M36 114 L32 118 M34 120 L30 126 M30 130 L27 136" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Leg I Right (Front - Gait Phase 2) */}
        <g className="leg-group gait-2-right pivot-right-front">
          <path d="M88 94 Q102 104 118 116" stroke="url(#legSeg)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
          <path d="M118 116 Q128 126 132 136" stroke="url(#legSeg)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M132 136 Q133 140 132 144" stroke="url(#legSeg)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="118" cy="116" r="3.2" fill="#0a0202" />
          <circle cx="132" cy="136" r="2.2" fill="#0a0202" />
          <path d="M124 114 L128 118 M126 120 L130 126 M130 130 L133 136" stroke="#1a0505" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* ═══════════════════════════════════════
            SPIDER BODY (Sways during crawl)
        ═══════════════════════════════════════ */}
        <g className="spider-body">
          {/* ABDOMEN */}
          <path d="M80 68 C62 68, 52 82, 52 102 C52 126, 62 140, 80 142 C98 140, 108 126, 108 102 C108 82, 98 68, 80 68 Z" fill="url(#abdomenShell)" filter="url(#softShadow)" />
          <path d="M80 72 C66 72, 58 84, 58 100 C58 110, 62 118, 68 122 C64 114, 62 104, 66 92 C70 80, 76 74, 80 72 Z" fill="url(#specular)" />
          <path d="M56 92 L54 88 M60 110 L58 106 M104 94 L106 90 M100 112 L102 108 M76 138 L76 134 M84 138 L84 134" stroke="#2a1212" strokeWidth="0.5" opacity="0.4" />
          <path d="M80 108 L76 116 L80 120 L84 116 Z" fill="#b91c1c" opacity="0.85" />
          <path d="M80 122 L76 130 L80 134 L84 130 Z" fill="#b91c1c" opacity="0.85" />
          <ellipse cx="80" cy="120" rx="10" ry="16" fill="url(#redGlow)" opacity="0.5" />
          <path d="M80 78 L78 84 L80 88 L82 84 Z" fill="#7f1d1d" opacity="0.4" />
          <path d="M80 92 L77 98 L80 102 L83 98 Z" fill="#7f1d1d" opacity="0.3" />
          <path d="M56 96 Q80 102 104 96" stroke="#000000" strokeWidth="1" fill="none" opacity="0.35" />
          <path d="M54 108 Q80 114 106 108" stroke="#000000" strokeWidth="1" fill="none" opacity="0.25" />
          <path d="M58 120 Q80 124 102 120" stroke="#000000" strokeWidth="0.8" fill="none" opacity="0.2" />

          {/* PEDICEL */}
          <path d="M76 64 L76 72 L84 72 L84 64 Q80 62 76 64 Z" fill="#080202" />

          {/* CEPHALOTHORAX */}
          <path d="M80 38 C66 38, 58 46, 58 58 C58 66, 64 72, 72 74 L88 74 C96 72, 102 66, 102 58 C102 46, 94 38, 80 38 Z" fill="url(#carapaceShell)" filter="url(#softShadow)" />
          <path d="M80 42 C70 42, 64 48, 64 56 C64 62, 68 66, 74 68 C68 62, 66 54, 70 48 C74 44, 78 42, 80 42 Z" fill="url(#specular)" opacity="0.8" />
          <path d="M78 52 Q80 54 82 52" stroke="#000000" strokeWidth="1" fill="none" opacity="0.5" />

          {/* EYES */}
          <circle cx="76" cy="46" r="3.5" fill="#000000" />
          <circle cx="76" cy="45" r="1.4" fill="url(#eyeLens)" />
          <circle cx="75.3" cy="44.3" r="0.5" fill="#ffffff" opacity="0.9" />

          <circle cx="84" cy="46" r="3.5" fill="#000000" />
          <circle cx="84" cy="45" r="1.4" fill="url(#eyeLens)" />
          <circle cx="83.3" cy="44.3" r="0.5" fill="#ffffff" opacity="0.9" />

          <circle cx="69" cy="48" r="2.4" fill="#000000" />
          <circle cx="69" cy="47.3" r="0.9" fill="#7f1d1d" />
          <circle cx="68.5" cy="46.8" r="0.35" fill="#ffffff" opacity="0.7" />

          <circle cx="91" cy="48" r="2.4" fill="#000000" />
          <circle cx="91" cy="47.3" r="0.9" fill="#7f1d1d" />
          <circle cx="90.5" cy="46.8" r="0.35" fill="#ffffff" opacity="0.7" />

          <circle cx="74" cy="52" r="2" fill="#000000" />
          <circle cx="74" cy="51.4" r="0.7" fill="#991b1b" />

          <circle cx="86" cy="52" r="2" fill="#000000" />
          <circle cx="86" cy="51.4" r="0.7" fill="#991b1b" />

          <circle cx="67" cy="54" r="1.6" fill="#000000" />
          <circle cx="67" cy="53.5" r="0.5" fill="#5c1212" />

          <circle cx="93" cy="54" r="1.6" fill="#000000" />
          <circle cx="93" cy="53.5" r="0.5" fill="#5c1212" />

          {/* CHELICERAE */}
          <path d="M76 62 L73 72 L78 68 Z" fill="#0a0202" />
          <path d="M84 62 L87 72 L82 68 Z" fill="#0a0202" />
          <path d="M74 70 L73 74" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
          <path d="M86 70 L87 74" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

          {/* SPINNERETS */}
          <ellipse cx="75" cy="142" rx="3" ry="5" fill="#0a0202" />
          <ellipse cx="85" cy="142" rx="3" ry="5" fill="#0a0202" />
          <ellipse cx="80" cy="145" rx="2.5" ry="4" fill="#000000" />
          <path d="M75 146 Q73 152 74 158" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" fill="none" />
          <path d="M85 146 Q87 152 86 158" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" fill="none" />
        </g>

        {/* SILK THREAD */}
        <line x1="80" y1="0" x2="80" y2="38" stroke="#ffffff" strokeWidth="0.7" opacity="0.1" strokeDasharray="2 3" />
        <line x1="80.5" y1="0" x2="80.5" y2="38" stroke="#ffffff" strokeWidth="0.3" opacity="0.06" />
      </svg>
    </div>
  );
}