import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Anchor, TrendingUp, Users, Activity, X, Menu, ChevronDown, Phone, Mail, Globe, HeartHandshake, CheckCircle2, ArrowUpRight, BookOpen } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cinematic entrance delay for psychological weight
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for Cinematic Scroll
  const useIntersectionObserver = () => {
    const observer = useRef(null);
    useEffect(() => {
      const options = { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }; 
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, options);

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.current.observe(el));

      return () => observer.current.disconnect();
    }, []);
  };

  useIntersectionObserver();

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  // --- STYLE: "Kiondo" Heritage Weave (Subtle Watermark) ---
  const heritageWeaveStyle = {
    backgroundImage: `
      linear-gradient(115deg, transparent 75%, rgba(180, 83, 9, 0.03) 75%),
      linear-gradient(245deg, transparent 75%, rgba(180, 83, 9, 0.03) 75%),
      linear-gradient(115deg, transparent 75%, rgba(180, 83, 9, 0.03) 75%),
      linear-gradient(245deg, transparent 75%, rgba(180, 83, 9, 0.03) 75%)
    `,
    backgroundSize: '40px 60px',
    backgroundPosition: '0 0, 0 0, 20px 30px, 20px 30px'
  };

  // --- COMPONENT: African Accent Strip (Textured & Animated) ---
  const AfricanAccentStrip = () => (
    <div className="h-1.5 w-full flex relative overflow-hidden">
      <div className="h-full w-1/3 bg-[#9a3412] origin-left animate-draw-line" style={{animationDelay: '0.1s'}}></div> {/* Burnt Sienna */}
      <div className="h-full w-1/3 bg-[#0f172a] origin-left animate-draw-line" style={{animationDelay: '0.3s'}}></div> {/* Midnight Slate */}
      <div className="h-full w-1/3 bg-[#b45309] origin-left animate-draw-line" style={{animationDelay: '0.5s'}}></div> {/* Kenyan Ochre */}
      {/* Texture overlay for fabric feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#9a3412] selection:text-white overflow-x-hidden transition-opacity duration-[1.5s] ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* --- Global Styles & Fonts --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        
        html { scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        /* Premium Paper Texture Overlay - Subliminal Warmth */
        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
          opacity: 0.04; /* Barely visible, felt as high-end bond paper */
          pointer-events: none;
          z-index: 9999;
          mix-blend-multiply;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #b45309; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #92400e; }

        /* Cinematic Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1), transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Draw Line Animation for Accent Strip */
        @keyframes draw-line {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-draw-line {
          animation: draw-line 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Subtle Pulse for Gold Accents */
        @keyframes subtle-pulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(180, 83, 9, 0.3); }
          50% { opacity: 0.85; transform: scale(0.97); box-shadow: 0 0 0 4px rgba(180, 83, 9, 0); }
        }
        .gold-pulse {
          animation: subtle-pulse 4s infinite ease-in-out;
        }
        
        /* Delays */
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
      `}</style>

      {/* --- Top Bar --- */}
      <div className="bg-slate-950 text-slate-400 py-3 px-6 text-xs md:text-sm font-medium tracking-wide border-b border-white/5 relative z-50">
        <AfricanAccentStrip />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 pt-3">
          <div className="hidden md:block text-slate-500 uppercase tracking-[0.3em] text-[9px] font-sans opacity-80">
            Private Capital Advisory • Nairobi
          </div>
          <div className="flex items-center gap-8">
            <a href="tel:+254702931047" className="flex items-center gap-2 hover:text-[#b45309] transition-colors duration-500 group">
              <Phone size={13} className="text-[#9a3412] group-hover:text-[#b45309] transition-colors" />
              <span className="tracking-wide text-slate-400 group-hover:text-slate-200">+254 702 931 047</span>
            </a>
            <a href="mailto:support@clustellcapital.com" className="flex items-center gap-2 hover:text-[#b45309] transition-colors duration-500 group">
              <Mail size={13} className="text-[#9a3412] group-hover:text-[#b45309] transition-colors" />
              <span className="tracking-wide text-slate-400 group-hover:text-slate-200">support@clustellcapital.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Navigation --- */}
      <nav 
        className={`fixed w-full z-40 top-[52px] md:top-[48px] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative h-12 w-auto overflow-hidden rounded-none shadow-none group-hover:shadow-lg transition-all duration-700">
               <img 
                 src="CCG 16.jpg" 
                 alt="Clustell Capital Group" 
                 className="h-12 w-auto object-contain"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               {/* Elegant Fallback */}
               <div className="hidden h-12 w-12 items-center justify-center bg-slate-900 text-[#d97706] font-serif font-bold text-xl border border-[#9a3412]">
                 C
               </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-xl font-bold font-serif tracking-tight uppercase transition-colors duration-700 ${isScrolled ? 'text-slate-900' : 'text-slate-900'} leading-none`}>
                Clustell
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#9a3412] font-semibold uppercase mt-1.5 opacity-90">
                Capital Group
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-14">
            {['Philosophy', 'Our Story'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} 
                className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#9a3412] transition-all duration-500 group-hover:w-full ease-out"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#9a3412] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#7c2d12] transition-all duration-500 shadow-xl hover:shadow-[#9a3412]/20 transform hover:-translate-y-0.5"
            >
              Get Capital
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 p-2 hover:text-[#9a3412] transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 p-8 flex flex-col gap-8 shadow-2xl md:hidden h-screen animate-on-scroll visible">
             <button onClick={() => scrollToSection('philosophy')} className="text-left text-3xl font-serif text-slate-900 hover:text-[#9a3412] transition-colors">Philosophy</button>
             <button onClick={() => scrollToSection('our-story')} className="text-left text-3xl font-serif text-slate-900 hover:text-[#9a3412] transition-colors">Our Story</button>
             <button onClick={() => scrollToSection('contact')} className="text-left text-3xl font-serif text-[#9a3412]">Get Capital</button>
             <div className="mt-auto pb-40 border-t border-slate-100 flex flex-col gap-6 pt-10">
                <a href="tel:+254702931047" className="text-slate-500 flex items-center gap-4 text-lg font-light"><Phone size={20}/> +254 702 931 047</a>
                <a href="mailto:support@clustellcapital.com" className="text-slate-500 flex items-center gap-4 text-lg font-light"><Mail size={20}/> support@clustellcapital.com</a>
             </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
        
        {/* Visual Background with "Kenyan Dawn" Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
            alt="Architecture" 
          />
          {/* Deep Slate to Earthy fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/40"></div>
          {/* Subtle Radial Vignette for Psychological Focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90 pointer-events-none"></div>
          
          {/* Accent Glows (Ochre & Deep Bronze) */}
          <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#9a3412]/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16 animate-on-scroll visible">
          <div className="inline-flex items-center gap-3 mb-12 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d97706] gold-pulse border border-[#9a3412]"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-300 uppercase">Capital • Valuations • M&A Advisory</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight text-white mb-10 leading-[1.1] drop-shadow-2xl">
            Transforming small fish into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#d97706] to-[#9a3412]">blue whales.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-16 max-w-2xl mx-auto leading-loose drop-shadow-lg">
            Capital is abundant. <span className="text-white font-normal border-b border-[#9a3412]/50 pb-1">Matches are rare.</span> <br className="hidden md:block"/>
            We align ambitious founders with sophisticated investors to dominate markets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-10 py-5 bg-[#9a3412] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#7c2d12] transition-all duration-500 shadow-[0_0_30px_-5px_rgba(154,52,18,0.4)] hover:shadow-[0_0_40px_-5px_rgba(154,52,18,0.6)] active:scale-95"
            >
              Start the Transformation
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-[#d97706]/50 transition-colors duration-500 hover:text-white active:scale-95"
            >
              Our Philosophy
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 opacity-50">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- The Emotional Hook --- */}
      <section id="philosophy" className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Visual Column */}
            <div className="relative group animate-on-scroll">
              {/* Pattern Background for Image */}
              <div className="absolute -inset-4 opacity-30 rounded-none transition duration-1000" style={heritageWeaveStyle}></div>
              
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900 shadow-2xl border-b-4 border-[#9a3412]">
                 <img 
                   src="https://images.unsplash.com/photo-1554460595-65a44358a925?q=80&w=1200&auto=format&fit=crop" 
                   alt="Majestic Whale Breaching"
                   className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale-[10%] group-hover:grayscale-0"
                   style={{ objectPosition: 'center center' }}
                   onError={(e) => {
                     e.target.onerror = null; 
                     e.target.src = "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=1200";
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                 
                 <div className="absolute bottom-12 left-12 right-12">
                   <TrendingUp size={48} className="text-[#d97706] mb-6" />
                   <p className="text-white text-2xl md:text-3xl font-serif italic leading-tight">"The ocean is vast and unforgiving. Dominating it alone is impossible."</p>
                 </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="animate-on-scroll delay-200">
              <span className="text-[#9a3412] font-bold tracking-[0.25em] uppercase text-xs mb-8 block border-l-4 border-[#9a3412] pl-6 py-1">The Founder's Dilemma</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 leading-none font-medium">
                You have the engine.<br/>
                <span className="text-slate-400">You need the fuel.</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Building a business is an act of defiance. You are defying odds, defying gravity, and often, defying logic. But eventually, every rocket needs a booster stage.
                </p>
                <p>
                  The search for investment isn't just a financial transaction; it's an <strong className="text-slate-900 font-medium border-b border-[#d97706]/40 pb-0.5">emotional marathon</strong>. Rejections, misalignment, and the fear of losing control can paralyze even the most ambitious founders.
                </p>
                <div className="flex items-center gap-4 pt-8">
                  {/* African patterned divider */}
                  <div className="h-1 w-24 bg-[#9a3412]/80"></div>
                  <p className="text-slate-900 font-bold uppercase tracking-widest text-sm">
                    We exist to end that frustration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Story (The Origin) --- */}
      <section id="our-story" className="py-40 bg-slate-950 relative overflow-hidden text-center md:text-left">
        {/* Heritage Weave Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={heritageWeaveStyle}></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            
            {/* Narrative Header */}
            <div className="md:w-1/3 animate-on-scroll">
              <BookOpen size={48} className="text-[#b45309] mb-8" />
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 font-medium leading-tight">
                The Quiet <br/> <span className="text-[#9a3412] italic">Heartbreak</span>
              </h2>
              <div className="h-1 w-24 bg-[#b45309]"></div>
            </div>

            {/* Narrative Body */}
            <div className="md:w-2/3 animate-on-scroll delay-200">
              <div className="space-y-10 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                <p>
                  For over 10 years, our founder, <span className="text-white font-medium">Dennis Maina</span>, sat across from hungry, hard-working East African business owners. He helped them chart ambitious growth strategies, only to see the light in their eyes dim when it came time to act.
                </p>
                <blockquote className="border-l-2 border-[#9a3412] pl-6 py-2 italic text-slate-400">
                  “It’s a great plan,” they would say in frustration. “But the capital to make it real? It’s just not there.”
                </blockquote>
                <p>
                  These were not just business discussions; they were conversations filled with quiet heartbreak, tears, and frustration.
                </p>
                <p>
                  We realized the problem was not a lack of ambition, potential, or even a lack of capital in the market. It was a deep, <span className="text-[#b45309]">systemic and structural disconnect</span>. Dedicated SME owners were trapped by financial limitations, their vision capped by what they could self-fund.
                </p>
                <p>
                  On the other hand, institutional investors were ready to deploy capital but were held back by a pipeline filled with businesses that were brilliant but financially opaque—lacking the governance, clean accounts, and readiness needed to invest with confidence. 
                </p>
                <p className="text-white font-serif text-2xl">
                  Two worlds divided: Dreamers on one side, capital guardians on the other, speaking different languages.
                </p>
                <p>
                  That’s when our purpose became clear: Clustell was born not as another fund, but as the <strong className="text-[#b45309]">vital matchmakers bridging this divide</strong>. We intimately decode what investors demand for conviction: Clean, compliant, and de-risked businesses. For our SME owners, we do the hard but honest work of transformation: turning your business into a structured, investable asset.
                </p>
                <p>
                  Our story is about closing that frustration gap, creating relationships where visionary growth finally finds the capital it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle separator into Manifesto */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* --- The Manifesto (VISIONARY) --- */}
      <section className="py-40 bg-slate-900 border-y border-white/5 relative overflow-hidden text-center">
        {/* Heritage Weave Overlay - Enhanced visibility */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" style={heritageWeaveStyle}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 animate-on-scroll">
          <HeartHandshake className="w-16 h-16 text-[#d97706] mx-auto mb-10 opacity-90" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white mb-10 leading-tight drop-shadow-2xl">
            "Imagine if you had endless capital to grow and scale your business!"
          </h2>
          
          <p className="text-slate-400 text-lg md:text-2xl font-light leading-loose mb-16 max-w-3xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fbbf24] to-[#d97706] font-medium mt-8 block text-xl md:text-3xl">Stop surviving the drought. <br className="md:hidden" /> Start owning the ocean.</span>
          </p>
          
          <div className="flex justify-center items-center gap-6">
             <div className="h-[1px] w-16 bg-[#9a3412]/60"></div>
             <div className="flex flex-col items-center gap-3">
               <span className="text-[#d97706] font-extrabold uppercase tracking-[0.25em] text-sm md:text-base">Your War Chest Awaits</span>
               <span 
                 className="text-white font-serif italic text-2xl md:text-4xl font-bold border-b-2 border-[#9a3412] pb-1 cursor-pointer hover:text-[#b45309] transition-all duration-300" 
                 onClick={() => scrollToSection('contact')}
               >
                 Book Your Future
               </span>
             </div>
             <div className="h-[1px] w-16 bg-[#9a3412]/60"></div>
          </div>
        </div>
      </section>

      {/* --- Contact / Qualification Gateway (EXCLUSIVE ACCESS) --- */}
      <section id="contact" className="py-40 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 shadow-2xl rounded-none md:rounded-sm overflow-hidden bg-white flex flex-col md:flex-row animate-on-scroll">
          
          {/* Info Side (Alignment Check) */}
          <div className="bg-slate-950 text-white p-12 md:p-16 md:w-2/5 flex flex-col justify-between relative overflow-hidden border-r-4 border-[#9a3412]">
             <div className="absolute inset-0 opacity-15 z-0" style={heritageWeaveStyle}></div>
             
             <div className="relative z-10">
               <h3 className="text-4xl font-serif mb-6 font-medium">Alignment Check</h3>
               <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                 We work with ambitious founders and SMEs seeking to transform their business into an investable asset.
               </p>
               
               <div className="space-y-10">
                 <div className="flex items-start gap-5">
                   <div className="p-3 bg-white/5 rounded-full border border-white/10">
                     <Users size={20} className="text-[#d97706]" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Our Focus</p>
                     <p className="text-lg font-medium font-serif text-white">Mature, Revenue-Generating SMEs</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-5">
                   <div className="p-3 bg-white/5 rounded-full border border-white/10">
                     <TrendingUp size={20} className="text-[#d97706]" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Target Raise</p>
                     <p className="text-lg font-medium font-serif text-white">$1M - $5M</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="relative z-10 mt-16">
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#9a3412] to-[#d97706]"></div>
             </div>
          </div>

          {/* Qualification Side - The Exclusive Gateway (NO FORM) */}
          <div className="p-12 md:p-16 md:w-3/5 bg-slate-50 relative flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 mix-blend-multiply"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-serif text-slate-900 mb-2 font-medium">Find Your Match</h2>
              <p className="text-slate-500 mb-12 font-light tracking-wide">Discovery & Alignment</p>
              
              {/* Qualification Link Block - The Centerpiece */}
              <a href="#" className="block p-12 bg-white border border-[#9a3412]/20 shadow-2xl relative overflow-hidden group hover:border-[#9a3412] transition-all duration-700 transform hover:-translate-y-2">
                 {/* Decorative Corner */}
                 <div className="absolute top-0 right-0 w-40 h-40 bg-[#d97706]/5 rounded-bl-full transition-transform duration-1000 group-hover:scale-110"></div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="p-3 bg-[#9a3412]/10 rounded-full group-hover:bg-[#9a3412] transition-colors duration-500">
                        <CheckCircle2 size={32} className="text-[#9a3412] group-hover:text-white transition-colors duration-500" />
                     </div>
                     <h4 className="text-3xl font-serif text-slate-900 group-hover:text-[#9a3412] transition-colors duration-500">
                       Qualification Protocol
                     </h4>
                   </div>
                   
                   <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                     We are rigorous about alignment. Before we talk, verify your fit with our Investment DNA.
                   </p>
                   
                   <div className="flex items-center gap-6">
                     <span className="w-16 h-[2px] bg-[#9a3412] group-hover:w-32 transition-all duration-700 ease-out"></span>
                     <span className="text-[#d97706] text-sm font-bold uppercase tracking-[0.25em] flex items-center gap-3 group-hover:gap-6 transition-all duration-500">
                       Check Eligibility Now <ArrowUpRight size={18} />
                     </span>
                   </div>
                 </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 relative">
        <AfricanAccentStrip />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-white text-2xl font-serif tracking-tight uppercase">Clustell Capital Group</span>
            <span className="text-[10px] tracking-[0.3em] text-[#d97706] uppercase">Transforming Small Fish into Blue Whales</span>
          </div>
          
          <div className="text-xs tracking-wide font-light opacity-50">
            © {new Date().getFullYear()} Clustell Capital Group. All rights reserved. • Nairobi
          </div>

          <div className="flex gap-8">
             <a href="#" className="text-slate-500 hover:text-[#d97706] transition-colors uppercase text-xs tracking-widest">LinkedIn</a>
             <a href="#" className="text-slate-500 hover:text-[#d97706] transition-colors uppercase text-xs tracking-widest">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
