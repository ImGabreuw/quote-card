import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuoteInputProps {
  quote: string;
  author: string;
  onQuoteChange: (quote: string) => void;
  onAuthorChange: (author: string) => void;
}

export function QuoteInput({ quote, author, onQuoteChange, onAuthorChange }: QuoteInputProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quote">Quote</Label>
        <Textarea
          id="quote"
          placeholder="Type the quote here..."
          value={quote}
          onChange={(e) => onQuoteChange(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          placeholder="Author's name"
          value={author}
          onChange={(e) => onAuthorChange(e.target.value)}
        />
      </div>
    </div>
  );
}
