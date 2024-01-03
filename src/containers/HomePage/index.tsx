import Header from '@/components/Header';
import Head from 'next/head';
import {
  Button,
  Content,
  ImageContainter,
  TextAnimated,
  TextBox,
  TextContainer,
  TextWrapper,
  Title,
} from './styles';
import Image, { StaticImageData } from 'next/image';
import Avatar250 from '@/images/avatar-250.png';
import Avatar350 from '@/images/avatar-350.png';
import Avatar450 from '@/images/avatar-450.png';
import { useEffect, useState } from 'react';
import { theme } from '@/styles/theme-provider';
import { MainContainer } from '../../components/MainContainer';
import Footer from '@/components/Footer';

export default function HomePage() {
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
    <>
      <Head>
        <title>Vinicius Santana - Início</title>
      </Head>

      <Header />

      <MainContainer>
        <Content>
          <div>
            <TextContainer>
              <TextBox>Olá, eu sou</TextBox>
              <Title>Vinicius Santana</Title>
              <TextWrapper>
                <TextAnimated>Desenvolvedor Web</TextAnimated>
              </TextWrapper>
            </TextContainer>
            <Button href="http://www.google.com">Linkedin</Button>
          </div>
          <ImageContainter>
            <Image src={image ? image : Avatar250} alt="avatar"></Image>
          </ImageContainter>
        </Content>
      </MainContainer>

      <Footer />
    </>
  );
}
