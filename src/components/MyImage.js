import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import MyLightImage from 'public/ictflow_logo_black_bgless.png';
import MyDarkImage from 'public/ictflow_logo_white_bgless.png';

const MyImage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid mismatch during hydration

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const logo = currentTheme === 'dark' ? MyDarkImage : MyLightImage;

  return (
    <Image
      src={logo}
      alt="ICT Flow Logo"
      width={150}
      height={150}
      className="mt-2"
      priority
    />
  );
};

export default MyImage;
