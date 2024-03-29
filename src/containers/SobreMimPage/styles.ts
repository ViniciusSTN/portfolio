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

export const TimelineContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
