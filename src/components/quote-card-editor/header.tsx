import { ArrowLeft, Download, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  onDownload: () => void;
  onShare: () => void;
}

export function PageHeader({ onDownload, onShare }: PageHeaderProps) {
  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={onDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button size="sm" onClick={onShare} disabled>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </header>
  );
}
