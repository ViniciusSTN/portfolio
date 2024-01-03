import { Container } from './styles';

export type MainContainerProps = {
  children: React.ReactNode;
  margintop?: string;
  display?: string;
  aligncenter?: boolean;
};

export function MainContainer({
  children,
  margintop = '70px',
  display = 'flex',
  aligncenter = true,
}: MainContainerProps) {
  return (
    <Container
      $margintop={margintop}
      $display={display}
      $aligncenter={aligncenter}
    >
      {children}
    </Container>
  );
}
