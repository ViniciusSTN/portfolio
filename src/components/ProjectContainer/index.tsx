import { ProjectProps } from '@/data/projects';
import {
  ImageContainer,
  LinkBox,
  P,
  PDetails,
  ProjectBox,
  Container,
  ProjectHover,
  TextBox,
} from './styles';
import Title from '../Title';
import Link from 'next/link';

export default function ProjectContainer(project: ProjectProps) {
  return (
    <Container>
      <ProjectBox>
        <ImageContainer>
          <img src={project.imageUrl} alt="image" />
        </ImageContainer>
        <TextBox>
          <Title color="white" tag="h2" size="large">
            {project.title}
          </Title>
          <P>{project.description}</P>
        </TextBox>
      </ProjectBox>

      <ProjectHover>
        <PDetails $bold>{project.type}</PDetails>
        <LinkBox>
          <Title color="white" tag="h2" size="xl">
            {project.title}
          </Title>
          {project.gitHubUrl && (
            <PDetails>
              <Link href={project.gitHubUrl} target="_blank">
                Repositório
              </Link>
            </PDetails>
          )}
          {project.aplicationUrl && (
            <PDetails>
              <Link href={project.aplicationUrl} target="_blank">
                Aplicação no ar
              </Link>
            </PDetails>
          )}
        </LinkBox>
        <PDetails $bold>{project.situation}</PDetails>
      </ProjectHover>
    </Container>
  );
}
