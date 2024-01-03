import styled, { css, keyframes } from 'styled-components';

export const Content = styled.section`
  width: 80%;
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const ResponsiveText = css`
  font-size: ${({ theme }) => theme.font_sizes.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font_sizes.large};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxl};
  }
`;

export const TextBox = styled.p`
  ${ResponsiveText}
  color: ${({ theme }) => theme.colors.white};
`;

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

export const TextWrapper = styled.div`
  display: inline-flex;
  align-self: flex-start;
`;

export const TextAnimated = styled.p`
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

const fontBold = css`
  font-size: ${({ theme }) => theme.font_sizes.xxl};
  font-weight: 700;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxl};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxxl};
  }
`;

export const Title = styled.h1`
  ${fontBold}
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.a`
  ${fontBold}
  text-decoration: none;
  text-align: center;
  display: block;
  width: 185px;
  color: ${({ theme }) => theme.colors.light_blue};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.light_blue};
  padding: 8px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.dark};
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 245px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 370px;
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const ImageContainter = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: auto;

  position: relative;
  animation: ${bounceAnimation} 4s ease-in-out infinite;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 350px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 450px;
  }
`;
