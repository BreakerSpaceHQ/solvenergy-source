import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, Image as ImageIcon, Camera } from "lucide-react";
import Lightbox from "@/components/ui/lightbox";

const TestimonialsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<{ type: "image" | "video"; src: string; alt?: string }[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      type: "text",
      name: "Joyanta Mali",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      text: "The owner and staff are very good and share too much information about solar panel",
      rating: 5,
      gallery: [
        { type: "image" as const, src: `${import.meta.env.BASE_URL}/testimonials/image1.jpg`, alt: "Solar panel installation" },
        { type: "image" as const, src: `${import.meta.env.BASE_URL}/testimonials/image2.jpg`, alt: "Completed installation" },
        // { type: "video" as const, src: "/testimonials/video1.mp4", alt: "Completed installation" },
      ]
    },
    {
      id: 2,
      type: "image",
      name: "Swarnava Sengupta",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      text: "",
      rating: 5,
      gallery: [
        // { type: "image" as const, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop", alt: "Office solar installation" },
        // { type: "image" as const, src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop", alt: "Inverter system" },
        // { type: "video" as const, src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop", alt: "Installation video" }
      ]
    },
    {
      id: 3,
      type: "video",
      name: "Anupam Laha",
      role: "Home Owner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      text: "",
      rating: 5,
      gallery: [
        // { type: "video" as const, src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop", alt: "Customer testimonial video" },
        // { type: "image" as const, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop", alt: "Environmental impact" }
      ]
    },
    {
      id: 4,
      type: "image",
      name: "Sujay Sahil",
      role: "Home Owner",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
      text: "",
      rating: 5,
      gallery: [
        // { type: "image" as const, src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop", alt: "Battery storage system" },
        // { type: "image" as const, src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop", alt: "Restaurant installation" },
        // { type: "video" as const, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop", alt: "Customer review video" }
      ]
    }
  ];

  const openLightbox = (gallery: { type: "image" | "video"; src: string; alt?: string }[], index = 0) => {
    setSelectedGallery(gallery);
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-[#fffab2b3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 section-title dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-white">
            Don't just take our word for it. Here's what real customers have to say about their experience with SOLVENERGY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{" "}
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`fade-in hover-scale bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                testimonial.gallery.length > 0 ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Gallery Preview */}
                {testimonial.gallery.length > 0 && (
                  <div className="mb-4">
                    {testimonial.gallery.length === 1 ? (
                      <div 
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(testimonial.gallery, 0)}
                      >
                        <img
                          src={testimonial.gallery[0].src}
                          alt={testimonial.gallery[0].alt || "Gallery image"}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          {testimonial.gallery[0].type === 'video' ? (
                            <Play className="w-8 h-8 text-white" />
                          ) : (
                            <ImageIcon className="w-8 h-8 text-white" />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {testimonial.gallery.slice(0, 3).map((item, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`relative group cursor-pointer ${
                              imgIndex === 0 ? 'col-span-2' : 'col-span-1'
                            }`}
                            onClick={() => openLightbox(testimonial.gallery, imgIndex)}
                          >
                            <img
                              src={item.src}
                              alt={item.alt || `Gallery image ${imgIndex + 1}`}
                              className={`w-full object-cover rounded-lg ${
                                imgIndex === 0 ? 'h-24' : 'h-16'
                              }`}
                            />
                            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.type === 'video' ? (
                                <Play className="w-4 h-4 text-white" />
                              ) : (
                                <ImageIcon className="w-4 h-4 text-white" />
                              )}
                            </div>
                            {imgIndex === 2 && testimonial.gallery.length > 3 && (
                              <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">
                                  +{testimonial.gallery.length - 3} more
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                        {testimonial.gallery.length > 1 && (
                          <div className="col-span-2 text-center mt-2">
                            <button
                              onClick={() => openLightbox(testimonial.gallery, 0)}
                              className="text-xs text-primary hover:underline flex items-center justify-center gap-1"
                            >
                              <Camera className="w-3 h-3" />
                              View all {testimonial.gallery.length} items
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-primary/20"
                  /> */}
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4 dark:text-white">Join our satisfied customers</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-muted-foreground  dark:text-white">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>4.9/5 Average Rating</span>
            </div>
            {/* <div>Several Happy Customers</div>
            <div>1+ Years Experience</div>
            <div>10+ Video Reviews</div> */}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={selectedGallery}
          initialIndex={selectedIndex}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;