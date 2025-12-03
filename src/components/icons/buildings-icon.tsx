export function BuildingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left yellow building */}
      <rect x="15" y="50" width="55" height="120" fill="#F5B800" stroke="#1a1a1a" strokeWidth="4" rx="4" />
      {/* Left building windows */}
      <rect x="25" y="65" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="25" y="95" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="25" y="125" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="45" y="65" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="45" y="95" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="45" y="125" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Window highlights */}
      <rect x="27" y="67" width="5" height="5" fill="white" />
      <rect x="27" y="97" width="5" height="5" fill="white" />
      <rect x="27" y="127" width="5" height="5" fill="white" />
      <rect x="47" y="67" width="5" height="5" fill="white" />
      <rect x="47" y="97" width="5" height="5" fill="white" />
      <rect x="47" y="127" width="5" height="5" fill="white" />

      {/* Center red building (taller) */}
      <rect x="60" y="20" width="80" height="150" fill="#B91C1C" stroke="#1a1a1a" strokeWidth="4" rx="4" />
      {/* Center building windows - row 1 */}
      <rect x="75" y="35" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="107" y="35" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Center building windows - row 2 */}
      <rect x="75" y="70" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="107" y="70" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Center building windows - row 3 */}
      <rect x="75" y="105" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="107" y="105" width="18" height="18" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Window highlights */}
      <rect x="77" y="37" width="6" height="6" fill="white" />
      <rect x="109" y="37" width="6" height="6" fill="white" />
      <rect x="77" y="72" width="6" height="6" fill="white" />
      <rect x="109" y="72" width="6" height="6" fill="white" />
      <rect x="77" y="107" width="6" height="6" fill="white" />
      <rect x="109" y="107" width="6" height="6" fill="white" />
      {/* Center building door */}
      <rect x="85" y="140" width="30" height="30" fill="#FEF3C7" stroke="#1a1a1a" strokeWidth="3" rx="2" />
      <rect x="92" y="148" width="6" height="18" fill="#1a1a1a" />
      <rect x="102" y="148" width="6" height="18" fill="#1a1a1a" />

      {/* Right yellow building */}
      <rect x="130" y="50" width="55" height="120" fill="#F5B800" stroke="#1a1a1a" strokeWidth="4" rx="4" />
      {/* Right building windows */}
      <rect x="140" y="65" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="140" y="95" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="140" y="125" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="160" y="65" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="160" y="95" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="160" y="125" width="15" height="15" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Window highlights */}
      <rect x="142" y="67" width="5" height="5" fill="white" />
      <rect x="142" y="97" width="5" height="5" fill="white" />
      <rect x="142" y="127" width="5" height="5" fill="white" />
      <rect x="162" y="67" width="5" height="5" fill="white" />
      <rect x="162" y="97" width="5" height="5" fill="white" />
      <rect x="162" y="127" width="5" height="5" fill="white" />

      {/* Ground shadow lines */}
      <line x1="10" y1="172" x2="60" y2="172" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <line x1="140" y1="172" x2="190" y2="172" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
