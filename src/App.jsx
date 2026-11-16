import React from 'react';
import Hero from './hero';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';

import SolutionSecttion from './SolutionSection';
import WhyFtrSection from './WhyFtrSection';

 
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
export default function App() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-slate-50">
      <Hero />
      <AboutSection />
       <StatsSection />
     
      <SolutionSecttion />
      <WhyFtrSection />
    
      
      <Faq />
      <Contact />
      <Footer />
 
    </div>
  );
}