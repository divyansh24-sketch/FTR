import React from 'react';
import Hero from './hero';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';

import SolutionSecttion from './SolutionSection';
import WhyFtrSection from './WhyFtrSection';

import Ourclient from './Ourclient';
import Testimonials from './Testimonials';  
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
    
      <Ourclient />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
 
    </div>
  );
}