
import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SolarPanels = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
      <main className="pt-24 pb-16 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Solar Panels</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-solar-blue dark:text-blue-300">Solar Panels</h1>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                  High-efficiency solar panels that convert sunlight into clean electricity for your home or business. 
                  Our premium panels are designed to maximize energy production while providing long-lasting performance.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg fade-in">
                <img
                  src="/products/solar-panel.avif"
                  alt="Solar Panel Installation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <div className="mb-16 fade-in">
            <Tabs defaultValue="types" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="types">Panel Types</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="types" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Types of Solar Panels</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Monocrystalline</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Made from single-crystal silicon, these panels offer the highest efficiency rates (15-22%) 
                        and perform well in low-light conditions. They have a sleek black appearance and take up less space.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Highest efficiency (18-22%)</li>
                        <li>Space-efficient design</li>
                        <li>Better low-light performance</li>
                        <li>Longer lifespan (25+ years)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">Polycrystalline</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Made from multiple silicon crystals, these panels offer good efficiency (13-16%) 
                        at a lower cost. They have a blue appearance and are a popular choice for residential installations.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Good efficiency (15-17%)</li>
                        <li>Lower cost option</li>
                        <li>Environmentally friendly manufacturing</li>
                        <li>Reliable performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Technical Specifications</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Specification</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Monocrystalline</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Polycrystalline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Power Output</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">300-400W</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">250-350W</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Efficiency</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">18-22%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">15-17%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Temperature Coefficient</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-0.35%/°C</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-0.40%/°C</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">Warranty</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">25 years</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">25 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="installation" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Installation Process</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-solar-blue text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Site Assessment</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Our experts evaluate your roof structure, orientation, shading, and electrical system 
                          to design the optimal solar panel layout for maximum energy production.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-solar-blue text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Permits & Design</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          We handle all necessary permits and create detailed installation plans that comply 
                          with local building codes and utility requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-solar-blue text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Installation</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Professional installation typically takes 1-3 days, including mounting panels, 
                          installing inverters, and connecting to your electrical system.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-solar-blue text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Activation</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          After inspection and utility approval, your system is activated and begins 
                          generating clean energy for your home or business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <section className="mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-8 text-solar-blue dark:text-blue-300">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">How long do solar panels last?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Solar panels typically last 25-30 years with minimal degradation. Most manufacturers offer 
                  25-year warranties, and panels continue producing electricity well beyond the warranty period, 
                  though at slightly reduced efficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">Do solar panels work in cloudy weather?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency 
                  (typically 10-25% of peak output). Modern panels are designed to capture diffused sunlight 
                  and can produce power even in overcast conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">What maintenance do solar panels require?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Solar panels require minimal maintenance. Regular cleaning (2-4 times per year) and 
                  occasional inspection for debris or damage are typically sufficient. Most systems 
                  include monitoring to alert you of any performance issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">Can I add more panels later?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes, solar systems can often be expanded, though it's most cost-effective to install 
                  your full system at once. Expansion depends on roof space, electrical capacity, 
                  and local regulations. We can design systems with future expansion in mind.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SolarPanels;
