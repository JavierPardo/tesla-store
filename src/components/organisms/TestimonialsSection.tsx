import { Testimonial } from "@/types";
import { TestimonialCard } from "../molecules/TestimonialCard";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
        Lo que dicen nuestros Clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};
