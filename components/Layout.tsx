
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const treatmentLinks = [
    { name: 'Dermal Fillers', path: '/treatment/dermal-fillers' },
    { name: 'Anti Wrinkles', path: '/treatment/anti-wrinkles' },
    { name: 'Skincare', path: '/treatment/skincare' },
    { name: 'Fat Dissolving', path: '/treatment/fat-dissolving' },
  ];

  const allNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 bg-[#eeeae7] ${
        scrolled ? 'py-4 shadow-sm' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo on Left */}
          <Link to="/" className="z-50 flex flex-col items-start group">
            <h1 className="text-2xl md:text-3xl font-serif tracking-[0.1em] text-stone-900 leading-none">
              APEX
            </h1>
            <span className="text-[8px] md:text-[10px] font-serif uppercase tracking-[0.8em] text-stone-900 leading-none mt-1">
              CLINIC
            </span>
          </Link>

          {/* Desktop Central Nav Links */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12 items-center absolute left-1/2 -translate-x-1/2">
            {/* Home, About */}
            {allNavLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative group text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-stone-900 font-bold' : 'text-stone-900/70 hover:text-stone-900'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-stone-900 transition-all duration-300 ease-out ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}

            {/* Treatment Dropdown in middle */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center space-x-2 text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  location.pathname.startsWith('/treatment') ? 'text-stone-900 font-bold' : 'text-stone-900/70 hover:text-stone-900'
                }`}
              >
                <span>Treatment</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute left-0 top-full pt-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-white shadow-xl py-4 min-w-[200px] border border-stone-100">
                  {treatmentLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="block px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other links: Training, Pricing, Contact */}
            {allNavLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative group text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-stone-900 font-bold' : 'text-stone-900/70 hover:text-stone-900'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-stone-900 transition-all duration-300 ease-out ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Desktop Right Button */}
          <div className="hidden lg:block">
            <button 
              onClick={scrollToFooter}
              className="bg-stone-900 text-white px-7 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden z-50 text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#eeeae7] flex flex-col justify-center items-center transition-all duration-500 ease-in-out lg:hidden overflow-y-auto ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-6 text-center items-center py-20">
            {allNavLinks.slice(0, 2).map((link) => (
              <Link key={link.name} to={link.path} className="text-xl font-serif text-stone-800 uppercase tracking-widest">{link.name}</Link>
            ))}
            
            <div className="flex flex-col space-y-4 items-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-bold">Treatments</span>
              {treatmentLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-lg font-serif text-stone-600 uppercase tracking-wider">{link.name}</Link>
              ))}
            </div>

            {allNavLinks.slice(2).map((link) => (
              <Link key={link.name} to={link.path} className="text-xl font-serif text-stone-800 uppercase tracking-widest">{link.name}</Link>
            ))}
            
            <button 
              onClick={scrollToFooter}
              className="mt-4 bg-stone-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const MarqueeItem = () => (
    <div className="flex items-center text-stone-900/15 text-[6rem] md:text-[12rem] font-serif leading-none tracking-tighter uppercase select-none">
      <span className="px-10 md:px-16">APEX CLINIC</span>
      <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-stone-900/10 flex-shrink-0"></div>
    </div>
  );

  return (
    <footer id="footer" className="bg-[#eeeae7] text-stone-900 pt-[7.5rem] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-24">
        <div className="space-y-12">
           <div className="space-y-6">
             <p className="text-xs tracking-[0.2em] uppercase text-stone-500">Get in Touch</p>
             <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none">
              Contact <span className="font-script text-[#D9A13B] text-6xl md:text-8xl ml-2">Us</span>
             </h2>
             <div className="text-stone-600 font-light leading-relaxed max-w-md text-lg space-y-4">
               <p className="font-bold">Better yet, come visit!</p>
               <p>
                We would love to help you meet your confidence goals through our aesthetic treatments. Please feel free to book your free in-clinic consultation to explore which services would be suitable for you.
               </p>
             </div>
           </div>

           <div className="space-y-8">
              <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Address</h3>
                 <p className="text-stone-600 font-light text-lg">
                  Apex Clinic - based at AG PERMANENT COSMETICS ACADEMY<br/>
                  6 Carolgate, Retford DN22 6BU
                 </p>
              </div>
              <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Email</h3>
                 <p className="text-stone-600 font-light text-lg">apexaestheticsbyliv@gmail.com</p>
              </div>
              <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">Phone</h3>
                 <p className="text-stone-600 font-light text-lg">07710537924</p>
              </div>
           </div>
        </div>

        <div>
           <div className="bg-white p-8 md:p-12 shadow-sm rounded-[10px]">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-400 font-bold">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-400 font-bold">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light text-stone-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-400 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 transition-colors font-light resize-none text-stone-900"></textarea>
                </div>
                <button 
                    type="button" 
                    className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-none shadow-sm hover:shadow-md"
                >
                    Send Message
                </button>
              </form>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-10 px-6 w-full border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-stone-500 gap-4">
        <p>© {new Date().getFullYear()} Apex Aesthetics Clinic. All rights reserved.</p>
        <div className="flex items-center gap-6">
           <a href="#" className="hover:text-stone-900 transition-colors"><Instagram size={16} /></a>
           <a href="#" className="hover:text-stone-900 transition-colors"><Facebook size={16} /></a>
        </div>
      </div>

      <div className="border-t border-white/60 bg-[#eeeae7] py-12 md:py-20 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee-right will-change-transform">
          <div className="flex whitespace-nowrap">
            {[...Array(6)].map((_, i) => <MarqueeItem key={`set1-${i}`} />)}
          </div>
          <div className="flex whitespace-nowrap">
            {[...Array(6)].map((_, i) => <MarqueeItem key={`set2-${i}`} />)}
          </div>
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
  const baseStyles = "inline-block px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-out rounded-none border text-center transform hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary: "bg-stone-900 text-white border-stone-900 hover:bg-white hover:text-stone-900 hover:shadow-lg hover:border-stone-900",
    outline: "bg-transparent text-stone-900 border-stone-900 hover:bg-stone-900 hover:text-white hover:shadow-md"
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
