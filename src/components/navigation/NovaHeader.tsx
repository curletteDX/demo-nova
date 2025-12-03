"use client"

import { UniformSlot, registerUniformComponent } from "@uniformdev/canvas-react"

/**
 * NovaHeader Component - Nova Insurance header wrapper
 *
 * Combines TopBar and MainNav in a sticky header.
 * Both sections are editable via Uniform slots.
 */
export function NovaHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <UniformSlot name="topBar" />
      <UniformSlot name="mainNav" />
    </header>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "novaHeader",
  component: NovaHeader,
})

export default NovaHeader

