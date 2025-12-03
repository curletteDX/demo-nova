import { registerUniformComponent, UniformSlot } from "@uniformdev/canvas-react"

interface CoverageBlocksProps {
  sectionTitle?: string
  showSectionAccent?: boolean
}

export function CoverageBlocks({ sectionTitle, showSectionAccent = true }: CoverageBlocksProps) {
  return (
    <section className="relative bg-gray-200 py-12 md:py-16 px-4 overflow-hidden">
      {/* Section heading */}
      {sectionTitle && (
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-black text-center text-gray-900 mb-10 md:mb-12 uppercase tracking-wide"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {sectionTitle}
        </h2>
      )}

      {/* Coverage blocks from slot - wrapped in grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <UniformSlot name="blocks" />
      </div>

      {/* Subtle triangle watermark in bottom right */}
      {showSectionAccent && (
        <div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
          style={{
            background: "linear-gradient(315deg, #9CA3AF 50%, transparent 50%)",
          }}
        />
      )}
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "coverageBlocks",
  component: CoverageBlocks,
})

export default CoverageBlocks
