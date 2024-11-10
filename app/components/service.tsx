import { FaLaptopCode } from 'react-icons/fa';
import { GrCloudComputer } from "react-icons/gr";

const Services = () => {
  return (
    <div className="py-8 font-sans text-gray-800">
      {/* Section Heading */}
      <p className="text-xl font-bold mb-2 text-center">MY SERVICES</p>
      <h2 className="text-[#9024B6] text-3xl font-bold text-center mb-8">
        The Services I Provide
      </h2>

      <div className="flex justify-center flex-wrap gap-12 items-center">
        {/* Card 1 */}
        <div className="bg-gray-300 p-6 rounded-lg h-[210px] w-[420px] shadow-md text-center">
          <GrCloudComputer className="text-6xl mb-4" />
          <h3 className="text-[#9024B6] text-2xl mb-2">WEB DEVELOPMENT</h3>
          <p className="text-black text-sm">
            I am a skilled web developer offering innovative solutions that engage users. I bring ideas to life through code.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#8E44AD] text-white p-6 h-[210px] w-[420px] rounded-lg shadow-md text-center">
          <FaLaptopCode className="text-6xl mb-4" />
          <h3 className="text-2xl mb-2">FRONTEND DEVELOPMENT</h3>
          <p className="text-sm">
            As a frontend developer, I specialize in building visually appealing and highly interactive user interfaces.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-300 p-6 rounded-lg h-[210px] w-[420px] shadow-md text-center">
          <FaLaptopCode className="text-6xl mb-4" />
          <h3 className="text-[#9024B6] text-2xl mb-2">GUI DEVELOPMENT</h3>
          <p className="text-black text-sm">
            Specializing in visually appealing interfaces, I create highly interactive designs with a focus on performance.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-300 p-6 rounded-lg h-[210px] w-[420px] shadow-md text-center">
          <GrCloudComputer className="text-6xl mb-4" />
          <h3 className="text-[#9024B6] text-2xl mb-2">WEB DEVELOPMENT</h3>
          <p className="text-black text-sm">
            Offering innovative web solutions that engage users and bring seamless experiences to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
