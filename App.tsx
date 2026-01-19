import React from 'react';
import Navigation from './components/Navigation.tsx';
import AIConsultant from './components/AIConsultant.tsx';

const App: React.FC = () => {
  const getWhatsappUrl = (service?: string) => {
    const base = "https://wa.me/2349033597562";
    const text = service 
      ? `Hello Uncle Blessing Research Institute, I want to order your help with: "${service}". Can we discuss my project?`
      : "Hello Uncle Blessing Research Institute, I need help with my research project. How do I start?";
    return `${base}?text=${encodeURIComponent(text)}`;
  };

  const personalEmail = "blessingomiyale@gmail.com";
  
  const services = [
    {
      title: "Academic Project Writing",
      description: "Complete help with Undergraduate, Masters, and PhD projects. I handle methodology, literature review, and data analysis to ensure you graduate with top grades.",
      icon: "fa-book-open",
      features: ["Thesis & Dissertation", "Project Writing", "Journal Publication"]
    },
    {
      title: "Market & Business Research",
      description: "Professional market analysis and feasibility studies for your business. I provide data that helps you understand your customers and competitors.",
      icon: "fa-chart-pie",
      features: ["Feasibility Studies", "Market Survey", "Competitor Analysis"]
    },
    {
      title: "Business Plans & Strategy",
      description: "Customized business plans and financial projections. I write winning pitch decks that help you secure funding and grow your business.",
      icon: "fa-handshake",
      features: ["Business Proposals", "Pitch Decks", "Financial Modeling"]
    },
    {
      title: "Data Analysis (SPSS/Stata)",
      description: "Expert statistical analysis for your research data. I use SPSS, Stata, and Python to transform your raw data into clear results and graphs.",
      icon: "fa-database",
      features: ["Statistical Analysis", "Data Visualization", "Result Interpretation"]
    }
  ];

  const internationalCases = [
    {
      title: "Pan-African Market Study",
      location: "Multi-Regional",
      description: "Strategic analysis of consumer behavior across West African trade borders."
    },
    {
      title: "Sustainable Agri-Business Review",
      location: "International Partnership",
      description: "Cross-border publication on agricultural extension in emerging economies."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Samuel Okon",
      role: "PhD Candidate, UK University",
      text: "Uncle Blessing's institute helped me refine my dissertation methodology. The data analysis was precise and met the highest international standards.",
      rating: 5
    },
    {
      name: "Teniola Adams",
      role: "CEO, Agri-Scale Solutions",
      text: "The business plan and market research provided were instrumental in securing our first round of investment. Highly recommended for any serious entrepreneur.",
      rating: 5
    },
    {
      name: "Grace Onyeka",
      role: "Postgraduate Student, FUOYE",
      text: "I was struggling with my final year project until I met Uncle Blessing. He simplified the entire process and guided me to an A grade!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 pt-20">
      <Navigation />

      {/* Hero Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white text-emerald-800 text-xs font-bold uppercase mb-8 border border-emerald-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official Research & Data Hub
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 mb-6 leading-tight">
                Your Expert in <br />
                <span className="text-emerald-700">Academic & Business</span> <br />
                Research Writing
              </h1>
              <p className="max-w-xl text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Order high-quality project writing, data analysis, and market research services. I help students and business owners achieve excellence through data.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href={getWhatsappUrl()} className="px-10 py-5 bg-emerald-800 text-white rounded-2xl font-bold shadow-xl shadow-emerald-900/20 hover:bg-emerald-900 transition text-center flex items-center justify-center gap-3">
                  Order Your Research Help
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-72 h-72 md:w-80 md:h-80 bg-emerald-900 rounded-[3rem] shadow-2xl border-4 border-white flex flex-col items-center justify-center relative z-10 overflow-hidden transform transition-transform group-hover:scale-105 duration-500">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-4xl font-serif font-black text-emerald-900">UB</span>
                  </div>
                  <h3 className="text-white text-xl font-serif font-bold text-center px-4 leading-tight">UNCLE BLESSING <br/> <span className="text-emerald-400 text-xs uppercase tracking-[0.3em]">Research Institute</span></h3>
                  <div className="mt-6 flex gap-3">
                    <i className="fas fa-globe text-emerald-400 text-xl"></i>
                    <i className="fas fa-microscope text-emerald-400 text-xl"></i>
                    <i className="fas fa-chart-line text-emerald-400 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase mb-6">
                About & Global Mission
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Blessing Omiyale</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed font-bold text-emerald-800">
                Founder of Uncle Blessing Research Institute
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I graduated from the <b>Federal University Oye-Ekiti (FUOYE)</b>, specializing in Agricultural Economics and Extension. My institute is built on a <b>global mission</b> to bridge the gap between local data and international academic standards.
              </p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 mb-8">
                <h4 className="font-bold text-emerald-900 mb-2">Our International Commitment</h4>
                <p className="italic text-emerald-800 text-sm">
                  We explicitly welcome international researchers and partnerships. Our institute serves as a hub for cross-border projects, inviting PhDs and postdocs to join our growing global network.
                </p>
              </div>
              <a href={getWhatsappUrl("Partnership")} className="inline-block px-8 py-4 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 transition shadow-lg">
                Collaborate With Us
              </a>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group perspective-1000">
                <div className="bg-emerald-950 w-64 h-80 md:w-72 md:h-96 rounded-r-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.3)] border-l-[12px] border-emerald-900 flex flex-col p-8 transition-transform group-hover:rotate-y-12 duration-500">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-20"></div>
                  <div className="h-full flex flex-col border border-emerald-800/50 p-6 relative z-10">
                    <span className="text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-4">Official Publication</span>
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight">The Architect <br/><span className="text-emerald-500 italic">of Research</span></h3>
                    <p className="text-emerald-100/40 text-[10px] mt-auto">Global Standards for Academic and Business Analysis.</p>
                  </div>
                  <div className="absolute top-8 right-[-10px] bg-amber-400 text-emerald-950 font-black text-[8px] py-1 px-4 shadow-lg transform rotate-45">
                    WORLDWIDE GUIDE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12">How Can I Help You?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all flex flex-col text-left group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-800 transition-colors">
                  <i className={`fas ${service.icon} text-xl text-emerald-700 group-hover:text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{service.description}</p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <i className="fas fa-check-circle text-emerald-500"></i> {f}
                    </li>
                  ))}
                </ul>
                <a href={getWhatsappUrl(service.title)} className="w-full py-3 bg-emerald-800 text-white text-center rounded-xl font-bold text-sm hover:bg-emerald-900 transition">
                  Order This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Work Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">International Case Studies & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {internationalCases.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 shrink-0">
                  <i className="fas fa-file-contract"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <span className="text-[10px] font-black text-emerald-600 uppercase mb-2 block">{item.location}</span>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Trust and Excellence in Research</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative">
                <div className="absolute top-8 right-8 text-emerald-100">
                  <i className="fas fa-quote-right text-4xl"></i>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="global-pathway" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-emerald-400">Join Our Global Network</h2>
              <p className="text-lg text-emerald-100/80 mb-10 leading-relaxed">
                We have clear pathways for international PhDs, postdocs, and visiting scholars. Our International Office handles visa processes, housing arrangements, and ensures a smooth transition to life in our city.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
                  <i className="fas fa-passport text-2xl mb-4 text-emerald-400"></i>
                  <h4 className="font-bold mb-2">Visa Guidance</h4>
                  <p className="text-xs text-emerald-200/60">Professional support for research visas and permits.</p>
                </div>
                <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
                  <i className="fas fa-house-chimney text-2xl mb-4 text-emerald-400"></i>
                  <h4 className="font-bold mb-2">Housing Office</h4>
                  <p className="text-xs text-emerald-200/60">Safe and comfortable stay arrangements for scholars.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-6">Funding & Collaboration</h3>
              <p className="text-slate-600 mb-8 text-sm">We provide opportunities for international grants and partner directly with global research offices.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                   <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 font-bold">IG</div>
                   <div className="text-sm"><b>International Grants</b><br/><span className="text-xs text-slate-400">Application support for global funding.</span></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                   <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 font-bold">CP</div>
                   <div className="text-sm"><b>Collaborative Projects</b><br/><span className="text-xs text-slate-400">Joint ventures with global universities.</span></div>
                </div>
              </div>
              <a href={getWhatsappUrl("Global Scholarship Inquiry")} className="mt-8 block w-full py-4 bg-emerald-700 text-white text-center rounded-xl font-bold hover:bg-emerald-800 transition">
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Strategist */}
      <section id="consultation-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AIConsultant />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Need Instant Advice?</h2>
              <p className="text-xl text-slate-600 mb-8 font-light">
                Ask my AI Research Architect for quick suggestions on your project methodology, business goals, or international fellowship inquiries.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700"><i className="fas fa-microchip"></i></div>
                  <div>
                    <h4 className="font-bold">Global Data Standards</h4>
                    <p className="text-sm text-slate-500">I ensure your research meets international journal requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700"><i className="fas fa-comments"></i></div>
                  <div>
                    <h4 className="font-bold">Direct WhatsApp Support</h4>
                    <p className="text-sm text-slate-500">I personally review all orders to ensure perfect quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Start Your Research Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={getWhatsappUrl()} className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition shadow-xl">
              <i className="fab fa-whatsapp mr-2"></i> ORDER ON WHATSAPP
            </a>
            <a href={`mailto:${personalEmail}`} className="px-10 py-5 bg-slate-800 text-white border-2 border-slate-700 rounded-2xl font-black text-lg hover:bg-slate-700 transition">
              <i className="fas fa-envelope mr-2"></i> CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-black text-slate-900 mb-1 tracking-tighter">UNCLE BLESSING RESEARCH INSTITUTE</p>
          <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4">A Global Academic & Market Hub</p>
          <p className="text-slate-400 text-xs font-medium">&copy; {new Date().getFullYear()} Blessing Omiyale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
