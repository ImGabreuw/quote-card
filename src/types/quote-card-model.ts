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

export interface QuoteCardModel {
  id: string;
  name: string;
  previewGradient: string;
  style: QuoteCardStyle;
  quote: string;
  author: string;
}
