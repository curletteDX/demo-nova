"use client"

import { registerUniformComponent, UniformRichText } from "@uniformdev/canvas-react"
import { resolveRichTextRenderer } from "@/lib/richTextRenderers"

export interface ContentBlockProps {
  content?: string
}

/**
 * ContentBlock Component - Content section for Nova Insurance
 *
 * Features:
 * - Rich text content area with full formatting support
 * - Golden diagonal accent continuing from hero
 */
export function ContentBlock() {
  return (
    <section className="relative">
      {/* Golden diagonal accent on left - continuing from banner */}
      <div
        className="absolute left-0 top-0 w-32 h-full bg-gradient-to-br from-amber-400 to-amber-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-8 py-12 relative z-10">
        {/* Rich text content */}
        <div className="prose prose-lg max-w-none">
          <UniformRichText
            parameterId="content"
            placeholder="Enter your content here..."
            resolveRichTextRenderer={resolveRichTextRenderer}
          />
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "contentBlock",
  component: ContentBlock,
})

export default ContentBlock
