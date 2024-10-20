import ProductImg from "@/assets/images/product-Image.jpg";
import { Button } from "./ui/button";
import { ProductSelectInput } from "./product-select-input";

export const AboutProduct = () => {
  return (
    <section className={"py-10 sm:py-16 lg:py-24"}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <img className="w-full rounded-md" src={ProductImg} alt="" />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="section-title mt-5">About Product</h2>
            <p className="paragraph-text mt-6 text-base leading-normal text-gray-600 max-w-96 mx-auto lg:mx-0">
              Our Personal Diffuser is an aromatherapy device that contains a blend of
              melatonin, lavender, and chamomile. A few breaths of our plant-based
              essential oil mist will mellow you out, quiet the mind, and lull you to bed.
            </p>
            {/* <div className="py-6">
              <div className="flex items-start gap-2">
                <span className="">😊</span>
                <p className="italic text-sm font-light">Promotes calm and relaxation.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="">💤</span>
                <p className="italic text-sm font-light">
                  {" "}
                  Inhalation allows for a rapid effect.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="">✅</span>
                <p className="italic text-sm font-light">
                  100% drug-free, plant-based ingredients.
                  <br /> 3rd-party lab tested..
                </p>
              </div>
            </div> */}
            <div className="mt-6 py-6 lg:py-0 lg:text-left text-center">
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <span>😊</span>
                <p className="italic text-sm font-light">Promotes calm and relaxation.</p>
              </div>
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <span>💤</span>
                <p className="italic text-sm font-light">
                  Inhalation allows for a rapid effect.
                </p>
              </div>
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <span>✅</span>
                <p className="italic text-sm font-light">
                  100% drug-free, plant-based ingredients.
                  <br /> 3rd-party lab tested.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-16 place-content-center lg:place-content-start">
              <div className="space-y-3">
                <p>Price</p>
                <p className="font-medium">USD 50</p>
              </div>
              <div className="space-y-2">
                <p>Unit</p>
                <ProductSelectInput />
              </div>
            </div>
            <Button className="px-10 py-4 text-sm font-semibold text-white rounded-sm mt-9">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
