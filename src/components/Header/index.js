import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/ThemeToggle';
import SettingsDropdown from '@/components/Header/SettingsDropdown';
import { useTheme } from 'next-themes';
import MyImage from '../MyImage';


const Hero = () => {
  useSession();
  useTheme();
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);
  useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);


  return (
<div
      className={`sticky py-3.5 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700 shadow-sm'
          : 'bg-transparent'
      }`}>    
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4 ">
        {/* Navbar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/" className="text-2xl font-bold">
    <MyImage />
            </Link>
            <nav className="hidden md:flex space-x-5">
              <Link href="/#features-anchor" passHref className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.features')}</Link>
              <Link href="/#pricing-anchor" passHref className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.pricing')}</Link>
              <Link href="/#footer-anchor" passHref className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.contact')}</Link>
            </nav>
          </div>

          {/* Right side: theme toggle + settings + login */}
          <div className="flex items-center space-x-3">
          <SettingsDropdown />
          <Link
            href={sessionStatus === 'authenticated' ? '/account' : '/auth/login'}
            className="px-[2.6em] py-[0.65em] text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 text-center"
          >
            {sessionStatus === 'authenticated' ? 'Dashboard' : 'Login'}
          </Link>
        </div>

          {/* Mobile toggle */}
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            {!showMenu ? <Bars3Icon className="w-8 h-8" /> : <XMarkIcon className="w-8 h-8" />}
          </button>
        </header>

        {/* Mobile menu */}
        {showMenu && (
          <div className="flex flex-col mt-5 space-y-3 md:hidden">
            <a className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.guides')}</a>
            <a className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.pricing')}</a>
            <a className="px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t('common.label.blog')}</a>
            <ThemeToggle />
            <SettingsDropdown />
            <Link
              href={sessionStatus === 'authenticated' ? '/account' : '/auth/login'}
              className="px-5 py-2 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
            >
              {sessionStatus === 'authenticated' ? 'Dashboard' : 'Login'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
