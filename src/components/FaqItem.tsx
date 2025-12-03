"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { registerUniformComponent, UniformText, UniformRichText } from "@uniformdev/canvas-react"

export interface FaqItemProps {
  question?: string
  answer?: string
}

/**
 * FaqItem Component - Single FAQ accordion item
 *
 * Features:
 * - Expandable/collapsible accordion
 * - Question as text, answer as rich text
 * - Smooth animation on toggle
 */
export function FaqItem(_props: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-muted/50 rounded-sm overflow-hidden">
      <button
        type="button"
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/70 transition-colors cursor-pointer"
      >
        <h3 className="text-lg font-bold text-foreground">
          <UniformText
            parameterId="question"
            placeholder="Enter question..."
            as="span"
          />
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div className="border-t border-border/50 mx-6" />
          <div className="px-6 py-4 prose prose-sm max-w-none">
            <UniformRichText
              parameterId="answer"
              placeholder="Enter answer..."
            />
          </div>
        </>
      )}
    </div>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "faqItem",
  component: FaqItem,
})

export default FaqItem

