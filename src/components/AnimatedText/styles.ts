import styled, { css, keyframes } from 'styled-components';

const showText = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const showAfter = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const ResponsiveText = css`
  font-size: ${({ theme }) => theme.font_sizes.small};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font_sizes.xl};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxl};
  }
`;

export const P = styled.p`
  ${ResponsiveText}
  position: relative;
  color: ${({ theme }) => theme.colors.orange};
  text-shadow: 0px 0px 3px ${({ theme }) => theme.colors.orange};
  letter-spacing: 5px;
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  align-self: flex-start;
  display: inline-block;

  font-family: 'Share Tech Mono', 'Consolas', monospace;
  animation: ${showText} 3s steps(17) forwards;

  &::before {
    content: '';
    position: absolute;
    left: 99%;
    height: 90%;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    opacity: 0;
    animation: ${showAfter} 0.9s infinite;
  }
`;

export const TextWrapper = styled.div`
  display: inline-flex;
  align-self: flex-start;
`;
