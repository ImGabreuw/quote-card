import { type QuoteCardStyle, type QuoteCardTemplate } from "@/types/quote-card";

export const DEFAULT_STYLE: QuoteCardStyle = {
  gradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
  fontFamily: "font-serif",
  fontSize: 18,
  padding: 30,
  borderRadius: 12,
  shadow: "shadow-lg",
  quoteIconColor: "text-primary/30",
  quoteTextColor: "text-gray-800",
  authorTextColor: "text-gray-700",
};

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

export const QUOTE_CARD_TEMPLATES: QuoteCardTemplate[] = [
  {
    name: "Clássico",
    previewGradient: "bg-gradient-to-br from-rose-50 to-indigo-50",
    style: DEFAULT_STYLE,
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
