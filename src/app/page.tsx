import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Quote className="text-primary h-5 w-5" />
            <span>QuoteCard</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="link" asChild>
              <Link href="/galeria">Galeria</Link>
            </Button>
            <Button asChild>
              <Link href="/criar">Criar Card</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex-1">
        <section className="grid items-center gap-6 pt-16 pb-8 md:py-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Crie cards de citações incríveis
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transforme citações em{" "}
              <span className="text-primary">arte visual</span>
            </h1>
            <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
              Crie cards personalizados para suas citações favoritas e
              compartilhe em suas redes sociais, portfólio ou blog.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/criar">
                  Criar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/galeria">Ver exemplos</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 md:flex-row">
            <div className="flex-1">
              <div className="quote-card-example rounded-xl bg-gradient-to-br from-rose-50 to-indigo-50 p-8 shadow-lg">
                <div className="relative">
                  <Quote className="text-primary/30 absolute -top-2 -left-2 h-8 w-8 rotate-180" />
                  <p className="px-6 py-2 text-lg text-gray-800 italic">
                    The real voyage of discovery consists not in seeking new
                    landscapes, but in having new eyes.
                  </p>
                  <Quote className="text-primary/30 absolute -right-2 -bottom-2 h-8 w-8" />
                </div>
                <p className="mt-4 text-right font-medium text-gray-700">
                  — Marcel Proust
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">
                Destaque suas citações favoritas
              </h2>
              <p className="text-muted-foreground">
                Com o QuoteCard, você pode criar cards visualmente atraentes
                para suas citações favoritas em segundos. Personalize cores,
                fontes, estilos e compartilhe facilmente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Sparkles className="text-primary h-5 w-5" />
                  <span>Dezenas de estilos personalizáveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="text-primary h-5 w-5" />
                  <span>Exporte como imagem em alta qualidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="text-primary h-5 w-5" />
                  <span>Compartilhe diretamente nas redes sociais</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/criar">Experimente agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm">
            <Quote className="h-4 w-4" />
            <span>QuoteCard © {new Date().getFullYear()}</span>
          </div>
          <nav className="text-muted-foreground flex gap-4 text-sm">
            <Link href="#" className="hover:text-foreground">
              Termos
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contato
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
