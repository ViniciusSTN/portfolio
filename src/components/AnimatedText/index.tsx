import { ReactNode } from 'react';
import { P, TextWrapper } from './styles';

type AnimatedText = {
  children: ReactNode;
};

export default function AnimatedText({ children }: AnimatedText) {
  return (
    <TextWrapper>
      <P>{children}</P>
    </TextWrapper>
  );
}
