import Link from "next/link"
import { registerUniformComponent } from "@uniformdev/canvas-react"

function NovaLogo() {
  return (
    <svg viewBox="0 0 120 60" className="h-16 w-auto" aria-label="Nova Insurance">
      {/* Triangle/mountain shape */}
      <polygon points="20,50 50,10 80,50" fill="#B91C1C" stroke="#B91C1C" strokeWidth="2" />
      <polygon points="35,50 50,25 65,50" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" />
      {/* Underline */}
      <line x1="15" y1="52" x2="85" y2="52" stroke="#F59E0B" strokeWidth="3" />
      {/* Text */}
      <text x="50" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" letterSpacing="2">
        INSURANCE
      </text>
    </svg>
  )
}

const keyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Preferences", href: "/cookies" },
]

const otherLinks = [
  { label: "Markets We Serve", href: "/markets" },
  { label: "Careers", href: "/careers" },
  { label: "Knowledge Center", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Find an Office", href: "/locations" },
]

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
]

interface NovaFooterProps {
  tagline?: string
}

export function NovaFooter({ tagline = "Trusted by over 120,000 policyholders. We're here for you." }: NovaFooterProps) {
  return (
    <footer className="relative bg-[#1e293b]">
      {/* Golden accent bar at top */}
      <div className="h-1 bg-amber-500" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and tagline column */}
          <div className="space-y-4">
            <NovaLogo />
            <p className="text-sm text-gray-300 leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Key Links column */}
          <div>
            <h3 className="font-bold text-white mb-4">Key Links</h3>
            <ul className="space-y-3">
              {keyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links column */}
          <div>
            <h3 className="font-bold text-white mb-4">Other Links</h3>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media column */}
          <div>
            <h3 className="font-bold text-white mb-4">Social Media</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <button
        type="button"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center z-50"
        aria-label="Chat with us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </footer>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "novaFooter",
  component: NovaFooter,
})

export default NovaFooter

