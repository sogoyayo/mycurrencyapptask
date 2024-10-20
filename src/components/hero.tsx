import HomeHeroImg from "@/assets/images/home-hero-img.jpg";
import GoogleImg from "@/assets/images/google.jpg";
import ForbesImg from "@/assets/images/PngItem2.jpg";
import BloombergImg from "@/assets/images/PngItem.jpg";
import SleepReviewImg from "@/assets/images/Sleep-Review-Magazine.jpg";
import BlackLargeImg from "@/assets/images/Logo_Black_Large_Slogan_newfont.jpg";
import { Button } from "./ui/button";

const logos = [
  { src: GoogleImg, alt: "Google" },
  { src: ForbesImg, alt: "Forbes" },
  { src: BloombergImg, alt: "Bloomberg" },
  { src: SleepReviewImg, alt: "Sleep Review" },
  { src: BlackLargeImg, alt: "Black Logo" },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png",
    alt: "External Logo",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-12rem)] bg-gray-100 mb-10">
      <div className="absolute inset-0">
        <img
          src={HomeHeroImg}
          alt="Woman sleeping peacefully"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10 container px-4 py-16 max-w-screen-xl mx-auto h-full mt-12 space-y-6">
        <span>We're here to help you</span>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Relax & Rest</h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          With the aid of our Melatonin Sleepstiq, we can assure you that you can get
          quality sleep.
        </p>
        <Button className="bg-red-500 text-white px-14 py-5 rounded-md text-base font-medium hover:bg-red-600 transition-colors duration-300">
          Visit Shop
        </Button>
      </div>

      <div className="relative z-10 bg-white md:w-[85%] px-6 py-8 md:-mt-44 lg:-mt-24 md:ml-auto shadow-xl">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="object-contain w-auto mx-auto h-14"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
