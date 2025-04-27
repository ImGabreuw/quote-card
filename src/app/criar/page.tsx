"use client";

import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteCardPreview } from "@/components/quote-card-preview";
import { QuoteInput } from "@/components/quote-card-editor/quote-input";
import { StyleEditor } from "@/components/quote-card-editor/style-editor";
import { TemplateSelector } from "@/components/quote-card-editor/template-selector";
import { PageHeader } from "@/components/quote-card-editor/header";
import { useQuoteCard } from "@/hooks/use-quote-card";
import { QuoteCardExportService } from "@/services/quote-card-export.service";

export default function CriarPage() {
  const searchParams = useSearchParams();
  const {
    quote, 
    author,
    style,
    setQuote,
    setAuthor,
    updateStyle,
    applyTemplate,
    resetDefaults
  } = useQuoteCard();
  
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const templateId = searchParams.get('templateId');
    if (templateId) {
      applyTemplate(templateId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = async () => {
    await QuoteCardExportService.exportToPng(cardRef);
  };

  const handleShare = async () => {
    await QuoteCardExportService.shareAsPng(
      cardRef,
      "My QuoteCard",
      `"${quote}" - ${author}`
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader onDownload={handleDownload} onShare={handleShare} />

      <main className="container mx-auto flex-1 py-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Create your QuoteCard</h1>
              <p className="text-muted-foreground">
                Customize your quote and style to create a unique card.
              </p>
            </div>

            <QuoteInput
              quote={quote}
              author={author}
              onQuoteChange={setQuote}
              onAuthorChange={setAuthor}
            />

            <StyleEditor style={style} onStyleChange={updateStyle} />
            
            <TemplateSelector onSelectTemplate={applyTemplate} />

            <Button
              variant="outline"
              className="w-full"
              onClick={resetDefaults}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Restore Default
            </Button>
          </div>

          <div className="flex items-center justify-center p-4">
            <QuoteCardPreview
              ref={cardRef}
              quote={quote}
              author={author}
              style={style}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
