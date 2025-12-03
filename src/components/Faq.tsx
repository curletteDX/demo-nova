"use client"

import { registerUniformComponent, UniformSlot, UniformText } from "@uniformdev/canvas-react"

export interface FaqProps {
  title?: string
}

/**
 * FAQ Component - FAQ section with multiple expandable items
 *
 * Features:
 * - Optional section title
 * - Slot for multiple FaqItem components
 * - Consistent styling with Nova Insurance brand
 */
export function Faq() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-8">
        {/* Optional Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          <UniformText
            parameterId="title"
            placeholder="Frequently Asked Questions"
            as="span"
          />
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          <UniformSlot name="faqItems" />
        </div>
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "faq",
  component: Faq,
})

export default Faq

