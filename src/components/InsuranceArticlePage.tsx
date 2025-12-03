"use client"

import { registerUniformComponent, UniformSlot, UniformRichText } from "@uniformdev/canvas-react"
import { resolveRichTextRenderer } from "@/lib/richTextRenderers"
import { imageFrom } from "@uniformdev/assets"
import type { AssetParamValue } from "@uniformdev/assets"
import type { Entry } from "@uniformdev/canvas"

export interface InsuranceArticlePageProps {
  article?: Entry & {
    fields: {
      title?: { value: string }
      slug?: { value: string }
      excerpt?: { value: string }
      content?: { value: unknown }
      featuredImage?: { value: AssetParamValue }
      author?: { value: string }
      category?: { value: string }
      tags?: { value: string }
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
 * InsuranceArticlePage Component - Full article display
 *
 * Renders a complete Insurance Article entry with:
 * - Hero section with featured image
 * - Title, author, date, category
 * - Rich text content
 * - FAQ items slot
 */
export function InsuranceArticlePage({ article }: InsuranceArticlePageProps) {
  if (!article?.fields) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-12 text-center text-muted-foreground">
        Select an article to display
      </div>
    )
  }

  const { title, excerpt, featuredImage, author, category, tags, publishDate } = article.fields

  // Process featured image
  const imageAssets = featuredImage?.value ?? []
  const [firstAsset] = imageAssets
  const imageUrl = firstAsset
    ? imageFrom(firstAsset)
        .transform({ width: 1200, height: 600, fit: "cover" })
        .url()
    : null

  // Format date
  const formattedDate = publishDate?.value
    ? new Date(publishDate.value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  // Parse tags
  const tagList = tags?.value?.split(",").map((t) => t.trim()).filter(Boolean) || []

  return (
    <article className="relative">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        {/* Golden gradient background with diagonal cut */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600"
            style={{ clipPath: "polygon(0 0, 65% 0, 50% 100%, 0 100%)" }}
          />
          {imageUrl && (
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(65% 0, 100% 0, 100% 100%, 50% 100%)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={title?.value || ""} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* Title overlay */}
        <div className="relative z-10 h-full max-w-4xl mx-auto px-8 flex flex-col justify-center">
          {category?.value && (
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded mb-4 w-fit">
              {categoryLabels[category.value] || category.value}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title?.value || "Untitled Article"}
          </h1>
          {excerpt?.value && (
            <p className="mt-4 text-lg text-gray-800 max-w-2xl">{excerpt.value}</p>
          )}
        </div>
      </section>

      {/* Meta info */}
      <div className="max-w-4xl mx-auto px-8 py-6 border-b border-border">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {author?.value && (
            <span>By <strong className="text-foreground">{author.value}</strong></span>
          )}
          {formattedDate && <span>{formattedDate}</span>}
          {tagList.length > 0 && (
            <div className="flex gap-2">
              {tagList.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content - Uses UniformRichText to render the article.content field */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <UniformRichText
            parameterId="article.content"
            placeholder="Article content"
            resolveRichTextRenderer={resolveRichTextRenderer}
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-12 space-y-4">
          <UniformSlot name="faqItems" />
        </div>
      </div>
    </article>
  )
}

// Register with Uniform
registerUniformComponent({
  type: "insuranceArticlePage",
  component: InsuranceArticlePage,
})

export default InsuranceArticlePage
