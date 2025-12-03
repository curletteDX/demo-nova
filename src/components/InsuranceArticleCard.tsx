"use client"

import Link from "next/link"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import { imageFrom } from "@uniformdev/assets"
import type { AssetParamValue } from "@uniformdev/assets"
import type { Entry } from "@uniformdev/canvas"

export interface InsuranceArticleCardProps {
  article?: Entry & {
    fields: {
      title?: { value: string }
      slug?: { value: string }
      excerpt?: { value: string }
      featuredImage?: { value: AssetParamValue }
      author?: { value: string }
      category?: { value: string }
      publishDate?: { value: string }
    }
  }
}

const categoryLabels: Record<string, string> = {
  auto: "Auto Insurance",
  home: "Home Insurance",
  life: "Life Insurance",
  business: "Business Insurance",
  renters: "Renters Insurance",
  general: "General",
}

/**
 * InsuranceArticleCard Component - Compact card for article listings
 *
 * Displays article preview with:
 * - Featured image thumbnail
 * - Category badge
 * - Title
 * - Excerpt
 * - Author and date
 */
export function InsuranceArticleCard({ article }: InsuranceArticleCardProps) {
  if (!article?.fields) {
    return (
      <div className="bg-muted/50 rounded-lg p-6 text-center text-muted-foreground">
        Select an article
      </div>
    )
  }

  const { title, slug, excerpt, featuredImage, author, category, publishDate } = article.fields

  // Process featured image
  const imageAssets = featuredImage?.value ?? []
  const [firstAsset] = imageAssets
  const imageUrl = firstAsset
    ? imageFrom(firstAsset)
        .transform({ width: 400, height: 250, fit: "cover" })
        .url()
    : null

  // Format date
  const formattedDate = publishDate?.value
    ? new Date(publishDate.value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null

  const articleUrl = slug?.value ? `/articles/${slug.value}` : "#"

  return (
    <Link href={articleUrl} className="group block">
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative h-48 bg-muted">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={title?.value || ""}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500">
              <span className="text-4xl font-bold text-white/50">NOVA</span>
            </div>
          )}
          {category?.value && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
              {categoryLabels[category.value] || category.value}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title?.value || "Untitled Article"}
          </h3>
          {excerpt?.value && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {excerpt.value}
            </p>
          )}
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            {author?.value && <span>{author.value}</span>}
            {author?.value && formattedDate && <span>•</span>}
            {formattedDate && <span>{formattedDate}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "insuranceArticleCard",
  component: InsuranceArticleCard,
})

export default InsuranceArticleCard






