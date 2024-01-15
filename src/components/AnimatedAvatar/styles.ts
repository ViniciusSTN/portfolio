import styled, { keyframes } from 'styled-components';

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
