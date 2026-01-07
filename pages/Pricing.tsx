import React from 'react';
import { Button } from '../components/Layout';

const Pricing: React.FC = () => {
  const prices = [
    { service: "Consultation", price: "£50", note: "Redeemable against treatment" },
    { service: "Anti-Wrinkle (1 Area)", price: "£180", note: "" },
    { service: "Anti-Wrinkle (2 Areas)", price: "£230", note: "" },
    { service: "Anti-Wrinkle (3 Areas)", price: "£280", note: "" },
    { service: "Lip Enhancement (0.5ml)", price: "£180", note: "Restylane / Juvederm" },
    { service: "Lip Enhancement (1ml)", price: "£250", note: "Restylane / Juvederm" },
    { service: "Cheek Filler (1ml)", price: "£300", note: "" },
    { service: "Cheek Filler (2ml)", price: "£550", note: "" },
    { service: "Chin/Jawline (per ml)", price: "£300", note: "" },
    { service: "Profhilo (1 Session)", price: "£280", note: "Face or Neck" },
    { service: "Profhilo (2 Sessions)", price: "£500", note: "Recommended course" },
  ];

  return (
    <div className="pt-24 pb-12 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">
             Price <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">List</span>
           </h1>
           <p className="text-stone-500 font-light">Transparent pricing for premium results.</p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-[10px]">
          <ul className="space-y-8">
            {prices.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-100 pb-4">
                <div className="mb-2 md:mb-0">
                  <span className="text-lg font-serif text-stone-800 block">{item.service}</span>
                  {item.note && <span className="text-xs text-stone-400 font-light">{item.note}</span>}
                </div>
                <div className="text-lg font-light text-stone-900">{item.price}</div>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 text-center bg-stone-50 p-6 rounded-[10px]">
            <p className="text-sm text-stone-500 font-light mb-4">
              * A £50 deposit is required to secure all bookings. This is fully redeemable against your treatment cost.
            </p>
            <Button variant="primary" to="/contact">Secure Your Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;