
import React, { useEffect, useRef } from "react";
import { Sun, Battery, House, PlugZap } from "lucide-react";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const benefits = [
    {
      icon: <Sun className="h-12 w-12 text-solar-gold" />,
      title: "Save on Energy Bills",
      description:
        "Generate your own clean electricity and reduce your dependence on the grid, leading to significant long-term savings on your energy bills.",
    },
    {
      icon: <House className="h-12 w-12 text-solar-gold" />,
      title: "Increase Property Value",
      description:
        "Homes with solar installations typically sell faster and for more money than comparable homes without solar energy systems.",
    },
    {
      icon: <Battery className="h-12 w-12 text-solar-gold" />,
      title: "Energy Independence",
      description:
        "Battery storage allows you to store excess energy for use during outages or peak pricing periods, giving you greater control over your energy use.",
    },
    {
      icon: <PlugZap className="h-12 w-12 text-solar-gold" />,
      title: "Reduce Carbon Footprint",
      description:
        "Solar energy produces no emissions, helping you reduce your carbon footprint and contribute to a cleaner, healthier environment.",
    },
  ];

  return (
    <section id="benefits" className="solar-section bg-solar-light dark:bg-gray-900 transition-colors duration-300" ref={sectionRef}>
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="section-title dark:text-white">Benefits of Solar Energy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Switching to solar power offers numerous advantages for homeowners and businesses alike. Here's why our customers choose solar energy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 text-center fade-in opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-solar-blue dark:text-solar-gold">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
