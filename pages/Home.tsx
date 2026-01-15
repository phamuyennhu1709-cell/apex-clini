
import React, { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { Button } from '../components/Layout';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      title: 'Dermal Fillers', 
      price: 'From £250',
      desc: 'Dermal Fillers are advanced injectable treatments used to restore lost volume, enhance facial contours, and improve facial balance.', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.82787-15/586681116_18442364185100116_8921318429838183563_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH1SFZqFMGPW_lVvOpZDIkIZ24AK2YDw8URnYArZgPDxRHefPzO-1kK6ZTYYx08vKb-QT9jZzpWODAW44SfXSoR9&_nc_ohc=N7vnOUGJRtkQ7kNvwFdf3sB&_nc_oc=AdkhjfOAHuyB4Pmdh8Dh5apZdEe1HS3M-ejFS7nYQKc2PyrAAO6T69ZPe5oUrERuQ9tBmNyXDfXjyqvwQMWt5kea&_nc_zt=23&se=-1&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=06khaionDR6MwKVGIGFQEg&oh=00_AfpponaZIepoCh41Zll3DakM4ZCVHP5zchHzNciPIyvWuA&oe=696401EF' 
    },
    { 
      title: 'Anti-Wrinkle', 
      price: 'From £180',
      desc: 'Gently relaxes targeted muscles using a purified protein, effectively softening fine lines while preventing deeper wrinkles from forming.', 
      img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t51.82787-15/586685056_18441267625100116_2673419781601899327_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDWSOJdiGq9mfHWNuDmRe9R84uHjrY3NJHzi4eOtjc0r9NQnOl7X6fWxCLlJYrT12ijHk9IiLpoRjqmO-eeRvX&_nc_ohc=-G1FS6OhZHYQ7kNvwHInAsN&_nc_oc=AdmrrJDctEXRVb_SYcIOFIusoLGxLxvNiwCX-p_yvbZqnp3OU9tlUuqXIyqmocuydUzvKQ-791mMiZzA2YTK0veX&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=3b3RngVd649ElubvNKT50Q&oh=00_Afobmsk1CCLNw7IXaIlf_pg4Q8ZR6HPzeyiB6HZbmIHpUg&oe=69640BDB' 
    },
    { 
      title: 'Skincare', 
      price: 'From £50',
      desc: 'This advanced therapies help stimulate collagen and elastin, improve hydration, result in smoother, firmer, radiant skin over time.', 
      img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t51.82787-15/535950314_18422990863100116_3523678481904171611_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE4CfOBECBeuYJYoJo0k1xgepQnIvHmw396lCci8ebDf2KhBPKhyZb-mZt4-0cZ8ZRdVJ25mgR94NR2_m_P9smK&_nc_ohc=m75uJctCryoQ7kNvwHnEKfa&_nc_oc=AdmsdkzkJqhhuRqV0N3pLApa1wCe6W0-YPLmFLc3bMOfryvWKrNG-YyFB1RJIDD4k5Uj0SjsYPZ2PZDxVw80WDPx&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Ggz5ueofDhmIvuWQcKUgcw&oh=00_AfoDjc3KsqLfPp2aeAFtMvzQguA8S7CU1_ka8op-r1PVAg&oe=696434C4' 
    },
    { 
      title: 'Fat Dissolving', 
      price: 'From £150',
      desc: 'Fat dissolving injections are a non-surgical treatment designed to target small, localised pockets of fat beneath the skin. ', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.75761-15/487774471_18402687823100116_517027302862515246_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1l5LMV7e1jbnIQ40sLLI8Km4gfYDh_AoqbiB9gOH8ChdRmk1uGerigxoOVbaFLJXEGu9_wtX_qIGAJROWmfxA&_nc_ohc=srxfG1I4YVgQ7kNvwG-4Rs7&_nc_oc=AdlIJCCfXETOPJ67XslQQpB_6M0WZK707oz0SpEFb92gHp5u_MfrGy8Afe4GsGw0E5omDz6XY2fiXKbQEawYn1U7&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=FtfN-iC2tb92vg95yLRtyw&oh=00_AfqHbbP5WDFOi5-7TURamTNMNPTfGixTR6TUlpmVfgx3pg&oe=69642A4F' 
    },
    { 
      title: 'Ultimate Acne Buster', 
      price: 'From £95',
      desc: 'Combining our Pure peel with high frequency and LED light therapy to kill acne causing bacteria and diminish breakouts.', 
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t51.75761-15/469301779_18384554695100116_707537089760570063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1ULlYFCIBBdZmtlRUR9BlAMiJdQ7ybJ0AyIl1DvJsnTw3Xa1Hwbn8x0m7jUpRb_b8w_vV67-CCOXaGd5AzYSo&_nc_ohc=cp8TqUddL0YQ7kNvwFOmsx8&_nc_oc=Adm1Xn78ozvLy2Fvuk0-xlJx2dZrwX6RkljBoC4LO9t67j38pt6U1e4QQ_99M42lHyTRaUStKHbLX07q6fpgF19M5&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=mP1BNIxLwEuqD-caEP9zOg&oh=00_AfrDmqw4UrTbmeA9SiKseKzC7M0SgxFVLG5jYUyt1qpYHg&oe=6964385B' 
    },
  ];

  const testimonials = [
    { name: "Sarah J.", text: "Nurse Olivia is truly an artist. My results are so natural, nobody noticed I had anything done!", rating: 5, date: "2 weeks ago" },
    { name: "Michael R.", text: "Highly professional clinic. The Deluxe Dermaplane left my skin glowing like never before.", rating: 5, date: "1 month ago" },
    { name: "Emma L.", text: "The only place I trust for my anti-wrinkle treatments. Safe, clean, and amazing results.", rating: 5, date: "3 weeks ago" },
    { name: "Jessica H.", text: "Found Olivia through a friend and I'm so glad I did. Her attention to detail is unmatched.", rating: 5, date: "5 days ago" },
    { name: "David K.", text: "Exceptional service. The consultation was thorough and informative. 10/10.", rating: 5, date: "2 months ago" },
    { name: "Sophie W.", text: "Best lip filler experience I've ever had. No pain and exactly the shape I wanted.", rating: 5, date: "1 week ago" },
    { name: "Chloe T.", text: "The Ultimate Acne Buster treatment changed my skin. Forever grateful to Olivia!", rating: 5, date: "3 months ago" },
    { name: "Rachel P.", text: "Cleanest clinic in Retford. Always feel comfortable and well cared for here.", rating: 5, date: "1 month ago" },
    { name: "Lauren M.", text: "I've been to many injectors but Olivia's anatomical knowledge is superior.", rating: 5, date: "2 weeks ago" },
    { name: "James B.", text: "Men's treatments are handled with great care here. Very subtle and refreshing.", rating: 5, date: "4 months ago" },
    { name: "Natalie S.", text: "Her 'Turn Back The Years' package is a game changer. Worth every penny.", rating: 5, date: "2 months ago" },
    { name: "Megan F.", text: "Always a 5-star experience at Apex. Olivia makes you feel like the only client.", rating: 5, date: "3 weeks ago" },
    { name: "Olivia G.", text: "Incredible results and even better aftercare. Couldn't recommend more.", rating: 5, date: "1 month ago" },
    { name: "Isabella V.", text: "The skin peel has done wonders for my pigmentation. Superb expertise!", rating: 5, date: "6 weeks ago" },
    { name: "Hannah D.", text: "Found my forever clinic. Professional, kind, and brilliant results every time.", rating: 5, date: "2 weeks ago" },
  ];

  const faqs = [
    { q: "What should I expect during my first consultation?", a: "Your first consultation is a comprehensive assessment of your facial anatomy and skin health. We discuss your concerns, medical history, and desired outcomes to create a bespoke treatment plan tailored just for you." },
    { q: "Are aesthetic treatments safe?", a: "Yes, when performed by a medically qualified professional. At Apex Clinic, all treatments are nurse-led, using only FDA-approved products and following the strictest clinical safety protocols." },
    { q: "How long do dermal filler results last?", a: "Results typically last between 6 to 18 months, depending on the area treated, the product used, and your individual metabolism. We'll provide specific expectations during your consultation." },
    { q: "Is there any downtime after anti-wrinkle injections?", a: "Most clients experience very little downtime. You may have slight redness or small bumps at the injection site that usually subside within 30 minutes. We recommend avoiding strenuous exercise for 24 hours." },
    { q: "Do the treatments hurt?", a: "We prioritize your comfort. For filler treatments, we use premium products containing lidocaine (numbing agent) and can apply topical numbing cream. Most clients describe the sensation as a minor pinch or pressure." },
    { q: "How should I prepare for my appointment?", a: "We recommend avoiding alcohol and blood-thinning supplements (like Ibuprofen or Vitamin E) for 48 hours before treatment to minimize bruising. Arrive with a clean face if possible." },
    { q: "What is the difference between Botox and dermal fillers?", a: "Anti-wrinkle injections (Botox) relax the muscles that cause expression lines, while dermal fillers restore lost volume and refine facial contours using hyaluronic acid." },
    { q: "Can I have treatments if I am pregnant?", a: "No, aesthetic injectable treatments are not recommended for individuals who are pregnant or breastfeeding to ensure the absolute safety of both mother and child." },
    { q: "How many skin peel sessions will I need?", a: "While one peel provides a refresh, a course of 3 to 6 sessions is usually recommended for significant results with concerns like acne, pigmentation, or fine lines." },
    { q: "What is your cancellation policy?", a: "We require at least 48 hours' notice for cancellations or rescheduling. This allows us to offer the appointment time to other clients on our waiting list." }
  ];

  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/616292719_1800651447315564_856920198089736045_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G6ewOoCzikgQ7kNvwG0vFJ8&_nc_oc=AdmFivkqd18GD_oJE_HT8zzISzk11wjVOni_yyU4jwerYgZmSTwhn8mju61WP3OR9BhUSskYZ7hErrh-2rVqRF8Q&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=feNqTUEyf2I1HM1nuH65Iw&oh=00_Afr26U9mdufxKRJ340urbzs8svjp9_eDY3uGOmqOezSZkA&oe=696DCE71" 
            alt="Luxury Aesthetics Background"
            className="w-full h-full object-cover opacity-100 brightness-[1]"
          />
    
        </div>
        
        <div className="relative z-10 text-left max-w-7xl mx-auto px-6 fade-in w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight">
            Nurse-Led <br className="hidden md:block" /> Aesthetics Clinic <br />
            <span className={`font-script text-6xl md:text-7xl block -mt-2 ${scriptStyle}`}>in Retford, Nottinghamshire</span>
          </h1>
          <Button variant="primary" to="/contact">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* Empowering Confidence Section */}
      <section className="pt-[7.5rem] md:pt-[15rem] pb-[3.75rem] md:pb-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-2">
              Apex Aesthetics <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>by Liv</span>
            </h2>
            <div className="text-stone-600 font-light text-lg leading-relaxed mb-10 space-y-6">
               <p>Trading as Apex Clinic, is a professional skin and aesthetics clinic based in Retford, Nottinghamshire. Led by an experienced nurse injector, we specialise in anti-wrinkle injections, dermal fillers, skin boosters, microneedling, polynucleotides, medical-grade facials and fat dissolving treatments.
Every treatment is tailored to your individual features and goals, with a strong focus on safety, natural-looking results and expert aftercare.</p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              {['Dermal Fillers', 'Anti-Wrinkle', 'Skincare', 'Fat dissolving'].map((label, index) => (
                <Link key={index} to="/pricing" className="border-b border-stone-900 pb-1 text-stone-900 hover:text-stone-600 hover:border-stone-500 font-serif text-lg tracking-wide transition-all">{label}</Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-stone-50 rounded-[10px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" alt="Skincare Consultation" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Meet Olivia (Founder) Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="order-2 md:order-1 relative">
            <div className="h-full bg-stone-200 relative overflow-hidden rounded-[10px]">
               <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.82787-15/553742065_18428179612100116_1721518372852238092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPyKkuriUljae4jVxe9KIPh5Md1K0Mf8SHkx3UrQx_xMOq6tnBgVvN1Jxx3O9FTzSwSE_SZCOOU9DVEiT0Jy_p&_nc_ohc=a3D-ElNau1YQ7kNvwEBXrG5&_nc_oc=Adkmy3cFG8QwxvepInSSxZEO7oG_j-HOa8jbVI69RQH517LREBdRkHVndvBcfY23WkpytWujYjdh8NwF5q7L8Ks3&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=Wrga319Fp2zOAIwq7DQqpg&oh=00_Afo0AfplS0rQXxSLYYZrp6GlhdqsjAE9xB8gDvCqepaETg&oe=69642CB8" alt="Olivia Founder" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center py-4">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">The Expert</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900 leading-tight">
              A message from <br className="md:hidden" /> our <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>founder</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg text-justify">
              <p>Welcome to Apex Clinic, a space where natural-looking enhancements meet expert care. I'm Liv, an experienced nurse injector, dedicated to helping you feel confident and empowered in your own skin.</p>
              <p>At Apex, we specialise in advanced aesthetic injectable treatments; including Anti Aging, Dermal Fillers, Skin Boosters, and Fat Dissolving, all tailored to your unique features and goals. Every treatment plan is personalized to enhance your natural beauty with subtle, refined results.</p>
              <p>Our commitment doesn’t end after your appointment. We provide thorough, attentive aftercare to ensure your comfort and the best possible outcomes. From consultation to follow-up, you'll be supported every step of the way.</p>
            </div>
            <div className="mt-10">
               <Button variant="primary" to="/about">Read Her Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-4xl">
               <h2 className="text-5xl md:text-7xl font-serif mb-4 text-stone-900">
                Browse our <span className={`font-script text-6xl md:text-8xl inline ${scriptStyle} ml-2`}>treatments</span>
               </h2>
               <p className="text-stone-600 font-light text-lg leading-relaxed">
                 Here at Apex Clinic we offer a range of treatments to help combat a wide variety of skin concerns.
               </p>
            </div>
            <div className="hidden md:block mb-1 flex-shrink-0 ml-8">
               <Button variant="outline" to="/pricing" className="border-b-2 border-t-0 border-l-0 border-r-0 px-0 py-1 rounded-none hover:bg-transparent hover:text-stone-600 hover:border-stone-400 font-bold tracking-widest text-xs">
                 VIEW ALL SERVICES
               </Button>
            </div>
          </div>

          <div className="relative group">
             <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200">
               <ArrowLeft size={20} />
             </button>
             <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200">
               <ArrowRight size={20} />
             </button>

             <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
               {services.map((service, idx) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-[350px] snap-center flex flex-col h-full">
                     <div className="overflow-hidden rounded-[10px] mb-8 relative aspect-[3/4] shadow-sm">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                     </div>
                     <div className="flex justify-between items-baseline mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900">{service.title}</h3>
                        <span className="text-stone-900 font-bold text-sm">{service.price}</span>
                     </div>
                     <p className="text-stone-600 font-light text-base leading-relaxed mb-8 italic flex-grow">{service.desc}</p>
                     <div className="mt-auto">
                        <Button variant="outline" to="/contact" className="w-full py-3 text-[10px] tracking-[0.2em] bg-[#eeeae7]">Book Now</Button>
                     </div>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-[#eeeae7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Common Questions</p>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none">
              Frequently Asked <span className={`font-script text-6xl md:text-8xl inline-block ml-2 ${scriptStyle}`}>Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-[10px] overflow-hidden border border-stone-200/50 transition-all duration-300 hover:bg-white">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="text-stone-900 font-serif text-lg md:text-xl pr-4">{faq.q}</span>
                  <div className="flex-shrink-0 text-[#D9A13B]">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-stone-600 font-light text-lg leading-relaxed border-t border-stone-100 pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section - pb set to 0 to allow Footer padding to take over spacing */}
      <section className="pt-[3.75rem] md:pt-[7.5rem] pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-2">
            See what all the <br/>
            <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>talk is about!</span>
           </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
             <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
             </div>
             <span className="text-stone-900 font-bold text-sm">4.9 / 5.0</span>
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group pb-10">
          <div className="animate-marquee flex gap-8 py-4 whitespace-nowrap group-hover:pause">
            {[...testimonials, ...testimonials].map((review, i) => (
              <div key={i} className="inline-block w-[320px] bg-white rounded-[10px] shadow-sm border border-stone-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-serif overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-stone-900">{review.name}</p>
                         <p className="text-[10px] text-stone-400 uppercase tracking-wider">{review.date}</p>
                      </div>
                   </div>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                </div>
                <div className="flex text-amber-400 mb-3">
                   {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 font-light text-base leading-relaxed italic whitespace-normal line-clamp-4">
                   "{review.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-stone-50 flex justify-end">
                   <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                   >
                    View on Google
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
