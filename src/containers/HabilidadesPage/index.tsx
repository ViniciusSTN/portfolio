import Header from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import Head from 'next/head';
import {
  TextContent,
  GridWrap,
  GridItem1,
  GridItem2,
  GridItem3,
} from './styles';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import data from '@/data/habilidades';
import Text from '@/components/Text';
import { useEffect, useState } from 'react';
import { theme } from '@/styles/theme-provider';
import SectionContent from '@/components/SectionContent';

export default function SobreMimPage() {
  const [image, setImage] = useState(false);

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      if (width < theme.numBreakpoints.lg) setImage(false);
      if (width >= theme.numBreakpoints.lg) setImage(true);
    }

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <Head>
        <title>Vinicius Santana - Habilidades</title>
      </Head>

      <Header />

      <MainContainer aligncenter={false} display="flex">
        <SectionContent>
          <Title tag="h1" color="white" margin>
            Habilidades
          </Title>

          <TextContent>
            {data.map((post) => (
              <GridWrap key={post.id}>
                <GridItem1>
                  <Title tag="h2" color="white">
                    {post.title}
                  </Title>
                </GridItem1>

                <GridItem2>
                  <Text color="white">{post.data}</Text>
                </GridItem2>

                {image && (
                  <GridItem3>
                    <img
                      src={post.imageUrl}
                      alt="image"
                      width={100}
                      loading="lazy"
                    />
                  </GridItem3>
                )}
              </GridWrap>
            ))}
          </TextContent>
        </SectionContent>
      </MainContainer>

      <Footer />
    </>
  );
}
