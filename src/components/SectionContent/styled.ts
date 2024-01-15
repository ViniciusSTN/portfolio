import styled, { css } from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: 80%;
  margin-bottom: 30px;

  ${({ theme }) => css`
    gap: 20px;
    margin-top: 50px;

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      gap: 30px;
      margin-top: 60px;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      gap: 40px;
      margin-top: 70px;
    }
  `}
`;
