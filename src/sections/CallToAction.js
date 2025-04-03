import Link from "next/link";
import { useTheme } from "next-themes";


const CallToAction = () => {
  const { theme, setTheme } = useTheme();
  const setDarkMode = theme === "dark";
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100 dark:bg-black">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col space-y-3 text-black dark:text-white">
          <h2 className="text-4xl font-extrabold text-center md:text-6xl">
            <span className="block">Stuur ons een bericht!</span>
          </h2>
          <h2 className="text-2xl font-bold text-center md:text-4xl text-gray-400 dark:text-gray-300">
            <span className="block">of mail ons naar <Link href={"mailto:info@ictflow.nl"} className={`hover:underline`}>info@ictflow.nl</Link></span>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <a href="#" className={`px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50 ${setDarkMode ? 'dark:text-white dark:bg-blue-600 dark:hover:bg-blue-500' : ''}`}
                      >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
