"use client"

import { useState } from "react"
import { registerUniformComponent, UniformText } from "@uniformdev/canvas-react"
import { imageFrom } from "@uniformdev/assets"
import type { AssetParamValue } from "@uniformdev/assets"

export interface HeroBannerProps {
  title?: string
  subtitle?: string
  author?: string
  showQuoteForm?: boolean
  image?: AssetParamValue
}

/**
 * HeroBanner Component - Hero section for Nova Insurance
 *
 * Features:
 * - Diagonal gradient background with image
 * - Editable title, subtitle, and author
 * - Optional ZIP code quote form
 * - Nova logo watermark overlay
 */
export function HeroBanner({
  subtitle,
  author,
  showQuoteForm = true,
  image
}: HeroBannerProps) {
  const [zipCode, setZipCode] = useState("")

  // Process the Uniform image asset
  const imageAssets = image ?? []
  const [firstAsset] = imageAssets

  const imageSrc = firstAsset
    ? imageFrom(firstAsset)
        .transform({
          width: 1200,
          height: 800,
          fit: "cover",
          focal: firstAsset.fields?.focalPoint?.value || "center"
        })
        .url()
    : "/placeholder.svg"

  const imageAlt = firstAsset?.fields?.title?.value as string || "Hero image"

  return (
    <section className="relative h-[400px] md:h-[450px] overflow-hidden">
      {/* Golden gradient background with diagonal cut */}
      <div className="absolute inset-0">
        {/* Left side - golden gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600"
          style={{
            clipPath: "polygon(0 0, 65% 0, 50% 100%, 0 100%)",
          }}
        />

        {/* Right side - image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(65% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          {/* Nova logo watermark overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-48 h-48 opacity-20" fill="none" stroke="white" strokeWidth="2">
              <polygon points="50,10 90,90 10,90" />
              <polygon points="50,30 75,75 25,75" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center max-w-xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-gray-900 leading-tight text-balance">
            <UniformText
              placeholder="Enter hero title"
              parameterId="title"
              as="span"
            />
          </h1>

          {/* Author byline */}
          {author && <p className="mt-4 text-gray-800">By {author}</p>}

          {/* Subtitle/description */}
          {subtitle && <p className="mt-4 text-gray-800 leading-relaxed max-w-md">{subtitle}</p>}

          {/* Quote form */}
          {showQuoteForm && (
            <div className="mt-8">
              <div className="flex max-w-sm">
                <input
                  type="text"
                  placeholder="Enter ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-l-md border-2 border-r-0 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wide rounded-r-md hover:bg-primary/90 transition-colors">
                  Get Quote
                </button>
              </div>

              <a
                href="#"
                className="inline-block mt-4 text-primary font-semibold uppercase tracking-wide text-sm hover:underline"
              >
                See Previous Quotes
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "heroBanner",
  component: HeroBanner,
})

export default HeroBanner
