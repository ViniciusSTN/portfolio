import { ReactNode } from 'react';
import { Content } from './styled';

type SectionContentProps = {
  children: ReactNode;
};

export default function SectionContent({ children }: SectionContentProps) {
  return <Content>{children}</Content>;
}
