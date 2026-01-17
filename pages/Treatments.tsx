
import React, { useState, useRef } from 'react';
import { Button } from '../components/Layout';
import Seo from '../components/Seo';
import { 
  Smile, 
  Sparkles, 
  Maximize, 
  Eye, 
  Scale, 
  Plus, 
  Minus, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Target, 
  ArrowUpRight,
  Circle,
  MoveHorizontal
} from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] max-w-3xl mx-auto overflow-hidden rounded-[10px] shadow-2xl cursor-col-resize select-none"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        referrerPolicy='no-referrer'
        src={afterImage} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          referrerPolicy='no-referrer'
          src={beforeImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
        />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-black group"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
          <div className="flex gap-1">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-bold">Before</div>
      <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-bold">After</div>
    </div>
  );
};

interface EnhancementItem {
  title: string;
  body: string;
  icon: React.ReactNode;
}

interface AccordionItem {
  title: string;
  body: string;
  image?: string;
}

interface TreatmentPageProps {
  title: string;
  script: string;
  heroImage: string;
  heroDescription: string;
  introTitle: React.ReactNode;
  introScript?: string;
  introText: string;
  enhancementsTitle?: React.ReactNode;
  enhancementsIntro?: string;
  enhancements?: EnhancementItem[];
  enhancementsColumns?: 3 | 4;
  enhancementsBgClass?: string;
  enhancementItemClass?: string;
  useGoldIcons?: boolean;
  benefits?: string[];
  items?: string[];
  comparisonBefore?: string;
  comparisonAfter?: string;
  comparisonBeforeText?: { title: string; body: string };
  comparisonAfterText?: { title: string; body: string };
  accordionItems?: AccordionItem[];
  accordionSectionTitle?: React.ReactNode;
  accordionSectionBody?: string;
  accordionBgClass?: string;
  overlappingImage?: string;
  introImage?: string;
  introBgClass?: string;
  introSectionReversed?: boolean;
  expectSectionReversed?: boolean;
  expectTitle?: string;
  expectScript?: string;
  expectBody?: string;
}

const GoldIcon = ({ children }: { children?: React.ReactNode }) => (
  <div className="mb-6 inline-block">
    <svg width="0" height="0">
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#D9A13B" offset="0%" />
        <stop stopColor="#F2D59B" offset="50%" />
        <stop stopColor="#D9A13B" offset="100%" />
      </linearGradient>
    </svg>
    {children && React.cloneElement(children as React.ReactElement<any>, { style: { stroke: "url(#gold-gradient)" } })}
  </div>
);

const TreatmentLayout: React.FC<TreatmentPageProps> = ({ 
  title, 
  script, 
  heroImage, 
  heroDescription, 
  introTitle,
  introScript,
  introText, 
  enhancementsTitle,
  enhancementsIntro,
  enhancements,
  enhancementsColumns = 4,
  enhancementsBgClass = "bg-[#eeeae7]",
  enhancementItemClass = "border-white hover:bg-white/30",
  useGoldIcons = true,
  benefits, 
  items,
  comparisonBefore,
  comparisonAfter,
  comparisonBeforeText,
  comparisonAfterText,
  accordionItems,
  accordionSectionTitle,
  accordionSectionBody,
  accordionBgClass = "bg-[#eeeae7]",
  overlappingImage,
  introImage,
  introBgClass = "bg-white",
  introSectionReversed = false,
  expectSectionReversed = false,
  expectTitle = "What to",
  expectScript = "Expect",
  expectBody
}) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scriptStyle = "text-[#D9A13B] leading-none";
  const mainTitleClass = "text-5xl md:text-7xl font-serif text-stone-900 leading-[0.95]";
  const scriptTitleClass = `font-script text-6xl md:text-8xl inline-block ${scriptStyle}`;
  const bodyTextClass = "text-stone-600 font-light text-lg leading-relaxed";
  const normalizedHeroDescription = heroDescription ? heroDescription.replace(/\r/g, '').replace(/\\n/g, '\n').replace(/\n\n/g, '\n\n') : '';
  const normalizedIntroText = introText ? introText.replace(/\r/g, '').replace(/\\n/g, '\n').replace(/\n\n/g, '\n\n') : '';

  const defaultExpectBody = `Your appointment begins with a detailed consultation where we’ll discuss your goals, assess your facial structure, and decide on the most suitable approach for you. You’ll be guided through your treatment options, what to expect on the day, and how to care for your skin afterwards.

Most treatments take around 30–45 minutes, with results often visible immediately or developing over the following days. Any mild after-effects typically settle quickly.

The focus is always on subtle, well-balanced results - so you leave feeling refreshed, confident, and still very much yourself.`;

  const displayExpectBody = expectBody || defaultExpectBody;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-stone-50 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            referrerPolicy='no-referrer'
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto fade-in w-full flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-tight mb-8">
            {title} <br />
            {script && <span className={`font-script text-6xl md:text-9xl block -mt-4 ${scriptStyle}`}>{script}</span>}
          </h1>
          <div className="max-w-2xl mx-auto">
             <div className="text-stone-900 font-light text-lg leading-relaxed tracking-wide space-y-6">
               {normalizedHeroDescription.split('\n\n').map((para, i) => (
                 <p key={i} className="mb-4 last:mb-0">{para}</p>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Overlapping Image Section */}
      {overlappingImage && (
        <div className="relative z-30 -mt-[15vh] md:-mt-[20vh] px-6">
          <div className="max-w-6xl mx-auto aspect-video rounded-[10px] overflow-hidden shadow-2xl bg-stone-100">
            <img 
              referrerPolicy='no-referrer'
              src={overlappingImage} 
              alt="Treatment Showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Intro Section */}
      <section className={`py-[7.5rem] md:py-[10rem] ${introBgClass} overflow-hidden ${overlappingImage ? 'pt-[10rem] md:pt-[15rem]' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          {introImage ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className={`text-left order-1 ${introSectionReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Specialised Care</p>
                <h2 className={`${mainTitleClass} mb-10`}>
                  {introTitle} {introScript && <span className={`${scriptTitleClass} ml-2`}>{introScript}</span>}
                </h2>
                <div className="space-y-6">
                  {introText && normalizedIntroText.split('\n\n').map((para, i) => (
                    <p key={i} className={bodyTextClass}>{para}</p>
                  ))}
                </div>
              </div>
              <div className={`aspect-[4/5] rounded-[10px] overflow-hidden shadow-2xl order-2 ${introSectionReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <img referrerPolicy='no-referrer' src={introImage} alt="Treatment Process" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Specialised Care</p>
              <h2 className={`${mainTitleClass} mb-12 md:mb-16`}>
                {introTitle} {introScript && <span className={scriptTitleClass}>{introScript}</span>}
              </h2>
              {introText && (
                <div className="max-w-2xl mx-auto mb-16">
                  <p className={`${bodyTextClass}`}>
                    {introText}
                  </p>
                </div>
              )}
            </div>
          )}

          {comparisonBefore && comparisonAfter && (
            <div className={`mt-20 fade-in ${comparisonBeforeText ? 'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center' : ''}`}>
              {comparisonBeforeText && (
                <div className="lg:col-span-3 text-left">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 uppercase tracking-widest">{comparisonBeforeText.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{comparisonBeforeText.body}</p>
                </div>
              )}
              
              <div className={comparisonBeforeText ? 'lg:col-span-6' : 'max-w-2xl mx-auto'}>
                <ComparisonSlider beforeImage={comparisonBefore} afterImage={comparisonAfter} />
              </div>

              {comparisonAfterText && (
                <div className="lg:col-span-3 text-right">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 uppercase tracking-widest">{comparisonAfterText.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{comparisonAfterText.body}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Tailored Enhancements Grid (Treatment Areas) */}
      {(enhancements || (benefits && items)) && (
        <section className={`py-[7.5rem] ${enhancementsBgClass} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-6">
            {enhancements ? (
              <div className="text-center">
                <h2 className={`${mainTitleClass} mb-8`}>{enhancementsTitle}</h2>
                {enhancementsIntro && (
                  <p className="text-stone-600 font-light text-lg leading-relaxed max-w-4xl mx-auto mb-20">
                    {enhancementsIntro}
                  </p>
                )}
                
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-left mt-20">
                  {enhancements.map((item, i) => (
                    <div 
                      key={i} 
                      className={`w-full md:w-[calc(50%-16px)] ${enhancementsColumns === 3 ? 'lg:w-[calc(33.333%-21.33px)]' : 'lg:w-[calc(25%-24px)]'} border ${enhancementItemClass} p-8 flex flex-col items-start transition-all`}
                    >
                      {useGoldIcons ? (
                        <GoldIcon>{item.icon}</GoldIcon>
                      ) : (
                        <div className="mb-6 inline-block text-stone-900">
                          {item.icon}
                        </div>
                      )}
                      <h3 className="text-xl font-serif text-stone-900 mb-3">{item.title}</h3>
                      <p className="text-stone-600 font-light leading-relaxed text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-20">
                  <Button variant="outline" to="/pricing">View Full Price List</Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-8 text-stone-900 uppercase tracking-widest">Key Benefits</h3>
                  <div className="space-y-6">
                    {benefits && benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="w-1 h-6 bg-[#D9A13B] mt-1"></div>
                        <p className="text-stone-600 font-light leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-8 text-stone-900 uppercase tracking-widest">Available Treatments</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {items && items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 border-b border-stone-200 pb-4">
                        <div className="w-2 h-2 bg-[#D9A13B] rounded-full"></div>
                        <span className="text-stone-800 font-serif text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12">
                    <Button variant="outline" to="/pricing">View Full Price List</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Advanced Accordion Section / Replacement of CTA */}
      {accordionItems && accordionItems.length > 0 && (
        <section className={`py-[10rem] md:py-[15rem] ${accordionBgClass} relative`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Content - STICKY GHIM GIỮA MÀN HÌNH */}
              <div className="lg:col-span-5 lg:sticky lg:top-[25vh] self-start z-10 transition-all duration-300">
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8">
                  {accordionSectionTitle || "Advanced Treatments"}
                </h2>
                <p className="text-stone-600 font-light text-xl leading-relaxed">
                  {accordionSectionBody || "Bespoke clinical solutions designed to enhance your natural beauty with medical-grade precision."}
                </p>
              </div>

              {/* Right Accordion Content */}
              <div className="lg:col-span-7">
                {accordionItems.map((item, idx) => (
                  <div key={idx} className="border-t border-black last:border-b transition-all">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                      className="w-full py-12 md:py-16 group flex justify-between items-center text-left focus:outline-none"
                    >
                      <div className="relative overflow-hidden">
                        <span className="text-3xl md:text-5xl font-serif text-stone-900 transition-colors group-hover:text-stone-600 leading-tight">
                          {item.title}
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
                      </div>
                      <div className="text-stone-900 ml-4 transition-transform duration-300">
                        {activeAccordion === idx ? <Minus size={32} /> : <Plus size={32} />}
                      </div>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        activeAccordion === idx ? 'max-h-[2000px] opacity-100 pb-16 md:pb-24' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className={`grid grid-cols-1 ${item.image ? 'md:grid-cols-2' : ''} gap-12 items-start`}>
                        <div className="space-y-8">
                          {item.body.split('\n').map((line, i) => (
                            <p key={i} className="text-stone-600 font-light text-lg leading-relaxed">{line}</p>
                          ))}
                          <Button variant="primary" to="/contact" className="px-12 py-4 mt-6">Enquire About This</Button>
                        </div>
                        {item.image && (
                          <div className="aspect-[2/3] rounded-[10px] overflow-hidden shadow-2xl">
                            <img referrerPolicy='no-referrer' src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Dynamic Expectation Section */}
      <section className="py-[7.5rem] md:py-[10rem] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            {/* Left/Right depending on expectSectionReversed */}
            <div className={`order-1 ${expectSectionReversed ? 'lg:order-2' : 'lg:order-1'} text-left flex flex-col justify-center py-4`}>
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-10">
                {expectTitle} <span className={`${scriptTitleClass} ml-4`}>{expectScript}</span>
              </h2>
              <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed mb-12">
                {displayExpectBody.split('\n').map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">{para}</p>
                ))}
              </div>
              <div className="w-full md:w-auto flex justify-start">
                 <Button variant="outline" to="/contact" className="w-full md:w-auto px-16 py-6 text-sm md:text-base">
                   Book Consultation
                 </Button>
              </div>
            </div>

            {/* Right/Left depending on expectSectionReversed */}
            <div className={`rounded-[10px] overflow-hidden shadow-2xl relative order-2 ${expectSectionReversed ? 'lg:order-1' : 'lg:order-2'} min-h-[400px]`}>
              <img 
                src="/public/dermal-fillers/whattoexpect.webp" 
                alt="Clinic Consultation" 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export const DermalFillers: React.FC = () => (
  <>
    <Seo
      title="Dermal Fillers | Apex Clinic"
      description="Restore volume, enhance contours, and balance your profile with bespoke dermal filler treatments at Apex Clinic in Retford."
      path="/treatment/dermal-fillers"
    />
    <TreatmentLayout 
      title="Dermal"
      script="Fillers"
      heroImage="/public/dermal-fillers/hero.webp"
      heroDescription={`Dermal Fillers are advanced injectable treatments used to restore lost volume and enhance facial contours. Using hyaluronic acid–based fillers, treatments are tailored to soften signs of ageing while maintaining natural expression.

At Apex Aesthetics Clinic, every treatment is bespoke, designed to enhance your unique features while keeping you looking refreshed and balanced.`}
      introTitle={(
        <>
          What <span className="font-script text-[#D9A13B] text-6xl md:text-8xl inline-block leading-none mx-2">Dermal Fillers</span> <br /> can do for you?
        </>
      )}
      introText=""
      comparisonBefore="/public/dermal-fillers/before.webp"
      comparisonAfter="/public/dermal-fillers/after.webp"
      comparisonBeforeText={{
        title: "Before",
        body: "As we age, the face naturally loses volume and structural support, causing features to soften and definition to fade."
      }}
      comparisonAfterText={{
        title: "After",
        body: "Dermal fillers help restore this lost volume and enhance facial structure, bringing balance, lift, and subtle definition back to the face."
      }}
      enhancementsTitle={(
        <>
          Tailored Enhancements <br /> <span className="font-script text-[#D9A13B] text-6xl md:text-9xl block -mt-4">for Every Face</span>
        </>
      )}
      enhancementsIntro="Dermal filler treatments are suitable for both men and women and are always tailored to your facial structure and goals. Results can be soft and natural or more defined - never overdone. Treatments may help to:"
      enhancementsColumns={3}
      enhancements={[
        {
          title: "Smooth Lines",
          body: "Soften fine lines and folds such as nose-to-mouth lines and smoker’s lines.",
          icon: <Smile size={40} />
        },
        {
          title: "Lift the Cheeks",
          body: "Restore volume and gentle lift for a fresher, more youthful appearance.",
          icon: <Sparkles size={40} />
        },
        {
          title: "Define the Jawline",
          body: "Enhance definition through the chin and jawline for improved structure and contour.",
          icon: <Maximize size={40} />
        },
        {
          title: "Refresh the Eyes",
          body: "Improve the appearance of tired-looking under eyes by softening tears through hollows.",
          icon: <Eye size={40} />
        },
        {
          title: "Improve Facial Balance",
          body: "Create better symmetry and harmony across the face with carefully placed enhancement.",
          icon: <Scale size={40} />
        }
      ]}
      accordionSectionTitle={(
        <>
          Advanced <br /> 
          <span className="font-script text-[#D9A13B] text-6xl md:text-8xl block mt-2">Dermal Fillers</span>
        </>
      )}
      accordionBgClass="bg-white"
      accordionItems={[
        {
          title: "Lip Enhancement",
          body: "Lip filler can subtly enhance the shape, balance, and hydration of the lips when done well. My approach is conservative and tailored, focusing on results that sit naturally with your features.\n\nWhether you’re looking to restore volume, improve symmetry, or add gentle definition, each treatment is planned around your face and your preferences. The aim is simple: lips that look soft, balanced, and still very much your own.",
          image: "/public/dermal-fillers/lip.webp"
        },
        {
          title: "Liquid Rhinoplasty",
          body: "The nose plays a big role in how balanced our face looks, and for many people it’s an area they feel self-conscious about. Liquid rhinoplasty is a non-surgical treatment that uses dermal filler to subtly improve the shape of the nose, without surgery, scarring, or lengthy downtime.\nThis treatment is commonly used to soften a bump on the bridge, improve asymmetry, smooth small dips or indentations, and gently lift a drooping nasal tip. Rather than changing the nose completely, the aim is to create a smoother, more even profile that sits better with the rest of the face.\nResults are temporary but long-lasting. With careful placement, filler works by creating balance and proportion - often making imperfections far less noticeable and leaving the nose looking straighter and more refined.",
          image: "/public/dermal-fillers/liquid.webp"
        },
        {
          title: "Facial Balancing Packages",
          body: "Our facial balancing packages are our signature dermal filler treatments and are perfect for anyone looking for an overall enhancement rather than tweaking individual areas.\nInstead of treating one feature at a time, facial balancing looks at the face as a whole - focusing on structure, proportions, and harmony. By treating multiple areas together, we’re able to create results that feel natural, balanced, and still very you.\nThese packages also offer better value compared to booking individual treatments and are ideal if you’re wanting a refreshed, more defined look without anything looking overdone.\nFacial balancing is one of our most popular and in-demand treatments, chosen by clients who want subtle but noticeable results that enhance their natural features.\nEvery treatment starts with a detailed consultation, allowing us to create a personalised plan based on your face, your goals, and what will work best for you.",
          image: "/public/dermal-fillers/facial.webp"
        }
      ]}
    />
  </>
);

export const AntiWrinkles: React.FC = () => (
  <>
    <Seo
      title="Anti-Wrinkle Injections | Apex Clinic"
      description="Soften fine lines and tension with natural-looking anti-wrinkle injections at Apex Clinic in Retford."
      path="/treatment/anti-wrinkles"
    />
    <TreatmentLayout 
    title="Anti-Wrinkle"
    script="Injections"
    expectSectionReversed={true}
    expectTitle="The"
    expectScript="Results"
    expectBody={`My approach is always conservative and considered. Treatments are tailored to your facial structure, movement, and goals to achieve results that look natural and well-balanced.
You’ll still look like yourself, just more refreshed, rested, and at ease.
A review appointment is arranged around two weeks after treatment to ensure everything has settled beautifully and feels right for you.`}
    heroImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
    heroDescription={`Do fine lines remain even when your face at rest? Or does facial tension leave you looking tired, tense, or less defined than you’d like? Anti-wrinkle injections offer a subtle way to soften lines, refine facial shape, and refresh your appearance , while keeping your expressions natural.

At Apex Aesthetics Clinic, anti-wrinkle treatments are used to soften and balance, not freeze. The aim is never to change how you look, but to help you look more rested, relaxed, and like the best version of yourself.`}
    introImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
    introTitle="How They"
    introScript="Work"
    introText={`Anti-wrinkle injections use a purified protein to gently relax targeted muscles responsible for repetitive facial movement. By reducing overactivity in these areas, fine lines are softened and the formation of deeper lines is slowed.

Treatment is quick and straightforward, usually taking 10–15 minutes, with no downtime. Results begin to appear within a few days, with full results visible at around two weeks. Effects typically last three to four months, and with regular treatments, lines often return more softly over time.`}
    enhancementsTitle={(
      <>
        Treatment <span className="font-script text-[#D9A13B] text-6xl md:text-8xl block -mt-4">Areas</span>
      </>
    )}
    enhancementsIntro="Anti-wrinkle injections aren’t limited to the forehead - they can also be used to refine facial balance and improve overall harmony. Common treatment areas include:"
    enhancements={[
      {
        title: "Forehead Lines",
        body: "Soften horizontal lines for a more relaxed appearance.",
        icon: <Activity size={40} />
      },
      {
        title: "Frown Lines (Glavella)",
        body: "Reduce the appearance of “11” lines between the brows.",
        icon: <Target size={40} />
      },
      {
        title: "Crow’s Feet",
        body: "Gently soften lines around the eyes while maintaining expression.",
        icon: <Eye size={40} />
      },
      {
        title: "Brow Lift",
        body: "Create a subtle lift to open and brighten the eye area.",
        icon: <Sparkles size={40} />
      },
      {
        title: "Bunny Lines",
        body: "Smooth lines across the bridge of the nose.",
        icon: <MoveHorizontal size={40} />
      },
      {
        title: "Masseter Reduction",
        body: "Slim and contour the lower face -also beneficial for jaw clenching or teeth grinding.",
        icon: <Maximize size={40} />
      },
      {
        title: "Lip Flip",
        body: "A subtle enhancement to gently evert the upper lip without added volume.",
        icon: <Smile size={40} />
      },
      {
        title: "Downturned Mouth",
        body: "Lift the corners of the mouth for a softer, more approachable expression.",
        icon: <ArrowUpRight size={40} />
      },
      {
        title: "Chin Dimpling",
        body: "Smooth and refine an uneven or dimpled chin.",
        icon: <Circle size={40} />
      },
      {
        title: "Jawline & Neck (Nefertiti Lift)",
        body: "Improve definition and support through the lower face and neck.",
        icon: <Zap size={40} />
      }
    ]}
    />
  </>
);

export const Skincare: React.FC = () => (
  <>
    <Seo
      title="Skin Treatments | Apex Clinic"
      description="Hydrate, repair, and rejuvenate your skin with advanced skincare treatments at Apex Clinic in Retford."
      path="/treatment/skincare"
    />
    <TreatmentLayout 
    title="Skincare"
    script=""
    introSectionReversed={true}
    heroImage="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2070&auto=format&fit=crop"
    heroDescription={`Restore your skin’s natural glow with advanced, skin-focused treatments designed to hydrate, repair, and rejuvenate from within. At Apex Aesthetics Clinic, we offer results-driven therapies that go beyond surface-level skincare, focusing on long-term skin health, quality, and radiance.

Every treatment is carefully selected and tailored to your skin, helping to improve texture, elasticity, and overall skin vitality while maintaining a natural, refreshed appearance.`}
    introTitle={(
      <>
        What <span className="font-script text-[#D9A13B] text-6xl md:text-8xl inline-block leading-none mx-2">Skin Rejuvenation</span> <br /> 
        can do for you
      </>
    )}
    introImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
    introText="Our skin rejuvenation treatments work from the inside out to support healthier, stronger skin. These advanced therapies help stimulate collagen and elastin, improve hydration, and calm inflammation - resulting in smoother, firmer, more radiant skin over time.\n\nWhether you’re looking to maintain a healthy glow, address early skin concerns, or improve specific skin health, we’ll guide you towards the most suitable treatment for your skin and your goals."
    accordionSectionTitle={(
      <>
        Advanced <br /> 
        <span className="font-script text-[#D9A13B] text-6xl md:text-8xl block mt-2">Dermal Science</span>
      </>
    )}
    accordionItems={[
      {
        title: "Signature Glass Skin Facial",
        body: "Our Signature Glass Skin Facial is one of our most sought-after treatments, designed to deliver instant glow while improving skin quality long term. This advanced facial combines dermaplaning, an enzyme-based peel, microneedling, and skin boosters to deeply hydrate, refine texture, and enhance radiance.\nBy layering treatments in one session, we’re able to exfoliate, stimulate collagen, and infuse the skin with hydration and active ingredients. The result is smoother, brighter, glass-like skin with improved elasticity, clarity, and overall skin health."
      },
      {
        title: "Microneedling",
        body: "Microneedling stimulates the skin’s natural repair process by creating controlled micro-injuries, encouraging collagen and elastin production. It helps improve skin texture, fine lines, acne scarring, and overall tone, leaving the skin firmer and more refined over time."
      },
      {
        title: "Dermaplaning",
        body: "Dermaplaning is a gentle exfoliating treatment that removes dead skin cells and fine facial hair, instantly revealing smoother, brighter skin. It enhances product absorption and creates a flawless base for skincare and makeup, making it ideal for an immediate glow."
      },
      {
        title: "Exosomes",
        body: "Exosome therapy is an advanced regenerative treatment that supports skin repair and cellular communication. Often paired with microneedling, exosomes help improve hydration, texture, and luminosity while supporting long-term skin rejuvenation."
      },
      {
        title: "Skin Boosters",
        body: "Skin boosters are injectable treatments designed to deeply hydrate the skin from within. They improve elasticity, texture, and skin quality without adding volume, making them ideal for achieving a fresh, radiant, and naturally healthy appearance."
      },
      {
        title: "Polynucleotides",
        body: "Polynucleotides are regenerative injectable treatments that work at a cellular level to improve skin quality, elasticity, and repair. They are particularly beneficial for delicate areas and are ideal for clients seeking subtle rejuvenation and improved skin strength."
      },
      {
        title: "Chemical Peels",
        body: "Chemical peals use carefully selected acids to exfoliate and renew the skin, helping to improve pigmentation, acne, congestion, and uneven texture. Skin is left brighter, smoother, and more refined, with options tailored to your skin type and concerns."
      }
    ]}
    />
  </>
);

export const FatDissolving: React.FC = () => (
  <>
    <Seo
      title="Fat Dissolving Injections | Apex Clinic"
      description="Non-surgical fat dissolving injections to refine chin, jawline, abdomen, and more at Apex Clinic in Retford."
      path="/treatment/fat-dissolving"
    />
    <TreatmentLayout 
    title="Fat"
    script="Dissolving"
    introSectionReversed={false}
    heroImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop"
    heroDescription="We all have areas that feel resistant, no matter how healthy our lifestyle is. It’s completely normal… the body naturally stores fat in certain places, and some areas simply don’t respond to diet or exercise alone.\n\nFat dissolving injections offer a non-surgical way to gently refine and contour these stubborn areas. The treatment works gradually, helping to smooth and rebalance the area for a more defined appearance, without surgery or significant downtime."
    introTitle={(
      <>
        What are <br /> 
        <span className="font-script text-[#D9A13B] text-6xl md:text-8xl inline-block leading-none">Fat Dissolving Injections?</span>
      </>
    )}
    introScript=""
    introImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
    introBgClass="bg-[#eeeae7]"
    introText="Fat dissolving injections are a non-surgical treatment designed to target small, localised pockets of fat beneath the skin. The product works by breaking down fat cells, which are then naturally processed and removed by the body over time.\n\nResults develop gradually, making this an ideal option for subtle contouring in areas such as the chin and jawline, abdomen, thighs, or arms."
    enhancementsTitle={(
      <>
        My <br />
        <span className="font-script text-[#D9A13B] text-6xl md:text-9xl block -mt-4">Approach</span>
      </>
    )}
    enhancementsIntro=""
    enhancementsColumns={3}
    enhancementsBgClass="bg-white"
    enhancementItemClass="border-stone-900 hover:bg-stone-50"
    useGoldIcons={false}
    enhancements={[
      {
        title: "Understanding You First",
        body: "Every treatment begins with a detailed consultation. We’ll talk through your goals, assess the area, and decide together what approach will work best for you. There’s no pressure - just honest advice and a plan that feels right.",
        icon: <Target size={40} />
      },
      {
        title: "Safety You Can Trust",
        body: "With a medical background, safety is always my priority. I use clinically proven products and evidence-based techniques to ensure treatments are delivered responsibly and professionally.",
        icon: <ShieldCheck size={40} />
      },
      {
        title: "Natural, Considered Results",
        body: "Treatments are carried out with care and precision, focusing on subtle improvements rather than dramatic change. The aim is for results to look natural and well balanced - so you feel confident, not altered.",
        icon: <Sparkles size={40} />
      }
    ]}
    accordionSectionTitle={(
      <>
        Body <br /> 
        <span className="font-script text-[#D9A13B] text-6xl md:text-8xl block mt-2">Sculpting Expert</span>
      </>
    )}
    accordionItems={[
      {
        title: "Submental (Double Chin)",
        body: "Our most popular fat dissolving treatment. By dissolving the small pocket of fat under the chin, we create a much more defined and youthful angle between the neck and the face."
      },
      {
        title: "Lower Abdomen",
        body: "Ideal for the small 'pooch' that often remains regardless of fitness levels. This treatment helps smooth the transition across the stomach for a flatter appearance in clothing."
      },
      {
        title: "Inner Thigh & Arms",
        body: "Address areas of skin rubbing or 'bingo wings' with targeted injections. These treatments help to firm up the silhouette by reducing the volume of fat in these challenging zones."
      }
    ]}
    />
  </>
);
