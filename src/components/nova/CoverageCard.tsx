import { registerUniformComponent, UniformText } from "@uniformdev/canvas-react"

export interface CoverageCardProps {
  title?: string
  description?: string
}

export function CoverageCard({ title, description }: CoverageCardProps) {
  return (
    <div className="relative bg-white p-8 md:p-10 overflow-hidden">
      {/* Golden triangle accent in top-left */}
      <div
        className="absolute top-0 left-0 w-8 h-12 md:w-10 md:h-14"
        style={{
          background: "linear-gradient(135deg, #E5A823 50%, transparent 50%)",
        }}
      />

      <h3
        className="text-xl md:text-2xl font-bold italic text-gray-900 mb-4 pr-4"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        <UniformText
          placeholder="Coverage Title"
          parameterId="title"
          as="span"
        />
      </h3>
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        <UniformText
          placeholder="Coverage description goes here..."
          parameterId="description"
          as="span"
        />
      </p>
    </div>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "coverageCard",
  component: CoverageCard,
})

export default CoverageCard

