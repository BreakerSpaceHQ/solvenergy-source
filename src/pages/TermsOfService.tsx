import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using the Ygrenevlos website, you accept and agree to be bound by the terms 
                and provision of this agreement. This website is provided for informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Use License</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Permission is granted to temporarily access the materials on Ygrenevlos's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The materials on Ygrenevlos's website are provided on an 'as is' basis. Ygrenevlos makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Product Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                All product specifications, pricing, and availability information provided on this website is for 
                informational purposes only. Actual products may vary, and we recommend contacting us directly 
                for the most current information and pricing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Limitations</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                In no event shall Ygrenevlos or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Ygrenevlos's website, even if Ygrenevlos or an authorized representative has been 
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Revisions and Errata</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The materials appearing on Ygrenevlos's website could include technical, typographical, or photographic errors. 
                Ygrenevlos does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: contact@solvenergy.in
                </p>
              </div>
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

export default TermsOfService;
