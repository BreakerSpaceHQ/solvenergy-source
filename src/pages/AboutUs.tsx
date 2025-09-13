
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

const AboutUs = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 transition-colors duration-500">
        {/* About Section */}
        <section className="solar-section">
          <div className="solar-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/about-us/about-us.avif"
                  alt="Solar store team"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-solar-blue dark:text-white">About Our Store</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Founded in 2025, Ygrenevlos has been at the forefront of the renewable energy revolution 
                  in our community. We're not just a retailer - we're passionate advocates for sustainable 
                  living and energy independence.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our expert team has helped hundreds of homeowners and businesses make the switch to 
                  solar power. We pride ourselves on providing honest advice, quality products, and 
                  exceptional customer service.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Unlike online retailers, we offer the unique advantage of being able to see, touch, 
                  and learn about solar products in person before making your decision. Our knowledgeable 
                  staff can answer all your questions and help you find the perfect solar solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="solar-section bg-gray-50 dark:bg-gray-900">
          <div className="solar-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-solar-blue dark:text-white">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Have questions about solar energy? Send us a message via email and we'll get back to you soon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              {/* <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-solar-blue dark:text-white">Send us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          rules={{ 
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email"
                            }
                          }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        rules={{ required: "Subject is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your solar energy needs..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-solar-blue hover:bg-opacity-90 text-white">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card> */}

              {/* Store Information */}
              <div className="space-y-8">
                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    {/* <h3 className="text-2xl font-bold mb-6 text-solar-blue dark:text-white">Connect with us via Email</h3> */}
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Email:</p>
                        <p className="text-gray-600 dark:text-gray-400">contact@solvenergy.com</p>
                      </div>
                      {/* <div className="pt-4">
                        <Button className="bg-solar-gold hover:bg-opacity-90 text-solar-blue w-full">
                          Get Directions
                        </Button>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
