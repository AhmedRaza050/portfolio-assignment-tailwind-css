import Link from 'next/link'
import React from 'react'
import { FaVolleyballBall } from 'react-icons/fa'

function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 w-full px-5 box-border">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-[#9024B6] flex items-center justify-center">
          <FaVolleyballBall className="text-white text-2xl" />
        </div>
        <h3 className="text-[#9024B6] ml-2 font-sans text-xl">AhmedRaza</h3>
      </div>
      <ul className="flex gap-5 m-0 p-0 hidden md:flex">
        <li>
          <Link href="/" className="text-black text-base font-sans no-underline">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-black text-base font-sans no-underline">
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-black text-base font-sans no-underline">
            MY SERVICES
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-black text-base font-sans no-underline">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/contactMe" className="text-black text-base font-sans no-underline">
            CONTACT ME
          </Link>
        </li>
      </ul>
      <button className="w-40 h-8 bg-[#9024B6] p-2 rounded-lg border-none hidden md:block">
        <Link href="/" className="text-white text-base font-sans no-underline">
          DOWNLOAD CV
        </Link>
      </button>

      {/* Responsive */}
      <div className="md:hidden">
        <button className="w-32 h-8 bg-[#9024B6] p-2 rounded-lg border-none">
          <Link href="/" className="text-white text-base font-sans no-underline">
            DOWNLOAD CV
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
