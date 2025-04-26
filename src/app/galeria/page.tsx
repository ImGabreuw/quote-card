import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCardExample } from "@/components/quote-card-example"

const exampleQuotes = [
  {
    quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
    author: "Marcel Proust",
    style: {
      gradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
      fontFamily: "font-serif",
      fontSize: 18,
      padding: 30,
      borderRadius: 12,
      shadow: "shadow-lg",
      quoteIconColor: "text-primary/30",
      quoteTextColor: "text-gray-800",
      authorTextColor: "text-gray-700",
    },
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    style: {
      gradient: "bg-gradient-to-r from-blue-100 to-cyan-100",
      fontFamily: "font-sans",
      fontSize: 18,
      padding: 30,
      borderRadius: 8,
      shadow: "shadow-md",
      quoteIconColor: "text-primary",
      quoteTextColor: "text-gray-800",
      authorTextColor: "text-primary",
    },
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    style: {
      gradient: "bg-white",
      fontFamily: "font-mono",
      fontSize: 16,
      padding: 25,
      borderRadius: 0,
      shadow: "shadow-xl",
      quoteIconColor: "text-gray-300",
      quoteTextColor: "text-black",
      authorTextColor: "text-gray-700",
    },
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    style: {
      gradient: "bg-gradient-to-r from-yellow-100 to-orange-100",
      fontFamily: "font-sans",
      fontSize: 18,
      padding: 35,
      borderRadius: 16,
      shadow: "shadow-lg",
      quoteIconColor: "text-gray-500",
      quoteTextColor: "text-gray-800",
      authorTextColor: "text-gray-700",
    },
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    style: {
      gradient: "bg-gradient-to-r from-green-100 to-emerald-100",
      fontFamily: "font-serif",
      fontSize: 18,
      padding: 30,
      borderRadius: 12,
      shadow: "shadow-lg",
      quoteIconColor: "text-primary/30",
      quoteTextColor: "text-gray-800",
      authorTextColor: "text-gray-700",
    },
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    style: {
      gradient: "bg-gradient-to-r from-indigo-100 to-purple-100",
      fontFamily: "font-sans",
      fontSize: 18,
      padding: 30,
      borderRadius: 8,
      shadow: "shadow-md",
      quoteIconColor: "text-primary",
      quoteTextColor: "text-gray-800",
      authorTextColor: "text-primary",
    },
  },
]

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Home
          </Link>
          <Button asChild>
            <Link href="/criar">
              <Plus className="mr-2 h-4 w-4" />
              Criar novo
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto container flex-1 py-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Galeria de exemplos</h1>
            <p className="text-muted-foreground">
              Explore nossa coleção de cards de citações e inspire-se para criar o seu próprio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exampleQuotes.map((example, index) => (
              <div key={index} className="group relative">
                <QuoteCardExample quote={example.quote} author={example.author} style={example.style} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button asChild variant="secondary">
                    <Link
                      href={{
                        pathname: "/criar",
                        query: {
                          quote: example.quote,
                          author: example.author,
                        },
                      }}
                    >
                      Usar este modelo
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">QuoteCard © {new Date().getFullYear()}</div>
          <Button asChild variant="outline" size="sm">
            <Link href="/criar">Criar seu QuoteCard</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
