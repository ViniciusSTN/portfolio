import { ReactNode } from 'react';
import { LinkBtn } from './styles';

type ExternalBtn = {
  children: ReactNode;
  href: string;
};

export default function ExternalBtn({ children, href }: ExternalBtn) {
  return (
    <LinkBtn href={href} target="_blank">
      {children}
    </LinkBtn>
  );
}
