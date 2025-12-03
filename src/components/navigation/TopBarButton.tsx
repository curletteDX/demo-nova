"use client"

import { registerUniformComponent } from "@uniformdev/canvas-react"
import type { LinkParamValue } from "@uniformdev/canvas"

export interface TopBarButtonProps {
  label?: string
  href?: LinkParamValue
  variant?: "primary" | "secondary"
}

/**
 * TopBarButton Component - Action button for Nova Insurance top bar
 *
 * Used in the NovaTopBar component to create action buttons like
 * "Make a Payment", "Make a Claim", etc.
 */
export function TopBarButton({ label, href, variant = "primary" }: TopBarButtonProps) {
  const url = href?.path || "#"

  const variantClasses = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary/90"
    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"

  return (
    <a
      href={url}
      className={`flex items-center justify-center px-5 h-10 text-sm font-medium transition-colors ${variantClasses}`}
    >
      {label || "Button"}
    </a>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "topBarButton",
  component: TopBarButton,
})

export default TopBarButton

