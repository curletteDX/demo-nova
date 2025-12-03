import Image from "next/image"
import Link from "next/link"
import type { BlogArticle } from "@/lib/blog-data"

interface ArticleCardProps {
  article: BlogArticle
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="bg-background border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>By {article.author}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

