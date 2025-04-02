// Relative import to your image file

import MyLightImage from 'public/ictflow_logo_white_bgless.png';
import MyDarkImage from 'public/ictflow_logo_black_bgless.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const MyImage = () => {
  const {theme} = useTheme();
  let imageUrl
  if (theme === "dark") {
    imageUrl = MyLightImage;
  } else{
    imageUrl = MyDarkImage;
  }
    return (
      <picture>
        <Image
            src={imageUrl.src}
            alt="My image"
            width={150}
            height={150}
            className='mt-2'
        />
      </picture>
  );
};

export default MyImage;