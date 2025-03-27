
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MockupImages from "@/components/MockupImages";
import React, { useEffect, useState, lazy, Suspense } from "react";

// Lazy load the FAQ component which had performance issues
const FAQ = lazy(() => import("@/components/FAQ"));

const Index = () => {
  const [imagesReady, setImagesReady] = useState(false);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorLinkClick);
    
    // Ensure MockupImages component has time to render and create images
    const timer = setTimeout(() => {
      setImagesReady(true);
      console.log("Images ready for display");
    }, 1500); // Give more time for images to be generated
    
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Render MockupImages first to ensure canvases are created */}
      <MockupImages />
      
      <Navbar />
      <main>
        {/* Only show main content once images are ready */}
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Lade FAQ...</div>}>
          <FAQ />
        </Suspense>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
