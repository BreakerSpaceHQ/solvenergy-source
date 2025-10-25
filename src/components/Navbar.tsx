

import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePowerCalculatorClick = () => {
    navigate('/');
    setTimeout(() => {
      const calculatorSection = document.getElementById('calculator');
      if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2 dark:bg-gray-900 dark:shadow-gray-800"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <svg width="192" height="108" viewBox="0 0 1920 1080" version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg">
              <g id="g2" transform="translate(-6.0890488)">
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="S" d="m 179.83784,471.73318 h 99.49886 v 11.43469 h -99.49886 q -10.58136,0 -18.0907,7.50935 -7.50935,7.50934 -7.50935,18.0907 0,10.58135 7.50935,18.0907 7.50934,7.33868 18.0907,7.33868 h 62.46412 q 15.36003,0 26.11206,10.92269 10.92268,10.75202 10.92268,26.11205 0,15.36003 -10.92268,26.28272 -10.75203,10.75202 -26.11206,10.75202 H 142.8031 V 596.8321 h 99.49886 q 10.58136,0 18.09071,-7.50935 7.50934,-7.50935 7.50934,-18.09071 0,-10.58135 -7.50934,-17.92003 -7.50935,-7.50935 -18.09071,-7.50935 h -62.46412 q -15.36003,0 -26.28272,-10.75202 -10.75202,-10.92269 -10.75202,-26.28272 0,-15.36003 10.75202,-26.11205 10.92269,-10.92269 26.28272,-10.92269 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="O" d="m 333.43815,491.70122 q 19.96804,-19.96804 48.29877,-19.96804 28.33072,0 48.29876,19.96804 19.96804,19.96804 19.96804,48.29876 0,28.33072 -19.96804,48.29876 -19.96804,19.96804 -48.29876,19.96804 -28.33073,0 -48.29877,-19.96804 -19.96804,-19.96804 -19.96804,-48.29876 0,-28.33072 19.96804,-48.29876 z m 19.79738,97.62153 q 13.14135,7.50935 28.50139,7.50935 15.36003,0 28.50139,-7.50935 13.14136,-7.68002 20.6507,-20.82138 7.68002,-13.14136 7.68002,-28.50139 0,-15.36003 -7.68002,-28.50139 -7.50934,-13.14136 -20.6507,-20.65071 -13.14136,-7.68001 -28.50139,-7.68001 -15.36004,0 -28.50139,7.68001 -13.14136,7.50935 -20.82138,20.65071 -7.50935,13.14136 -7.50935,28.50139 0,15.36003 7.50935,28.50139 7.68002,13.14136 20.82138,20.82138 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="L" d="m 583.63597,596.8321 h 26.79472 10.24002 v 11.43468 H 583.63597 484.1371 v -8.87468 -2.56 -125.09892 h 11.43469 V 596.8321 Z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="V" d="m 697.47074,583.52007 62.80545,-111.78689 h 13.82403 l -76.62948,136.5336 -76.80016,-136.5336 h 13.9947 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="Ξ" d="m 813.40948,608.53125 v -14.0625 h 93.09375 v 14.0625 z m 11.53125,-64.6875 V 529.875 h 70.03125 v 13.96875 z m -7.6875,-58.3125 v -14.0625 h 85.40625 v 14.0625 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="N" d="m 1098.375,593.625 v -113.75 q 0,-1.875 0.125,-3.5 0.125,-1.75 0.625,-3 0.625,-1.375 1.625,-2.125 1.125,-0.875 3,-0.875 3.25,0 4.25,2.875 1,2.75 1,6.625 v 121.75 q 0,8 -4.25,8 -2.875,0 -7.125,-3.875 L 968.75,486.375 v 114.5 q 0,3.625 -1.125,6.25 -1,2.5 -4,2.5 -3.625,0 -4.625,-2.5 -0.875,-2.625 -0.875,-6.25 V 478.5 q 0,-3.75 1.375,-5.75 1.375,-2 3.75,-2 3.125,0 7.25,3.75 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="E" d="m 1277.375,605.25 q 0,1.875 -0.625,2.75 -0.625,0.875 -1.75,1.25 -1,0.375 -2.5,0.375 -1.5,0 -3.375,0 h -116.75 q -1.25,0 -1.875,-0.125 -0.625,-0.125 -1,-0.625 -0.25,-0.5 -0.375,-1.25 0,-0.875 0,-2.375 v -129 q 0,-1.875 0,-3 0.125,-1.125 0.5,-1.75 0.375,-0.625 1.25,-0.875 1,-0.25 2.875,-0.25 h 114.125 q 1.875,0 3.5,0 1.625,0 2.875,0.375 1.375,0.375 2.125,1.25 0.75,0.875 0.75,2.75 0,1.5 -0.75,2.375 -0.75,0.75 -2.125,1.125 -1.25,0.375 -2.875,0.375 -1.625,0 -3.5,0 H 1159.75 v 54.75 h 107.5 q 2.75,0 4.625,0.75 1.875,0.75 1.875,3.25 0,2.75 -1.625,3.625 -1.5,0.875 -4,0.875 H 1159.75 v 59.5 h 108.375 q 1.875,0 3.5,0 1.625,0 2.875,0.375 1.375,0.375 2.125,1.25 0.75,0.75 0.75,2.25 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="R" d="m 1434.375,513.625 q 0,7.625 -2.25,13.375 -2.25,5.75 -6.125,10 -3.75,4.25 -9,7.125 -5.125,2.875 -11,4.75 -5.875,1.75 -12.25,2.625 -6.25,0.875 -12.25,1.125 l 46,48.375 q 1.125,1.125 1.5,2.375 0.5,1.125 0.625,2.125 0,1.75 -1.25,3 -1.125,1.125 -3,1.125 -1.375,0 -3,-0.625 -1.5,-0.625 -3,-2.375 l -50.125,-53.5 h -46.75 v 47 q 0,1.875 -0.25,3.625 -0.125,1.625 -0.625,3 -0.5,1.25 -1.5,2.125 -0.875,0.75 -2.375,0.75 -3.625,0 -4.75,-2.75 -1.125,-2.875 -1.125,-6.75 V 475 q 0,-1.875 0,-2.75 0.125,-1 0.5,-1.375 0.375,-0.375 1.25,-0.375 1,-0.125 2.875,-0.125 h 36.25 q 11.625,0 22.125,0.25 10.625,0.25 19.625,1.625 9.125,1.25 16.5,4 7.375,2.625 12.5,7.5 5.25,4.75 8,12 2.875,7.25 2.875,17.875 z m -10.625,0 q 0,-12.375 -4.625,-19.375 -4.5,-7.125 -13.5,-10.5 -9,-3.5 -22.25,-4.25 -13.25,-0.875 -30.625,-0.875 h -30.25 v 66.25 h 46.875 q 10.875,0 20.75,-1 9.875,-1 17.25,-4.25 7.5,-3.375 11.875,-9.5 4.5,-6.125 4.5,-16.5 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="G" d="m 1557.875,604 q 18.875,0 36,-2.5 17.125,-2.5 34.5,-6.625 v -52.25 h -63.75 q -1.5,0 -3.125,0 -1.5,-0.125 -2.875,-0.5 -1.25,-0.5 -2.125,-1.375 -0.75,-0.875 -0.75,-2.5 0,-1.625 0.75,-2.5 0.875,-0.875 2.125,-1.25 1.25,-0.5 2.75,-0.5 1.625,-0.125 3.25,-0.125 h 63.75 q 5.25,0 7.125,2 1.875,2 1.875,6.75 v 52.25 q 0,3.875 -2.875,6 -2.875,2 -6.125,2.625 -18.5,3.625 -35.875,6.125 -17.375,2.625 -34.625,2.625 -23.25,0 -40.875,-4 -17.5,-4 -29.25,-12.625 -11.75,-8.75 -17.75,-22.375 -5.875,-13.75 -5.875,-33.25 0,-19.5 5.875,-33.125 6,-13.75 17.75,-22.375 11.75,-8.75 29.25,-12.75 17.625,-4 40.875,-4 16.25,0 31.5,3 15.25,2.875 31,9.375 2,0.875 2.875,2.25 0.875,1.25 0.875,2.5 0,1.5 -1.125,2.625 -1.125,1.125 -2.875,1.125 -0.5,0 -2.375,-0.625 -14.375,-6 -29.75,-9 -15.375,-3 -30.125,-3 -22.25,0 -38,3.75 -15.75,3.625 -25.875,11.5 -10,7.75 -14.625,19.875 -4.625,12 -4.625,28.875 0,16.875 4.625,29 4.625,12 14.625,19.875 10.125,7.75 25.875,11.5 15.75,3.625 38,3.625 z" />
                <path className="stroke-[#000000] dark:stroke-[#ffffff] dark:fill-[#ffffff]" aria-label="Y" d="M 1722.375,542.75 1779.5,473.5 q 2.375,-3 5.25,-3 4.125,0 4.125,4.5 0,2.125 -2.125,4.625 l -59,71.125 V 601 q 0,3.625 -1,6.125 -0.875,2.5 -4,2.5 -1.875,0 -3,-0.625 -1,-0.75 -1.625,-1.875 -0.625,-1.25 -0.875,-2.75 -0.125,-1.5 -0.125,-3.125 V 550.5 l -59.25,-70.875 q -1.25,-1.375 -1.75,-2.375 -0.375,-1 -0.375,-2.625 0,-1.875 1.125,-3 1.25,-1.25 3,-1.25 2.75,0 5.375,3.125 z" />
              </g>
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${isScrolled ? "text-gray-800" : theme === 'dark' ? "text-white" : "text-gray-800"} dark:text-gray-200 transition-colors text-md font-medium bg-transparent hover:bg-transparent`}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/solar-panels"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-900 dark:text-gray-100"
                      >
                        <div className="text-sm font-medium leading-none">Solar Panels</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                          High-efficiency solar panels for clean energy generation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/hybrid-inverters"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-900 dark:text-gray-100"
                      >
                        <div className="text-sm font-medium leading-none">Hybrid Inverters</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                          Advanced inverters combining solar and battery management
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/battery-storage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-900 dark:text-gray-100"
                      >
                        <div className="text-sm font-medium leading-none">Battery Storage</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                          Energy storage solutions for maximum efficiency
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <button 
            onClick={handlePowerCalculatorClick}
            className={`${isScrolled ? "text-gray-800" : theme === 'dark' ? "text-white" : "text-gray-800"} dark:text-gray-200 transition-colors font-medium`}
          >
            Power Calculator
          </button> */}
          <Link to="/about-us" className={`${isScrolled ? "text-gray-800" : theme === 'dark' ? "text-white" : "text-gray-800"} dark:text-gray-200 transition-colors font-medium rounded-md px-3 py-2 hover:bg-accent/50`}>
            About Us
          </Link>
          <Link 
            to="/#calculator"
            onClick={() => scrollToSection("calculator")}
            className={`${isScrolled ? "bg-solar-blue" : "bg-gray-800"} ${theme === 'dark' ? "" : "hover:text-solar-blue"} rounded-md px-3 py-2 font-semibold hover:bg-accent text-md text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors`}
          >
            Power Calculator
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2 transition-transform hover:rotate-12 duration-300">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2 transition-transform hover:rotate-12 duration-300"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 transition-all duration-300 transform animate-accordion-down">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <div className="text-solar-blue dark:text-white font-medium py-2 transition-colors">
              Products
            </div>
            <div className="pl-4 space-y-2">
              <Link
                to="/solar-panels"
                className="block text-solar-blue dark:text-gray-300 font-medium py-1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solar Panels
              </Link>
              <Link
                to="/hybrid-inverters"
                className="block text-solar-blue dark:text-gray-300 font-medium py-1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hybrid Inverters
              </Link>
              <Link
                to="/battery-storage"
                className="block text-solar-blue dark:text-gray-300 font-medium py-1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Battery Storage
              </Link>
            </div>
            <button
              onClick={() => {
                handlePowerCalculatorClick();
                setMobileMenuOpen(false);
              }}
              className="text-solar-blue dark:text-white font-medium py-2 transition-colors text-left"
            >
              Power Calculator
            </button>
            <Link
              to="/about-us"
              className="text-solar-blue dark:text-white font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/#calculator" 
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="bg-solar-blue hover:bg-opacity-90 text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors w-full"
            >
              Power Calculator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

