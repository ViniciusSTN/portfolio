import Header from '@/components/Header';
import Head from 'next/head';
import { Content, TextBox, TextContainer } from './styles';
import { MainContainer } from '../../components/MainContainer';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import AnimatedAvatar from '@/components/AnimatedAvatar';
import ExternalBtn from '@/components/ExternalBtn';
import AnimatedText from '@/components/AnimatedText';

export default function HomePage() {
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
              <Title color="white">Vinicius Santana</Title>
              <AnimatedText>Desenvolvedor Web</AnimatedText>
            </TextContainer>
            <ExternalBtn href={'http://www.google.com'}>Linkedin</ExternalBtn>
          </div>
          <AnimatedAvatar />
        </Content>
      </MainContainer>

      <Footer />
    </>
  );
}
