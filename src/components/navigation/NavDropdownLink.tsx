"use client"

import Link from "next/link"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import type { LinkParamValue } from "@uniformdev/canvas"

export interface NavDropdownLinkProps {
  label?: string
  href?: LinkParamValue
}

/**
 * NavDropdownLink Component - Link item for navigation dropdowns
 *
 * Used in NovaMainNav dropdowns for insurance and about links.
 */
export function NavDropdownLink({ label, href }: NavDropdownLinkProps) {
  const url = href?.path || "#"

  return (
    <Link
      href={url}
      className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
    >
      {label || "Link"}
    </Link>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "navDropdownLink",
  component: NavDropdownLink,
})

export default NavDropdownLink

