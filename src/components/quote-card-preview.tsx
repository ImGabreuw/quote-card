"use client"

import { forwardRef } from "react"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuoteCardPreviewProps {
  quote: string
  author: string
  style: {
    gradient: string
    fontFamily: string
    fontSize: number
    padding: number
    borderRadius: number
    shadow: string
    quoteIconColor: string
    quoteTextColor: string
    authorTextColor: string
  }
}

export const QuoteCardPreview = forwardRef<HTMLDivElement, QuoteCardPreviewProps>(({ quote, author, style }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(style.gradient, style.shadow, style.fontFamily, "max-w-md overflow-hidden transition-all")}
      style={{
        borderRadius: `${style.borderRadius}px`,
        padding: `${style.padding}px`,
      }}
    >
      <div className="relative">
        <Quote className={cn("absolute -left-2 -top-2 h-8 w-8 rotate-180", style.quoteIconColor)} />
        <p className={cn("px-6 py-2 italic", style.quoteTextColor)} style={{ fontSize: `${style.fontSize}px` }}>
          {quote}
        </p>
        <Quote className={cn("absolute -bottom-2 -right-2 h-8 w-8", style.quoteIconColor)} />
      </div>
      <p className={cn("mt-4 text-right font-medium", style.authorTextColor)}>{author ? `— ${author}` : ""}</p>
    </div>
  )
})

QuoteCardPreview.displayName = "QuoteCardPreview"
