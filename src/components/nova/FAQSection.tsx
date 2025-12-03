"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { registerUniformComponent, UniformSlot } from "@uniformdev/canvas-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  items?: FAQItem[]
}

export function FAQSection({ title = "Frequently Asked Questions", items = [] }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-foreground mb-10">
          {title}
        </h2>

        {/* FAQ Items from slot */}
        <div className="space-y-0">
          <UniformSlot name="faqItems" />
        </div>

        {/* FAQ Items from props (fallback) */}
        {items.length > 0 && (
          <div className="space-y-0 mt-4">
            {items.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className="font-sans font-bold text-foreground text-base md:text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "faqSection",
  component: FAQSection,
})

export default FAQSection

