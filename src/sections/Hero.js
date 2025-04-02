import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/7">
          <h1 className="text-6xl font-extrabold text-center text-gray-900 dark:text-white">
            <span className="">Jouw workflow,</span><span className="w-full text-blue-600 dark:text-blue-00"> zo geregeld</span>
          </h1>
        </div>

        {/* <div className="flex items-center justify-center space-x-5">
          <a className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500 transition">
            Get Started
          </a>
          <a className="px-10 py-3 text-center text-blue-600 border border-blue-600 rounded shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            Live Demo
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
