import { Tabs, TabsTrigger, TabsContent, TabsList } from "./ui/tabs";
import { ProductAccordion } from "./product-accordion";

export const FaqSubSection = () => {
  return (
    <div className="my-10 mx-12 lg:mx-32">
      <Tabs defaultValue="product">
        <div className="grid grid-cols-[min-content,1fr] gap-12 px-4 py-2">
          <TabsList className="grid justify-start space-y-3 w-48">
            <TabsTrigger
              value="product"
              className="text-zinc-600 dark:text-zinc-200 data-[state=active]:font-bold"
            >
              Sleepstiq Product
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="text-zinc-600 dark:text-zinc-200 data-[state=active]:font-bold"
            >
              Order
            </TabsTrigger>
            <TabsTrigger
              value="melantonin"
              className="text-zinc-600 dark:text-zinc-200 data-[state=active]:font-bold"
            >
              Melantonin
            </TabsTrigger>
          </TabsList>
          <TabsContent value="product" className="m-0">
            <ProductAccordion />
          </TabsContent>
          <TabsContent value="order" className="m-0">
            <ProductAccordion />
          </TabsContent>
          <TabsContent value="melantonin" className="m-0">
            <ProductAccordion />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
