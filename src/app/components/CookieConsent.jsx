//CookieConsent.jsx
"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-antique/95 text-nautical p-4 z-50 border-t-4 border-nautical/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          We use cookies to enhance your voyage in our waters. By continuing,
          you agree to our{" "}
          <a href="/privacy" className="text-blush hover:underline">
            Pirate's Privacy Policy
          </a>
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-2 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase whitespace-nowrap"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}