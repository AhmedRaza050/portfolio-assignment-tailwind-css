import Link from 'next/link';
import React from 'react';

export default function ContactMe() {
  return (
    <section className="py-[60px] px-4 text-center font-sans">
      {/* Title Section */}
      <h3 className="text-lg font-bold text-black mb-2">CONTACT ME</h3>
      <h1 className="text-4xl text-[#9024B6] font-bold mb-5">Let&apos;s Make Something Together</h1>
      <p className="text-base text-black mb-10 leading-6">
        Connect With Us Effortlessly! Click The Contact Me Button To Reach Out And Let&apos;s Discuss How We Can
        <br /> Transform Your Digital Experiences Into Unforgettable Journeys.
      </p>

      {/* Form and Personal Details */}
      <div className="flex justify-center flex-wrap gap-10">
        {/* Form Section */}
        <form className="max-w-[400px] w-full">
          <input
            type="text"
            placeholder="Enter Your Name Here"
            className="w-full p-4 mb-4 rounded-[20px] border border-black bg-[#D9D9D9] text-black focus:outline-none shadow-md text-sm"
          />
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="w-full p-4 mb-4 rounded-[20px] border border-black bg-[#D9D9D9] text-black focus:outline-none shadow-md text-sm"
          />
          <textarea
            placeholder="Write Something..."
            className="w-full p-4 rounded-[20px] border border-black bg-[#D9D9D9] text-black focus:outline-none shadow-md text-sm h-[100px]"
          />
          <button
            type="submit"
            className="w-[160px] h-[39px] bg-[#9024B6] p-2 mt-6 rounded-[10px] border-none"
          >
            <Link
              href="/"
              className="text-white text-lg font-bold tracking-wide"
            >
              SEND
            </Link>
          </button>
        </form>

        {/* Personal Details Section */}
        <div className="max-w-[300px] w-full text-center leading-6">
          <h3 className="text-2xl text-[#AC5BC8] mb-4">Personal Details</h3>
          <p className="text-sm mb-2">
            <strong>Phone:</strong><br />
            +92 300 70004<br />
            +92 300 70007
          </p>
          <p className="text-sm mb-2">
            <strong>Email:</strong><br />
            ahmedraza@gmail.com
          </p>
          <p className="text-sm">
            <strong>Address:</strong><br />
            Karachi, Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
}
