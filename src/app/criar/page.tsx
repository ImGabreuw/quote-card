"use client"

import { useState, useRef } from "react"
import { toPng } from "html-to-image"
import { Download, Share2, RefreshCw, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { QuoteCardPreview } from "@/components/quote-card-preview"
import { cn } from "@/lib/utils"

const gradients = [
  "bg-white",
  "bg-gradient-to-r from-rose-100 to-teal-100",
  "bg-gradient-to-r from-indigo-100 to-purple-100",
  "bg-gradient-to-r from-yellow-100 to-orange-100",
  "bg-gradient-to-r from-blue-100 to-cyan-100",
  "bg-gradient-to-r from-green-100 to-emerald-100",
  "bg-gradient-to-br from-slate-100 to-slate-200",
  "bg-gradient-to-br from-rose-50 to-indigo-50",
]

const fontFamilies = ["font-sans", "font-serif", "font-mono"]

export default function CriarPage() {
  const [quote, setQuote] = useState(
    "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
  )
  const [author, setAuthor] = useState("Marcel Proust")
  const [style, setStyle] = useState({
    gradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
    fontFamily: "font-serif",
    fontSize: 18,
    padding: 30,
    borderRadius: 12,
    shadow: "shadow-lg",
    quoteIconColor: "text-primary/30",
    quoteTextColor: "text-gray-800",
    authorTextColor: "text-gray-700",
  })

  const cardRef = useRef(null)

  const downloadCard = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 })
      // Criar um link temporário para download
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = `quote-card-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const shareCard = async () => {
    if (cardRef.current && navigator.share) {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 })
      const blob = await (await fetch(dataUrl)).blob()
      const file = new File([blob], "quote-card.png", { type: "image/png" })

      try {
        await navigator.share({
          title: "Meu QuoteCard",
          text: `"${quote}" - ${author}`,
          files: [file],
        })
      } catch (error) {
        console.error("Erro ao compartilhar:", error)
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Home
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={downloadCard}>
              <Download className="mr-2 h-4 w-4" />
              Baixar
            </Button>
            <Button size="sm" onClick={shareCard}>
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto container flex-1 py-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Crie seu QuoteCard</h1>
              <p className="text-muted-foreground">Personalize sua citação e estilo para criar um card único.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quote">Citação</Label>
                <Textarea
                  id="quote"
                  placeholder="Digite a citação aqui..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Autor</Label>
                <Input
                  id="author"
                  placeholder="Nome do autor"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>

            <Accordion type="single" collapsible defaultValue="appearance">
              <AccordionItem value="appearance">
                <AccordionTrigger>Aparência</AccordionTrigger>
                <AccordionContent>
                  <Tabs defaultValue="background">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="background">Fundo</TabsTrigger>
                      <TabsTrigger value="text">Texto</TabsTrigger>
                      <TabsTrigger value="layout">Layout</TabsTrigger>
                    </TabsList>

                    <TabsContent value="background" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label>Estilo de fundo</Label>
                        <div className="grid grid-cols-4 gap-2">
                          {gradients.map((gradient) => (
                            <button
                              key={gradient}
                              className={cn(
                                gradient,
                                "h-12 rounded-md border transition-all hover:scale-105",
                                style.gradient === gradient && "ring-2 ring-primary ring-offset-2",
                              )}
                              onClick={() => setStyle({ ...style, gradient })}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Sombra</Label>
                        <Select value={style.shadow} onValueChange={(shadow) => setStyle({ ...style, shadow })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o estilo de sombra" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shadow-none">Sem sombra</SelectItem>
                            <SelectItem value="shadow-sm">Pequena</SelectItem>
                            <SelectItem value="shadow-md">Média</SelectItem>
                            <SelectItem value="shadow-lg">Grande</SelectItem>
                            <SelectItem value="shadow-xl">Extra grande</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Arredondamento</Label>
                        <div className="pt-2">
                          <Slider
                            value={[style.borderRadius]}
                            min={0}
                            max={24}
                            step={1}
                            onValueChange={(value) => setStyle({ ...style, borderRadius: value[0] })}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="text" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label>Família da fonte</Label>
                        <Select
                          value={style.fontFamily}
                          onValueChange={(fontFamily) => setStyle({ ...style, fontFamily })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a fonte" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="font-sans">Sans-serif</SelectItem>
                            <SelectItem value="font-serif">Serif</SelectItem>
                            <SelectItem value="font-mono">Monospace</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Tamanho da fonte</Label>
                        <div className="pt-2">
                          <Slider
                            value={[style.fontSize]}
                            min={14}
                            max={24}
                            step={1}
                            onValueChange={(value) => setStyle({ ...style, fontSize: value[0] })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Cor do texto da citação</Label>
                        <Select
                          value={style.quoteTextColor}
                          onValueChange={(quoteTextColor) => setStyle({ ...style, quoteTextColor })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a cor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text-gray-800">Cinza escuro</SelectItem>
                            <SelectItem value="text-gray-600">Cinza médio</SelectItem>
                            <SelectItem value="text-primary">Primária</SelectItem>
                            <SelectItem value="text-black">Preto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Cor do texto do autor</Label>
                        <Select
                          value={style.authorTextColor}
                          onValueChange={(authorTextColor) => setStyle({ ...style, authorTextColor })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a cor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text-gray-700">Cinza escuro</SelectItem>
                            <SelectItem value="text-gray-500">Cinza médio</SelectItem>
                            <SelectItem value="text-primary">Primária</SelectItem>
                            <SelectItem value="text-black">Preto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Cor dos ícones de aspas</Label>
                        <Select
                          value={style.quoteIconColor}
                          onValueChange={(quoteIconColor) => setStyle({ ...style, quoteIconColor })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a cor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text-primary/30">Primária (suave)</SelectItem>
                            <SelectItem value="text-primary">Primária</SelectItem>
                            <SelectItem value="text-gray-300">Cinza claro</SelectItem>
                            <SelectItem value="text-gray-500">Cinza médio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    <TabsContent value="layout" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label>Espaçamento interno</Label>
                        <div className="pt-2">
                          <Slider
                            value={[style.padding]}
                            min={10}
                            max={50}
                            step={5}
                            onValueChange={(value) => setStyle({ ...style, padding: value[0] })}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="templates">
                <AccordionTrigger>Templates</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      className="flex flex-col items-center rounded-lg border p-3 transition-all hover:bg-accent"
                      onClick={() => {
                        setStyle({
                          gradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
                          fontFamily: "font-serif",
                          fontSize: 18,
                          padding: 30,
                          borderRadius: 12,
                          shadow: "shadow-lg",
                          quoteIconColor: "text-primary/30",
                          quoteTextColor: "text-gray-800",
                          authorTextColor: "text-gray-700",
                        })
                      }}
                    >
                      <div className="mb-2 h-20 w-full rounded bg-gradient-to-br from-rose-50 to-indigo-50"></div>
                      <span className="text-sm">Clássico</span>
                    </button>

                    <button
                      className="flex flex-col items-center rounded-lg border p-3 transition-all hover:bg-accent"
                      onClick={() => {
                        setStyle({
                          gradient: "bg-gradient-to-r from-blue-100 to-cyan-100",
                          fontFamily: "font-sans",
                          fontSize: 18,
                          padding: 30,
                          borderRadius: 8,
                          shadow: "shadow-md",
                          quoteIconColor: "text-primary",
                          quoteTextColor: "text-gray-800",
                          authorTextColor: "text-primary",
                        })
                      }}
                    >
                      <div className="mb-2 h-20 w-full rounded bg-gradient-to-r from-blue-100 to-cyan-100"></div>
                      <span className="text-sm">Oceano</span>
                    </button>

                    <button
                      className="flex flex-col items-center rounded-lg border p-3 transition-all hover:bg-accent"
                      onClick={() => {
                        setStyle({
                          gradient: "bg-white",
                          fontFamily: "font-mono",
                          fontSize: 16,
                          padding: 25,
                          borderRadius: 0,
                          shadow: "shadow-xl",
                          quoteIconColor: "text-gray-300",
                          quoteTextColor: "text-black",
                          authorTextColor: "text-gray-700",
                        })
                      }}
                    >
                      <div className="mb-2 h-20 w-full rounded bg-white"></div>
                      <span className="text-sm">Minimalista</span>
                    </button>

                    <button
                      className="flex flex-col items-center rounded-lg border p-3 transition-all hover:bg-accent"
                      onClick={() => {
                        setStyle({
                          gradient: "bg-gradient-to-r from-yellow-100 to-orange-100",
                          fontFamily: "font-sans",
                          fontSize: 18,
                          padding: 35,
                          borderRadius: 16,
                          shadow: "shadow-lg",
                          quoteIconColor: "text-gray-500",
                          quoteTextColor: "text-gray-800",
                          authorTextColor: "text-gray-700",
                        })
                      }}
                    >
                      <div className="mb-2 h-20 w-full rounded bg-gradient-to-r from-yellow-100 to-orange-100"></div>
                      <span className="text-sm">Ensolarado</span>
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setQuote("The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.")
                setAuthor("Marcel Proust")
              }}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Restaurar exemplo
            </Button>
          </div>

          <div className="flex items-center justify-center p-4">
            <QuoteCardPreview ref={cardRef} quote={quote} author={author} style={style} />
          </div>
        </div>
      </main>
    </div>
  )
}
