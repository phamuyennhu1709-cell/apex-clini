import React from 'react';
import { Button } from '../components/Layout';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4 fade-in">Our Philosophy</p>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 fade-in leading-tight">
          Artistry Meets <br/><span className="font-script text-gold-400 text-6xl md:text-8xl">Anatomy</span>
        </h1>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-6 text-lg font-light text-stone-600 leading-loose">
          <p>
            Founded by Olivia, Apex Clinic was born from a desire to bridge the gap between medical rigidity and artistic flow. We believe that aesthetic treatments should never look "done"—they should look like you, on your best day.
          </p>
          <p>
            Our clinic offers a sanctuary where safety protocols are paramount, but the atmosphere is warm, inviting, and devoid of clinical coldness. Every consultation is a conversation, an educational journey where we align our expertise with your personal goals.
          </p>
          <div className="pt-4">
             <h3 className="font-serif text-2xl text-stone-900 mb-2">Our Standards</h3>
             <ul className="list-disc pl-5 space-y-2 text-base text-stone-600">
               <li>Fully insured and medically qualified practitioners.</li>
               <li>Premium, FDA-approved products only.</li>
               <li>Continuous professional development and training.</li>
             </ul>
          </div>
        </div>
        <div className="relative h-[600px] rounded-[10px] overflow-hidden">
          <img 
            src="https://picsum.photos/id/435/800/1200" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Team/Space - Background Grey */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative h-[500px] rounded-[10px] overflow-hidden">
                <img 
                  src="https://picsum.photos/id/201/800/1000" 
                  alt="Consultation" 
                  className="w-full h-full object-cover grayscale-[20%]" 
                />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-5xl md:text-7xl font-serif mb-6 text-stone-900">
                 The <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Space</span>
               </h2>
               <p className="text-stone-600 font-light leading-relaxed mb-8">
                 Located in the heart of the city, our clinic is designed to be an oasis of calm. From the moment you step through our doors, the hustle of the outside world fades away. 
                 Minimalist design, soft textures, and privacy are the cornerstones of the Apex experience.
               </p>
               <Button variant="outline" to="/contact">Visit Us</Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;