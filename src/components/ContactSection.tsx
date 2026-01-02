
import React, { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const ContactSection = () => {
  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = () => {
        if (typeof window.Tally !== "undefined") {
          window.Tally!.loadEmbeds();
        } else {
          const iframes = document.querySelectorAll("iframe[data-tally-src]:not([src])") as NodeListOf<HTMLIFrameElement>;
          iframes.forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc!;
          });
        }
      };
      script.onerror = () => {
        const iframes = document.querySelectorAll("iframe[data-tally-src]:not([src])") as NodeListOf<HTMLIFrameElement>;
        iframes.forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc!;
        });
      };
      document.body.appendChild(script);
    } else {
      if (typeof window.Tally !== "undefined") {
        window.Tally!.loadEmbeds();
      } else {
        const iframes = document.querySelectorAll("iframe[data-tally-src]:not([src])") as NodeListOf<HTMLIFrameElement>;
        iframes.forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc!;
        });
      }
    }
  }, []);

  return (
    <section id="contact" className="solar-section bg-gray-50 dark:bg-gray-900">
      <div className="solar-container">
        <iframe
          data-tally-src="https://tally.so/embed/QKoBLk?alignLeft=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1643"
          title="Contact us"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
