"use client"

import { registerUniformComponent, UniformSlot, UniformText } from "@uniformdev/canvas-react"

export interface InsuranceArticleListProps {
  title?: string
  columns?: "2" | "3" | "4"
}

/**
 * InsuranceArticleList Component - Grid of article cards
 *
 * Features:
 * - Optional section title
 * - Configurable grid columns (2, 3, or 4)
 * - Slot for InsuranceArticleCard components
 */
export function InsuranceArticleList({ columns = "3" }: InsuranceArticleListProps) {
  const gridCols = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          <UniformText
            parameterId="title"
            placeholder="Latest Articles"
            as="span"
          />
        </h2>

        {/* Article Grid */}
        <div className={`grid ${gridCols[columns]} gap-6`}>
          <UniformSlot name="articles" />
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "insuranceArticleList",
  component: InsuranceArticleList,
})

export default InsuranceArticleList






