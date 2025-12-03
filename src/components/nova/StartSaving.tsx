"use client"

import Link from "next/link"
import { registerUniformComponent } from "@uniformdev/canvas-react"

function PhoneCallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone outline */}
      <rect x="20" y="10" width="80" height="160" rx="12" stroke="currentColor" strokeWidth="2" fill="white" />
      {/* Speaker */}
      <rect x="45" y="18" width="30" height="4" rx="2" fill="currentColor" />
      {/* Screen area */}
      <rect x="28" y="30" width="64" height="100" fill="#f9f9f9" />
      {/* Avatar circle */}
      <circle cx="60" cy="70" r="28" fill="#F5B820" />
      {/* Avatar face */}
      <circle cx="60" cy="65" r="12" fill="#FFE4C4" />
      {/* Avatar hair */}
      <path d="M48 58 Q48 45 60 45 Q72 45 72 58 L72 65 Q72 55 60 55 Q48 55 48 65 Z" fill="#A52A2A" />
      <path d="M46 65 Q45 75 48 80 L48 60 Q46 60 46 65" fill="#A52A2A" />
      <path d="M74 65 Q75 75 72 80 L72 60 Q74 60 74 65" fill="#A52A2A" />
      {/* Avatar smile */}
      <path d="M55 72 Q60 77 65 72" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Call buttons */}
      <circle cx="45" cy="115" r="12" fill="#B91C1C" />
      <path d="M40 118 L43 115 L40 112 M50 118 L47 115 L50 112" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="75" cy="115" r="12" fill="#16A34A" />
      <path d="M70 115 Q72 112 75 112 Q78 112 80 115 L79 118 Q77 117 75 117 Q73 117 71 118 Z" fill="white" />
      {/* Home button */}
      <circle cx="60" cy="155" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Shadow lines */}
      <line x1="15" y1="172" x2="105" y2="172" stroke="currentColor" strokeWidth="2" />
      <line x1="25" y1="176" x2="95" y2="176" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function PhoneTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone outline */}
      <rect x="30" y="10" width="80" height="160" rx="12" stroke="currentColor" strokeWidth="2" fill="white" />
      {/* Speaker */}
      <rect x="55" y="18" width="30" height="4" rx="2" fill="currentColor" />
      {/* Screen area */}
      <rect x="38" y="30" width="64" height="100" fill="#f9f9f9" />
      {/* Text bubbles */}
      <rect x="42" y="35" width="35" height="18" rx="4" fill="#F5B820" />
      <rect x="65" y="58" width="32" height="28" rx="4" fill="#B91C1C" />
      <rect x="42" y="92" width="40" height="14" rx="4" fill="#F5B820" />
      <rect x="42" y="112" width="25" height="10" rx="4" fill="#F5B820" />
      {/* Avatar with speech bubble - positioned bottom left outside phone */}
      <circle cx="25" cy="145" r="20" fill="#F5B820" />
      <circle cx="25" cy="140" r="9" fill="#FFE4C4" />
      <path d="M16 135 Q16 126 25 126 Q34 126 34 135 L34 140 Q34 132 25 132 Q16 132 16 140 Z" fill="#A52A2A" />
      <path d="M14 138 Q13 145 16 148 L16 135 Q14 135 14 138" fill="#A52A2A" />
      <path d="M36 138 Q37 145 34 148 L34 135 Q36 135 36 138" fill="#A52A2A" />
      <path d="M21 143 Q25 147 29 143" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Home button */}
      <circle cx="70" cy="155" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Shadow lines */}
      <line x1="25" y1="172" x2="115" y2="172" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="176" x2="105" y2="176" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function LaptopIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laptop screen */}
      <rect x="20" y="5" width="140" height="95" rx="6" stroke="currentColor" strokeWidth="2" fill="white" />
      {/* Screen inner */}
      <rect x="28" y="13" width="124" height="79" fill="#f9f9f9" />
      {/* Browser window */}
      <rect x="35" y="18" width="110" height="68" rx="3" stroke="currentColor" strokeWidth="1" fill="white" />
      {/* Browser header */}
      <rect x="35" y="18" width="110" height="12" fill="#E5E7EB" />
      <circle cx="42" cy="24" r="3" fill="#EF4444" />
      <circle cx="52" cy="24" r="3" fill="#F5B820" />
      <circle cx="62" cy="24" r="3" fill="#22C55E" />
      {/* Close X on browser */}
      <text x="138" y="27" fontSize="10" fill="#666">
        ×
      </text>
      {/* Content blocks */}
      <rect x="42" y="35" width="40" height="8" rx="2" fill="#F5B820" />
      <rect x="95" y="35" width="22" height="18" rx="2" fill="#B91C1C" />
      <rect x="95" y="57" width="22" height="12" rx="2" fill="#F5B820" />
      <rect x="42" y="48" width="45" height="6" rx="2" fill="#F5B820" />
      <rect x="42" y="60" width="35" height="6" rx="2" fill="#E5E7EB" />
      <rect x="42" y="72" width="30" height="8" rx="2" fill="#E5E7EB" />
      <rect x="76" y="74" width="8" height="6" rx="1" fill="#B91C1C" />
      {/* Avatar circle */}
      <circle cx="70" cy="58" r="16" fill="#F5B820" />
      <circle cx="70" cy="54" r="7" fill="#FFE4C4" />
      <path d="M63 51 Q63 45 70 45 Q77 45 77 51 L77 55 Q77 49 70 49 Q63 49 63 55 Z" fill="#A52A2A" />
      <path d="M61 53 Q60 58 63 61 L63 51 Q61 51 61 53" fill="#A52A2A" />
      <path d="M79 53 Q80 58 77 61 L77 51 Q79 51 79 53" fill="#A52A2A" />
      <path d="M67 58 Q70 61 73 58" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Laptop base */}
      <path
        d="M10 100 L20 100 L20 105 Q90 115 160 105 L160 100 L170 100 L175 110 Q90 125 5 110 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="white"
      />
      {/* Shadow lines */}
      <line x1="15" y1="125" x2="165" y2="125" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="129" x2="150" y2="129" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

interface StartSavingProps {
  title?: string
  showAccent?: boolean
  callHref?: string
  textHref?: string
  messageHref?: string
}

export function StartSaving({
  title = "Let's Start Saving",
  showAccent = true,
  callHref = "tel:1-800-555-NOVA",
  textHref = "sms:1-800-555-NOVA",
  messageHref = "/contact",
}: StartSavingProps) {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Golden triangle accent - top left */}
      {showAccent && (
        <div
          className="absolute top-0 left-0 w-32 h-40 bg-amber-400"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      )}

      <div className="container mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold italic text-center mb-16 font-serif">
          {title}
        </h2>

        {/* Contact options */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {/* Call Us */}
          <div className="flex flex-col items-center">
            <PhoneCallIcon className="w-32 h-44 text-gray-800 mb-6" />
            <Link
              href={callHref}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-12 py-3 rounded transition-colors"
            >
              Call Us
            </Link>
          </div>

          {/* OR divider */}
          <div className="flex items-center">
            <div className="hidden md:block w-px h-48 bg-gray-300" />
            <span className="mx-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium">
              OR
            </span>
            <div className="hidden md:block w-px h-48 bg-gray-300" />
          </div>

          {/* Text Us */}
          <div className="flex flex-col items-center">
            <PhoneTextIcon className="w-32 h-44 text-gray-800 mb-6" />
            <Link
              href={textHref}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-12 py-3 rounded transition-colors"
            >
              Text Us
            </Link>
          </div>

          {/* OR divider */}
          <div className="flex items-center">
            <div className="hidden md:block w-px h-48 bg-gray-300" />
            <span className="mx-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium">
              OR
            </span>
            <div className="hidden md:block w-px h-48 bg-gray-300" />
          </div>

          {/* Message Us */}
          <div className="flex flex-col items-center">
            <LaptopIcon className="w-44 h-36 text-gray-800 mb-14" />
            <Link
              href={messageHref}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-10 py-3 rounded transition-colors"
            >
              Message Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "startSaving",
  component: StartSaving,
})

export default StartSaving

