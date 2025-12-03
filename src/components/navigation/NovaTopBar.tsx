"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { UniformSlot, registerUniformComponent } from "@uniformdev/canvas-react"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
]

/**
 * NovaTopBar Component - Top utility bar for Nova Insurance
 *
 * Features:
 * - Language selector dropdown
 * - Action buttons slot (editable in Uniform)
 */
export function NovaTopBar() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-end h-10 gap-0">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 px-4 h-10 text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              {selectedLanguage.name}
              <ChevronDown className="h-3 w-3" />
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 bg-background border border-border shadow-lg z-50 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang)
                      setIsOpen(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons - Editable in Uniform */}
          <div className="flex items-center">
            <UniformSlot name="actionButtons" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "novaTopBar",
  component: NovaTopBar,
})

export default NovaTopBar

