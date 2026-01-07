import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { Button } from '../components/Layout';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Approx card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const services = [
    { 
      title: 'Deluxe Dermaplane', 
      price: '£45',
      desc: 'This advanced exfoliation technique gently removes dead skin cells and fine vellus hair using a medical-grade scalpel, allowing for deeper product penetration.', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.82787-15/586681116_18442364185100116_8921318429838183563_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH1SFZqFMGPW_lVvOpZDIkIZ2AK2YDw8URnYArZgPDxRHefPzO-1kK6ZTYYx08vKb-QT9jZzpWODAW44SfXSoR9&_nc_ohc=N7vnOUGJRtkQ7kNvwFdf3sB&_nc_oc=AdkhjfOAHuyB4Pmdh8Dh5apZdEe1HS3M-ejFS7nYQKc2PyrAAO6T69ZPe5oUrERuQ9tBmNyXDfXjyqvwQMWt5kea&_nc_zt=23&se=-1&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=06khaionDR6MwKVGIGFQEg&oh=00_AfpponaZIepoCh41Zll3DakM4ZCVHP5zchHzNciPIyvWuA&oe=696401EF' 
    },
    { 
      title: 'Deluxe High Frequency', 
      price: '£55',
      desc: 'A targeted treatment that uses electrical currents to stimulate collagen, reduce bacteria, and calm inflammation. Perfect for acne-prone skin.', 
      img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t51.82787-15/586685056_18441267625100116_2673419781601899327_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDWSOJdiGq9mfHWNuDmRe9R84uHjrY3NJHzi4eOtjc0r9NQnOl7X6fWxCLlJYrT12ijHk9IiLpoRjqmO-eeRvX&_nc_ohc=-G1FS6OhZHYQ7kNvwHInAsN&_nc_oc=AdmrrJDctEXRVb_SYcIOFIusoLGxLxvNiwCX-p_yvbZqnp3OU9tlUuqXIyqmocuydUzvKQ-791mMiZzA2YTK0veX&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=3b3RngVd649ElubvNKT50Q&oh=00_Afobmsk1CCLNw7IXaIlf_pg4Q8ZR6HPzeyiB6HZbmIHpUg&oe=69640BDB' 
    },
    { 
      title: 'Deluxe Skin Peel', 
      price: '£80',
      desc: 'Our Skin Peels are designed to refresh and renew your skin. We offer a range of peels tailored to target specific concerns such as acne and pigmentation.', 
      img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t51.82787-15/535950314_18422990863100116_3523678481904171611_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE4CfOBECBeuYJYoJo0k1xgepQnIvHmw396lCci8ebDf2KhBPKhyZb-mZt4-0cZ8ZRdVJ25mgR94NR2_m_P9smK&_nc_ohc=m75uJctCryoQ7kNvwHnEKfa&_nc_oc=AdmsdkzkJqhhuRqV0N3pLApa1wCe6W0-YPLmFLc3bMOfryvWKrNG-YyFB1RJIDD4k5Uj0SjsYPZ2PZDxVw80WDPx&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Ggz5ueofDhmIvuWQcKUgcw&oh=00_AfoDjc3KsqLfPp2aeAFtMvzQguA8S7CU1_ka8op-r1PVAg&oe=696434C4' 
    },
    { 
      title: 'Lets Turn Back The Years', 
      price: '£125',
      desc: 'Combining Deluxe Dermaplane, a choice of one of our peels and Micro Needling to induce skin collagen and elastin diminishing fine lines.', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.75761-15/487774471_18402687823100116_517027302862515246_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1l5LMV7e1jbnIQ40sLLI8Km4gfYDh_AoqbiB9gOH8ChdRmk1uGerigxoOVbaFLJXEGu9_wtX_qIGAJROWmfxA&_nc_ohc=srxfG1I4YVgQ7kNvwG-4Rs7&_nc_oc=AdlIJCCfXETOPJ67XslQQpB_6M0WZK707oz0SpEFb92gHp5u_MfrGy8Afe4GsGw0E5omDz6XY2fiXKbQEawYn1U7&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=FtfN-iC2tb92vg95yLRtyw&oh=00_AfqHbbP5WDFOi5-7TURamTNMNPTfGixTR6TUlpmVfgx3pg&oe=69642A4F' 
    },
    { 
      title: 'Ultimate Acne Buster', 
      price: '£95',
      desc: 'Combining our Pure peel with high frequency and LED light therapy to kill acne causing bacteria and diminish breakouts.', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.75761-15/469301779_18384554695100116_707537089760570063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1ULlYFCIBBdZmtlRUR9BlAMiJdQ7ybJ0AyIl1DvJsnTw3Xa1Hwbn8x0m7jUpRb_b8w_vV67-CCOXaGd5AzYSo&_nc_ohc=cp8TqUddL0YQ7kNvwFOmsx8&_nc_oc=Adm1Xn78ozvLy2Fvuk0-xlJx2dZrwX6RkljBoC4LO9t67j38pt6U1e4QQ_99M42lHyTRaUStKHbLX0q6fpgF19M5&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=mP1BNIxLwEuqD-caEP9zOg&oh=00_AfrDmqw4UrTbmeA9SiKseKzC7M0SgxFVLG5jYUyt1qpYHg&oe=6964385B' 
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section - Video Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-90 brightness-[0.85]"
          >
             {/* Aesthetic skincare/spa video source */}
             <source src="https://assets.mixkit.co/videos/52171/52171-720.mp4" />
          </video>
          <div className="absolute inset-0 bg-stone-900/10"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6 fade-in">
          <p className="text-white tracking-[0.3em] uppercase text-xs md:text-sm mb-6 shadow-sm">
            Start Your Glow Today
          </p>
          <h1 className="text-6xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Nurse Led Expert Aesthetics <br />
            <span className="font-script text-gold-400 text-5xl md:text-7xl block mt-4">Known for our Natural Results</span>
          </h1>
          {/* Hero Button - Updated to default Primary (Black) */}
          <Button variant="primary" to="/contact">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* Indulge in Experience Section - Updated */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900">
              Indulge in the Apex Clinic Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#dcd5ca] p-8 md:p-10 rounded-[10px] flex flex-col h-full items-center text-center">
              <h3 className="text-2xl font-serif mb-6 text-stone-900">Advanced Skin Treatments</h3>
              <p className="text-stone-800 font-light leading-relaxed mb-8 flex-grow text-sm">
                We're proud to be an authorised Dermalogica partner, offering expert skincare treatments alongside our own Advanced Skin Treatments and Dermalux LED Light Therapy Facials. Every treatment is tailored to your unique skin needs, combining professional knowledge, innovative techniques, and results-driven formulas to leave your skin visibly healthier, radiant, and revitalised.
              </p>
              <div>
                <Link to="/treatments" className="inline-block bg-white text-stone-900 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  Advanced Skin Treatments
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#edeae6] p-8 md:p-10 rounded-[10px] flex flex-col h-full items-center text-center">
              <h3 className="text-2xl font-serif mb-6 text-stone-900">Beauty Treatments</h3>
              <p className="text-stone-800 font-light leading-relaxed mb-8 flex-grow text-sm">
                Our beauty treatments are designed to help you look and feel your best every day. From perfectly shaped brows and lifted lashes to flawless nails, smooth waxing, and deeply relaxing massages, every service is carried out with precision, care, and professionalism. Whether you're preparing for a special occasion or want to feel more confident, our expert therapists deliver treatments that leave you polished, refreshed, and effortlessly confident.
              </p>
              <div>
                <Link to="/treatments" className="inline-block bg-white text-stone-900 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  Beauty Treatments
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#dcd5ca] p-8 md:p-10 rounded-[10px] flex flex-col h-full items-center text-center">
              <h3 className="text-2xl font-serif mb-6 text-stone-900">Free Skin Consultation</h3>
              <p className="text-stone-800 font-light leading-relaxed mb-8 flex-grow text-sm">
                Not sure where to start with your skincare? Book a complimentary skin consultation with one of our experts. We'll assess your skin, discuss your concerns, and create a personalised treatment and product plan tailored to your goals. No pressure, no obligation...just professional advice to help you feel confident in your skin.
              </p>
              <div>
                <Link to="/contact" className="inline-block bg-white text-stone-900 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  Book Free Skin Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Services Slider - Background White - Removed border-t */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
               <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900">
                Our <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Services</span>
               </h2>
               <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                 Here at Apex Clinic we offer a range of treatments to help combat a wide variety of skin concerns.
                 If you aren't sure which treatment would be best for you simply book for a 'consultation' and we can decide on the day.
               </p>
            </div>
            <div className="hidden md:block mb-1 flex-shrink-0 ml-8">
               <Button variant="outline" to="/treatments" className="border-b-2 border-t-0 border-l-0 border-r-0 px-0 py-1 rounded-none hover:bg-transparent hover:text-stone-600 hover:border-stone-400 font-bold tracking-widest text-xs">
                 VIEW ALL SERVICES
               </Button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative group">
             {/* Left Arrow */}
             <button
               onClick={() => scroll('left')}
               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200"
               aria-label="Scroll left"
             >
               <ArrowLeft size={20} />
             </button>

             {/* Right Arrow */}
             <button
               onClick={() => scroll('right')}
               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200"
               aria-label="Scroll right"
             >
               <ArrowRight size={20} />
             </button>

             {/* Carousel */}
             <div
               ref={scrollRef}
               className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
               {services.map((service, idx) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-[350px] snap-center flex flex-col h-full">
                     {/* Card Content */}
                     <div className="overflow-hidden rounded-[10px] mb-8 relative aspect-[3/4] shadow-sm">
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                     </div>
                     <div className="flex justify-between items-baseline mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900">{service.title}</h3>
                        <span className="text-stone-900 font-bold text-sm">{service.price}</span>
                     </div>
                     <p className="text-sm text-stone-600 font-light leading-relaxed mb-8 italic flex-grow">
                       {service.desc}
                     </p>
                     <div className="mt-auto">
                        <Button 
                          variant="outline" 
                          to="/contact" 
                          className="border-none p-0 hover:bg-transparent hover:text-stone-600 font-bold tracking-widest text-xs uppercase"
                        >
                          Book Now
                        </Button>
                     </div>
                  </div>
               ))}
             </div>
          </div>
          
           {/* Mobile View All button */}
           <div className="md:hidden text-center mt-4">
              <Button variant="outline" to="/treatments">View All Services</Button>
           </div>
        </div>
      </section>

      {/* Meet Olivia (Founder) - Background White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square bg-stone-200 relative overflow-hidden rounded-[10px]">
               <img 
                 src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.82787-15/553742065_18428179612100116_1721518372852238092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPyKkuriUljae4jVxe9KIPh5Md1K0Mf8SHkx3UrQx_xMOq6tnBgVvN1Jxx3O9FTzSwSE_SZCOOU9DVEiT0Jy_p&_nc_ohc=a3D-ElNau1YQ7kNvwEBXrG5&_nc_oc=Adkmy3cFG8QwxvepInSSxZEO7oG_j-HOa8jbVI69RQH517LREBdRkHVndvBcfY23WkpytWujYjdh8NwF5q7L8Ks3&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=Wrga319Fp2zOAIwq7DQqpg&oh=00_Afo0AfplS0rQXxSLYYZrp6GlhdqsjAE9xB8gDvCqepaETg&oe=69642CB8" 
                 alt="Olivia Founder" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-50 -z-10 hidden md:block rounded-[10px]"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">The Expert</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900">
              Meet <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Olivia</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-loose text-lg">
              <p>
                With over a decade of clinical experience, Olivia has trained extensively and worked tirelessly to perfect her craft. She believes that aesthetics is not about changing who you are, but refining your natural beauty.
              </p>
              <p>
                "I'm not just an injector, I'm an artist. My goal is to make you feel like the best version of yourself—refreshed, confident, and radiant."
              </p>
            </div>
            <div className="mt-10">
               <Button variant="primary" to="/about">Read Her Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Confidence (Welcome Section) - Background White */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="fade-in">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
              Empowering <br />
              Confidence Through <span className="font-script text-gold-400 text-6xl md:text-8xl ml-2">Expertise</span>
            </h2>
            
            <div className="text-stone-600 font-light leading-relaxed mb-10 space-y-6">
               <p>
                 At Apex Clinic, Nurse Olivia uses her extensive experience and artistic skills to create tailored treatments that highlight each client’s unique beauty.
               </p>
               <p>
                 Your go-to destination for natural-looking aesthetic results. Whether it’s your first visit or you are refining your look, our goal is to empower confidence by providing natural, stunning results that leave you feeling refreshed and revitalised. Explore our treatments below to find the perfect option for you.
               </p>
            </div>

            <div className="flex flex-col items-start space-y-6">
              {[
                { label: 'Dermal Fillers', to: '/treatments' },
                { label: 'Anti-Wrinkle Treatments', to: '/treatments' },
                { label: 'Skincare', to: '/treatments' }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.to} 
                  className="border-b border-stone-900 pb-1 text-stone-900 hover:text-stone-600 hover:border-stone-500 font-serif text-lg tracking-wide transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative aspect-square bg-white rounded-[10px] overflow-hidden shadow-sm">
              <img 
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.82787-15/553376230_18428179564100116_8767545497803645011_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAsQAfYI2rUpjjoiZfvRKRtPCdvqLfSC-08J2-ot9IL2HrsBIiXYjrOi1cC1TneURpHVZJrnjXCJtyrtCrTTkk&_nc_ohc=_JXmHeVd2O8Q7kNvwG66GQ2&_nc_oc=AdnRK30mfsEPXpCP5w76V2qO-Q0F3FG4TtOLmoJIk6qdk33U3aGiLp_teejV23p9CKjg6LKiyNeraDjdjvwca5YE&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=yRpphMpNBW-ZSfl1YolFbA&oh=00_Afpc6hpsN5b92evG2Fh6Rpzv6vttf-6kkGnpquVzuR1VAw&oe=69640F4D" 
                alt="Nurse Olivia holding products" 
                className="w-full h-full object-cover object-top opacity-95"
              />
          </div>
        </div>
      </section>

      {/* Philosophy - Background Image */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1644481361524-5af470330623?q=80&w=981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Aesthetic Background" 
             className="w-full h-full object-cover opacity-50 brightness-110"
           />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900">
            We're not just injectors, <br className="hidden md:block"/>
            <span className="font-script text-gold-400 text-6xl md:text-8xl">we're facial architects.</span>
          </h2>
          <p className="text-stone-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            At Apex Clinic, we merge medical safety with artistic vision. Every treatment plan is bespoke, every result is natural. Welcome to the new standard of medical aesthetics.
          </p>
        </div>
      </section>

      {/* Real Testimonials - Updated Layout - Background Changed to White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">
              See what all the <br/>
              <span className="font-script text-gold-400 text-6xl md:text-8xl">talk is about!</span>
            </h2>
            <p className="text-stone-500 font-light tracking-wide text-sm uppercase">Transformative Client experience from all around the globe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sarah J.', 
                text: "I'm absolutely over the moon with my results! My lips turned out exactly how I wanted - natural, refreshed, and beautifully symmetrical.", 
                treatment: 'Lip Enhancement',
                img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t51.82787-15/547863075_18426140470100116_7243457555821983504_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFCCRLhcnTluvOeZgUZpGk3A1PyVWiZGDgDU_JVaJkYOOu1_Wqof1Tv2lkLydQcmeETKj29o39ljBhVsQinfvkl&_nc_ohc=hyZqsgte_LwQ7kNvwHSj0us&_nc_oc=AdnN1XPh8Qv-XJI9sVkG4_m_boKxHrr-C60mAVjEkrEbE5NcKwh0SXbykcvfxNL_BFSmMnfc-nZkHf_JTdgHiWGM&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=a2PRO3AbslKmy26aJDh6jg&oh=00_AfrO6KxeumJtuZ46ZezfWe3BxGsZKE-xmfkUtrFZTohWjQ&oe=69643515'
              },
              { 
                name: 'Emily R.', 
                text: "This wonderful woman is a genius. I can't tell you the new found confidence she's given me in life. Highly recommended!", 
                treatment: 'Full Face Balancing',
                img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t51.75761-15/503285221_18411764605100116_8488887029859690613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEe8AZdsykFAwz0HHmGht8-S-3FDbBgSwlL7cUNsGBLCbxKACrxzVX0KZ4yIvKon1PdbmwA8o6meRfjpLvKRydd&_nc_ohc=O8yu5H8_6M0Q7kNvwFimCmB&_nc_oc=Adlg3R8upidD1hy3F9vsQRb5IMMFh-gZpJH0SY3kO3K0BfNFkgYFPMnoYyA6DF_fpRYSOGJS6H4GC4cTEbGlygS8&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=CT1pUEQ3oLmz-DTWD_kygQ&oh=00_AfqqgRm7cR0py-LuIWID9LByUhacEFnWc1wmhBQalg8gOQ&oe=69643D9D'
              },
              { 
                name: 'Jessica M.', 
                text: "The clinic is stunning and the team is so professional. I felt safe and heard throughout the entire process.", 
                treatment: 'Anti-Wrinkle',
                img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.75761-15/485622837_18400630216100116_5453671255905181076_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGi9EQ8T1nwU2BBsneTE0eMAOSm_kMBrLcA5Kb-QwGst-BdBD-Z8q7dAjZw1LtE-hOvkazJgqCAgThSsbKHkxr_&_nc_ohc=uoeF931BnmwQ7kNvwHMhWkU&_nc_oc=AdlFxYgSTC5DL-3HTadJYKVB4Jlq-yZwFMP8uFWXkqVZomDdzsGSsrZ_Me66cLbOIcgSMoy9TQGM6CSfn4WQS0oB&_nc_zt=23&se=-1&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=l6pu7FbRPnn8ifPQQBYzag&oh=00_Afpc5xJn0oXMp3nVUo173goSj5w_bdVaAtZltyJNBNtMCw&oe=69644114'
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="h-72 overflow-hidden relative">
                   <img 
                     src={review.img} 
                     alt={review.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   {/* Gradient fade to white */}
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-8 pt-2 relative flex-grow flex flex-col bg-white">
                  {/* Quote Icon overlapped */}
                  <div className="text-5xl font-serif text-stone-900 leading-none -mt-10 mb-6 relative z-10">“</div>
                  
                  <p className="text-stone-600 font-light leading-relaxed mb-8 flex-grow">
                    {review.text}
                  </p>
                  
                  <div className="text-right mt-auto">
                    <p className="font-bold text-xs uppercase tracking-widest text-stone-900">&mdash; {review.name}</p>
                    <p className="text-xs text-stone-400 mt-1">{review.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <Button variant="outline" to="/reviews">View All Reviews</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;