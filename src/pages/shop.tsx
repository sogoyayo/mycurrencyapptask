import { AboutProduct } from "@/components/about-product";
import { Divider } from "@/components/divider";
import { TestimonialReview } from "@/components/testimonial-review";
import { ShopHeroSection } from "@/components/shop-hero";

const Shop = () => {
  return (
    <>
      <ShopHeroSection />
      <AboutProduct />
      <Divider />
      <TestimonialReview />
    </>
  );
};

export default Shop;
