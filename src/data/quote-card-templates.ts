import type { QuoteCardModel, QuoteCardStyle } from "@/types/quote-card-model";

export const GRADIENTS = [
  "bg-white",
  "bg-gradient-to-r from-rose-100 to-teal-100",
  "bg-gradient-to-r from-indigo-100 to-purple-100",
  "bg-gradient-to-r from-yellow-100 to-orange-100",
  "bg-gradient-to-r from-blue-100 to-cyan-100",
  "bg-gradient-to-r from-green-100 to-emerald-100",
  "bg-gradient-to-br from-slate-100 to-slate-200",
  "bg-gradient-to-br from-rose-50 to-indigo-50",
];

export const FONT_FAMILIES = ["font-sans", "font-serif", "font-mono"];

export const CARD_MODELS: QuoteCardModel[] = [
  {
    id: "b0e02f15-7677-4407-9535-975b461eb58e",
    name: "Clássico",
    previewGradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
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
    quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
    author: "Marcel Proust"
  },
  {
    id: "22541d02-b2ee-4906-9dae-96af144c25d6",
    name: "Oceano",
    previewGradient: "bg-gradient-to-r from-blue-100 to-cyan-100",
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
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    id: "8e09f6ba-9d6c-445c-a944-0068d7d09213",
    name: "Minimalista",
    previewGradient: "bg-white",
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
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    id: "7dc0ea1a-6187-4d33-b669-5e2982becb35",
    name: "Ensolarado",
    previewGradient: "bg-gradient-to-r from-yellow-100 to-orange-100",
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
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    id: "062569dd-3e26-4d63-a8a8-bd6e0f455ebe",
    name: "Natureza",
    previewGradient: "bg-gradient-to-r from-green-100 to-emerald-100",
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
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: "b752e294-df8c-4e98-838f-e5f5d21d1184",
    name: "Sonhador",
    previewGradient: "bg-gradient-to-r from-indigo-100 to-purple-100",
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
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
];

export const DEFAULT_STYLE: QuoteCardStyle = CARD_MODELS[0]?.style ?? {
  gradient: "bg-white",
  fontFamily: "font-sans",
  fontSize: 16,
  padding: 20,
  borderRadius: 8,
  shadow: "shadow-md",
  quoteIconColor: "text-gray-300",
  quoteTextColor: "text-black",
  authorTextColor: "text-gray-700",
};
