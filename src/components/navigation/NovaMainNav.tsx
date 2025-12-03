"use client"

import { ChevronDown, MapPin, Phone, User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { UniformSlot, registerUniformComponent } from "@uniformdev/canvas-react"
import type { LinkParamValue } from "@uniformdev/canvas"

export interface NovaMainNavProps {
  phoneNumber?: string
  signInUrl?: LinkParamValue
  locationsUrl?: LinkParamValue
}

/**
 * NovaMainNav Component - Main navigation for Nova Insurance
 *
 * Features:
 * - Nova Insurance logo
 * - Get Insurance dropdown (editable links via Uniform slot)
 * - About Nova dropdown (editable links via Uniform slot)
 * - Find an Office link
 * - Phone number display
 * - Sign In button
 */
export function NovaMainNav({
  phoneNumber = "1-800-555-NOVA",
  signInUrl,
  locationsUrl
}: NovaMainNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const signInPath = signInUrl?.path || "/signin"
  const locationsPath = locationsUrl?.path || "/locations"

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
                  <UniformSlot name="insuranceLinks" />
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
                  <UniformSlot name="aboutLinks" />
                </div>
              )}
            </div>

            {/* Find an Office */}
            <Link
              href={locationsPath}
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
              href={`tel:${phoneNumber?.replace(/[^0-9]/g, '')}`}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now {phoneNumber}
            </a>

            {/* Sign In */}
            <Link
              href={signInPath}
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

// Register with Uniform
registerUniformComponent({
  type: "novaMainNav",
  component: NovaMainNav,
})

export default NovaMainNav

