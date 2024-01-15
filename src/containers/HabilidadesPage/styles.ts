import styled, { css } from 'styled-components';

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: 15px;

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      gap: 30px;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      gap: 40px;
    }
  `}
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  ${({ theme }) => css`
    @media screen and (min-width: ${theme.breakpoints.lg}) {
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  `}
`;

export const GridItem1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const GridItem2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

export const GridItem3 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
