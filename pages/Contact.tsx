import React from 'react';
import { Button } from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50 flex flex-col">
       <div className="flex-grow max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
         
         {/* Info Side */}
         <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">
              Contact <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Us</span>
            </h1>
            <p className="text-stone-600 font-light mb-12 max-w-md leading-relaxed">
              Have questions about a treatment or ready to book your consultation? 
              Fill out the form below or reach out to us directly.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Address</h3>
                <p className="text-stone-600 font-light">123 Luxury Lane, Mayfair<br/>London, UK W1J 6BQ</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Email</h3>
                <p className="text-stone-600 font-light">info@apexclinic.com</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Phone</h3>
                <p className="text-stone-600 font-light">020 7123 4567</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Opening Hours</h3>
                <p className="text-stone-600 font-light">
                  Mon - Fri: 10am - 7pm<br/>
                  Sat: 10am - 4pm<br/>
                  Sun: Closed
                </p>
              </div>
            </div>
         </div>

         {/* Form Side */}
         <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-[10px]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-stone-400">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-stone-400">Interested In</label>
                <select className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-600">
                  <option>General Enquiry</option>
                  <option>Dermal Fillers</option>
                  <option>Anti-Wrinkle</option>
                  <option>Skin Rejuvenation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-stone-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light resize-none"></textarea>
              </div>

              <Button variant="primary" type="button" className="w-full">Send Message</Button>
            </form>
         </div>
       </div>

       {/* Map Placeholder */}
       <div className="w-full h-96 bg-stone-200 grayscale relative">
          <img src="https://picsum.photos/id/364/1920/600" alt="Map Location" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 shadow-lg rounded-[10px]">
               <p className="font-serif text-lg">Apex Clinic</p>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;