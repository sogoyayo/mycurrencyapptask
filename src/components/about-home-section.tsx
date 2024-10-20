import { Play } from "lucide-react";
import { Button } from "./ui/button";

export const AboutHomeSection = () => {
  return (
    <section className="mt-32">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="paragraph-text text-sm mb-6">Our Amazing Story</p>
            <h2 className="section-title mb-16">10k+ Happy Customers</h2>

            <p className="paragraph-text text-gray-600 max-w-[45ch] mb-6 mx-auto lg:mx-0">
              There’s no secret sauce, no wizard behind the curtain. What makes Aerolab
              tick is an interdisciplinary team with a framework that fosters candid
              collaboration.
            </p>

            <Button variant="ghost" className="p-0 underline text-[#12305B]">
              <Play className="fill-black size-3 me-2" /> More know About us
            </Button>
          </div>

          <div className="rounded-lg bg-[#FBF9F2] p-6 shadow-2xl sm:p-14">
            <div className="mb-12 space-y-8">
              <p className="paragraph-text italic text-2xl mt-4 text-gray-700 mb-20">
                I’m a very anxious person but use this and feel so relaxed and sleep way
                better now with the aid of sleepstiq.
              </p>
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">James Miller</p>
                  <span>CEO, Techbias</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 place-content-center">
              <div className="size-3 rounded-full bg-[#C4C4C4]"></div>
              <div className="size-3 rounded-full bg-[#C4C4C4]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
