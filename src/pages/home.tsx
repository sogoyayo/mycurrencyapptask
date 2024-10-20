import { AboutHomeSection } from "@/components/about-home-section";
import { Divider } from "@/components/divider";
import { HeroSection } from "@/components/hero";
import { TestimonialReview } from "@/components/testimonial-review";
import { MissionSection } from "@/components/our-mission-section";
import { ProductReview } from "@/components/product-review";
import { ShopNowSection } from "@/components/shop-now";
import { VisitOurShop } from "@/components/visit-our-shop";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutHomeSection />
      <TestimonialReview />
      <Divider />
      <ShopNowSection />
      <MissionSection />
      <VisitOurShop />
      <Divider />
      <ProductReview />
    </>
  );
};

export default Home;
