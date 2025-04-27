import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/data/quote-card-templates";
import type { QuoteCardStyle } from "@/types/quote-card-model";

interface StyleEditorProps {
  style: QuoteCardStyle;
  onStyleChange: (updates: Partial<QuoteCardStyle>) => void;
}

export function StyleEditor({ style, onStyleChange }: StyleEditorProps) {
  return (
    <Accordion type="single" collapsible defaultValue="appearance">
      <AccordionItem value="appearance">
        <AccordionTrigger>Appearance</AccordionTrigger>
        <AccordionContent>
          <Tabs defaultValue="background">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>

            <TabsContent value="background" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Background style</Label>
                <div className="grid grid-cols-4 gap-2 px-2">
                  {GRADIENTS.map((gradient) => (
                    <button
                      key={gradient}
                      className={cn(
                        gradient,
                        "h-12 rounded-md border transition-all hover:scale-105",
                        style.gradient === gradient &&
                          "ring-primary ring-2 ring-offset-2",
                      )}
                      onClick={() => onStyleChange({ gradient })}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Shadow</Label>
                <Select
                  value={style.shadow}
                  onValueChange={(shadow) => onStyleChange({ shadow })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select shadow style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shadow-none">No shadow</SelectItem>
                    <SelectItem value="shadow-sm">Small</SelectItem>
                    <SelectItem value="shadow-md">Medium</SelectItem>
                    <SelectItem value="shadow-lg">Large</SelectItem>
                    <SelectItem value="shadow-xl">Extra large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Border radius</Label>
                <div className="pt-2">
                  <Slider
                    value={[style.borderRadius]}
                    min={0}
                    max={24}
                    step={1}
                    onValueChange={(value) =>
                      onStyleChange({ borderRadius: value[0] })
                    }
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Font family</Label>
                <Select
                  value={style.fontFamily}
                  onValueChange={(fontFamily) => onStyleChange({ fontFamily })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="font-sans">Sans-serif</SelectItem>
                    <SelectItem value="font-serif">Serif</SelectItem>
                    <SelectItem value="font-mono">Monospace</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Font size</Label>
                <div className="pt-2">
                  <Slider
                    value={[style.fontSize]}
                    min={14}
                    max={24}
                    step={1}
                    onValueChange={(value) =>
                      onStyleChange({ fontSize: value[0] })
                    }
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="layout" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Padding</Label>
                <div className="pt-2">
                  <Slider
                    value={[style.padding]}
                    min={10}
                    max={50}
                    step={5}
                    onValueChange={(value) =>
                      onStyleChange({ padding: value[0] })
                    }
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
