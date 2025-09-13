
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="solar-section bg-solar-blue text-white">
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10">Visit Our Store</h2>
          <p className="text-lg text-gray-100">
            Come see our products in person and speak with our solar experts. 
            We're here to help you find the perfect solar solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white text-solar-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[16/9]">
                {/* Replace with actual map or embedded Google Maps */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215976753674!2d-73.9878584!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1590619166098!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Store Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white text-solar-blue rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Store Information</h3>
            <div className="space-y-4">
{/*               <div>
                <p className="font-semibold">Address:</p>
                <p>123 Solar Street, Greenville, CA 94536</p>
              </div>
              <div>
                <p className="font-semibold">Hours:</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>(555) 123-4567</p>
              </div> */}
              <div>
                <p className="font-semibold">Email:</p>
                <p>contact@solveenergy.com</p>
              </div>
              <div className="pt-4">
                <Button className="bg-solar-gold hover:bg-opacity-90 text-solar-blue w-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
