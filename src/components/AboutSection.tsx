
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="solar-section">
      <div className="solar-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Solar store team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="section-title">About Our Store</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, SolarStore has been at the forefront of the renewable energy revolution 
              in our community. We're not just a retailer – we're passionate advocates for sustainable 
              living and energy independence.
            </p>
            <p className="text-gray-600 mb-6">
              Our expert team has helped hundreds of homeowners and businesses make the switch to 
              solar power. We pride ourselves on providing honest advice, quality products, and 
              exceptional customer service.
            </p>
            <p className="text-gray-600 mb-6">
              Unlike online retailers, we offer the unique advantage of being able to see, touch, 
              and learn about solar products in person before making your decision. Our knowledgeable 
              staff can answer all your questions and help you find the perfect solar solution for your needs.
            </p>
            <Button className="bg-solar-blue hover:bg-opacity-90 text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
