import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCardExample } from "@/components/quote-card-example"
import { CARD_MODELS } from "@/data/quote-card-templates"

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Button asChild>
            <Link href="/criar">
              <Plus className="mr-2 h-4 w-4" />
              Create new
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto container flex-1 py-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Gallery of Examples</h1>
            <p className="text-muted-foreground">
              Explore our collection of quote cards and get inspired to create your own.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARD_MODELS.map((model) => (
              <div key={model.id} className="group relative">
                <QuoteCardExample 
                  quote={model.quote}
                  author={model.author}
                  style={model.style}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button asChild variant="secondary">
                    <Link
                      href={{
                        pathname: "/criar",
                        query: {
                          templateId: model.id,
                        },
                      }}
                    >
                      Use this template
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
            <Link href="/criar">Create your QuoteCard</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
