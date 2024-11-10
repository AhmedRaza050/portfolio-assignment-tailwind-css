"use client"
import Image from "next/image";
import React from "react";
import { MdOutlinePentagon } from "react-icons/md";

function About() {
  return (
    <div className="flex flex-wrap justify-center mt-24 gap-12">
      {/* picture */}
      <div className="max-w-sm mt-12 rounded-lg text-center">
        <Image
          src="/myImage.png"
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-tr-3xl rounded-bl-3xl border-2 border-black w-full h-auto"
        />
      </div>

      {/* text */}
      <div className="max-w-2xl px-5">
        <div>
          {/* Section Heading */}
          <p className="text-2xl font-bold mb-2 text-center">ABOUT ME</p>
          <h2 className="text-[#9024B6] text-4xl font-bold leading-snug text-center">
            Why You Should Hire Me
          </h2>
          <p className="text-black text-lg font-bold leading-relaxed tracking-wide mb-8 text-center">
            You Should Hire Me As A FRONTEND DEVELOPER Because I Have A Strong
            Eye For Design and Development, A Deep Understanding Of User
            Psychology, And A Track Record Of Creating Intuitive And Visually
            Appealing Interfaces.
          </p>

          {/* Progress Bars */}
          {[{ label: "HTML", progress: 90 }, { label: "CSS 3", progress: 75 }, { label: "TYPESCRIPT", progress: 81 }, { label: "NEXT JS", progress: 62 }].map(
            (skill, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl font-bold mb-2">{skill.label}</p>
                <div className="relative h-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute h-2 bg-[#8E44AD] rounded-l-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                  <MdOutlinePentagon
                    className="absolute top-[-8px] right-0 h-5 w-5 font-bold bg-gray-200 text-[#8E44AD]"
                    style={{ right: `${100 - skill.progress}%` }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
            line-height: 1.4;
          }
          p {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
