"use client"

import { ChevronDown, MapPin, Phone, User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const insuranceOptions = [
  { name: "Auto Insurance", href: "/insurance/auto" },
  { name: "Home Insurance", href: "/insurance/home" },
  { name: "Life Insurance", href: "/insurance/life" },
  { name: "Business Insurance", href: "/insurance/business" },
  { name: "Renters Insurance", href: "/insurance/renters" },
]

const aboutOptions = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
]

export function MainNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-primary tracking-tight">NOVA</span>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-primary uppercase">Insurance</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Get Insurance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("insurance")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Get Insurance
                <ChevronDown className="h-3 w-3" />
              </button>
              {openDropdown === "insurance" && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg z-50 min-w-[200px]">
                  {insuranceOptions.map((option) => (
                    <Link
                      key={option.name}
                      href={option.href}
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Nova Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Nova
                <ChevronDown className="h-3 w-3" />
              </button>
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg z-50 min-w-[180px]">
                  {aboutOptions.map((option) => (
                    <Link
                      key={option.name}
                      href={option.href}
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Find an Office */}
            <Link
              href="/locations"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Find an Office
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Phone Number */}
            <a
              href="tel:1-800-555-NOVA"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now 1-800-555-NOVA
            </a>

            {/* Sign In */}
            <Link
              href="/signin"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary">
                <User className="h-4 w-4" />
              </div>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

