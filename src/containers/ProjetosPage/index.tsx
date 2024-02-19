import Header from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import Head from 'next/head';
import Footer from '@/components/Footer';
import SectionContent from '@/components/SectionContent';
import { ProjectsGrid } from './styles';
import Title from '@/components/Title';
import data from '@/data/projects';
import Link from 'next/link';
import ProjectContainer from '@/components/ProjectContainer';

export default function ProjetosPage() {
  return (
    <>
      <Head>
        <title>Vinicius Santana - Projetos</title>
      </Head>

      <Header />

      <MainContainer aligncenter={false} display="flex">
        <SectionContent>
          <Title color="white" tag="h1" margin>
            Projetos
          </Title>
          <ProjectsGrid>
            {data.map((project) => (
              // <ProjectContainer key={project.id}>
              //   <ProjectBox>
              //     <ImageContainer>
              //       <img src={project.imageUrl} alt="image" />
              //     </ImageContainer>
              //     <TextBox>
              //       <Title color="white" tag="h2" size="large">
              //         {project.title}
              //       </Title>
              //       <P>{project.description}</P>
              //     </TextBox>
              //   </ProjectBox>

              //   <ProjectHover>
              //     <PDetails $bold>{project.type}</PDetails>
              //     <LinkBox>
              //       <Title color="white" tag="h2" size="xl">
              //         {project.title}
              //       </Title>
              //       {project.gitHubUrl && (
              //         <PDetails>
              //           <Link href={project.gitHubUrl} target="_blank">
              //             Repositório
              //           </Link>
              //         </PDetails>
              //       )}
              //       {project.aplicationUrl && (
              //         <PDetails>
              //           <Link href={project.aplicationUrl} target="_blank">
              //             Aplicação no ar
              //           </Link>
              //         </PDetails>
              //       )}
              //     </LinkBox>
              //     <PDetails $bold>{project.situation}</PDetails>
              //   </ProjectHover>
              // </ProjectContainer>
              <ProjectContainer project={project} key={project.id} />
            ))}
          </ProjectsGrid>
          <ProjectsGrid />
        </SectionContent>
      </MainContainer>

      <Footer />
    </>
  );
}
