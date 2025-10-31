import { FaQuoteRight, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  title: string;
  initials: string;
  rating: number;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    // card
    <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="h-full bg-[#2c2c32] p-6 rounded-lg border border-gray-700/50 flex flex-col shadow-lg hover:border-amber-400/50 transition-colors duration-300">
        <div className="flex justify-between items-start mb-4">
          {/* header card */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-lg flex-shrink-0">
              {testimonial.initials}
            </div>
            <div className="min-h-[56px] flex flex-col justify-center">
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-xs text-gray-400">{testimonial.title}</p>
            </div>
          </div>
          <FaQuoteRight className="text-5xl text-gray-700/50" />
        </div>
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < testimonial.rating ? "text-amber-400" : "text-gray-600"
              }
            />
          ))}
        </div>
        {/* Quote */}
        <p className="text-sm text-gray-300 italic flex-grow">
          &quot;{testimonial.quote}&quot;
        </p>
      </div>
    </div>
  );
}
