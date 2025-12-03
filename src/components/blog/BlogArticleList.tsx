"use client"

import { registerUniformComponent, UniformSlot, UniformText } from "@uniformdev/canvas-react"

export interface BlogArticleListProps {
  title?: string
  subtitle?: string
  columns?: "2" | "3" | "4"
  displayStyle?: "grid" | "list"
  maxArticles?: number
  categoryFilter?: string
}

/**
 * BlogArticleList Component - Dynamic grid/list of blog articles
 *
 * Features:
 * - Optional section title and subtitle
 * - Configurable grid columns (2, 3, or 4)
 * - Grid or list display style
 * - Category filtering
 * - Slot for article cards (populated via Loop in Uniform)
 */
export function BlogArticleList({
  columns = "3",
  displayStyle = "grid",
}: BlogArticleListProps) {
  const gridCols = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const isListView = displayStyle === "list"

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <UniformText
              parameterId="title"
              placeholder="Latest Articles"
              as="span"
            />
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            <UniformText
              parameterId="subtitle"
              placeholder="Stay informed with our latest insurance tips and guides"
              as="span"
            />
          </p>
        </div>

        {/* Articles Container */}
        {isListView ? (
          <div className="divide-y divide-border">
            <UniformSlot name="articles" />
          </div>
        ) : (
          <div className={`grid ${gridCols[columns]} gap-6`}>
            <UniformSlot name="articles" />
          </div>
        )}
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "blogArticleList",
  component: BlogArticleList,
})

export default BlogArticleList

