
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import LoadCalculatorSection from "@/components/LoadCalculatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const pathname = location.hash;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if(pathname) {
      const sectionId = pathname.slice(1);
      if(sectionId) {
        scrollToSection(sectionId);
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    // Initialize intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all elements with fade-in class
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="transition-colors duration-500">
        <HeroSection />
        <LoadCalculatorSection />
        <ProductsSection />
        <BenefitsSection />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
