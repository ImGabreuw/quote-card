import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuoteCardExampleProps {
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

export function QuoteCardExample({ quote, author, style }: QuoteCardExampleProps) {
  return (
    <div
      className={cn(style.gradient, style.shadow, style.fontFamily, "h-full w-full overflow-hidden transition-all")}
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
}
