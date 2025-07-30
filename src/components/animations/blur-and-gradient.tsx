export default function BlurAndGradient({ className }: { className?: string }) {
  return (
    <svg
      width="1105"
      height="652"
      viewBox="0 0 1105 652"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "hero-eclipse"}
    >
      <g filter="url(#filter0_f_4962_6692)">
        <path
          d="M1212.05 551.722C1212.05 376.852 1142.58 209.144 1018.93 85.4923C895.278 -38.1596 727.57 -107.626 552.7 -107.626C377.83 -107.626 210.122 -38.1596 86.4698 85.4922C-37.182 209.144 -106.649 376.852 -106.649 551.722L552.7 551.722H1212.05Z"
          fill="url(#paint0_radial_4962_6692)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_4962_6692"
          x="-206.649"
          y="-207.626"
          width="1518.7"
          height="859.349"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_4962_6692"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4962_6692"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(552.7 551.722) rotate(90) scale(659.349)"
        >
          <stop offset="0.2" stopColor="white" />
          <stop offset="0.5" stopColor="#007CD7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#007CD7" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
