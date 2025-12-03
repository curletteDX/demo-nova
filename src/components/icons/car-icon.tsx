export function CarIcon({ className = "w-24 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Car body outline */}
      <path d="M20 50 L20 40 Q20 35 25 35 L45 35 L55 20 Q58 15 65 15 L85 15 Q90 15 92 20 L98 35 Q100 35 100 40 L100 50" />

      {/* Roof line */}
      <path d="M45 35 L55 20 Q58 18 65 18 L82 18 Q87 18 89 22 L95 35" />

      {/* Window */}
      <path d="M50 33 L58 22 L80 22 L86 33" />

      {/* Bottom line */}
      <line x1="15" y1="55" x2="105" y2="55" />

      {/* Undercarriage */}
      <path d="M30 55 L30 50 L90 50 L90 55" />

      {/* Left wheel - red fill */}
      <circle cx="35" cy="55" r="10" className="stroke-current fill-primary" />
      <circle cx="35" cy="55" r="4" className="stroke-current fill-white" />

      {/* Right wheel - red fill */}
      <circle cx="85" cy="55" r="10" className="stroke-current fill-primary" />
      <circle cx="85" cy="55" r="4" className="stroke-current fill-white" />

      {/* Taillight - red */}
      <rect x="18" y="38" width="4" height="6" rx="1" className="fill-primary stroke-primary" />
    </svg>
  )
}
