import Image from "next/image"
import Link from "next/link"
import type { BlogArticle } from "@/lib/blog-data"

interface ArticleListItemProps {
  article: BlogArticle
}

export function ArticleListItem({ article }: ArticleListItemProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="flex gap-6 py-6 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-sm">
        <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-sm">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">{article.date}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>By {article.author}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

