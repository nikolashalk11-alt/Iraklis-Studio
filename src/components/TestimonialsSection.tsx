import React from 'react';
import { Star } from 'lucide-react';
import { GymData } from '../data/gymData';

interface TestimonialsSectionProps {
  gymData: GymData;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ gymData }) => {
  return (
    <section id="reviews" className="py-14 sm:py-16 bg-[#fbfcf8] border-b border-[#e7e8e2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
              Κριτικες Μελων
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#18181b] tracking-tight font-work-sans-bold mt-1">
              ΤΙ ΛΕΝΕ ΟΙ ΑΘΛΗΤΕΣ ΜΑΣ.
            </h2>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white border border-[#e7e8e2] rounded shadow-xs">
            <div className="flex text-zinc-800">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-zinc-800" />
              ))}
            </div>
            <div className="text-xs font-mono text-zinc-600">
              <strong className="text-zinc-900 font-bold">4.9 / 5.0</strong> σε 150+ αξιολογήσεις Google
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymData.reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-7 rounded bg-white border border-[#e7e8e2] flex flex-col justify-between hover:border-zinc-400 transition-colors shadow-xs"
            >
              <div>
                <div className="flex text-zinc-800 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zinc-800" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-normal font-roboto">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
