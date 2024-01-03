import { ReactNode } from 'react';
import { H1, H2, H3 } from './styles';

type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3';
  color: string;
  size?: string;
  weight?: string;
  margin?: boolean;
  children: ReactNode;
};

export default function Title({
  tag = 'h1',
  color,
  size = '',
  weight = 'bold',
  margin = false,
  children,
}: TitleProps) {
  return (
    <>
      {tag === 'h1' && (
        <H1 $color={color} $size={size} $weight={weight} $margin={margin}>
          {children}
        </H1>
      )}
      {tag === 'h2' && (
        <H2 $color={color} $size={size} $weight={weight} $margin={margin}>
          {children}
        </H2>
      )}
      {tag === 'h3' && (
        <H3 $color={color} $size={size} $weight={weight} $margin={margin}>
          {children}
        </H3>
      )}
    </>
  );
}
