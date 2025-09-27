import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-solar-blue hover:text-solar-green mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ygrenevlos does not collect, store, or process any personal information from visitors to our website. 
                We do not use cookies, tracking pixels, or any other data collection methods that would identify individual users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">How We Use Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since we do not collect any personal information, we do not use, share, sell, or distribute any personal data. 
                Our website operates purely as an informational resource about solar energy products and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: contact@solvenergy.in
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                an updated effective date.
              </p>
            </section>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
