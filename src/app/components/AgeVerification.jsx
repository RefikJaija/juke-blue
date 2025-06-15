// "use client";

// import { useState, useEffect } from 'react';

// export default function AgeVerification() {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Check sessionStorage instead of localStorage
//     const isVerified = sessionStorage.getItem('ageVerified');
//     if (!isVerified) {ac
//       setShowModal(true);
//     }
//   }, []);

//   const verifyAge = (status) => {
//     if (status) {
//       // Store in sessionStorage (clears when browser closes)
//       sessionStorage.setItem('ageVerified', 'true');
//       setShowModal(false);
//     } else {
//       window.location.href = 'https://www.google.com';
//     }
//   };

//   if (showModal) {
//     return (
//       <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//         <div className="bg-antique text-nautical rounded-2xl p-8 max-w-md text-center shadow-2xl">
//           <h2 className="font-pirate text-3xl mb-4">Ahoy There!</h2>
//           <p className="text-lg mb-6">
//             To sail these waters, ye must be at least 18 summers old. 
//             Do ye swear you're of proper age to navigate these spirits?
//           </p>
//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => verifyAge(true)}
//               className="px-6 py-3 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase"
//             >
//                I be 18 summers or more
//             </button>
//             <button
//               onClick={() => verifyAge(false)}
//               className="px-6 py-3 bg-nautical text-antique rounded-lg hover:bg-blush transition-colors font-title uppercase"
//             >
//               Nay, I'll Leave
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }

"use client";

import { useState, useEffect } from 'react';

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem('ageVerified');
    if (!isVerified) {
      setShowModal(true);
    }
  }, []);

  const verifyAge = (status) => {
    if (status) {
      sessionStorage.setItem('ageVerified', 'true');
      setShowModal(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  if (showModal) {
    return (
      // Modal Overlay: The vast, mysterious ocean. Darker, more intense blur for depth.
      // Subtle starry/sparkle effect (conceptual, requires CSS) or gentle wave animation.
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-filter backdrop-blur-lg">
        {/* Modal Content Box: Imagine an ancient, weathered piece of timber,
            or a message found in a bottle, half-buried in sand.
            More pronounced tilt and interaction for a "discovered artifact" feel. */}
        <div className="relative bg-antique text-nautical rounded-[4rem] p-10 max-w-xl w-full text-center 
                        shadow-xl border-8 border-nautical transform rotate-2 transition-transform duration-700 ease-out 
                        hover:rotate-0 hover:scale-[1.02] active:scale-[0.98] animate-emerge-from-sea overflow-hidden">
          
          {/* Inner Background Texture: Your sand.jpg as a subtle, organic texture within the modal. */}
          <div className="absolute inset-0 bg-grain opacity-30 rounded-[4rem] pointer-events-none z-0"></div>

          {/* Heading: Bold, imposing, like a warning carved into an old ship's mast.
              Stronger default text shadow for a chiseled look. */}
          <h2 className="relative z-10 font-title text-6xl sm:text-7xl mb-6 leading-tight text-nautical text-shadow-default drop-shadow-lg">
            By The Deep, <br className="sm:hidden"/>Who Goes There?
          </h2>
          
          {/* Paragraph: The ancient decree, clear yet echoing like a whispered legend. */}
          <p className="relative z-10 font-sans text-xl mb-10 px-6 leading-relaxed italic">
            "Before ye may tread upon these shores and partake of our spirited treasures, 
            ye must be old enough to command yer own vessel – **18 summers or more**. 
            Do ye truly claim this right, by the moon and the tide?"
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center">
            {/* Affirmative Button: A powerful commitment, solid and unyielding, like an anchor.
                Dramatic hover for a burst of coral light. */}
            <button
              onClick={() => verifyAge(true)}
              className="px-12 py-5 bg-nautical text-antique rounded-full 
                         hover:bg-blush hover:text-nautical 
                         transition-all duration-300 ease-in-out font-title text-2xl uppercase 
                         shadow-lg hover:shadow-2xl transform hover:-translate-y-2 active:scale-95 
                         border-2 border-nautical hover:border-blush animate-pulse-on-hover">
               Aye, I Am of Age!
            </button>
            
            {/* Decline Button: A somber departure, distinct but still thematic. */}
            <button
              onClick={() => verifyAge(false)}
              className="px-12 py-5 bg-antique text-nautical border-2 border-nautical rounded-full 
                         hover:bg-blush hover:text-nautical 
                         transition-all duration-300 ease-in-out font-title text-2xl uppercase 
                         shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 
                         animate-wobble-on-hover">
              Nay, Let Me Pass
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}