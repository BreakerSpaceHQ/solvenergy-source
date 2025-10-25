
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("appear");
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('calculator');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSolarPanels = () => {
    navigate('/solar-panels');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#fffab2b3] to-solar-dark dark:from-gray-900 dark:to-black transition-colors duration-500"
      ref={heroRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 dark:bg-blue-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-300 dark:bg-purple-700 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 left-20 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 right-10 w-64 h-64 bg-solar-gold dark:bg-solar-green rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-solar-green dark:bg-solar-gold rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white transform transition-all duration-1000 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Harness the Power of the Sun
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Your trusted local retailer for premium solar panels, hybrid inverters, and battery solutions. Visit our store to power your home sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToNextSection}
                className={`${theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-solar-gold hover:bg-opacity-90 text-solar-blue hover:bg-white'} font-medium text-lg px-6 py-6 transition-transform hover:scale-105 duration-300`}
              >
                Get Started
              </Button>
              <Button 
                onClick={navigateToSolarPanels}
                variant="outline" 
                className={`${theme === 'dark' ? 'border-blue-400 text-white bg-transparent hover:bg-blue-900' : 'border-white text-white bg-solar-blue hover:bg-white hover:text-solar-blue'} font-medium text-lg px-6 py-6 transition-transform hover:scale-105 duration-300`}
              >
                Products
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative transform transition-transform duration-1000 hover:scale-110">
              <div className="relative">
                <div className={`w-64 h-64 rounded-full opacity-30 absolute top-0 left-0 animate-pulse ${theme === 'dark' ? 'bg-yellow-600' : 'bg-solar-gold'}`}></div>
                <Sun className={`w-80 h-80 relative z-10 ${theme === 'dark' ? 'text-yellow-600 animate-pulse' : 'text-solar-gold animate-spin'}`} style={{ animationDuration: theme === 'dark' ? '4s' : '30s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,101.3C672,85,768,75,864,80C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="text-white dark:text-gray-900 transition-colors duration-500"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
