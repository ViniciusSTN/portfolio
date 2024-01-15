import { useEffect, useState } from 'react';
import { ImageContainter } from './styles';
import { StaticImageData } from 'next/image';
import { theme } from '@/styles/theme-provider';
import Avatar250 from '@/public/images/avatar-250.png';
import Avatar350 from '@/public/images/avatar-350.png';
import Avatar450 from '@/public/images/avatar-450.png';

export default function AnimatedAvatar() {
  const [image, setImage] = useState<StaticImageData>();

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      if (width < theme.numBreakpoints.sm) setImage(Avatar250);
      if (width >= theme.numBreakpoints.sm && width < theme.numBreakpoints.xl)
        setImage(Avatar350);
      if (width >= theme.numBreakpoints.xl) setImage(Avatar450);
    }

    onResize(); // chama a função no carregamento inicial

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ImageContainter>
      <img src={image ? image.src : '/images/avatar-250.png'} alt="avatar" />
    </ImageContainter>
  );
}
