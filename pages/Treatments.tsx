import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Layout';

const Treatments: React.FC = () => {
  const categories = [
    {
      name: "Injectables",
      items: [
        { title: "Lip Enhancement", desc: "Subtle volume and definition using premium fillers.", price: "from £250" },
        { title: "Anti-Wrinkle Injections", desc: "Relax muscles to smooth forehead lines and crow's feet.", price: "from £180" },
        { title: "Cheek Contouring", desc: "Restore lost volume and lift the mid-face.", price: "from £300" },
        { title: "Jawline Definition", desc: "Sharpen the profile and reduce jowls.", price: "from £350" },
      ]
    },
    {
      name: "Skin Rejuvenation",
      items: [
        { title: "Profhilo", desc: "The ultimate hyaluronic acid moisturizer for glowing skin.", price: "£280" },
        { title: "Microneedling", desc: "Collagen induction therapy for scarring and texture.", price: "£150" },
        { title: "Chemical Peels", desc: "Resurface skin for a brighter, smoother complexion.", price: "£90" },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Our Menu</p>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900">
            Curated <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Treatments</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-12 space-y-24">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-serif border-b border-stone-200 pb-6 mb-10 flex items-baseline justify-between text-stone-900">
                  <span>{cat.name}</span>
                  <span className="text-sm font-sans font-normal text-stone-400 hidden sm:inline-block">Consultation required for all services</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group flex flex-col items-start">
                      <div className="w-full flex justify-between items-baseline mb-3">
                        <h3 className="text-xl font-serif text-stone-900">{item.title}</h3>
                        <span className="text-sm text-stone-500 font-light">{item.price}</span>
                      </div>
                      <p className="text-stone-600 font-light leading-relaxed mb-8 text-sm flex-grow">
                        {item.desc}
                      </p>
                      <Button variant="primary" to="/contact" className="px-8 py-3 w-auto text-xs">
                        BOOK NOW
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 bg-white text-center border border-stone-100 rounded-[10px]">
            <h3 className="text-2xl font-serif mb-4 text-stone-900">Unsure what you need?</h3>
            <p className="text-stone-600 font-light mb-8">Book a comprehensive consultation where we analyze your facial structure and skin health to create a bespoke plan.</p>
            <Button variant="outline" to="/contact">
              Book Consultation
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Treatments;