import Link from 'next/link';
import { useTranslation } from 'react-i18next';
const Footer = () => {  
  
  const { t } = useTranslation();

  return (
    <div id="footer-anchor">
      <div className="w-full bg-gray-100 font-extrabold uppercase dark:bg-black dark:text-white">
      <div className="relative flex flex-col md:mx-auto md:w-3/4">
        <footer className="flex flex-col items-center justify-center py-5 space-x-0 space-y-3 border-b md:flex-row md:space-y-0 md:space-x-3">
          <Link href="#" className="px-5 py-2 text-l rounded hover:underline">{t('footer.about')}</Link>
          <Link href="#" className="px-5 py-2 text-l rounded hover:underline">{t('footer.privacy')}</Link>
          <Link href="#" className="px-5 py-2 text-l rounded hover:underline">{t('footer.contact')}</Link>
        </footer>
        <p className="py-5 text-l text-center text-gray-400">&copy; {t('footer.copyright')} {new Date().getFullYear()}.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
