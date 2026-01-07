import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-sm py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50 flex flex-col items-center group">
          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.05em] text-stone-900 leading-none">
            APEX
          </h1>
          <span className="text-[10px] md:text-xs font-serif uppercase tracking-[0.6em] text-stone-900 leading-none mt-1.5 ml-1">
            CLINIC
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase hover:text-stone-500 transition-colors ${
                location.pathname === link.path ? 'text-stone-900 font-semibold border-b border-stone-900' : 'text-stone-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif text-stone-800 hover:text-stone-500 hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eeeae7] text-stone-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column - Contact Info */}
        <div className="space-y-12">
           <div className="space-y-6">
             <p className="text-xs tracking-[0.2em] uppercase text-stone-500">Get in Touch</p>
             <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none">
              Contact <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Us</span>
             </h2>
             <p className="text-stone-600 font-light leading-relaxed max-w-md text-sm md:text-base">
               Have questions about a treatment or ready to book your consultation? Fill out the form below or reach out to us directly.
             </p>
           </div>

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

        {/* Right Column - Form */}
        <div>
           {/* Updated to rounded-[10px] based on user request */}
           <div className="bg-white p-8 md:p-12 shadow-sm rounded-[10px]">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-400">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-400">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400">Interested In</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900 appearance-none rounded-none cursor-pointer">
                      <option>General Enquiry</option>
                      <option>Dermal Fillers</option>
                      <option>Anti-Wrinkle</option>
                      <option>Skin Rejuvenation</option>
                    </select>
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light resize-none text-stone-900"></textarea>
                </div>

                <button 
                    type="button" 
                    className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors rounded-none"
                >
                    Send Message
                </button>
              </form>
           </div>
        </div>

      </div>
      
      {/* Copyright & Social */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-stone-500 gap-4">
        <p>© {new Date().getFullYear()} Apex Aesthetics Clinic. All rights reserved.</p>
        <div className="flex items-center gap-6">
           <a href="#" className="hover:text-stone-900 transition-colors"><Instagram size={16} /></a>
           <a href="#" className="hover:text-stone-900 transition-colors"><Facebook size={16} /></a>
        </div>
      </div>
    </footer>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, className, ...props }) => {
  // Styles updated: Wide padding (px-12), Sharp corners (rounded-none), Bold Uppercase text
  const baseStyles = "inline-block px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-out rounded-none border border-stone-900";
  
  const variants = {
    // Primary: Black Background, White Text. Hover: White Background, Black Text.
    primary: "bg-stone-900 text-white border-stone-900 hover:bg-white hover:text-stone-900",
    
    // Outline: Transparent Background, Black Text. Hover: Black Background, White Text.
    outline: "bg-transparent text-stone-900 border-stone-900 hover:bg-stone-900 hover:text-white"
  };

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className || ''}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
