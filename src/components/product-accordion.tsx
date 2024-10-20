import { Accordion } from "@/components/ui/accordion";
import { AccordionComponent } from "@/components/accordion-component";

export function ProductAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionComponent
        label="Q1: How does it work?"
        content={
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q2: Why inhale melatonin?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q3: How much melatonin is there per inhale?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q4: Is it an e-cigarette or tobacco product?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q5: What's in it?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q6: What's not in it?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q7: How long does it last?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
      <AccordionComponent
        label="Q8: How do I know it has run out/died?"
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt
            nisi saepe enim temporibus?
          </p>
        }
      />
    </Accordion>
  );
}
