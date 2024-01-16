import Header from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import Head from 'next/head';
import Footer from '@/components/Footer';
import SectionContent from '@/components/SectionContent';
import Title from '@/components/Title';
import data from '@/data/certifications';
import { CertificationBox, CertificationsGrid, P, TextBox } from './styles';
import Link from 'next/link';

export default function CertificacoesPage() {
  return (
    <>
      <Head>
        <title>Vinicius Santana - Certificações</title>
      </Head>

      <Header />

      <MainContainer aligncenter={false} display="flex">
        <SectionContent>
          <Title color="white" tag="h1" margin>
            Certificações
          </Title>
          <CertificationsGrid>
            {data.map((certification) => (
              <CertificationBox key={certification.id}>
                <Title color="white" tag="h2" size="large" margin>
                  {certification.title}
                </Title>
                <TextBox>
                  <P>
                    Instituição: <span>{certification.institution}</span>
                  </P>
                  <P>
                    Duração: <span>{certification.duration}</span>
                  </P>
                  <P>
                    Instrutor: <span>{certification.instructor}</span>
                  </P>
                  <P>
                    Conclusão: <span>{certification.dateConclusion}</span>
                  </P>
                  <P>
                    Certificado:
                    <Link
                      href={certification.certificationLink}
                      target="_blank"
                    >
                      <span>Clique aqui</span>
                    </Link>
                  </P>
                </TextBox>
              </CertificationBox>
            ))}
          </CertificationsGrid>
        </SectionContent>
      </MainContainer>

      <Footer />
    </>
  );
}
