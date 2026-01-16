
import React from 'react';
import { Button } from '../components/Layout';

const Training: React.FC = () => {
  const courses = [
    {
      title: "Beginner Courses",
      description: "Designed for those new to aesthetics or at the very start of their journey. These courses focus on building strong foundations, including:",
      features: [
        "Core facial anatomy and assessment",
        "Consultation skills and treatment planning",
        "Patient safety and ethical practice",
        "Practical, hands-on learning in a supportive environment"
      ],
      footer: "Beginner training is ideal for practitioners looking to enter aesthetics with confidence and the correct clinical mindset."
    },
    {
      title: "Refresher Courses",
      description: "Perfect for practitioners who have trained previously but want to rebuild confidence, update knowledge, or refine technique. Refresher courses focus on:",
      features: [
        "Improving technique and injection confidence",
        "Revisiting anatomy and safety principles",
        "Addressing gaps in knowledge",
        "Supporting practitioners returning after time away"
      ],
      footer: "These sessions are tailored to your experience level and individual needs."
    },
    {
      title: "Advanced Courses",
      description: "Advanced training is designed for experienced practitioners ready to elevate their results and clinical understanding. Advanced courses focus on:",
      features: [
        "Facial harmonisation and profile balancing",
        "Advanced treatment planning",
        "Enhancing natural, balanced outcomes",
        "Precision techniques and complication awareness"
      ],
      footer: "These courses are suitable for practitioners looking to refine their aesthetic eye and deliver higher-level results."
    },
    {
      title: "Shadow Days",
      description: "Shadow days offer the opportunity to observe real clinic days and gain insight into professional practice. During a shadow day, you’ll experience:",
      features: [
        "Live consultations and treatment planning",
        "Real-world clinic workflows",
        "Patient communication and aftercare",
        "A deeper understanding of clinical decision-making"
      ],
      footer:"Shadow days are ideal for those wanting exposure, confidence, and practical insight beyond structured courses."
    }
  ];

  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section for Training */}
      <section className="relative min-h-screen flex flex-col items-center bg-stone-50 overflow-hidden pt-[25vh] pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/616292719_1800651447315564_856920198089736045_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G6ewOoCzikgQ7kNvwG0vFJ8&_nc_oc=AdmFivkqd18GD_oJE_HT8zzISzk11wjVOni_yyU4jwerYgZmSTwhn8mju61WP3OR9BhUSskYZ7hErrh-2rVqRF8Q&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=feNqTUEyf2I1HM1nuH65Iw&oh=00_Afr26U9mdufxKRJ340urbzs8svjp9_eDY3uGOmqOezSZkA&oe=696DCE71" 
            alt="Training Academy Background"
            className="w-full h-full object-cover opacity-100 brightness-[1]"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 fade-in w-full flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight">
            Advanced Aesthetics <br className="hidden md:block" /> Training Academy <br />
            <span className={`font-script text-6xl md:text-7xl block -mt-2 ${scriptStyle}`}>Elevating the Standard of Care</span>
          </h1>
          <Button variant="primary" to="/contact" className="mb-32">
            Book Training Session
          </Button>

          {/* 960x540 Frame */}
          <div className="max-w-[960px] w-full aspect-video rounded-[10px] overflow-hidden shadow-2xl z-20 border-4 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
              alt="Training Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12 leading-tight text-balance">
            Aesthetics changed my <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>life.</span>
          </h2>
          <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed text-justify">
            <p>After qualifying as a nurse, I spent two years working in the NHS. While I value my nursing background, I wanted more - more balance, more flexibility, and a career that didn’t come at the cost of burnout.</p>
            <p>Through aesthetics, I was able to leave bedside nursing after just two years and build a career that works around my life, not the other way around. I now have the freedom to focus on quality, patient care, and long-term success, with a healthier work–life balance.</p>
            <p>I know what it’s like to feel overworked, stuck, and unsure of your next move. That’s why I train others the way I believe all practitioners should be trained - with real knowledge, strong foundations, and confidence built through understanding, not shortcuts.</p>
            <p>If you’re ready to build a career in aesthetics that’s safe, sustainable, and rewarding, you’re in the right place.</p>
          </div>
        </div>
      </section>

      {/* Education Beyond the Certificate Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="order-2 md:order-1 relative">
            <div className="bg-stone-200 relative overflow-hidden rounded-[10px] h-full">
               <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" alt="Clinical Education" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">The Lead Educator</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-stone-900 leading-tight">
              Education Beyond the <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>Certificate</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg text-justify">
              <p>At Apex Clinic, my mission is simple: to raise the standards of aesthetics education by creating confident practitioners through real knowledge, clinical understanding, and safe practice - not just another day course.</p>
              <p>As a Registered General Nurse, injector, and clinic owner, I offer training that is anatomy-led, evidence-based, and grounded in real-world experience. Every course is designed to build confidence, competence, and long-term success in medical aesthetics.</p>
            </div>
            <div className="mt-10">
               <Button variant="primary" to="/about">About Your Mentor</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Courses Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-[#eeeae7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center flex flex-col items-center">
             <h2 className="text-5xl md:text-7xl font-serif mb-4 text-stone-900">
              Academy <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>Courses</span>
             </h2>
             <p className="text-stone-600 font-light leading-relaxed text-lg max-w-2xl">
               Explore our comprehensive training pathways designed for every stage of your aesthetic career.
             </p>
          </div>

          <div className="space-y-6">
            {courses.map((course, idx) => (
              <div key={idx} className="group bg-white border border-stone-200 rounded-[10px] p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
                      {course.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-5">
                    {/* Added description field for course body text */}
                    {course.description && (
                      <p className="text-stone-600 font-light leading-relaxed mb-6 text-sm md:text-base">
                        {course.description}
                      </p>
                    )}
                    <ul className="space-y-4">
                      {course.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 flex-shrink-0" />
                          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {/* Added footer field for trailing body text */}
                    {(course as any).footer && (
                       <p className="text-stone-600 font-light leading-relaxed mt-6 text-sm md:text-base">
                        {(course as any).footer}
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-3 flex flex-col lg:items-end justify-start h-full">
                    <Button variant="outline" to="/contact" className="w-full lg:w-auto py-3 text-[10px] tracking-[0.2em] px-8">Enquire Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Me Section */}
      <section className="py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center py-4">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-stone-900 leading-tight whitespace-nowrap">
              Why train <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle} ml-2`}>with me?</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
              <p>I believe great practitioners are built through education that prioritises:</p>
              <ul className="space-y-4">
                {[
                  "Safety and ethics",
                  "Facial anatomy and assessment",
                  "Natural, patient-centred results",
                  "Confidence through understanding, not shortcuts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D9A13B] flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-stone-100">
                Training at Apex Aesthetics Clinic is delivered in a professional, supportive environment where learning is never rushed and ongoing support is encouraged.
              </p>
            </div>
          </div>
          <div className="relative min-h-[450px]">
            <div className="absolute inset-0 bg-stone-200 overflow-hidden rounded-[10px] shadow-2xl">
               <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.82787-15/553742065_18428179612100116_1721518372852238092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPyKkuriUljae4jVxe9KIPh5Md1K0Mf8SHkx3UrQx_xMOq6tnBgVvN1Jxx3O9FTzSwSE_SZCOOU9DVEiT0Jy_p&_nc_ohc=a3D-ElNau1YQ7kNvwEBXrG5&_nc_oc=Adkmy3cFG8QwxvepInSSxZEO7oG_j-HOa8jbVI69RQH517LREBdRkHVndvBcfY23WkpytWujYjdh8NwF5q7L8Ks3&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=Wrga319Fp2zOAIwq7DQqpg&oh=00_Afo0AfplS0rQXxSLYYZrp6GlhdqsjAE9xB8gDvCqepaETg&oe=69642CB8" alt="Olivia Mentor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="relative py-[10rem] md:py-[15rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Academy Inquiry Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#eeeae7]/80 backdrop-blur-[4px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6 font-bold">Get in Touch</p>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8">
            Let’s Find the Right <br /> <span className={`font-script text-6xl md:text-9xl block -mt-4 ${scriptStyle}`}>Training for You</span>
          </h2>
          <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed mb-12">
            <p>Every practitioner’s journey is different. If you’re unsure which course is best suited to your experience and goals, I’d love to help.</p>
            <p>Complete the contact form below to get in touch, and we can discuss your background, aspirations, and the most suitable training pathway for you.</p>
            <p className="font-medium text-stone-800">Enquire today to take the next step in your aesthetics career.</p>
          </div>
          <Button variant="primary" to="/contact" className="shadow-lg">
            Enquire Now
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Training;
