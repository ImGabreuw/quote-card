import { useState } from "react";
import { DEFAULT_STYLE, CARD_MODELS } from "@/data/quote-card-templates";
import type { QuoteCardStyle } from "@/types/quote-card-model";

export const DEFAULT_QUOTE = "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.";
export const DEFAULT_AUTHOR = "Marcel Proust";

export interface UseQuoteCardReturn {
  quote: string;
  author: string;
  style: QuoteCardStyle;
  setQuote: (quote: string) => void;
  setAuthor: (author: string) => void;
  updateStyle: (updates: Partial<QuoteCardStyle>) => void;
  applyTemplate: (templateName: string) => void;
  resetDefaults: () => void;
}

export function useQuoteCard(): UseQuoteCardReturn {
  const [quote, setQuote] = useState<string>(DEFAULT_QUOTE);
  const [author, setAuthor] = useState<string>(DEFAULT_AUTHOR);
  const [style, setStyle] = useState<QuoteCardStyle>(DEFAULT_STYLE);

  const updateStyle = (updates: Partial<QuoteCardStyle>): void => {
    setStyle(prevStyle => ({ ...prevStyle, ...updates }));
  };

  const applyTemplate = (templateName: string): void => {
    const template = CARD_MODELS.find(t => t.id === templateName);
    if (template) {
      setQuote(template.quote);
      setAuthor(template.author);
      setStyle(template.style);
    }
  };

  const resetDefaults = (): void => {
    setQuote(DEFAULT_QUOTE);
    setAuthor(DEFAULT_AUTHOR);
    setStyle(DEFAULT_STYLE);
  };

  return {
    quote,
    author,
    style,
    setQuote,
    setAuthor,
    updateStyle,
    applyTemplate,
    resetDefaults
  };
}
