// "use client";
// import React from 'react';
// import Link from 'next/link';

// export default function Footer() {
//   // No more useState or handleSubmit needed. This is a clean, simple component.

//   return (
//     <footer className="bg-nautical text-antique relative mt-20 border-t border-antique min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
//       {/* Faint gold pattern overlay */}
//       <div className="absolute inset-0 z-0 opacity-5"
//            style={{
//              backgroundImage: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
//              backgroundSize: '8px 8px',
//              pointerEvents: 'none',
//            }}
//       />

//       {/* Silhouette Section */}
//       <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
//         <img
//           src="/images/footer.jpeg"
//           alt="Nautical silhouette"
//           className="w-full h-full object-cover opacity-90 object-right-bottom"
//         />
//       </div>

//       {/* Footer Content */}
//       <div className="container mx-auto px-4 py-12 relative z-20">

//         {/* Newsletter Subscription */}
//         <div className="border-b border-antique/20 mb-8 pb-8 text-center">
//           <h4 className="font-title text-xl mb-2">
//             Join our newsletter and get 10% off your first order
//           </h4>
//           <p className="mb-4 text-blush/80">
//             Sign up today and we'll send you a discount code straight to your inbox.
//           </p>
//           {/* --- FINAL, WORKING MAILCHIMP FORM --- */}
//           <form
//             action="https://app.us19.list-manage.com/subscribe/post?u=5d517edfea76bb165baf9794b&id=da73bcfe0d&f_id=004e92e4f0"
//             method="post"
//             target="_blank"
//             className="flex flex-col sm:flex-row justify-center items-center gap-4"
//           >
//             <input
//               type="email"
//               name="EMAIL"
//               placeholder="Your email address"
//               className="w-full sm:w-auto px-4 py-2 rounded-lg text-gray-900"
//               required
//             />
//             <button
//               type="submit"
//               className="px-6 py-2 text-lg bg-antique text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Footer Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//           {/* Company Info */}
//           <div className="mb-8">
//             <h3 className="font-title text-2xl mb-4">Juke Blue</h3>
//             <p className="text-antique/80">
//               Spirits forged by the sea.<br></br> Crafted in Germany.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-title text-lg mb-4">Explore</h4>
//             <ul className="space-y-2">
//               <li><Link href="/cocktails" className="hover:text-blush transition-colors">Cocktails</Link></li>
//               <li><Link href="/shop" className="hover:text-blush transition-colors">Shop</Link></li>
//               <li><Link href="/taverns" className="hover:text-blush transition-colors">Find Us</Link></li>
//             </ul>
//           </div>

        //   {/* Contact */}
        //   <div>
        //     <h4 className="font-title text-lg mb-4">Contact</h4>
        //     <ul className="space-y-2 text-antique/80">
        //       <li>thejuke@jukeblue.com</li>
        //       <li>Ludwig Dwersteg jun. GmbH & Co. <br></br> KG - Altenberger Straße <br></br> 38 - D-48565 Steinfurt</li>
        //     </ul>
        //   </div>

        //   {/* Social */}
        //   <div>
        //     <h4 className="font-title text-lg mb-4">Follow the Voyage</h4>
        //     <div className="flex space-x-4">
        //       {/* Instagram */}
        //       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        //           <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.3 1 .7 1.3 1.3.3.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1-1.3 1.3-.4.3-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1-.7-1.3-1.3-.3-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.3-.6.7-1 1.3-1.3.4-.3 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.8-.3.3-.5.6-.6 1.1-.1.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.1.3.3.6.5 1.1.6.4.1 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.4 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.8.3-.3.5-.6.6-1.1.1-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.7a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm5.5-9.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
        //         </svg>
        //       </a>
        //       {/* YouTube */}
        //       <a href="https://www.youtube.com/@JukeBlue" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        //           <path d="M23.498 6.186a2.949 2.949 0 0 0-2.074-2.087C19.648 3.5 12 3.5 12 3.5s-7.648 0-9.424.599a2.949 2.949 0 0 0-2.074 2.087A30.124 30.124 0 0 0 0 12a30.124 30.124 0 0 0 .502 5.814 2.949 2.949 0 0 0 2.074 2.087C4.352 20.5 12 20.5 12 20.5s7.648 0 9.424-.599a2.949 2.949 0 0 0 2.074-2.087A30.124 30.124 0 0 0 24 12a30.124 30.124 0 0 0-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
        //         </svg>
        //       </a>
        //       {/* Bandcamp */}
        //       <a href="https://jukeblue.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
        //         <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //           <path d="M0 448h208.6L512 64H303.4L0 448z" />
        //         </svg>
        //       </a>
        //     </div>
        //   </div>
        // </div>

//         {/* Copyright */}
//         <div className="mt-8 pt-8 text-center text-antique/60">
//           <div className="mt-2 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
//             <Link href="/privacy" className="hover:text-blush transition-colors">
//               Privacy Policy (DE)
//             </Link>
//             <Link href="/terms" className="hover:text-blush transition-colors">
//               Terms of Service (DE)
//             </Link>
//             <Link href="/payment-shipping" className="hover:text-blush transition-colors">
//               Payment & Shipping
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client";
import React from 'react';
import Link from 'next/link';
import MailchimpSubscribe from "react-mailchimp-subscribe";

// This is a simple, custom form component that the library will pass props to
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-gray-900"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
        />
        <button
          className="px-6 py-2 text-lg bg-antique text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
          onClick={submit}
        >
          Subscribe
        </button>
      </div>
      {status === "sending" && <div style={{ color: "white", paddingTop: "10px" }}>Subscribing...</div>}
      {status === "error" && <div style={{ color: "#FFD700", paddingTop: "10px" }} dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div style={{ color: "white", paddingTop: "10px" }}>Thank you for subscribing!</div>}
    </div>
  );
};

// Main Footer Component
export default function Footer() {
  const postUrl = "https://app.us19.list-manage.com/subscribe/post-json?u=5d517edfea76bb165baf9794b&id=da73bcfe0d&f_id=004e92e4f0";

  return (
    <footer className="bg-nautical text-antique relative mt-20 border-t border-antique min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Backgrounds and overlays */}
      <div className="absolute inset-0 z-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
             backgroundSize: '8px 8px',
             pointerEvents: 'none',
           }}
      />
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/images/footer.jpeg"
          alt="Nautical silhouette"
          className="w-full h-full object-cover opacity-90 object-right-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="border-b border-antique/20 mb-8 pb-8 text-center">
          <h4 className="font-title text-xl mb-2">
            Join our newsletter and get 10% off your first order
          </h4>
          <p className="mb-4 text-blush/80">
            Sign up today and we'll send you a discount code straight to your inbox.
          </p>
          
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>

        {/* The rest of your footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="font-title text-2xl mb-4">Juke Blue</h3>
            <p className="text-antique/80">
              Spirits forged by the sea.<br></br> Crafted in Germany.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/cocktails" className="hover:text-blush transition-colors">Cocktails</Link></li>
              <li><Link href="/shop" className="hover:text-blush transition-colors">Shop</Link></li>
              <li><Link href="/taverns" className="hover:text-blush transition-colors">Find Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-title text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-antique/80">
              <li>thejuke@jukeblue.com</li>
              <li>Ludwig Dwersteg jun. GmbH & Co. <br></br> KG - Altenberger Straße <br></br> 38 - D-48565 Steinfurt</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-title text-lg mb-4">Follow the Voyage</h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.3 1 .7 1.3 1.3.3.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1-1.3 1.3-.4.3-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1-.7-1.3-1.3-.3-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.3-.6.7-1 1.3-1.3.4-.3 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.8-.3.3-.5.6-.6 1.1-.1.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.1.3.3.6.5 1.1.6.4.1 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.4 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.8.3-.3.5-.6.6-1.1.1-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.7a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm5.5-9.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@JukeBlue" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a2.949 2.949 0 0 0-2.074-2.087C19.648 3.5 12 3.5 12 3.5s-7.648 0-9.424.599a2.949 2.949 0 0 0-2.074 2.087A30.124 30.124 0 0 0 0 12a30.124 30.124 0 0 0 .502 5.814 2.949 2.949 0 0 0 2.074 2.087C4.352 20.5 12 20.5 12 20.5s7.648 0 9.424-.599a2.949 2.949 0 0 0 2.074-2.087A30.124 30.124 0 0 0 24 12a30.124 30.124 0 0 0-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
                </svg>
              </a>
              {/* Bandcamp */}
              <a href="https://jukeblue.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 448h208.6L512 64H303.4L0 448z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div className="mt-8 pt-8 text-center text-antique/60">
          <div className="mt-2 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <Link href="/privacy" className="hover:text-blush transition-colors">
              Privacy Policy (DE)
            </Link>
            <Link href="/terms" className="hover:text-blush transition-colors">
              Terms of Service (DE)
            </Link>
            <Link href="/payment-shipping" className="hover:text-blush transition-colors">
              Payment & Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}