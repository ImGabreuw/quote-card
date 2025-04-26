import { toPng } from "html-to-image";
import { type RefObject } from "react";

export interface ExportOptions {
  quality?: number;
  fileName?: string;
}

export class QuoteCardExportService {

  static async exportToPng(
    ref: RefObject<HTMLElement | null>,
    options: ExportOptions = {}
  ): Promise<void> {
    if (!ref.current) return;

    const { quality = 0.95, fileName = `quote-card-${Date.now()}.png` } = options;

    try {
      const dataUrl = await toPng(ref.current, {
        quality,
        cacheBust: true,
        fontEmbedCSS: null, // Evita o erro de fonte
        skipFonts: true     // Evita o erro de fonte
      });

      // Criar um link temporário para download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao exportar o card:", error);
    }
  }

  static async shareAsPng(
    ref: RefObject<HTMLElement | null>,
    title: string,
    text: string
  ): Promise<void> {
    if (!ref.current || !navigator.share) return;

    try {
      const dataUrl = await toPng(ref.current, {
        quality: 0.95,
        cacheBust: true,
        fontEmbedCSS: null,
        skipFonts: true
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "quote-card.png", { type: "image/png" });

      await navigator.share({
        title,
        text,
        files: [file],
      });
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  }
}
