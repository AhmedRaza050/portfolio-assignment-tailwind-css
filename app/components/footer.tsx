// 
// Footer.tsx
import Link from 'next/link';
import React from 'react';
import { FaVolleyballBall, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-center py-8 mt-12 w-full">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-5">
        <div className="h-10 w-10 rounded-full bg-purple-700 text-white text-center">
          <FaVolleyballBall className="text-xl mt-2" />
        </div>
        <h3 className="text-purple-700 ml-2 text-xl">AhmedRaza</h3>
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center list-none gap-8 mb-5">
        {['HOME', 'ABOUT ME', 'MY SERVICES', 'PORTFOLIO', 'CONTACT ME'].map((text, index) => (
          <li key={index}>
            <Link href={text === 'HOME' ? '/' : `#${text.replace(' ', '').toLowerCase()}`} className="text-black text-sm transition-colors duration-300 hover:text-purple-700">
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-xl mb-5">
        {[{ href: '#', icon: <FaFacebook aria-label="Facebook" /> },
          { href: '#', icon: <FaInstagram aria-label="Instagram" /> },
          { href: '#', icon: <FaTwitter aria-label="Twitter" /> },
          { href: '#', icon: <FaLinkedin aria-label="LinkedIn" /> }].map((link, index) => (
          <Link key={index} href={link.href} className="text-black transition-colors duration-300 hover:text-purple-700">
            {link.icon}
          </Link>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-purple-700 py-2 text-white text-sm w-full">
        &copy; 2024 <strong>AhmedRaza</strong> All Rights Reserved, Inc.
      </div>
    </footer>
  );
}
