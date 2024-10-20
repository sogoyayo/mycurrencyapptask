import ProductImage from "@/assets/images/product-image-1.jpg";
import { Testimonial } from "./testimonial";

interface ProductReviewCardProps {
  name: string;
  testimonial: string;
  rating: number;
}

export const ProductReviewCard = ({
  name,
  testimonial,
  rating,
}: ProductReviewCardProps) => {
  return (
    <div className="relative block overflow-hidden shadow-2xl">
      <img
        src={ProductImage}
        alt="Product"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="bg-white p-6 flex-grow flex flex-col justify-between min-h-[18rem]">
        <Testimonial testimonial={testimonial} name={name} rating={rating} />
      </div>
    </div>
  );
};
