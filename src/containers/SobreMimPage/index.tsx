import Header from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import Title from '@/components/Title';
import Head from 'next/head';
import { TextContent, TimelineContainer } from './styles';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import SectionContent from '@/components/SectionContent';
import Text from '@/components/Text';

export default function SobreMimPage() {
  return (
    <>
      <Head>
        <title>Vinicius Santana - Sobre mim</title>
      </Head>

      <Header />

      <MainContainer aligncenter={false} display="flex">
        <SectionContent>
          <Title tag="h1" color="white" margin>
            Sobre mim
          </Title>
          <TextContent>
            <Text color="white" justify mobileCenter>
              Meu nome é Vinicius Henrique Santana, sou aficionado por
              tecnologia e estudo de programação. Estou em busca de uma
              oportunidade para ingressar no mercado de desenvolvimento de
              softwares.
            </Text>
            <Text color="white" justify mobileCenter>
              Atualmente estou cursando Análise e Desenvolvimento de Sistemas
              (ADS) e aprimorando meu conhecimento em programação web Full
              Stack.
            </Text>
          </TextContent>

          <TimelineContainer>
            <Title tag="h2" color="white" margin>
              Timeline
            </Title>
            <Timeline />
          </TimelineContainer>
        </SectionContent>
      </MainContainer>

      <Footer />
    </>
  );
}
