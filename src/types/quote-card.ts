export interface QuoteCardStyle {
  gradient: string;
  fontFamily: string;
  fontSize: number;
  padding: number;
  borderRadius: number;
  shadow: string;
  quoteIconColor: string;
  quoteTextColor: string;
  authorTextColor: string;
}

export interface QuoteCardTemplate {
  name: string;
  previewGradient: string;
  style: QuoteCardStyle;
}
