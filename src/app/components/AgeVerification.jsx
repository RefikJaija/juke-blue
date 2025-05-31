"use client";

import { useState, useEffect } from 'react';

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check sessionStorage instead of localStorage
    const isVerified = sessionStorage.getItem('ageVerified');
    if (!isVerified) {
      setShowModal(true);
    }
  }, []);

  const verifyAge = (status) => {
    if (status) {
      // Store in sessionStorage (clears when browser closes)
      sessionStorage.setItem('ageVerified', 'true');
      setShowModal(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  if (showModal) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="bg-antique text-nautical rounded-2xl p-8 max-w-md text-center shadow-2xl">
          <h2 className="font-pirate text-3xl mb-4">Ahoy There!</h2>
          <p className="text-lg mb-6">
            To sail these waters, ye must be at least 18 summers old. 
            Do ye swear you're of proper age to navigate these spirits?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => verifyAge(true)}
              className="px-6 py-3 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase"
            >
               I be 18 summers or more
            </button>
            <button
              onClick={() => verifyAge(false)}
              className="px-6 py-3 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase"
            >
              Nay, I'll Leave
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

