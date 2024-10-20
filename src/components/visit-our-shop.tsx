import { Button } from "./ui/button";

export const VisitOurShop = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-screen-xl mx-auto space-y-12 text-center my-28">
        <h2 className="section-title">Visit Our Shop</h2>
        <p className="paragraph-text max-w-[85ch] mx-auto">
          Our Personal Diffuser is an aromatherapy device that contains a blend of
          melatonin, lavender, and chamomile. A few breaths of our plant-based essential
          oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <Button className="px-16 py-6">Visit Shop</Button>
      </div>
    </section>
  );
};
