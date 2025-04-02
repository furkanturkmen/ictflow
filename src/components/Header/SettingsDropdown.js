import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowRightOnRectangleIcon,
  CogIcon,
  CreditCardIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const SettingsDropdown = () => {
  const { data } = useSession();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const logOut = () => {
    const result = confirm('Are you sure you want to logout?');
    if (result) signOut({ callbackUrl: '/' });
  };

  const toggleTheme = (event) => {
    event.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center w-[11.4em] px-3 py-2 space-x-2 text-sm font-medium text-gray-800 bg-white border rounded-md shadow-sm hover:bg-blue-600 hover:text-gray-100 dark:text-gray-100 dark:border-gray-400 dark:bg-neutral-900 dark:hover:bg-gray-700">
          {/* <CogIcon className="w-5 h-5" /> */}
          <span className="whitespace-nowrap">{t('common.label.settings')}</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-[10em] mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none dark:bg-neutral-900 dark:border-gray-700 dark:hover:shadow-md">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/account/settings"
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded ${
                    active
                      ? 'bg-blue-600 dark:hover:bg-gray-700 dark:hover:bg-gray-700 text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <UserCircleIcon className="w-5 h-5" />
                  <span className="whitespace-nowrap">Account</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/account/billing"
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded ${
                    active
                      ? 'bg-blue-600 dark:hover:bg-gray-700 text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <CreditCardIcon className="w-5 h-5" />
                  <span className="whitespace-nowrap">Billing</span>
                </Link>
              )}
            </Menu.Item>
          </div>

          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded ${
                    active
                      ? 'bg-blue-600 dark:hover:bg-gray-700 text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <ComputerDesktopIcon className="w-5 h-5" />
                  <span className="whitespace-nowrap">Landing Page</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded w-full ${
                    active
                      ? 'bg-blue-600 dark:hover:bg-gray-700 text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="w-5 h-5" />
                      <span className="whitespace-nowrap">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-5 h-5" />
                      <span className="whitespace-nowrap">Dark Mode</span>
                    </>
                  )}
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logOut}
                  className={`flex items-center gap-2 px-4 py-2 text-sm text-red-600 rounded w-full ${
                    active ? 'bg-red-100' : ''
                  }`}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  <span className="whitespace-nowrap">Logout</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SettingsDropdown;
