
import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BatteryStorage = () => {
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
                <BreadcrumbPage>Battery Storage</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-solar-blue dark:text-blue-300">Battery Storage</h1>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                  Advanced battery storage systems that capture and store excess solar energy for use when the sun isn't shining. 
                  Achieve energy independence and backup power with our reliable lithium-ion battery solutions.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg fade-in">
                <img
                  src="/products/batteries.png"
                  alt="Battery Storage System"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <div className="mb-16 fade-in">
            <Tabs defaultValue="types" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="types">Battery Types</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="sizing">System Sizing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="types" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Battery Technologies</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Lithium-Ion (Li-ion)</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        The most popular choice for residential solar storage, offering high energy density, 
                        long cycle life, and excellent round-trip efficiency. They require minimal maintenance 
                        and have a compact design.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>95%+ round-trip efficiency</li>
                        <li>6,000+ charge cycles</li>
                        <li>10-15 year lifespan</li>
                        <li>Compact and lightweight</li>
                        <li>Fast charging capability</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">Lithium Iron Phosphate (LiFePO4)</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Known for enhanced safety, thermal stability, and longer lifespan. These batteries 
                        are more tolerant of extreme temperatures and offer excellent performance in 
                        demanding conditions.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Superior safety features</li>
                        <li>8,000+ charge cycles</li>
                        <li>15-20 year lifespan</li>
                        <li>Wide temperature range</li>
                        <li>Excellent thermal stability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Key Benefits</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Energy Independence</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Store excess solar energy during peak production hours and use it when needed, 
                        reducing dependence on the electrical grid and utility companies.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Backup Power</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Automatically provide backup power during grid outages, keeping essential 
                        appliances and devices running when you need them most.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Time-of-Use Optimization</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Take advantage of time-of-use electricity rates by storing energy when rates 
                        are low and using stored energy when rates are high.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Environmental Impact</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Maximize the use of clean solar energy and reduce reliance on fossil fuel-based 
                        grid electricity, further reducing your carbon footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sizing" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">System Sizing Guide</h2>
                  
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    Proper battery sizing depends on your energy consumption patterns, backup power needs, 
                    and budget. Here are key factors to consider:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Daily Energy Usage</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Calculate your average daily electricity consumption in kWh. This forms the 
                        baseline for determining minimum battery capacity.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Backup Duration</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Decide how many hours or days of backup power you need during outages. 
                        This affects the total battery capacity required.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Peak Load Requirements</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Consider the maximum power draw of appliances that will run simultaneously 
                        to determine the required battery power output.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Solar Production</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Match battery capacity with your solar system's excess production to 
                        optimize energy storage and return on investment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2 text-blue-800 dark:text-blue-300">Sizing Example</h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Average home using 30 kWh/day with 8kW solar system: Consider 15-20 kWh battery capacity 
                      for optimal balance of backup power and energy independence.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <section className="mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-8 text-solar-blue dark:text-blue-300">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">How long do solar batteries last?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Modern lithium-ion batteries typically last 10-15 years, with LiFePO4 batteries lasting up to 20 years. 
                  Battery lifespan depends on usage patterns, depth of discharge, temperature conditions, and maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">Can I add batteries to my existing solar system?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes, batteries can be added to most existing solar systems through retrofitting. This may require 
                  installing a battery inverter or upgrading to a hybrid inverter, depending on your current setup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">How much can I save with battery storage?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Savings depend on your electricity rates, usage patterns, and local net metering policies. 
                  Homes with time-of-use rates or frequent outages typically see the greatest benefits from battery storage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">Do batteries require maintenance?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Lithium-ion batteries require minimal maintenance compared to lead-acid batteries. Regular monitoring 
                  through the battery management system and occasional inspection are typically sufficient.
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

export default BatteryStorage;
