// interface TestimonialProps {
//   testimonial: string;
//   name: string;
//   rating: number;
// }

// export const Testimonial = ({ testimonial, name, rating }: TestimonialProps) => {
//   return (
//     <div className="">
//       <p className="mt-4 leading-relaxed text-gray-700 max-w-7xl">{testimonial}</p>

//       <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//         <p className="text-lg font-medium text-gray-900">{name}</p>
//         <div className="flex gap-0.5 text-green-500">
//           {Array(rating)
//             .fill(null)
//             .map((_, i) => (
//               <svg
//                 key={i}
//                 className="size-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//         </div>
//       </footer>
//     </div>
//   );
// };

interface TestimonialProps {
  testimonial: string;
  name: string;
  rating: number;
}

export const Testimonial = ({ testimonial, name, rating }: TestimonialProps) => {
  return (
    <>
      <p className="mt-4 leading-relaxed text-gray-700 max-w-7xl flex-grow">
        {testimonial}
      </p>

      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        <p className="text-lg font-medium text-gray-900">{name}</p>
        <div className="flex gap-0.5 text-green-500">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <svg
                key={i}
                className="size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
        </div>
      </footer>
    </>
  );
};
