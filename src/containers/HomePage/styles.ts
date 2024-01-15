import styled, { css } from 'styled-components';

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
