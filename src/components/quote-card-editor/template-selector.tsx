import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QUOTE_CARD_TEMPLATES } from "@/data/quote-card-templates";

interface TemplateSelectorProps {
  onSelectTemplate: (templateName: string) => void;
}

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="templates">
        <AccordionTrigger>Templates</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-3">
            {QUOTE_CARD_TEMPLATES.map((template) => (
              <button
                key={template.name}
                className="hover:bg-accent flex flex-col items-center rounded-lg border p-3 transition-all"
                onClick={() => onSelectTemplate(template.name)}
              >
                <div 
                  className={`mb-2 h-20 w-full rounded ${template.previewGradient}`}
                ></div>
                <span className="text-sm">{template.name}</span>
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
