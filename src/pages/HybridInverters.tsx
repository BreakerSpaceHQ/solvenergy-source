
import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HybridInverters = () => {
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
                <BreadcrumbPage>Hybrid Inverters</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-solar-blue dark:text-blue-300">Hybrid Inverters</h1>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                  Hybrid inverters are advanced devices that combine the functionality of solar inverters and battery inverters in one unit. They convert DC power from solar panels into AC power for your home while also managing battery storage systems for energy independence.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg fade-in">
                <img
                  src="/products/hybrid-inverter.avif"
                  alt="Hybrid Inverter System"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <div className="mb-16 fade-in">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Key Features</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Key Features</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Simultaneous AC/DC Conversion</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Hybrid inverters can convert DC power from solar panels to AC power for household use while simultaneously charging batteries with excess DC power.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">Battery Management</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Integrated battery management systems optimize charging and discharging cycles to maximize battery lifespan and performance.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">Grid Connectivity</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Hybrid inverters can operate in grid-tied, off-grid, and backup modes, providing flexibility and energy security.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">Remote Monitoring</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Advanced monitoring systems allow you to track energy production, battery status, and system performance remotely via a mobile app or web portal.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Benefits</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Energy Independence</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Store excess solar energy for use during evening hours or power outages, reducing reliance on the grid.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Cost Savings</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Reduce electricity bills by using stored solar energy instead of purchasing power from the grid.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Backup Power</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Provide backup power during grid outages, ensuring essential appliances and devices continue to function.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-solar-blue dark:border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Environmental Benefits</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Reduce your carbon footprint by using clean, renewable solar energy instead of fossil fuels.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="installation" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-solar-blue dark:text-blue-300">Installation</h2>
                  
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    Hybrid inverter installation requires careful planning and should be performed by a qualified solar installer. Here are the key steps:
                  </p>
                  
                  <ul className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>System Design:</strong> Determine the appropriate size and configuration of the hybrid inverter and battery system based on your energy needs and solar panel array.</li>
                    <li><strong>Mounting:</strong> Install the hybrid inverter on a wall or other suitable location, ensuring proper ventilation and protection from the elements.</li>
                    <li><strong>Wiring:</strong> Connect the solar panels, batteries, and grid to the hybrid inverter, following all electrical codes and safety guidelines.</li>
                    <li><strong>Configuration:</strong> Configure the hybrid inverter settings, such as battery charging parameters, grid export limits, and backup power settings.</li>
                    <li><strong>Testing:</strong> Test the system to ensure it is functioning correctly and providing the desired level of energy independence and backup power.</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <section className="mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-8 text-solar-blue dark:text-blue-300">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">What is the lifespan of a hybrid inverter?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Most hybrid inverters have a lifespan of 10-15 years, depending on the quality of the components and the operating conditions. Proper maintenance and regular inspections can help extend the lifespan of your hybrid inverter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">Can I add batteries to my existing solar system?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes, you can add batteries to your existing solar system by installing a hybrid inverter. A qualified solar installer can assess your system and recommend the appropriate hybrid inverter and battery configuration for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">How much does a hybrid inverter cost?</AccordionTrigger>
                <AccordionContent className="px-6">
                  The cost of a hybrid inverter varies depending on the size, features, and brand. On average, a hybrid inverter can cost between $2,000 and $5,000, excluding installation costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">What are the benefits of remote monitoring?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Remote monitoring allows you to track your energy production, battery status, and system performance from anywhere with an internet connection. This can help you identify potential issues early and optimize your system for maximum energy savings.
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

export default HybridInverters;
