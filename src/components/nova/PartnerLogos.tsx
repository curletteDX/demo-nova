import Image from "next/image"
import { registerUniformComponent } from "@uniformdev/canvas-react"

interface Partner {
  name: string
  logo: string
  width?: number
  height?: number
}

interface PartnerLogosProps {
  partners?: Partner[]
  showAccent?: boolean
}

const defaultPartners: Partner[] = [
  { name: "Progressive", logo: "/partners/progressive.jpg", width: 160, height: 40 },
  { name: "Kemper Auto", logo: "/partners/kemper.jpg", width: 120, height: 50 },
  { name: "Nova Insurance", logo: "/partners/nova-triangle.jpg", width: 80, height: 70 },
  { name: "Foremost Insurance Group", logo: "/partners/foremost.jpg", width: 140, height: 40 },
  { name: "Commonwealth Insurance", logo: "/partners/commonwealth.jpg", width: 150, height: 50 },
]

export function PartnerLogos({ partners = defaultPartners, showAccent = false }: PartnerLogosProps) {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Golden triangle accent in top-left */}
      {showAccent && (
        <div
          className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={partner.width || 140}
                height={partner.height || 50}
                className="object-contain grayscale-0 hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "partnerLogos",
  component: PartnerLogos,
})

export default PartnerLogos

