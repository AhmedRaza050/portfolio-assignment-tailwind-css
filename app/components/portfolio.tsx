// import Image from "next/image";
// import React from "react";

// function Portfolio() {
//   return (
//     <div className="px-16 mb-12">
//       {/* Header Section */}
//       <div className="mb-16">
//         <p className="text-xl font-extrabold mb-2 text-left">MY SERVICES</p>
//         <h2 className="text-[#9024B6] text-3xl font-bold text-left mb-8">
//           Latest Projects
//         </h2>
//         <p className="text-black text-lg">
//           I am a skilled frontend developer offering innovative solutions that enhance user experiences. 
//           With a keen eye for detail and a passion for crafting responsive, interactive websites, 
//           I bring designs to life through clean, efficient code.
//         </p>
//       </div>

//       {/* Project Cards Section */}
//       <div className="flex justify-center gap-12 items-center mb-12">
//         {/* Card 1 */}
//         <div>
//           <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
//             <div className="flex">
//               <Image
//                 src="ecommerce2.png"
//                 alt="E-commerce preview 2"
//                 width={180}
//                 height={100}
//                 className="absolute ml-[70px]"
//               />
//               <Image
//                 src="ecommerce.png"
//                 alt="E-commerce preview"
//                 width={180}
//                 height={100}
//               />
//             </div>
//           </div>
//           <h2 className="text-black text-2xl font-bold text-center mb-8">
//             E-commerce Website
//           </h2>
//         </div>

//         {/* Card 2 */}
//         <div>
//           <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
//             <div className="flex">
//               <Image
//                 src="portfolio_project.png"
//                 alt="Portfolio preview"
//                 width={180}
//                 height={100}
//                 className="absolute ml-[70px]"
//               />
//               <Image
//                 src="portfolio_project2.png"
//                 alt="Portfolio preview 2"
//                 width={180}
//                 height={100}
//               />
//             </div>
//           </div>
//           <h2 className="text-black text-2xl font-bold text-center mb-8">
//             Portfolio Website
//           </h2>
//         </div>

//         {/* Card 3 */}
//         <div>
//           <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
//             <div className="flex">
//               <Image
//                 src="ui_design.png"
//                 alt="UI design preview"
//                 width={180}
//                 height={100}
//                 className="absolute ml-[70px]"
//               />
//               <Image
//                 src="ui_design2.png"
//                 alt="UI design preview 2"
//                 width={180}
//                 height={100}
//               />
//             </div>
//           </div>
//           <h2 className="text-black text-2xl font-bold text-center mb-8">
//             UI Development
//           </h2>
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-4 items-center mt-[-50px]">
//         <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
//         <div className="h-[22px] w-[69px] rounded-full bg-[#9024B6]"></div>
//         <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
//         <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
//         <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;
import Image from "next/image";
import React from "react";

function Portfolio() {
  return (
    <div className="px-16 mb-12">
      {/* Header Section */}
      <div className="mb-16">
        <p className="text-xl font-extrabold mb-2 text-left">MY SERVICES</p>
        <h2 className="text-[#9024B6] text-3xl font-bold text-left mb-8">
          Latest Projects
        </h2>
        <p className="text-black text-lg">
          I am a skilled frontend developer offering innovative solutions that enhance user experiences. 
          With a keen eye for detail and a passion for crafting responsive, interactive websites, 
          I bring designs to life through clean, efficient code.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="flex justify-center gap-12 items-center mb-12">
        {/* Card 1 */}
        <div>
          <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
            <div className="flex">
              <Image
                src="/ecommerce2.png"
                alt="E-commerce preview 2"
                width={180}
                height={100}
                className="absolute ml-[70px]"
              />
              <Image
                src="/ecommerce.png"
                alt="E-commerce preview"
                width={180}
                height={100}
              />
            </div>
          </div>
          <h2 className="text-black text-2xl font-bold text-center mb-8">
            E-commerce Website
          </h2>
        </div>

        {/* Card 2 */}
        <div>
          <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
            <div className="flex">
              <Image
                src="/portfolio_project.png"
                alt="Portfolio preview"
                width={180}
                height={100}
                className="absolute ml-[70px]"
              />
              <Image
                src="/portfolio_project2.png"
                alt="Portfolio preview 2"
                width={180}
                height={100}
              />
            </div>
          </div>
          <h2 className="text-black text-2xl font-bold text-center mb-8">
            Portfolio Website
          </h2>
        </div>

        {/* Card 3 */}
        <div>
          <div className="h-[342px] w-[287px] bg-[#D9D9D9] p-6 rounded-lg shadow-md text-center relative">
            <div className="flex">
              <Image
                src="/ui_design.png"
                alt="UI design preview"
                width={180}
                height={100}
                className="absolute ml-[70px]"
              />
              <Image
                src="/ui_design2.png"
                alt="UI design preview 2"
                width={180}
                height={100}
              />
            </div>
          </div>
          <h2 className="text-black text-2xl font-bold text-center mb-8">
            UI Development
          </h2>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-4 items-center mt-[-50px]">
        <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
        <div className="h-[22px] w-[69px] rounded-full bg-[#9024B6]"></div>
        <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
        <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
        <div className="h-[22px] w-[69px] rounded-full bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
}

export default Portfolio;
