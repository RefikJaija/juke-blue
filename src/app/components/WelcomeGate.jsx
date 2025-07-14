"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WelcomeGate() {
  const [showModal, setShowModal] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Check sessionStorage for age verification and localStorage for cookie consent
    const isAgeVerified = sessionStorage.getItem('ageVerified');
    const hasCookieConsent = localStorage.getItem('cookieConsent');

    // Show modal only if EITHER age is not verified OR cookie consent is not given
    if (!isAgeVerified || !hasCookieConsent) {
      setShowModal(true);
    }
  }, []);

  // Effect to manage body scroll
  useEffect(() => {
    if (showModal) {
      // Add a class to the body to prevent scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      // Remove the class when the modal is hidden
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function: remove the class if the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showModal]); // Re-run this effect whenever showModal changes

  const handleSetSail = () => {
    if (ageConfirmed && cookiesAccepted) {
      sessionStorage.setItem('ageVerified', 'true');
      localStorage.setItem('cookieConsent', 'true');
      setShowModal(false);
      setShowError(false); // Clear error if successfully verified
    } else {
      setShowError(true);
    }
  };

  if (!showModal) {
    return null; // Don't render anything if the modal should not be shown
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-antique text-nautical rounded-2xl p-8 max-w-md text-center shadow-xl border-2 border-nautical">
        <h2 className="font-title text-4xl text-nautical mb-6">Welcome, Seafarer!</h2>

        <div className="flex flex-col items-start gap-4 mb-8">
          {/* Age Verification Checkbox */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={ageConfirmed}
              onChange={() => {
                setAgeConfirmed(!ageConfirmed);
                setShowError(false); // Clear error on interaction
              }}
              className="form-checkbox h-5 w-5 text-nautical accent-blush rounded focus:ring-nautical"
            />
           <span className="ml-3 text-sm sm:text-lg text-nautical font-sans">
              I am over the age of 18
            </span>
          </label>

          {/* Cookie Consent Checkbox */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={cookiesAccepted}
              onChange={() => {
                setCookiesAccepted(!cookiesAccepted);
                setShowError(false); // Clear error on interaction
              }
              }
              className="form-checkbox h-5 w-5 text-nautical accent-blush rounded focus:ring-nautical"
            />
           <span className="ml-3 text-sm sm:text-lg text-nautical font-sans">
              I agree to the{" "}
              <Link href="/privacy" className="text-blush hover:underline transition-colors">
                privacy policy
              </Link>
            </span>

          </label>
        </div>

        {/* Error Note */}
        {showError && (
          <p className="text-blush font-sans text-md mb-6 italic">
            We need your confirmation to advance, Captain.
          </p>
        )}

        {/* Let's Set Sail Button */}
        <button
          onClick={handleSetSail}
          className="px-8 py-4 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase text-xl shadow-md hover:shadow-lg"
        >
          Let's set sail
        </button>
      </div>
    </div>
  );
}