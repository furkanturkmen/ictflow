import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = ({ services = [], workspace }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const planMap = {
    'Basic Plan': 'Basic',
    'Plus Plan': 'Plus',
    'Premium Plan': 'Premium',
  };

  return (
    <div id="pricing-anchor">
      <div className={`w-full py-10 mt-10 bg-gray-100 ${setDarkMode ? 'dark:bg-black dark:text-white' : ''}`}>
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Pricing for {'your business'}
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">
              The right pricing for you, whoever you are
            </span>
          </h2>
        </div>

        <div className={`flex flex-col p-10 space-y-5 bg-gray-200 rounded-lg md:space-y-0 md:space-x-5 md:flex-row md:space-x-5
                    ${setDarkMode ? 'dark:bg-gray-800 dark:border-gray-700' : ''}
                  `}>
          {services.length > 0 ? (
            services.map((plan) => {
              const isPopular = plan.name === 'Plus Plan';
              const planLabel = planMap[plan.name] || plan.name;

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col items-start bg-white border rounded-lg md:w-1/3
                    transform transition-all duration-300
                    ${isPopular
                      ? 'shadow-lg ring-2 ring-blue-500 scale-[1.02] hover:scale-[1.05] z-10'
                      : 'hover:scale-[1.03] hover:shadow-md'}
                    ${setDarkMode ? 'dark:bg-gray-800 dark:border-gray-700' : ''}
                  `}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-sm text-white bg-blue-600 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-full p-10 space-y-5 font-extrabold text-black text-gray-900 ${setDarkMode ? 'dark:text-white' : 'dark:text-gray-100'}`}>
                    <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                      {planLabel}
                    </span>
                    <h2 className="space-x-2 text-6xl">
                      <span className="font-extrabold">€{plan.price}</span>
                      <small className="text-lg text-gray-400">per month</small>
                    </h2>
                  </div>

                  <div className={`flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t ${setDarkMode ? 'dark:bg-gray-700 dark:border-gray-700' : ''}`}>
                    <a
                      className={`px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50 ${setDarkMode ? 'dark:text-white dark:bg-blue-600  dark:hover:bg-blue-500' : ''}`}
                      href="#"
                    >
                      Get Started with {planLabel}
                    </a>
                    <div className="space-y-5">
                      <h6 className={`uppercase text-black text-gray-900 ${setDarkMode ? 'dark:text-white' : 'dark:text-gray-100'}`}>What's Included</h6>
                      <ul className={`leading-10 list-none list-inside text-black text-gray-900 ${setDarkMode ? 'dark:text-white' : 'dark:text-gray-100'}`}>
                        <li className="flex items-center space-x-5">
                          <CheckIcon className="w-5 h-5 text-green-600" />
                          <span>{plan.description}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 w-full">
              No pricing plans available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
