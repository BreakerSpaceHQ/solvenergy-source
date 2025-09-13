
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      title: "Solar Panels",
      description: "High-efficiency solar panels from top brands that convert sunlight into clean electricity. Built to last with performance guarantees.",
      image: "./products/solar-panel.avif",
    },
    {
      title: "Hybrid Inverters",
      description: "Smart inverters that efficiently convert DC to AC power while managing energy flow between solar panels, batteries, and the grid.",
      image: "./products/hybrid-inverter.avif",
    },
    {
      title: "Battery Storage",
      description: "Advanced battery systems that store excess solar energy for use during evenings, cloudy days, or power outages.",
      image: "./products/batteries.png",
    },
  ];

  return (
    <section id="products" className="solar-section bg-solar-light dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Premium Solar Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            We stock only the highest quality solar equipment from trusted manufacturers. 
            Visit our store to see these products in person and speak with our expert staff.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-solar-blue dark:text-blue-300 transition-colors duration-300">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
