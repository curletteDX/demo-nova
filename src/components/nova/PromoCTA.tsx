import Link from "next/link"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import type { LinkParamValue } from "@uniformdev/canvas"
import { imageFrom } from "@uniformdev/assets"
import type { AssetParamValue } from "@uniformdev/assets"

function BuildingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left yellow building */}
      <rect x="15" y="50" width="55" height="120" fill="#F5B800" stroke="#1a1a1a" strokeWidth="3" rx="3" />
      {/* Left building windows */}
      <rect x="25" y="65" width="15" height="15" fill="#1a1a1a" />
      <rect x="25" y="95" width="15" height="15" fill="#1a1a1a" />
      <rect x="25" y="125" width="15" height="15" fill="#1a1a1a" />
      <rect x="45" y="65" width="15" height="15" fill="#1a1a1a" />
      <rect x="45" y="95" width="15" height="15" fill="#1a1a1a" />
      <rect x="45" y="125" width="15" height="15" fill="#1a1a1a" />
      {/* Window highlights */}
      <rect x="27" y="67" width="5" height="5" fill="white" />
      <rect x="27" y="97" width="5" height="5" fill="white" />
      <rect x="27" y="127" width="5" height="5" fill="white" />
      <rect x="47" y="67" width="5" height="5" fill="white" />
      <rect x="47" y="97" width="5" height="5" fill="white" />
      <rect x="47" y="127" width="5" height="5" fill="white" />

      {/* Center red building (taller) */}
      <rect x="60" y="20" width="80" height="150" fill="#B91C1C" stroke="#1a1a1a" strokeWidth="3" rx="3" />
      {/* Center building windows - row 1 */}
      <rect x="75" y="35" width="18" height="18" fill="#1a1a1a" />
      <rect x="107" y="35" width="18" height="18" fill="#1a1a1a" />
      {/* Center building windows - row 2 */}
      <rect x="75" y="70" width="18" height="18" fill="#1a1a1a" />
      <rect x="107" y="70" width="18" height="18" fill="#1a1a1a" />
      {/* Center building windows - row 3 */}
      <rect x="75" y="105" width="18" height="18" fill="#1a1a1a" />
      <rect x="107" y="105" width="18" height="18" fill="#1a1a1a" />
      {/* Window highlights */}
      <rect x="77" y="37" width="6" height="6" fill="white" />
      <rect x="109" y="37" width="6" height="6" fill="white" />
      <rect x="77" y="72" width="6" height="6" fill="white" />
      <rect x="109" y="72" width="6" height="6" fill="white" />
      <rect x="77" y="107" width="6" height="6" fill="white" />
      <rect x="109" y="107" width="6" height="6" fill="white" />
      {/* Center building door */}
      <rect x="85" y="140" width="30" height="30" fill="#FEF3C7" stroke="#1a1a1a" strokeWidth="2" rx="2" />
      <rect x="92" y="148" width="6" height="18" fill="#1a1a1a" />
      <rect x="102" y="148" width="6" height="18" fill="#1a1a1a" />

      {/* Right yellow building */}
      <rect x="130" y="50" width="55" height="120" fill="#F5B800" stroke="#1a1a1a" strokeWidth="3" rx="3" />
      {/* Right building windows */}
      <rect x="140" y="65" width="15" height="15" fill="#1a1a1a" />
      <rect x="140" y="95" width="15" height="15" fill="#1a1a1a" />
      <rect x="140" y="125" width="15" height="15" fill="#1a1a1a" />
      <rect x="160" y="65" width="15" height="15" fill="#1a1a1a" />
      <rect x="160" y="95" width="15" height="15" fill="#1a1a1a" />
      <rect x="160" y="125" width="15" height="15" fill="#1a1a1a" />
      {/* Window highlights */}
      <rect x="142" y="67" width="5" height="5" fill="white" />
      <rect x="142" y="97" width="5" height="5" fill="white" />
      <rect x="142" y="127" width="5" height="5" fill="white" />
      <rect x="162" y="67" width="5" height="5" fill="white" />
      <rect x="162" y="97" width="5" height="5" fill="white" />
      <rect x="162" y="127" width="5" height="5" fill="white" />
    </svg>
  )
}

interface PromoCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: LinkParamValue
  imagePosition?: "left" | "right"
  image?: AssetParamValue
}

export function PromoCTA({
  title = "Drop by One of Our Convenient Locations",
  subtitle = "and chat with a friendly agent!",
  buttonText = "Find a Location Near You!",
  buttonHref,
  imagePosition = "left",
  image
}: PromoCTAProps) {
  const href = buttonHref?.path || "#"

  // Process the Uniform image asset
  const imageAssets = image ?? []
  const [firstAsset] = imageAssets
  const hasImage = !!firstAsset

  const imageSrc = firstAsset
    ? imageFrom(firstAsset)
        .transform({
          width: 400,
          height: 350,
          fit: "contain"
        })
        .url()
    : null

  const imageAlt = (firstAsset?.fields?.title?.value as string) || "Promo image"

  const contentSection = (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold italic text-foreground mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground italic mb-8">
          {subtitle}
        </p>
      )}
      <Link
        href={href}
        className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-wide px-8 py-4 hover:bg-primary/90 transition-colors text-sm md:text-base"
      >
        {buttonText}
      </Link>
    </div>
  )

  const imageSection = (
    <div className="flex justify-center lg:justify-start shrink-0">
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc!}
          alt={imageAlt}
          className="w-48 h-44 md:w-64 md:h-56 lg:w-72 lg:h-64 object-contain"
        />
      ) : (
        <BuildingsIcon className="w-48 h-44 md:w-64 md:h-56 lg:w-72 lg:h-64" />
      )}
    </div>
  )

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
        >
          {imageSection}
          {contentSection}
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "promoCTA",
  component: PromoCTA,
})

export default PromoCTA
