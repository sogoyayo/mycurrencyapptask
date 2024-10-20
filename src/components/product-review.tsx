import { products_review } from "@/constants";
import { ProductReviewCard } from "./product-review-card";
import { HorizontalScrollSnapContainer } from "./horizontal-scroll-container";

export const ProductReview = () => {
  return (
    <HorizontalScrollSnapContainer>
      {products_review.map((item) => (
        <div key={item.id} className="flex-none snap-start w-[70%] sm:w-[20rem]">
          <ProductReviewCard
            name={item.name}
            testimonial={item.testimonial}
            rating={item.rating}
          />
        </div>
      ))}
    </HorizontalScrollSnapContainer>
  );
};
