import { Testimonial } from "@/types";
import { Quote } from "lucide-react";
import { RatingStars } from "../atoms/RatingStars";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <Quote className="w-12 h-12 text-blue-500 mb-4" />
      <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
      <RatingStars rating={testimonial.rating} />
      <p className="font-semibold text-gray-900 mt-3">- {testimonial.author}</p>
      {testimonial.product && (
        <p className="text-sm text-gray-500 mt-1">Sobre: {testimonial.product}</p>
      )}
      <p className="text-xs text-gray-400 mt-2">{testimonial.date}</p>
    </div>
  );
};
