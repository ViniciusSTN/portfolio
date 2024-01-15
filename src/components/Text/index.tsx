import { ReactNode } from 'react';
import { P } from './styles';

type TitleProps = {
  children: ReactNode;
  color: string;
  justify?: boolean;
  mobileCenter?: boolean;
};

export default function Title({
  children,
  color,
  justify = false,
  mobileCenter = false,
}: TitleProps) {
  return (
    <P $color={color} $justify={justify} $mobileCenter={mobileCenter}>
      {children}
    </P>
  );
}
