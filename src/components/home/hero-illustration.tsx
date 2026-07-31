export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1B33" />
          <stop offset="55%" stopColor="#0F2747" />
          <stop offset="100%" stopColor="#003C7A" />
        </linearGradient>
        <linearGradient id="rigFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A63" />
          <stop offset="100%" stopColor="#0A1B33" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#heroSky)" />

      {/* distant offshore platform silhouette */}
      <g opacity="0.5" fill="url(#rigFade)">
        <rect x="120" y="520" width="14" height="220" />
        <rect x="220" y="480" width="14" height="260" />
        <rect x="320" y="540" width="14" height="200" />
        <rect x="150" y="470" width="230" height="60" rx="4" />
        <rect x="190" y="410" width="18" height="70" />
        <rect x="260" y="390" width="10" height="90" />
      </g>

      {/* refinery towers, right side */}
      <g opacity="0.65" fill="url(#rigFade)">
        <rect x="1180" y="470" width="30" height="270" rx="2" />
        <rect x="1230" y="410" width="24" height="330" rx="2" />
        <rect x="1280" y="500" width="20" height="240" rx="2" />
        <rect x="1330" y="440" width="34" height="300" rx="2" />
        <circle cx="1345" cy="420" r="16" />
        <rect x="1390" y="520" width="16" height="220" rx="2" />
        <rect x="1430" y="460" width="26" height="280" rx="2" />
        {/* connecting pipe */}
        <rect x="1180" y="600" width="280" height="8" rx="4" />
      </g>

      {/* pipeline running along the base */}
      <g opacity="0.55" stroke="#3E6B9C" strokeWidth="3" fill="none">
        <path d="M0 800 C 300 770, 500 820, 800 790 C 1100 760, 1300 800, 1600 780" />
        <path d="M0 830 C 300 810, 500 850, 800 830 C 1100 810, 1300 840, 1600 820" strokeOpacity="0.5" />
      </g>

      {/* horizon glow */}
      <rect x="0" y="700" width="1600" height="200" fill="#0057B8" opacity="0.12" />
    </svg>
  );
}
