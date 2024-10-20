import { testimonials } from "@/constants";
import { Testimonial } from "./testimonial";
import { HorizontalScrollSnapContainer } from "./horizontal-scroll-container";

export const TestimonialReview = () => {
  return (
    <HorizontalScrollSnapContainer>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="flex-none snap-start w-[70%] sm:w-[24rem]">
          <div className={"bg-[#FBF9F2] w-full p-4 h-64"}>
            <div className="flex flex-col justify-between h-full">
              <Testimonial
                testimonial={testimonial.review}
                name={testimonial.name}
                rating={testimonial.rating}
              />
            </div>
          </div>
        </div>
      ))}
    </HorizontalScrollSnapContainer>
  );
};
