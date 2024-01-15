import Header from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
// import Title from '@/components/Title';
import Head from 'next/head';
import { Content } from './styles';
import Footer from '@/components/Footer';

export default function ProjetosPage() {
  return (
    <>
      <Head>
        <title>Vinicius Santana - Projetos</title>
      </Head>

      <Header />

      <MainContainer aligncenter={false} display="flex">
        <Content></Content>
      </MainContainer>

      <Footer />
    </>
  );
}
