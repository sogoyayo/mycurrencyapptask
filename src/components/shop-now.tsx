import ProductImg from "@/assets/images/product-Image.jpg";
import { Button } from "./ui/button";

export const ShopNowSection = () => {
  return (
    <section className={"py-10 sm:py-16 lg:py-24"}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <img className="w-full rounded-md" src={ProductImg} alt="" />

            {/* <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm -right-64 bottom-3 shadow-2xl rounded-md"> */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full px-4 lg:-translate-x-14 lg:right-64 max-w-xs lg:max-w-sm sm:px-0 shadow-2xl rounded-md">
              <div className="overflow-hidden bg-white rounded">
                <div className="px-6 py-6">
                  <div className="flex items-start gap-2">
                    <span className="">😊</span>
                    <p className="italic text-sm font-light">
                      Promotes calm and relaxation.
                    </p>
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
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="section-title mt-5">Shop Now</h2>
            <p className="mt-6 text-base leading-normal text-gray-600 max-w-96 mx-auto lg:mx-0">
              Our Personal Diffuser is an aromatherapy device that contains a blend of
              melatonin, lavender, and chamomile. A few breaths of our plant-based
              essential oil mist will mellow you out, quiet the mind, and lull you to bed.
            </p>
            <Button className="bg-[#FC5959] px-10 py-4 text-sm font-semibold text-white rounded-sm mt-9">
              Visit Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
