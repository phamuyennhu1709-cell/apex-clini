import React from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    { id: 1, name: "Chloe T.", text: "I was so nervous for my first lip filler, but Olivia made me feel so at ease. The results are undetectable but perfect.", treatment: "Lip Filler" },
    { id: 2, name: "Marcus L.", text: "Best Bro-tox in the city. Subtle, refreshed, and professional service.", treatment: "Anti-Wrinkle" },
    { id: 3, name: "Sarah J.", text: "My skin has never looked better after the Profhilo course. It's glowing! I've stopped wearing foundation.", treatment: "Profhilo" },
    { id: 4, name: "Emma W.", text: "Apex Clinic is simply the gold standard. The clinic is beautiful, clean, and the staff are incredibly knowledgeable.", treatment: "Consultation" },
    { id: 5, name: "Jessica R.", text: "She fixed a previous botched job from another clinic. I am forever grateful. Truly an artist.", treatment: "Dissolving & Refilling" },
    { id: 6, name: "Priya K.", text: "Love the natural approach. I look like me, just well-rested.", treatment: "Full Face Balancing" },
  ];

  return (
    <div className="pt-24 pb-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Testimonials</p>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">
             Client <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Love</span>
          </h1>
          <div className="flex justify-center items-center gap-2 text-stone-800">
             <div className="flex"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
             <span className="text-sm font-bold tracking-wide">5.0 RATING ON GOOGLE</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid bg-white p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow rounded-[10px]">
               <div className="flex gap-1 text-stone-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
               </div>
               <p className="text-lg font-serif italic text-stone-800 mb-6 leading-relaxed">
                 "{review.text}"
               </p>
               <div className="border-t border-stone-100 pt-4">
                 <p className="font-bold text-xs uppercase tracking-widest text-stone-900">{review.name}</p>
                 <p className="text-xs text-stone-400 mt-1 italic">{review.treatment}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;