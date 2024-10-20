import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cn from "@/utils/class-names";
import React from "react";

interface AccordionItemProps {
  label: string;
  content: React.ReactNode;
  value?: string;
}

interface AccordionPropsBase {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}

type AccordionPropsWithItems = AccordionPropsBase & {
  items: AccordionItemProps[];
  label?: never;
  content?: never;
  value?: never;
};

type AccordionPropsWithoutItems = AccordionPropsBase & {
  items?: never;
  label: string;
  content: React.ReactNode;
  value?: string;
};

type AccordionProps = AccordionPropsWithItems | AccordionPropsWithoutItems;

export const AccordionComponent = ({
  items,
  label,
  content,
  value,
  type = "single",
  collapsible = true,
  className = "",
}: AccordionProps) => {
  const accordionClasses = cn("w-full", className);

  const generateUniqueId = `${Date.now()}`;

  const renderItems = () => {
    if (items) {
      return items.map((item, index) => (
        <AccordionItem key={index} value={item.value ?? generateUniqueId}>
          <AccordionTrigger className="paragraph-text text-sm lg:text-base">
            {item.label}
          </AccordionTrigger>
          <AccordionContent className="paragraph-text">{item.content}</AccordionContent>
        </AccordionItem>
      ));
    } else if (label && content) {
      return (
        <AccordionItem value={value ?? generateUniqueId}>
          <AccordionTrigger className="paragraph-text text-sm lg:text-base">
            {label}
          </AccordionTrigger>
          <AccordionContent className="paragraph-text">{content}</AccordionContent>
        </AccordionItem>
      );
    }
    return null;
  };

  return (
    <Accordion type={type} collapsible={collapsible} className={accordionClasses}>
      {renderItems()}
    </Accordion>
  );
};
