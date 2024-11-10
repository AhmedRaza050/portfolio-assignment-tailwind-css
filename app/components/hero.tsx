"use client";
import Image from "next/image";
import Link from "next/link";


function Hero() {
  return (
    <div className="px-5 box-border">
      {/* intro */}
      <div className="flex flex-wrap justify-evenly items-center mt-16">
        <div className="text-center max-w-xl">
          <i className="text-black text-6xl font-[Edwardian Script ITC]"> I am </i>
          <br />
          <button className="w-full max-w-[480px] h-12 bg-[#9024B6] p-2 rounded-xl text-white text-2xl font-bold tracking-wider">
            AHMED RAZA
          </button>
          <h1 className="text-[#9024B6] text-4xl font-bold tracking-wide leading-tight">
            FRONTEND
          </h1>
          <h1 className="text-black text-4xl font-bold tracking-wide leading-tight">
            DEVELOPER
          </h1>
          <p className="text-black text-base font-sans my-5">
            Building Modern UI Designs for Smooth, Engaging User Experiences{" "}
            <br /> Where Style Meets Functionality.
          </p>
          <button className="w-40 h-10 bg-[#9024B6] p-2 mt-5 rounded-xl border-none">
            <Link
              href="/"
              className="text-white text-base font-bold tracking-wider"
            >
              HIRE ME
            </Link>
          </button>
        </div>
        {/* picture */}
        <div className="rounded-full mt-5">
          <Image
            src="/myimage.png"
            alt="myImage"
            width={400}
            height={400}
            className="border-2 border-black rounded-tl-2xl rounded-br-2xl w-full max-w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Responsive */}
      <div className="sm:hidden">
        <style jsx>{`
          @media (max-width: 768px) {
            div {
              text-align: center;
            }
            h1 {
              font-size: 2.5rem;
            }
            button {
              font-size: 1.5rem;
            }
            p {
              font-size: 1rem;
            }
          }

          @media (max-width: 576px) {
            h1 {
              font-size: 2rem;
            }
            button {
              font-size: 1.25rem;
              width: 100%;
            }
            i {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Hero;
